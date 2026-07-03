'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

// The refracted spectrum — the only colour that exists in this world.
// Muted, filmic, never neon. Ordered by wavelength so dispersion is physical:
// longer wavelengths (terracotta/amber) bend least, shorter (slate-blue) most.
const SPECTRUM: { rgb: number[]; dev: number }[] = [
  { rgb: [201, 116, 96], dev: 0.0 }, // terracotta — longest λ, least deviation
  { rgb: [216, 180, 112], dev: 0.34 }, // amber
  { rgb: [110, 168, 160], dev: 0.7 }, // teal
  { rgb: [142, 168, 202], dev: 1.0 }, // slate-blue — shortest λ, most deviation
]

// Master timeline, in seconds. Unchanged — every beat is deliberate.
const T = {
  hold: 0.8, // black. let the eye settle.
  beam: 3.8, // white beam travels in from the left
  pause: 1.0, // beam meets glass — time pauses
  refract: 2.0, // dispersion blooms out of the right face
  s1: 7.4, // "The information was always there."
  s1Out: 10.6,
  s2: 11.4, // "Only the relationships were hidden."
  s2Out: 15.4,
  word: 16.4, // PRISM
}

function easeInOut(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}
function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3)
}
function clamp01(t: number) {
  return t < 0 ? 0 : t > 1 ? 1 : t
}

