import type { Metadata } from 'next'
import { ReportLink } from './report-link'

export const metadata: Metadata = {
  title: 'A Question for Your Board | Prism',
  description:
    'Would your board be able to identify the assumptions underpinning its estate and financial decisions?',
}

type ReportPageProps = {
  searchParams: Promise<{ source?: string }>
}

const informationSources = [
  'Estate records',
  'Financial forecasts',
  'Condition information',
  'Compliance records',
]

export default async function ReportPage({ searchParams }: ReportPageProps) {
  const { source } = await searchParams

  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-[#f4f0e8] selection:bg-[#f4f0e8] selection:text-black">
      <Header />

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-24 pt-32 md:px-12">
        <div className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_68%_42%,rgba(215,199,162,.12),transparent_28%),radial-gradient(circle_at_52%_50%,rgba(255,255,255,.05),transparent_42%)]" />
        <div className="absolute left-1/2 top-1/2 h-px w-[78vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/45 to-transparent shadow-[0_0_40px_rgba(255,255,255,.28)]" />

        <div className="relative mx-auto w-full max-w-[1500px] text-center">
          <p className="mb-9 text-xs uppercase tracking-[0.48em] text-[#d7c7a2]">
            One question
          </p>

          <h1 className="mx-auto max-w-6xl font-serif text-5xl font-light leading-[0.98] tracking-[-0.055em] text-white text-balance sm:text-7xl lg:text-[7.4rem]">
            Every board makes assumptions.
          </h1>

          <p className="mx-auto mt-8 max-w-5xl font-serif text-4xl font-light leading-[1.02] tracking-[-0.045em] text-[#d7c7a2] text-balance sm:text-6xl lg:text-[5.3rem]">
            The question is whether they know which ones.
          </p>

          <div className="mx-auto mt-12 h-px w-24 bg-[#d7c7a2]/60" />

          <p className="mx-auto mt-9 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Most leadership teams already have the information. The challenge is knowing whether it supports the decisions they are making.
          </p>

          <a
            href="#question"
            className="mt-11 inline-flex items-center gap-8 border-b border-[#d7c7a2]/70 pb-3 text-sm text-white transition hover:border-white hover:text-[#d7c7a2]"
          >
            Consider the question <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section id="question" className="relative border-y border-white/[0.08] bg-black px-6 py-28 md:px-12 md:py-40">
        <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_20%_50%,rgba(215,199,162,.09),transparent_34%)]" />
        <div className="relative mx-auto max-w-[1300px]">
          <p className="mb-10 text-xs uppercase tracking-[0.42em] text-[#d7c7a2]">
            If your board asked tomorrow
          </p>

          <blockquote className="max-w-6xl font-serif text-5xl font-light leading-[1.04] tracking-[-0.045em] text-white text-balance md:text-7xl">
            “What assumptions are we making about our estate that we cannot currently prove?”
          </blockquote>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-white/65">
            Would there be one document that gave your leadership team a clear, evidence-based answer?
          </p>
        </div>
      </section>

      <section className="relative bg-[#050505] px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.42em] text-[#d7c7a2]">
              Information is not visibility
            </p>
            <h2 className="font-serif text-5xl font-light leading-[1.03] tracking-[-0.045em] text-white text-balance md:text-7xl">
              The information usually already exists.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
              The difficulty is seeing whether separate records, forecasts and judgements tell one coherent strategic story.
            </p>
          </div>

          <div className="grid gap-px border border-white/[0.1] bg-white/[0.08] sm:grid-cols-2">
            {informationSources.map((item, index) => (
              <div key={item} className="min-h-44 bg-black p-8 md:p-10">
                <p className="text-xs tracking-[0.3em] text-white/25">0{index + 1}</p>
                <p className="mt-12 font-serif text-2xl font-light text-white/85">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/[0.08] bg-black px-6 py-28 md:px-12 md:py-44">
        <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_65%_50%,rgba(255,255,255,.07),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-[1450px] gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.42em] text-[#d7c7a2]">
              Before you view the sample
            </p>
            <h2 className="font-serif text-5xl font-light leading-[1.03] tracking-[-0.045em] text-white text-balance md:text-7xl">
              Do not ask whether you need another report.
            </h2>
            <p className="mt-8 max-w-2xl font-serif text-3xl font-light leading-tight tracking-[-0.025em] text-[#d7c7a2] md:text-4xl">
              Ask whether your board would make better decisions with the visibility contained within it.
            </p>

            <ReportLink
              source={source}
              className="mt-12 inline-flex items-center gap-8 border-b border-[#d7c7a2]/70 pb-3 text-sm text-white transition hover:border-white hover:text-[#d7c7a2]"
            >
              View the sample Executive Review <span aria-hidden="true">→</span>
            </ReportLink>

            <div className="mt-12 flex flex-wrap gap-x-9 gap-y-4 border-t border-white/[0.09] pt-8 text-xs uppercase tracking-[0.3em] text-white/38">
              <span>No software</span>
              <span>No implementation</span>
              <span>No site visit</span>
              <span>No contract</span>
            </div>
          </div>

          <ReportPreview />
        </div>
      </section>

      <section className="relative bg-[#030303] px-6 py-28 text-center md:px-12 md:py-44">
        <div className="mx-auto max-w-5xl">
          <p className="mb-9 text-xs uppercase tracking-[0.42em] text-[#d7c7a2]">
            One final question
          </p>
          <h2 className="font-serif text-5xl font-light leading-[1.03] tracking-[-0.045em] text-white text-balance md:text-7xl">
            If your Chair asked for this report next Monday, how long would it take your organisation to produce it?
          </h2>
          <p className="mx-auto mt-9 max-w-2xl text-lg leading-relaxed text-white/62">
            If the answer is not obvious, that is precisely why Prism exists.
          </p>
          <a
            href="mailto:matthew@prismgroup.uk?subject=Executive%20Estate%20Intelligence%20Review"
            className="mt-11 inline-flex items-center gap-8 border-b border-[#d7c7a2]/70 pb-3 text-sm text-white transition hover:border-white hover:text-[#d7c7a2]"
          >
            Ask a question about the Review <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <footer className="border-t border-white/[0.07] bg-black px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>Prism — Executive Visibility</p>
          <p>Better visibility leads to better decisions.</p>
        </div>
      </footer>
    </main>
  )
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-black/45 px-6 py-5 backdrop-blur-xl md:px-12">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        <a href="/" className="text-xs font-medium tracking-[0.62em] text-white/88">
          PRISM
        </a>
        <div className="flex items-center gap-6">
          <a
            href="tel:+442038741866"
            className="hidden text-sm tracking-[0.08em] text-white/60 transition hover:text-white sm:inline-block"
          >
            0203 874 1866
          </a>
          <a
            href="mailto:matthew@prismgroup.uk"
            className="border border-white/18 px-5 py-3 text-xs text-white/90 transition hover:border-white/50 hover:bg-white hover:text-black"
          >
            Contact Prism →
          </a>
        </div>
      </div>
    </header>
  )
}

