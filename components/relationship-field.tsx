'use client'

import { useState } from 'react'

const nodes = [
  [50, 50, 4],
  [28, 20, 2],
  [72, 23, 2],
  [18, 55, 2],
  [81, 58, 2],
  [35, 74, 2],
  [62, 78, 2],
  [46, 18, 1.5],
  [19, 33, 1.5],
  [82, 36, 1.5],
  [25, 82, 1.5],
  [76, 84, 1.5],
  [40, 42, 1.5],
  [58, 40, 1.5],
  [42, 61, 1.5],
  [60, 62, 1.5],
  [12, 70, 1.2],
  [88, 72, 1.2],
  [13, 18, 1.2],
  [88, 20, 1.2],
]

const links = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  [1, 7], [1, 8], [2, 9], [2, 19], [3, 8], [3, 16],
  [4, 9], [4, 17], [5, 10], [5, 16], [6, 11], [6, 17],
  [12, 13], [12, 14], [13, 15], [14, 15], [7, 12], [13, 9], [14, 5], [15, 6]
]

const labels = ['Funding', 'Risk', 'Compliance', 'Condition']

export function RelationshipField() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="relative aspect-square w-full max-w-xl md:max-w-none" aria-label="Relationship field">
      <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
        <defs>
          <radialGradient id="fieldGlow" cx="50%" cy="50%" r="48%">
            <stop offset="0%" stopColor="rgba(0,0,0,.22)" />
            <stop offset="60%" stopColor="rgba(0,0,0,.05)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="44" fill="url(#fieldGlow)" />
        {links.map(([a, b], i) => {
          const na = nodes[a]
          const nb = nodes[b]
          const lit = active === a || active === b || active === null && a === 0
          return (
            <line
              key={i}
              x1={na[0]}
              y1={na[1]}
              x2={nb[0]}
              y2={nb[1]}
              stroke="currentColor"
              strokeWidth={lit ? 0.22 : 0.12}
              opacity={lit ? 0.36 : 0.13}
            />
          )
        })}
        {nodes.map(([x, y, r], i) => {
          const activeNode = active === i
          const primary = i === 0
          return (
            <g key={i} onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)} className="cursor-crosshair">
              <circle cx={x} cy={y} r={primary ? 6 : activeNode ? r + 2.4 : r + 1.5} fill="transparent" />
              <circle cx={x} cy={y} r={primary ? 4.2 : r} fill="currentColor" opacity={primary ? 0.9 : activeNode ? 0.78 : 0.42} />
              {activeNode && !primary && <circle cx={x} cy={y} r={r + 4.5} fill="none" stroke="currentColor" strokeWidth="0.25" opacity="0.5" />}
            </g>
          )
        })}
      </svg>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="rounded-full bg-black px-4 py-3 text-[0.65rem] uppercase tracking-[0.38em] text-white">
          Prism
        </span>
      </div>
      <div className="absolute inset-x-8 bottom-2 flex justify-between text-[0.65rem] uppercase tracking-[0.25em] text-black/35">
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  )
}
