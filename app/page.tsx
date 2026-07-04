const reviewEmail =
  'mailto:my@snapxact.com?subject=Executive%20Estate%20Intelligence%20Review&body=Hello%20Matthew%2C%0A%0AI%27d%20like%20to%20discuss%20an%20Executive%20Estate%20Intelligence%20Review.%0A%0AOrganisation%3A%0ARole%3A%0AWhat%20we%27re%20trying%20to%20understand%3A%0A'

const disciplines = ['People', 'Places', 'Assets', 'Finance', 'Risk', 'Compliance', 'Capital', 'Time']

const reviewSteps = [
  {
    number: '01',
    title: 'Observe',
    body: 'We begin with what already exists: records, priorities, risks, pressures and the quiet knowledge held by the people closest to the estate.',
  },
  {
    number: '02',
    title: 'Interpret',
    body: 'We look for the relationships that systems rarely show together: where condition affects risk, where compliance touches funding, and where urgency hides consequence.',
  },
  {
    number: '03',
    title: 'Reveal',
    body: 'Leadership receives an executive view of what matters, why it matters, and where attention should move next.',
  },
]

const biases = [
  {
    title: 'Attention is limited',
    body: 'Leaders focus on what is urgent, visible and repeatedly surfaced.',
  },
  {
    title: 'Bias is predictable',
    body: 'Today\'s pressure can quietly outweigh tomorrow\'s exposure.',
  },
  {
    title: 'Judgement improves',
    body: 'Better visibility changes what leadership notices before decisions are made.',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#030303] text-[#f4f0e8] selection:bg-[#f4f0e8] selection:text-black">
      <Header />
      <Hero />
      <Information />
      <ExecutiveVisibility />
      <Behaviour />
      <EstateIntelligence />
      <Review />
      <FinalCTA />
    </main>
  )
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-black/45 px-6 py-5 backdrop-blur-xl md:px-12">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        <a href="#top" className="text-xs font-medium tracking-[0.62em] text-white/88">
          PRISM
        </a>
        <nav className="hidden items-center gap-9 text-[0.78rem] text-white/55 md:flex">
          <a href="#why" className="transition hover:text-white">
            Why Prism
          </a>
          <a href="#visibility" className="transition hover:text-white">
            Executive Visibility
          </a>
          <a href="#review" className="transition hover:text-white">
            The Review
          </a>
          <a
            href={reviewEmail}
            className="border border-white/18 px-5 py-3 text-white/90 transition hover:border-white/50 hover:bg-white hover:text-black"
          >
            Request an Executive Review →
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#030303] px-6 pt-28 md:px-12">
      <img
        src="/prism-hero-v2.png"
        alt="A cut-glass prism refracting a beam of light into colour"
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] opacity-95"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_67%_47%,rgba(255,255,255,.02),transparent_28%),linear-gradient(90deg,rgba(3,3,3,.98)_0%,rgba(3,3,3,.86)_28%,rgba(3,3,3,.36)_55%,rgba(3,3,3,.08)_82%,rgba(3,3,3,.35)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black" />
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-[1600px] items-center">
        <div className="max-w-5xl pb-12">
          <p className="mb-8 text-xs uppercase tracking-[0.48em] text-white/42">Executive Visibility</p>
          <h1 className="max-w-5xl font-serif text-[4.3rem] font-light leading-[0.92] tracking-[-0.06em] text-white text-balance sm:text-8xl lg:text-[8.4rem]">
            You already have
            <br />
            the information.
          </h1>
          <p className="mt-10 max-w-3xl font-serif text-[2.6rem] font-light leading-[1.03] tracking-[-0.045em] text-[#d7c7a2] text-balance sm:text-6xl lg:text-[4.8rem]">
            The problem is seeing what it means.
          </p>
          <div className="mt-10 h-px w-28 bg-[#d7c7a2]/60" />
          <p className="mt-8 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
            Prism helps leadership reveal the relationships, risks and opportunities that already exist inside the organisation.
          </p>
          <a
            href={reviewEmail}
            className="mt-9 inline-flex items-center gap-8 border-b border-[#d7c7a2]/70 pb-3 text-sm text-white transition hover:border-white hover:text-[#d7c7a2]"
          >
            Request an Executive Review <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[0.62rem] uppercase tracking-[0.35em] text-white/35 md:flex">
        <span>Scroll to see more</span>
        <span className="h-12 w-px bg-white/25" />
      </div>
    </section>
  )
}

