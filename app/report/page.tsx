import type { Metadata } from 'next'
import { ReportLink } from './report-link'

export const metadata: Metadata = {
  title: 'The Assumption Behind the Decision | Prism',
  description:
    'A question for leadership teams making long-term estate and financial decisions from fragmented information.',
}

type ReportPageProps = {
  searchParams: Promise<{ source?: string }>
}

export default async function ReportPage({ searchParams }: ReportPageProps) {
  const { source } = await searchParams

  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-[#f4f0e8] selection:bg-[#d7c7a2] selection:text-black">
      <Header />

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 md:px-12">
        <div className="absolute inset-0 [background:radial-gradient(circle_at_72%_46%,rgba(215,199,162,.12),transparent_24%),radial-gradient(circle_at_45%_48%,rgba(255,255,255,.045),transparent_38%)]" />
        <div className="absolute left-[55%] top-1/2 h-px w-[88vw] -translate-x-1/2 -rotate-[7deg] bg-gradient-to-r from-transparent via-[#d7c7a2]/55 to-transparent shadow-[0_0_42px_rgba(215,199,162,.32)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#030303]" />

        <div className="relative mx-auto w-full max-w-[1500px]">
          <p className="mb-10 text-xs uppercase tracking-[0.48em] text-[#d7c7a2]">
            A question for the board
          </p>

          <h1 className="max-w-6xl font-serif text-[3.7rem] font-light leading-[0.92] tracking-[-0.06em] text-white text-balance sm:text-7xl lg:text-[8.7rem]">
            Every decision rests on an assumption.
          </h1>

          <p className="mt-9 max-w-4xl font-serif text-3xl font-light leading-[1.04] tracking-[-0.04em] text-[#d7c7a2] text-balance sm:text-5xl lg:text-[4.8rem]">
            The dangerous ones are the assumptions nobody can see.
          </p>

          <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
            <a
              href="#question"
              className="inline-flex w-fit items-center gap-8 border-b border-[#d7c7a2]/70 pb-3 text-sm text-white transition hover:border-white hover:text-[#d7c7a2]"
            >
              See the question <span aria-hidden="true">↓</span>
            </a>
            <p className="max-w-md text-sm leading-relaxed text-white/48">
              No software. No site visit. No new system. Only a clearer reading of the information you already hold.
            </p>
          </div>
        </div>
      </section>

      <section id="question" className="relative flex min-h-[82vh] items-center border-y border-white/[0.08] bg-black px-6 py-28 md:px-12 md:py-40">
        <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_18%_50%,rgba(215,199,162,.1),transparent_34%)]" />
        <div className="relative mx-auto w-full max-w-[1350px]">
          <p className="mb-10 text-xs uppercase tracking-[0.42em] text-[#d7c7a2]">
            If your Chair asked tomorrow
          </p>

          <blockquote className="max-w-7xl font-serif text-5xl font-light leading-[1.01] tracking-[-0.05em] text-white text-balance md:text-7xl lg:text-[6.8rem]">
            “Which assumptions about our estate are shaping the financial plan — and what evidence supports them?”
          </blockquote>

          <div className="mt-14 grid gap-10 border-t border-white/[0.1] pt-10 md:grid-cols-2 md:gap-20">
            <p className="max-w-xl text-lg leading-relaxed text-white/68">
              Could your organisation answer with one coherent document, rather than a collection of systems, spreadsheets and professional judgements?
            </p>
            <p className="max-w-xl font-serif text-3xl font-light leading-tight tracking-[-0.025em] text-[#d7c7a2] md:text-4xl">
              Having information is not the same as being able to defend a decision.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050505] px-6 py-28 md:px-12 md:py-44">
        <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_72%_48%,rgba(255,255,255,.07),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-[1450px] gap-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="mb-9 text-xs uppercase tracking-[0.42em] text-[#d7c7a2]">
              The sample Executive Review
            </p>

            <h2 className="font-serif text-5xl font-light leading-[1.02] tracking-[-0.05em] text-white text-balance md:text-7xl">
              Do not read it as another report.
            </h2>

            <p className="mt-8 max-w-2xl font-serif text-3xl font-light leading-tight tracking-[-0.03em] text-[#d7c7a2] md:text-4xl">
              Read it as the document your board would want before committing money.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/62">
              Prism brings together the records already held across finance, estates, compliance and operations, then identifies what those records imply for the decisions ahead.
            </p>

            <ReportLink
              source={source}
              className="mt-12 inline-flex items-center gap-8 border-b border-[#d7c7a2]/70 pb-3 text-sm text-white transition hover:border-white hover:text-[#d7c7a2]"
            >
              Open the sample Review <span aria-hidden="true">→</span>
            </ReportLink>

            <div className="mt-12 flex flex-wrap gap-x-9 gap-y-4 border-t border-white/[0.09] pt-8 text-[0.68rem] uppercase tracking-[0.32em] text-white/38">
              <span>Board-ready</span>
              <span>Evidence-led</span>
              <span>Independent</span>
              <span>Produced from existing records</span>
            </div>
          </div>

          <ReportPreview source={source} />
        </div>
      </section>

      <section className="relative flex min-h-[78vh] items-center border-t border-white/[0.08] bg-black px-6 py-28 md:px-12 md:py-44">
        <div className="absolute inset-0 opacity-55 [background:radial-gradient(circle_at_50%_35%,rgba(215,199,162,.09),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl text-center">
          <p className="mb-10 text-xs uppercase tracking-[0.42em] text-[#d7c7a2]">
            The question that remains
          </p>

          <h2 className="font-serif text-5xl font-light leading-[1.01] tracking-[-0.05em] text-white text-balance md:text-7xl lg:text-[6.5rem]">
            How much of your board’s confidence comes from evidence — and how much comes from assumption?
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-white/58">
            Prism exists to make that distinction visible before the decision has already been made.
          </p>

          <a
            href="mailto:matthew@prismgroup.uk?subject=Executive%20Estate%20Intelligence%20Review"
            className="mt-12 inline-flex items-center gap-8 border-b border-[#d7c7a2]/70 pb-3 text-sm text-white transition hover:border-white hover:text-[#d7c7a2]"
          >
            Ask Matthew a question <span aria-hidden="true">→</span>
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

