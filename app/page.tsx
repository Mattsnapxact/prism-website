const reviewEmail =
  'mailto:matthew@prismgroup.uk?subject=Executive%20Estate%20Intelligence%20Review&body=Hello%20Matthew%2C%0A%0AI%27d%20like%20to%20discuss%20an%20Executive%20Estate%20Intelligence%20Review.%0A%0AOrganisation%3A%0ARole%3A%0AWhat%20we%27re%20trying%20to%20understand%3A%0A'

const disciplines = ['People', 'Places', 'Assets', 'Finance', 'Risk', 'Compliance', 'Capital', 'Time']

const biases = [
  {
    title: 'Attention is limited',
    body: 'Leaders focus on what is urgent, visible and repeatedly surfaced.',
  },
  {
    title: 'Bias is predictable',
    body: "Today's pressure can quietly outweigh tomorrow's exposure.",
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
      <Mechanism />
      <Finding />
      <Behaviour />
      <EstateIntelligence />
      <Review />
      <HowItWorks />
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
        <nav className="hidden items-center gap-9 text-[0.78rem] text-white/60 md:flex">
          <a href="#why" className="transition hover:text-white">
            Why Prism
          </a>
          <a href="#how" className="transition hover:text-white">
            How it works
          </a>
          <a href="#review" className="transition hover:text-white">
            The Review
          </a>
         <div className="flex items-center gap-6">
  <a
    href="tel:+442038741866"
    className="hidden text-sm tracking-[0.08em] text-white/70 transition hover:text-white lg:inline-block"
  >
    0203 874 1866
  </a>

  <a
    href={reviewEmail}
    className="border border-white/18 px-5 py-3 text-white/90 transition hover:border-white/50 hover:bg-white hover:text-black"
  >
    Request an Executive Review →
  </a>
</div>

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
          <p className="mb-8 text-xs uppercase tracking-[0.48em] text-white/50">
            For the leadership of Multi-Academy Trusts and care groups
          </p>
          <h1 className="max-w-5xl font-serif text-[4.3rem] font-light leading-[0.92] tracking-[-0.06em] text-white text-balance sm:text-8xl lg:text-[8.4rem]">
            You already have
            <br />
            the information.
          </h1>
          <p className="mt-10 max-w-3xl font-serif text-[2.6rem] font-light leading-[1.03] tracking-[-0.045em] text-[#d7c7a2] text-balance sm:text-6xl lg:text-[4.8rem]">
            The problem is seeing what it means.
          </p>
          <div className="mt-10 h-px w-28 bg-[#d7c7a2]/60" />
          <p className="mt-8 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
            Prism reads the records your organisation already holds — and puts in writing what they have been trying to tell you.
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
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/72">
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

function Mechanism() {
  return (
    <section id="how-we-work" className="relative overflow-hidden border-b border-white/[0.08] bg-[#050505] px-6 py-28 md:px-12 md:py-40">
      <img src="/horizon.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/35" />
      <div className="relative mx-auto max-w-[1500px]">
        <p className="mb-8 text-xs uppercase tracking-[0.42em] text-[#d7c7a2]">02 · The method</p>
        <h2 className="max-w-5xl font-serif text-5xl font-light leading-[1.03] tracking-[-0.045em] text-white text-balance md:text-7xl">
          We never visit. We never install anything.
        </h2>
        <p className="mt-8 max-w-3xl font-serif text-3xl font-light leading-tight tracking-[-0.025em] text-[#d7c7a2] md:text-4xl">
          We work only from the records you already hold.
        </p>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/72">
          If your data contains the answer — and it almost always does — we will find it there. No surveyors on site. No software to adopt. No relationship to manage afterwards.
        </p>
        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/[0.1] pt-8">
          {['One engagement', 'No site visits', 'No contracts', 'No tie-ins'].map((item) => (
            <span key={item} className="text-xs uppercase tracking-[0.38em] text-[#d7c7a2]/90">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-5">
          {disciplines.map((item) => (
            <span key={item} className="text-xs uppercase tracking-[0.38em] text-white/45">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Finding() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-black px-6 py-28 md:px-12 md:py-44">
      <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_30%_40%,rgba(215,199,162,.10),transparent_38%)]" />
      <div className="relative mx-auto max-w-[1500px]">
        <p className="mb-10 text-xs uppercase tracking-[0.42em] text-[#d7c7a2]">03 · What gets revealed</p>
        <blockquote className="max-w-5xl font-serif text-5xl font-light leading-[1.04] tracking-[-0.045em] text-white text-balance md:text-7xl">
          One organisation was still insuring equipment that had been disposed of three years earlier.
        </blockquote>
        <p className="mt-10 max-w-xl text-lg leading-relaxed text-white/72">
          Found in their own records. No site visit. No new software. It had been sitting there, waiting to be seen.
        </p>
        <div className="mt-14 grid gap-px border border-white/[0.1] bg-white/[0.08] md:grid-cols-2">
          <div className="bg-black p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-[#d7c7a2]/85">For trusts</p>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              Every trust must account for its estate in the autumn 2026 annual return. The question it asks is the one this page asks: do you actually know what you hold?
            </p>
          </div>
          <div className="bg-black p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-[#d7c7a2]/85">For care groups</p>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              CQC will find what your records already show. The only question is whether you see it before they do.
            </p>
          </div>
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
          <p className="mb-8 text-xs uppercase tracking-[0.42em] text-[#d7c7a2]">04 · Behaviour changes decisions</p>
          <h2 className="font-serif text-5xl font-light leading-[1.03] tracking-[-0.045em] text-white text-balance md:text-7xl">
            Leadership rarely fails because information is unavailable.
          </h2>
          <p className="mt-8 max-w-2xl font-serif text-3xl font-light leading-tight tracking-[-0.025em] text-[#d7c7a2] md:text-4xl">
            It fails because attention is limited.
          </p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/72">
            Today’s urgency hides tomorrow’s risk. Prism changes what leadership notices before decisions are made.
          </p>
        </div>
        <div className="grid gap-px border border-white/[0.1] bg-white/[0.08] md:grid-cols-3">
          {biases.map((item) => (
            <article key={item.title} className="bg-black p-8 md:min-h-[310px]">
              <div className="mb-12 h-10 w-10 rounded-full border border-[#d7c7a2]/60" />
              <h3 className="max-w-[12rem] text-xs uppercase tracking-[0.32em] text-white">{item.title}</h3>
              <p className="mt-8 text-sm leading-relaxed text-white/68">{item.body}</p>
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
          <p className="mb-8 text-xs uppercase tracking-[0.42em] text-[#d7c7a2]">05 · Estate Intelligence</p>
          <h2 className="font-serif text-5xl font-light leading-[1.03] tracking-[-0.045em] text-white text-balance md:text-7xl">
            Your estate is where invisible risk costs the most.
          </h2>
        </div>
        <div>
          <p className="max-w-2xl font-serif text-3xl font-light leading-tight tracking-[-0.025em] text-[#d7c7a2] md:text-4xl">
            Prism doesn’t replace your systems. It reveals what they cannot.
          </p>
          <div className="mt-12 grid gap-px border border-white/[0.1] bg-white/[0.08] sm:grid-cols-3">
            {['Hidden dependencies', 'Invisible risk', 'Future investment'].map((item) => (
              <div key={item} className="bg-[#030303] p-7 text-xs uppercase tracking-[0.3em] text-white/75">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-white/72">
            Condition, compliance, funding, assets and local judgement stop behaving like separate registers. They begin to show the organisation as one connected field of decisions.
          </p>
        </div>
      </div>
    </section>
  )
}

function Review() {
  return (
    <section
      id="review"
      className="relative overflow-hidden border-b border-white/[0.08] bg-black px-6 py-28 md:px-12 md:py-44"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_46%,rgba(165,130,255,.16),transparent_34%),radial-gradient(circle_at_48%_52%,rgba(74,210,255,.08),transparent_30%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/88 to-black" />
      <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />

      <div className="relative mx-auto grid max-w-[1500px] gap-16 md:grid-cols-[0.82fr_1.18fr] md:items-center">
        <div>
          <p className="mb-8 text-xs uppercase tracking-[0.42em] text-[#d7c7a2]">
            06 · From complexity to clarity
          </p>

          <h2 className="font-serif text-5xl font-light leading-[0.98] tracking-[-0.055em] text-white text-balance md:text-7xl">
            We don’t begin
            <br />
            with software.
          </h2>

          <div className="mt-10 h-px w-28 bg-gradient-to-r from-[#d7c7a2] to-transparent" />

          <p className="mt-9 max-w-xl font-serif text-3xl font-light leading-tight tracking-[-0.025em] text-[#d7c7a2] md:text-4xl">
            Leadership doesn’t need another dashboard.
          </p>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/72">
            Three perspectives. Hundreds of observations. Conflicting signals, partial records and local knowledge.
          </p>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/80">
            Prism brings them into one Executive Intelligence Review — clear enough to change the conversation.
          </p>
        </div>

        <div className="relative min-h-[760px] md:min-h-[640px]">
          <div className="absolute left-[2%] top-[10%] h-[430px] w-[245px] rounded-[2rem] border border-rose-300/25 bg-white/[0.055] p-7 shadow-[0_30px_90px_rgba(0,0,0,.55)] backdrop-blur-2xl md:left-[0%] md:top-[16%]">
            <p className="text-[0.68rem] uppercase tracking-[0.36em] text-rose-200/65">
              Condition
            </p>
            <h3 className="mt-8 font-serif text-3xl font-light leading-tight text-white/80">
              Estate
              <br />
              Condition
            </h3>
            <div className="mt-10 h-24 w-24 rounded-full border-[7px] border-rose-300/65" />
            <div className="mt-10 space-y-4">
              <div className="h-px w-full bg-white/22" />
              <div className="h-px w-5/6 bg-white/14" />
              <div className="h-px w-2/3 bg-white/10" />
            </div>
          </div>

          <div className="absolute left-[24%] top-[4%] h-[430px] w-[245px] rounded-[2rem] border border-amber-200/25 bg-white/[0.065] p-7 shadow-[0_30px_90px_rgba(0,0,0,.55)] backdrop-blur-2xl md:left-[22%] md:top-[9%]">
            <p className="text-[0.68rem] uppercase tracking-[0.36em] text-amber-100/65">
              Compliance
            </p>
            <h3 className="mt-8 font-serif text-3xl font-light leading-tight text-white/80">
              Statutory
              <br />
              Risk
            </h3>
            <div className="mt-10 h-24 w-24 rounded-full border-[7px] border-amber-200/65" />
            <div className="mt-10 space-y-4">
              <div className="h-px w-full bg-white/22" />
              <div className="h-px w-4/5 bg-white/14" />
              <div className="h-px w-1/2 bg-white/10" />
            </div>
          </div>

          <div className="absolute left-[46%] top-[13%] h-[430px] w-[245px] rounded-[2rem] border border-cyan-200/25 bg-white/[0.055] p-7 shadow-[0_30px_90px_rgba(0,0,0,.55)] backdrop-blur-2xl md:left-[44%] md:top-[18%]">
            <p className="text-[0.68rem] uppercase tracking-[0.36em] text-cyan-100/65">
              Finance
            </p>
            <h3 className="mt-8 font-serif text-3xl font-light leading-tight text-white/80">
              Capital
              <br />
              Pressure
            </h3>
            <div className="mt-10 h-24 w-24 rounded-full border-[7px] border-cyan-200/65" />
            <div className="mt-10 space-y-4">
              <div className="h-px w-full bg-white/22" />
              <div className="h-px w-3/4 bg-white/14" />
              <div className="h-px w-2/3 bg-white/10" />
            </div>
          </div>

          <div className="absolute left-[52%] top-[46%] z-0 hidden h-px w-[18%] bg-gradient-to-r from-white/60 via-white/30 to-transparent shadow-[0_0_35px_rgba(255,255,255,.35)] md:block" />
          <div className="absolute left-[60%] top-[43%] z-0 hidden text-5xl text-white/80 md:block">→</div>

          <div className="absolute bottom-0 right-0 z-10 w-full max-w-[520px] rounded-[2.25rem] border border-white/28 bg-[linear-gradient(145deg,rgba(255,255,255,.16),rgba(255,255,255,.045))] p-8 shadow-[0_40px_130px_rgba(0,0,0,.72)] backdrop-blur-2xl md:bottom-[2%]">
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.38em] text-[#d7c7a2]/75">
                  Unified view
                </p>
                <h3 className="mt-6 font-serif text-4xl font-light leading-[1.06] tracking-[-0.035em] text-white md:text-5xl">
                  Executive
                  <br />
                  Intelligence
                  <br />
                  Review
                </h3>
              </div>
              <div className="text-5xl text-[#d7c7a2] drop-shadow-[0_0_24px_rgba(215,199,162,.55)]">
                ◇
              </div>
            </div>

            <p className="mt-7 max-w-sm text-sm leading-relaxed text-white/68">
              Condition, compliance and financial pressure resolved into one clear leadership view.
            </p>

            <div className="mt-8 grid grid-cols-4 gap-2">
              {[
                ['£214k', 'Uninsured assets'],
                ['31', 'Compliance gaps'],
                ['£1.2m', '5-yr replacement'],
                ['£38k', 'Duplicate spend'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl border border-white/12 bg-black/24 p-3 text-center">
                  <strong className="block text-lg font-light text-white">{value}</strong>
                  <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.16em] text-white/50">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[0.62rem] uppercase tracking-[0.22em] text-white/40">
              Figures from an anonymised review
            </p>

            <div className="mt-8 space-y-4 border-t border-white/12 pt-7">
              {[
                'Uninsured and under-insured assets identified',
                'Compliance gaps mapped across priority areas',
                'Replacement pressure priced over five years',
                'Duplicate and orphaned spend surfaced',
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-relaxed text-white/72">
                  <span className="mt-[2px] text-[#d7c7a2]">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-white/12 pt-6 font-serif text-2xl font-light text-[#d7c7a2]">
              One view. What matters most.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden border-b border-white/[0.08] bg-[#050505] px-6 py-28 md:px-12 md:py-40">
      <div className="absolute left-0 top-0 h-full w-1/2 opacity-40 [background:radial-gradient(circle_at_15%_50%,rgba(215,199,162,.14),transparent_40%)]" />
      <div className="relative mx-auto grid max-w-[1500px] gap-16 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div>
          <p className="mb-8 text-xs uppercase tracking-[0.42em] text-[#d7c7a2]">07 · What happens when you write</p>
          <h2 className="font-serif text-5xl font-light leading-[1.02] tracking-[-0.045em] text-white text-balance md:text-6xl">
            Your cost is an email and a few exports. That’s all.
          </h2>
          <div className="mt-12 space-y-8 border-l border-[#d7c7a2]/40 pl-8">
            {[
              ['You write', 'A short email. Organisation, role, what you want to understand.'],
              ['You send exports', 'From the systems you already run. Nothing is installed. Nothing changes.'],
              ['You receive the Review', 'A board-ready document. No meetings required until you’ve read it.'],
            ].map(([title, body]) => (
              <div key={title}>
                <h3 className="text-xs uppercase tracking-[0.32em] text-[#d7c7a2]">{title}</h3>
                <p className="mt-3 max-w-md text-lg leading-relaxed text-white/72">{body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-white/[0.1] bg-white/[0.03] p-9 md:p-12">
          <p className="text-xs uppercase tracking-[0.38em] text-white/50">
  The Executive Review
</p>

<p className="mt-8 font-serif text-3xl font-light leading-tight tracking-[-0.025em] text-white md:text-4xl">
  Built for leadership.
</p>

<p className="mt-2 text-sm uppercase tracking-[0.28em] text-[#d7c7a2]/85">
  Executive Visibility
</p>

<p className="mt-8 max-w-md text-lg leading-relaxed text-white/72">
  Every Executive Intelligence Review is a structured investigation into the relationships hidden within your existing information. It brings together condition, compliance, assets, funding and operational insight into a single executive view designed to improve confidence in strategic decision-making.
</p>
          <div className="mt-10 flex flex-wrap gap-6">

  <a
    href={reviewEmail}
    className="inline-flex items-center gap-6 border-b border-[#d7c7a2]/70 pb-3 text-sm text-white transition hover:border-white hover:text-[#d7c7a2]"
  >
    Request an Executive Review
    <span aria-hidden="true">→</span>
  </a>

  <a
    href="/estate-intelligence-review.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-6 border-b border-white/25 pb-3 text-sm text-white/75 transition hover:border-[#d7c7a2] hover:text-[#d7c7a2]"
  >
    View Sample Review
    <span aria-hidden="true">↗</span>
  </a>

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
          You already have the information.
        </p>
        <p className="mx-auto mt-8 max-w-3xl font-serif text-4xl font-light leading-tight tracking-[-0.035em] text-[#d7c7a2] md:text-6xl">
          The only question is whether you see it first.
        </p>
        <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-white/70">
          Before the auditor. Before the regulator. Before the annual return.
        </p>
        <a
          href={reviewEmail}
          className="mt-12 inline-flex items-center gap-8 border border-white/18 px-8 py-4 text-sm text-white transition hover:bg-white hover:text-black"
        >
          Request an Executive Review <span aria-hidden="true">→</span>
        </a>
        <p className="mt-6 text-[0.68rem] uppercase tracking-[0.3em] text-white/45">
          One engagement · No site visit · No contract · No tie-in
        </p>
      </div>
      <footer className="relative mx-auto mt-28 flex max-w-[1500px] items-center justify-between border-t border-white/[0.08] pt-8 text-xs text-white/38">
        <span className="tracking-[0.55em]">PRISM</span>
        <span>Executive Visibility</span>
      </footer>
    </section>
  )
}
