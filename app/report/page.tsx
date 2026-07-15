import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Review | Prism",
  description: "Read the sample Prism Executive Review.",
};

export default function ReportPage() {
  return (
    <main className="h-screen overflow-hidden bg-[#040404] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
          <a href="/" className="text-xs tracking-[0.62em] text-white">
            PRISM
          </a>

          <div className="flex items-center gap-6">
            <a
              href="tel:+442038741866"
              className="hidden text-sm text-white/60 transition hover:text-white md:block"
            >
              0203 874 1866
            </a>

            <a
              href="mailto:matthew@prismgroup.uk"
              className="border border-white/20 px-5 py-3 text-xs transition hover:bg-white hover:text-black"
            >
              Contact Prism →
            </a>
          </div>
        </div>
      </header>

      <section className="relative flex h-screen items-center overflow-hidden px-6 pt-20 md:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_45%,rgba(215,199,162,0.12),transparent_32%)]" />

        <div className="relative mx-auto grid w-full max-w-[1450px] gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-24">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#d7c7a2]">
              Before you open the review
            </p>

            <h1 className="font-serif text-5xl font-light leading-[0.96] tracking-[-0.05em] sm:text-7xl lg:text-[6rem]">
              Do not read it as
              <br />
              another report.
            </h1>

            <h2 className="mt-10 max-w-2xl font-serif text-3xl font-light leading-tight tracking-[-0.03em] text-[#d7c7a2] md:text-5xl">
              Read it as the document your board would want before committing
              money.
            </h2>

            <a
              href="/estate-intelligence-review.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-14 inline-flex items-center gap-8 border-b border-[#d7c7a2] pb-3 text-lg transition hover:text-[#d7c7a2]"
            >
              Read the Executive Review <span aria-hidden="true">→</span>
            </a>
          </div>

          <a
            href="/estate-intelligence-review.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read the Executive Review"
            className="group relative mx-auto block w-full max-w-[520px]"
          >
            <div className="absolute inset-8 bg-[#d7c7a2]/10 blur-[110px]" />

            <div className="relative rotate-[1.5deg] bg-[#ece6db] p-8 text-black shadow-[0_40px_130px_rgba(0,0,0,0.7)] transition duration-700 group-hover:rotate-0 sm:p-10">
              <div className="flex items-center justify-between border-b border-black/20 pb-6">
                <span className="text-[0.55rem] tracking-[0.45em]">
                  PRISM
                </span>

                <span className="text-[0.5rem] uppercase tracking-[0.3em] text-black/50">
                  Executive Review
                </span>
              </div>

              <h3 className="mt-10 font-serif text-5xl font-light leading-none sm:text-6xl">
                What the records imply.
              </h3>

              <p className="mt-7 text-[0.55rem] uppercase tracking-[0.25em] text-black/45">
                Finance · Estate condition · Compliance · Future pressure
              </p>

              <div className="mt-12 grid grid-cols-2 gap-5">
                <div className="border border-black/10 p-5">
                  <div className="h-2 w-16 bg-black/60" />
                  <div className="mt-8 font-serif text-4xl">£2.4m</div>
                  <div className="mt-4 h-2 w-4/5 bg-black/15" />
                </div>

                <div className="border border-black/10 p-5">
                  <div className="h-2 w-16 bg-black/60" />
                  <div className="mt-8 font-serif text-4xl">17</div>
                  <div className="mt-4 h-2 w-4/5 bg-black/15" />
                </div>
              </div>

              <div className="mt-10 space-y-4 border-t border-black/10 pt-8">
                <div className="h-2 w-full bg-black/15" />
                <div className="h-2 w-5/6 bg-black/15" />
                <div className="h-2 w-2/3 bg-black/15" />
                <div className="h-2 w-4/5 bg-black/15" />
                <div className="h-2 w-3/4 bg-black/15" />
              </div>

              <p className="mt-12 text-[0.5rem] uppercase tracking-[0.25em] text-black/35">
                Better visibility leads to better decisions
              </p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