function Information() {
  return (
    <section id="why" className="relative overflow-hidden border-y border-white/[0.08] bg-black px-6 py-28 md:px-12 md:py-40">
      <div className="absolute right-0 top-0 h-full w-2/3 opacity-50 [background:radial-gradient(circle_at_80%_45%,rgba(255,255,255,.06),transparent_34%)]" />
      <div className="mx-auto grid max-w-[1500px] gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <p className="mb-8 text-xs uppercase tracking-[0.42em] text-[#d7c7a2]">01 · Information is not the problem</p>
          <h2 className="font-serif text-5xl font-light leading-[1.02] tracking-[-0.045em] text-white text-balance md:text-7xl">
            Most organisations don’t suffer from a lack of information.
          </h2>
          <p className="mt-8 max-w-2xl font-serif text-3xl font-light leading-tight tracking-[-0.025em] text-[#d7c7a2] md:text-4xl">
            They suffer from something much harder to recognise.
          </p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/56">
            Information exists. Visibility doesn’t. The answers are usually present — distributed across systems, estates, people and judgement — but rarely seen together.
          </p>
        </div>
        <div className="relative min-h-[360px] overflow-hidden md:min-h-[520px]">
          <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-white/70 to-transparent shadow-[0_0_30px_rgba(255,255,255,.45)]" />
          <div className="absolute right-[18%] top-1/2 h-56 w-px -translate-y-1/2 border border-white/30 bg-white/[0.03] shadow-[0_0_70px_rgba(255,255,255,.20)]" />
        </div>
      </div>
    </section>
  )
}

function ExecutiveVisibility() {
  return (
    <section id="visibility" className="relative overflow-hidden border-b border-white/[0.08] bg-[#050505] px-6 py-28 md:px-12 md:py-40">
      <img src="/horizon.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/35" />
      <div className="relative mx-auto max-w-[1500px]">
        <p className="mb-8 text-xs uppercase tracking-[0.42em] text-[#d7c7a2]">02 · Executive Visibility</p>
        <h2 className="max-w-5xl font-serif text-5xl font-light leading-[1.03] tracking-[-0.045em] text-white text-balance md:text-7xl">
          Executive Visibility is the ability to see relationships that already exist but rarely appear together.
        </h2>
        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-5 border-t border-white/[0.1] pt-8">
          {disciplines.map((item) => (
            <span key={item} className="text-xs uppercase tracking-[0.38em] text-white/56">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Behaviour() {
  return (
    <section className="border-b border-white/[0.08] bg-black px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto grid max-w-[1500px] gap-16 md:grid-cols-[0.95fr_1.05fr] md:items-start">
        <div>
          <p className="mb-8 text-xs uppercase tracking-[0.42em] text-[#d7c7a2]">03 · Behaviour changes decisions</p>
          <h2 className="font-serif text-5xl font-light leading-[1.03] tracking-[-0.045em] text-white text-balance md:text-7xl">
            Leadership rarely fails because information is unavailable.
          </h2>
          <p className="mt-8 max-w-2xl font-serif text-3xl font-light leading-tight tracking-[-0.025em] text-[#d7c7a2] md:text-4xl">
            It fails because attention is limited.
          </p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/56">
            Today’s urgency hides tomorrow’s risk. Prism changes what leadership notices before decisions are made.
          </p>
        </div>
        <div className="grid gap-px border border-white/[0.1] bg-white/[0.08] md:grid-cols-3">
          {biases.map((item) => (
            <article key={item.title} className="bg-black p-8 md:min-h-[310px]">
              <div className="mb-12 h-10 w-10 rounded-full border border-[#d7c7a2]/60" />
              <h3 className="max-w-[12rem] text-xs uppercase tracking-[0.32em] text-white">{item.title}</h3>
              <p className="mt-8 text-sm leading-relaxed text-white/52">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function EstateIntelligence() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#030303] px-6 py-28 md:px-12 md:py-40">
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-40 [background:radial-gradient(circle_at_85%_50%,rgba(215,199,162,.18),transparent_40%)]" />
      <div className="relative mx-auto grid max-w-[1500px] gap-16 md:grid-cols-[0.92fr_1.08fr] md:items-center">
        <div>
          <p className="mb-8 text-xs uppercase tracking-[0.42em] text-[#d7c7a2]">04 · Estate Intelligence</p>
          <h2 className="font-serif text-5xl font-light leading-[1.03] tracking-[-0.045em] text-white text-balance md:text-7xl">
            Estate Intelligence is what Executive Visibility looks like when applied to the built environment.
          </h2>
        </div>
        <div>
          <p className="max-w-2xl font-serif text-3xl font-light leading-tight tracking-[-0.025em] text-[#d7c7a2] md:text-4xl">
            It doesn’t replace your systems. It reveals what they cannot.
          </p>
          <div className="mt-12 grid gap-px border border-white/[0.1] bg-white/[0.08] sm:grid-cols-3">
            {['Hidden dependencies', 'Invisible risk', 'Future investment'].map((item) => (
              <div key={item} className="bg-[#030303] p-7 text-xs uppercase tracking-[0.3em] text-white/70">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-white/54">
            Condition, compliance, funding, assets and local judgement stop behaving like separate registers. They begin to show the organisation as one connected field of decisions.
          </p>
        </div>
      </div>
    </section>
  )
}

function Review() {
  return (
    <section id="review" className="border-b border-white/[0.08] bg-black px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1500px]">
        <p className="mb-8 text-xs uppercase tracking-[0.42em] text-[#d7c7a2]">05 · The Executive Review</p>
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-serif text-5xl font-light leading-[1.03] tracking-[-0.045em] text-white text-balance md:text-7xl">
              We don’t begin with software. We begin with understanding.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-xl font-light leading-relaxed text-white/66 md:text-2xl">
              The Executive Estate Intelligence Review is a structured investigation into how clearly leadership can see the estate — not what information exists, but what it reveals.
            </p>
            <div className="mt-12 grid gap-px border border-white/[0.1] bg-white/[0.08]">
              {reviewSteps.map((step) => (
                <article key={step.title} className="grid gap-6 bg-black p-7 md:grid-cols-[0.2fr_0.45fr_1fr] md:items-start">
                  <span className="text-sm text-[#d7c7a2]">{step.number}</span>
                  <h3 className="font-serif text-3xl font-light text-white md:text-4xl">{step.title}</h3>
                  <p className="text-base leading-relaxed text-white/54">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-6 py-28 text-center md:px-12 md:py-44">
      <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_50%_20%,rgba(215,199,162,.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-5xl">
        <p className="font-serif text-5xl font-light leading-[1.03] tracking-[-0.045em] text-white text-balance md:text-8xl">
          You don’t need another system.
        </p>
        <p className="mx-auto mt-8 max-w-3xl font-serif text-4xl font-light leading-tight tracking-[-0.035em] text-[#d7c7a2] md:text-6xl">
          You need Executive Visibility.
        </p>
        <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-white/56">
          Can your leadership team genuinely see what matters most?
        </p>
        <a
          href={reviewEmail}
          className="mt-12 inline-flex items-center gap-8 border border-white/18 px-8 py-4 text-sm text-white transition hover:bg-white hover:text-black"
        >
          Find out <span aria-hidden="true">→</span>
        </a>
      </div>
      <footer className="relative mx-auto mt-28 flex max-w-[1500px] items-center justify-between border-t border-white/[0.08] pt-8 text-xs text-white/38">
        <span className="tracking-[0.55em]">PRISM</span>
        <span>Executive Visibility</span>
      </footer>
    </section>
  )
}