export function HeroPrism() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [phase, setPhase] = useState<'s1' | 's2' | null>(null)
  const [showWord, setShowWord] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let W = 0
    let H = 0
    let dpr = 1

    // Prism geometry — apex up, base down, sitting at the optical centre.
    let apex = { x: 0, y: 0 }
    let baseL = { x: 0, y: 0 }
    let baseR = { x: 0, y: 0 }
    let cx = 0
    let cy = 0
    let entry = { x: 0, y: 0 } // point on the left face
    let exit = { x: 0, y: 0 } // point on the right face

    function layout() {
      const rect = canvas.getBoundingClientRect()
      W = rect.width
      H = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(W * dpr)
      canvas.height = Math.round(H * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      cx = W * 0.5
      cy = H * 0.5
      const h = Math.min(H * 0.46, 420)
      const halfW = Math.min(W * 0.052, 66)
      apex = { x: cx, y: cy - h / 2 }
      baseL = { x: cx - halfW, y: cy + h / 2 }
      baseR = { x: cx + halfW, y: cy + h / 2 }
      // Entry/exit points sit on the faces at beam height.
      entry = { x: cx - halfW / 2, y: cy }
      exit = { x: cx + halfW / 2, y: cy }
    }
    layout()

    // A physical shaft of light: a bright thin core wrapped in a soft
    // gaussian-ish halo, fading along its length. Drawn in a rotated frame so
    // it can point in any direction. No hard strokes, no cartoon glow.
    function shaft(
      ox: number,
      oy: number,
      angle: number,
      len: number,
      coreHalf: number,
      rgb: number[],
      aNear: number,
      aFar: number,
      spread = 1,
    ) {
      if (aNear <= 0.001 && aFar <= 0.001) return
      const [r, g, b] = rgb
      ctx.save()
      ctx.translate(ox, oy)
      ctx.rotate(angle)
      ctx.globalCompositeOperation = 'lighter'
      // Concentric bands: wide+faint atmosphere → soft body → bright core.
      const bands: [number, number][] = [
        [4.2 * spread, 0.08],
        [2.1 * spread, 0.22],
        [1.0, 1.0],
      ]
      for (const [hm, am] of bands) {
        const grad = ctx.createLinearGradient(0, 0, len, 0)
        grad.addColorStop(0, `rgba(${r},${g},${b},${aNear * am})`)
        grad.addColorStop(0.55, `rgba(${r},${g},${b},${aFar * am})`)
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`)
        ctx.fillStyle = grad
        ctx.fillRect(0, -coreHalf * hm, len, coreHalf * hm * 2)
      }
      ctx.restore()
    }

    // A soft point of light — used for the travelling head and contact bloom.
    function bloom(x: number, y: number, radius: number, rgb: number[], alpha: number) {
      if (alpha <= 0.001) return
      const [r, g, b] = rgb
      const grad = ctx.createRadialGradient(x, y, 0, x, y, radius)
      grad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`)
      grad.addColorStop(0.35, `rgba(${r},${g},${b},${alpha * 0.28})`)
      grad.addColorStop(1, `rgba(${r},${g},${b},0)`)
      ctx.save()
      ctx.globalCompositeOperation = 'lighter'
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    // Precision-cut optical glass: near-invisible body, crisp Fresnel edges
    // that brighten toward the apex, a faint inner bevel, and an apex glint.
    function drawPrism(warm: number, t: number) {
      const edges: [{ x: number; y: number }, { x: number; y: number }][] = [
        [apex, baseL],
        [baseR, apex],
        [baseL, baseR],
      ]

      // Body — the faintest tint, a touch brighter where the light passes.
      ctx.save()
      ctx.beginPath()
      ctx.moveTo(apex.x, apex.y)
      ctx.lineTo(baseL.x, baseL.y)
      ctx.lineTo(baseR.x, baseR.y)
      ctx.closePath()
      const body = ctx.createLinearGradient(apex.x, apex.y, baseL.x, baseR.y)
      body.addColorStop(0, `rgba(237,237,236,${0.006 + warm * 0.01})`)
      body.addColorStop(1, `rgba(237,237,236,${0.012 + warm * 0.03})`)
      ctx.fillStyle = body
      ctx.fill()
      ctx.restore()

      // Crisp edges with a Fresnel-like falloff (brighter at the apex vertex).
      ctx.save()
      ctx.globalCompositeOperation = 'lighter'
      ctx.lineWidth = 1
      ctx.lineJoin = 'round'
      ctx.shadowBlur = 5
      ctx.shadowColor = `rgba(237,237,236,${0.1 + warm * 0.3})`
      for (const [p, q] of edges) {
        const grad = ctx.createLinearGradient(p.x, p.y, q.x, q.y)
        const aP = p === apex || q === apex ? 0.5 : 0.28
        grad.addColorStop(0, `rgba(237,237,236,${(0.06 + warm * aP) * 0.9})`)
        grad.addColorStop(0.5, `rgba(237,237,236,${0.05 + warm * 0.32})`)
        grad.addColorStop(1, `rgba(237,237,236,${(0.06 + warm * aP) * 0.9})`)
        ctx.strokeStyle = grad
        ctx.beginPath()
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(q.x, q.y)
        ctx.stroke()
      }
      ctx.restore()

      // Inner bevel highlight on the left face — a hint of glass thickness.
      ctx.save()
      ctx.globalCompositeOperation = 'lighter'
      ctx.lineWidth = 1
      ctx.strokeStyle = `rgba(237,237,236,${0.04 + warm * 0.14})`
      ctx.beginPath()
      ctx.moveTo(apex.x + 3, apex.y + 8)
      ctx.lineTo(baseL.x + 6, baseL.y - 6)
      ctx.stroke()
      ctx.restore()

      // Apex glint — a small specular catch that wakes as the light warms.
      const glint = warm * (0.6 + 0.4 * Math.sin(t * 2.3))
      bloom(apex.x, apex.y, 10, [245, 245, 244], 0.5 * glint)
    }

    const start = performance.now()
    let raf = 0

    function frame(now: number) {
      const t = reduce ? 999 : (now - start) / 1000

      const beamP = easeInOut(clamp01((t - T.hold) / T.beam))
      const arrived = t >= T.hold + T.beam
      const pauseP = clamp01((t - (T.hold + T.beam)) / T.pause)
      const refractP = easeOut(clamp01((t - (T.hold + T.beam + T.pause)) / T.refract))

      ctx.clearRect(0, 0, W, H)

      const warm = Math.max(pauseP * 0.45, refractP)
      drawPrism(warm, t)

      // Incoming white beam — a physical shaft gliding in from the left.
      if (beamP > 0) {
        const headX = beamP * entry.x
        // Very faint atmospheric flicker, so the light feels alive, not static.
        const flick = 1 + 0.025 * Math.sin(t * 6.0)
        shaft(0, cy, 0, headX, 1.05, [237, 237, 236], 0.32 * flick, 0.62 * flick)
        // Travelling head of light at the leading edge.
        bloom(headX, cy, 22, [245, 245, 244], 0.7 * (0.6 + 0.4 * beamP))
      }

      if (arrived) {
        // Contact — the instant the beam meets the glass and time pauses.
        const contact = Math.sin(Math.min(pauseP, 1) * Math.PI) * (1 - refractP * 0.6)
        bloom(entry.x, entry.y, 34 + contact * 20, [245, 245, 244], 0.6 * contact)

        // The white beam passing through the body of the glass — bending
        // slightly downward toward the base, as light does inside glass.
        const internalEnd = { x: exit.x, y: exit.y + 6 * refractP }
        const iAng = Math.atan2(internalEnd.y - entry.y, internalEnd.x - entry.x)
        const iLen = Math.hypot(internalEnd.x - entry.x, internalEnd.y - entry.y)
        shaft(entry.x, entry.y, iAng, iLen, 0.9, [237, 237, 236], 0.35, 0.3 + refractP * 0.4)

        // Refracted spectrum leaving the right face. Wavelength-ordered fan:
        // a shared base deviation plus per-colour dispersion, blue bending most.
        if (refractP > 0) {
          const reach = W - exit.x + 80
          const baseAng = 0.05 // radians, gentle downward tilt of the whole fan
          const disp = 0.16 // total angular spread across the spectrum
          for (let i = 0; i < SPECTRUM.length; i++) {
            const { rgb, dev } = SPECTRUM[i]
            const ang = baseAng + dev * disp
            const len = reach * refractP
            // Chromatic exit points: colours separate slightly along the face.
            const oy = exit.y + dev * 5 * refractP
            // Tiny per-beam imperfection — subtle, wavelength-independent shimmer.
            const imperfection = 1 + 0.03 * Math.sin(t * 3.2 + i * 1.7)
            const aNear = (0.12 + refractP * 0.5) * imperfection
            const aFar = (0.05 + refractP * 0.32) * imperfection
            // Light diverges as it travels — softness grows with distance.
            const softness = 1 + refractP * 0.6
            shaft(exit.x, oy, ang, len, 1.0, rgb, aNear, aFar, softness)
          }
        }
      }

      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    function onResize() {
      layout()
    }
    window.addEventListener('resize', onResize)

    // --- Typography timeline (synced to the same clock) ---
    const timers: number[] = []
    if (reduce) {
      setPhase('s2')
      setShowWord(true)
    } else {
      timers.push(window.setTimeout(() => setPhase('s1'), T.s1 * 1000))
      timers.push(window.setTimeout(() => setPhase(null), T.s1Out * 1000))
      timers.push(window.setTimeout(() => setPhase('s2'), T.s2 * 1000))
      timers.push(window.setTimeout(() => setPhase(null), T.s2Out * 1000))
      timers.push(window.setTimeout(() => setShowWord(true), T.word * 1000))
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      timers.forEach((id) => clearTimeout(id))
    }
  }, [])

  const sentence =
    phase === 's1'
      ? 'The information was always there.'
      : phase === 's2'
        ? 'Only the relationships were hidden.'
        : null

  return (
    <section
      className="relative h-[100svh] w-full overflow-hidden bg-background"
      aria-label="Prism"
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

      {/* Cinematic vignette — deepens the darkness toward the edges. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 50%, transparent 44%, rgba(0,0,0,0.55) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Typography — revealed by a passing front of light, not a fade. */}
      <div className="pointer-events-none absolute inset-0 px-6">
        <div className="absolute left-1/2 top-[19%] flex h-[3.5em] w-full max-w-3xl -translate-x-1/2 items-center justify-center">
          <AnimatePresence mode="wait">
            {sentence && (
              <motion.div
                key={sentence}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <IlluminatedText
                  text={sentence}
                  className="text-center font-serif text-2xl font-light leading-relaxed tracking-tight text-balance md:text-[2rem]"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {showWord && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="absolute bottom-[16%] left-1/2 -translate-x-1/2"
            >
              <IlluminatedText
                text="PRISM"
                className="text-sm font-medium tracking-[0.5em]"
                duration={2.4}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Accessible description of the scene. */}
      <h1 className="sr-only">Prism</h1>
      <p className="sr-only">
        A beam of white light enters from the left, meets a prism, and refracts into a spectrum of
        colour. The information was always there. Only the relationships were hidden.
      </p>
    </section>
  )
}

// Text that is revealed by a soft front of light sweeping across it, settling
// to a fully lit state — as if the beam itself illuminated the words.
function IlluminatedText({
  text,
  className,
  duration = 1.9,
}: {
  text: string
  className?: string
  duration?: number
}) {
  const mask =
    'linear-gradient(100deg, #000 0%, #000 52%, rgba(0,0,0,0.55) 66%, rgba(0,0,0,0) 82%)'
  return (
    <span className={`relative inline-block ${className ?? ''}`}>
      {/* Ambient, barely-lit base so unlit letters aren't pure black. */}
      <span className="text-foreground/15">{text}</span>
      {/* Fully lit layer, revealed by the passing light front. */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 text-foreground"
        style={{
          WebkitMaskImage: mask,
          maskImage: mask,
          WebkitMaskSize: '260% 100%',
          maskSize: '260% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
        initial={{ WebkitMaskPosition: '100% 0%', maskPosition: '100% 0%' }}
        animate={{ WebkitMaskPosition: '0% 0%', maskPosition: '0% 0%' }}
        transition={{ duration, ease: [0.33, 0, 0.15, 1] }}
      >
        {text}
      </motion.span>
    </span>
  )
}
