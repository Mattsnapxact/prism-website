const reviewEmail =
  'mailto:my@snapxact.com?subject=Executive%20Estate%20Intelligence%20Review&body=Hello%20Matthew%2C%0A%0AI%27d%20like%20to%20discuss%20an%20Executive%20Estate%20Intelligence%20Review.%0A%0AOrganisation%3A%0ARole%3A%0AWhat%20we%27re%20trying%20to%20understand%3A%0A'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Premise />
      <ExecutiveVisibility />
      <EstateIntelligence />
      <Review />
      <FinalCTA />
    </main>
  )
}

function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 py-5 md:px-10">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between">
        <a href="#top" className="font-sans text-[0.78rem] font-medium tracking-[0.58em] text-foreground/90">
          PRISM
        </a>
        <nav className="hidden items-center gap-9 text-[0.74rem] text-foreground/62 md:flex">
          <a href="#visibility" className="transition hover:text-foreground">Executive Visibility</a>
          <a href="#estate" className="transition hover:text-foreground">Estate Intelligence</a>
          <a href="#review" className="transition hover:text-foreground">Review</a>
          <a href={reviewEmail} className="border border-foreground/18 px-4 py-2.5 text-foreground/88 transition hover:border-foreground/40 hover:bg-foreground hover:text-background">
            Request Review
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-background px-6 pt-28 md:px-10">
      <img
        src="/prism-hero-v2.png"
        alt="A cut-glass prism refracting a beam of light into colour"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-95"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/5" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />

      <div className="relative z-10 flex min-h-[82vh] items-center">
        <div className="max-w-4xl">
          <p className="mb-8 text-xs uppercase tracking-[0.42em] text-foreground/45">
            Executive Visibility
          </p>

          <h1 className="font-serif text-6xl font-light leading-[0.96] tracking-[-0.055em] text-foreground md:text-8xl lg:text-9xl">
            You already have
            <br />
            the information.
          </h1>

          <p className="mt-12 max-w-3xl font-serif text-5xl font-light leading-[1.02] tracking-[-0.045em] text-foreground/48 md:text-7xl">
            The problem is seeing
            <br />
            what it means.
          </p>

          <div className="mt-12 h-px w-24 bg-foreground/35" />

          <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/62 md:text-lg">
            Prism gives leadership the clarity and confidence to make better decisions about the estate, the risks and the future.
          </p>

          <a
            href={reviewEmail}
            className="mt-9 inline-flex items-center gap-8 border border-foreground/20 px-7 py-4 text-sm text-foreground transition hover:bg-foreground hover:text-background"
          >
            Request an Executive Review <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
function Premise() {
  return (
    <section className="relative overflow-hidden border-b border-line px-6 py-28 md:px-10 md:py-44">
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:92px_92px]" />
      <div className="relative mx-auto max-w-[1500px]">
        <div className="max-w-5xl">
          <p className="mb-10 text-xs uppercase tracking-[0.42em] text-muted-foreground">The premise</p>
          <p className="font-serif text-5xl font-light leading-[1.03] tracking-[-0.045em] text-balance md:text-8xl">
            The information was always there.
            <br />
            <span className="text-foreground/42">Only the relationships were hidden.</span>
          </p>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <QuietStatement title="Not more data." body="Most organisations already hold the signals they need." />
          <QuietStatement title="Not another system." body="Systems record activity. Prism reveals meaning." />
          <QuietStatement title="Not a dashboard." body="Leadership needs judgement, context and consequence." />
        </div>
      </div>
    </section>
  )
}

function QuietStatement({ title, body }: { title: string; body: string }) {
  return (
    <article className="border-t border-line pt-7">
      <h3 className="font-serif text-3xl font-light tracking-[-0.025em] md:text-4xl">{title}</h3>
      <p className="mt-5 max-w-sm text-base leading-relaxed text-foreground/50">{body}</p>
    </article>
  )
}