function ReportPreview() {
  return (
    <div className="relative mx-auto w-full max-w-2xl py-10 lg:py-20">
      <div className="absolute inset-10 bg-[#d7c7a2]/10 blur-[90px]" />
      <div className="relative mx-auto aspect-[0.72] w-[72%] rotate-[3deg] border border-white/20 bg-[#ece7dc] p-7 text-[#161616] shadow-[0_45px_120px_rgba(0,0,0,.75)] transition duration-700 hover:rotate-0 sm:p-10">
        <div className="flex items-start justify-between border-b border-black/20 pb-6">
          <span className="text-[0.58rem] font-medium tracking-[0.48em]">PRISM</span>
          <span className="text-[0.48rem] uppercase tracking-[0.25em] text-black/45">Executive Review</span>
        </div>
        <div className="mt-10 h-2 w-2/3 bg-black/75" />
        <div className="mt-3 h-2 w-5/6 bg-black/20" />
        <div className="mt-2 h-2 w-1/2 bg-black/20" />
        <div className="mt-12 grid grid-cols-2 gap-4">
          <div className="border border-black/15 p-4">
            <div className="h-1.5 w-1/2 bg-black/55" />
            <div className="mt-7 font-serif text-3xl">£2.4m</div>
            <div className="mt-2 h-1.5 w-4/5 bg-black/15" />
          </div>
          <div className="border border-black/15 p-4">
            <div className="h-1.5 w-2/3 bg-black/55" />
            <div className="mt-7 font-serif text-3xl">17</div>
            <div className="mt-2 h-1.5 w-3/4 bg-black/15" />
          </div>
        </div>
        <div className="mt-7 border-t border-black/15 pt-6">
          {[82, 64, 91, 48].map((width) => (
            <div key={width} className="mb-4">
              <div className="h-1.5 bg-black/15" style={{ width: `${width}%` }} />
              <div className="mt-2 h-1 w-full bg-black/[0.07]" />
            </div>
          ))}
        </div>
        <p className="absolute bottom-7 left-7 text-[0.48rem] uppercase tracking-[0.24em] text-black/38 sm:left-10">
          Better visibility leads to better decisions
        </p>
      </div>
    </div>
  )
}