function ReportPreview({ source }: { source?: string }) {
  return (
    <ReportLink source={source} className="group relative mx-auto block w-full max-w-2xl py-10 lg:py-20" label="Open the sample Executive Review">
      <div className="absolute inset-10 bg-[#d7c7a2]/10 blur-[100px] transition duration-700 group-hover:bg-[#d7c7a2]/16" />
      <div className="absolute left-[9%] top-[12%] aspect-[0.72] w-[70%] -rotate-[7deg] border border-white/10 bg-white/[0.035]" />
      <div className="relative mx-auto aspect-[0.72] w-[74%] rotate-[2.5deg] border border-white/20 bg-[#ece7dc] p-7 text-[#161616] shadow-[0_55px_140px_rgba(0,0,0,.8)] transition duration-700 group-hover:rotate-0 group-hover:scale-[1.015] sm:p-10">
        <div className="flex items-start justify-between border-b border-black/20 pb-6">
          <span className="text-[0.58rem] font-medium tracking-[0.48em]">PRISM</span>
          <span className="text-[0.48rem] uppercase tracking-[0.25em] text-black/45">Executive Review</span>
        </div>
        <p className="mt-10 font-serif text-3xl font-light leading-none tracking-[-0.04em] sm:text-5xl">
          What the records imply.
        </p>
        <p className="mt-4 max-w-[80%] text-[0.55rem] uppercase leading-relaxed tracking-[0.2em] text-black/42">
          Finance · Estate condition · Compliance · Future pressure
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4">
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
      <p className="mt-8 text-center text-xs uppercase tracking-[0.32em] text-white/35 transition group-hover:text-[#d7c7a2]">
        Open the sample Review →
      </p>
    </ReportLink>
  )
}