function ExecutiveVisibility() {
  return (
    <section id="visibility" className="relative min-h-screen overflow-hidden border-b border-line px-6 py-28 md:px-10 md:py-44">
      <img src="/horizon.png" alt="" className="absolute right-0 top-0 h-full w-[62%] object-cover opacity-40 mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="relative mx-auto grid max-w-[1500px] gap-16 md:grid-cols-[0.72fr_1.28fr] md:items-end">
        <div>
          <p className="mb-8 text-xs uppercase tracking-[0.42em] text-muted-foreground">01 · Executive Visibility</p>
          <h2 className="font-serif text-6xl font-light leading-[0.98] tracking-[-0.05em] text-balance md:text-8xl">
            You cannot improve what you cannot see.
          </h2>
        </div>
        <div className="max-w-2xl md:justify-self-end">
          <p className="text-2xl font-light leading-relaxed text-foreground/68 md:text-3xl">
            Executive Visibility is the discipline of making hidden organisational relationships visible.
          </p>
          <p className="mt-8 text-lg leading-relaxed text-foreground/50">
            It does not ask leaders to collect more information. It changes how existing information is interpreted.
          </p>
        </div>
      </div>
    </section>
  )
}

function EstateIntelligence() {
  return (
    <section id="estate" className="border-b border-line bg-[#f2f1ec] px-6 py-24 text-[#111] md:px-10 md:py-36">
      <div className="mx-auto grid max-w-[1500px] gap-16 md:grid-cols-[0.82fr_1.18fr] md:items-center">
        <div>
          <p className="mb-8 text-xs uppercase tracking-[0.42em] text-black/42">02 · Estate Intelligence</p>
          <h2 className="font-serif text-5xl font-light leading-[1.03] tracking-[-0.045em] text-balance md:text-7xl">
            Clarity is not more data.
            <br />
            <span className="italic">It is understanding the connections.</span>
          </h2>
          <div className="mt-10 h-px w-20 bg-black/35" />
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-black/62">
            Estate Intelligence brings together the pieces that already exist across your estate, people and operations to reveal what matters, what is at risk, and where opportunity lies.
          </p>
          <a href={reviewEmail} className="mt-9 inline-flex items-center gap-7 border-b border-black/50 pb-2 text-sm text-black transition hover:border-black">
            Request an Estate Intelligence Review <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="relative min-h-[420px] overflow-hidden md:min-h-[560px]">
          <img src="/network-field.png" alt="A field of connected nodes representing visible relationships" className="absolute inset-0 h-full w-full object-contain object-center" />
        </div>
      </div>
    </section>
  )
}

function Review() {
  const items = [
    ['Dispersed Information', 'Critical information exists across registers, systems, emails and local knowledge.'],
    ['Hidden Connections', 'Relationships between issues create risk and opportunity, but usually remain invisible.'],
    ['Strategic Exposure', 'What you do not see can shape capital decisions, audit confidence and leadership judgement.'],
  ]

  return (
    <section id="review" className="border-b border-line px-6 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[1500px] text-center">
        <p className="mb-8 text-xs uppercase tracking-[0.42em] text-muted-foreground">From information to insight</p>
        <h2 className="mx-auto max-w-5xl font-serif text-5xl font-light leading-[1.03] tracking-[-0.045em] text-balance md:text-7xl">
          See the full picture.
          <br />
          <span className="text-foreground/43">Lead with confidence.</span>
        </h2>
        <div className="mx-auto mt-20 grid max-w-6xl gap-12 text-left md:grid-cols-3">
          {items.map(([title, body]) => (
            <article key={title} className="border-t border-line pt-8 md:px-6">
              <h3 className="font-serif text-3xl font-light tracking-[-0.025em]">{title}</h3>
              <p className="mt-5 text-base leading-relaxed text-foreground/50">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="px-6 py-28 text-center md:px-10 md:py-44">
      <p className="mx-auto max-w-4xl font-serif text-5xl font-light leading-[1.03] tracking-[-0.045em] text-balance md:text-7xl">
        Prism reveals what intelligent organisations overlook.
      </p>
      <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-foreground/56">
        A focused executive review for leaders who need to see the relationships behind the risks, the estate and the decisions ahead.
      </p>
      <a href={reviewEmail} className="mt-12 inline-flex items-center gap-6 border border-foreground/18 px-8 py-4 text-sm text-foreground transition hover:bg-foreground hover:text-background">
        Request Your Review <span aria-hidden="true">→</span>
      </a>
      <div className="mx-auto mt-28 flex max-w-7xl items-center justify-between border-t border-line pt-8 text-xs text-foreground/38">
        <span className="tracking-[0.5em]">PRISM</span>
        <span>Executive Visibility</span>
      </div>
    </section>
  )
}
