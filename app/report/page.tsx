import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Assumption Behind the Decision | Prism",
  description: "Executive Intelligence Review",
};

export default function ReportPage() {
  return (
    <main className="bg-[#030303] text-white overflow-hidden">

      {/* ==========================================
          HEADER
      =========================================== */}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-5">

          <a
            href="/"
            className="text-xs tracking-[0.62em] text-white"
          >
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
              Contact →
            </a>

          </div>

        </div>
      </header>

      {/* ==========================================
          HERO
      =========================================== */}

      <section className="relative flex min-h-screen items-center px-8">

        <div className="absolute inset-0">

          <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[160px]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_78%)]" />

        </div>

        <div className="relative mx-auto grid max-w-[1500px] gap-24 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#d7c7a2]">

              THE ASSUMPTION BEHIND THE DECISION

            </p>

            <h1 className="font-light leading-[0.95] tracking-[-0.05em] text-white text-6xl md:text-8xl">

              Do not read this as another report.

            </h1>

            <h2 className="mt-10 text-3xl font-light leading-tight text-[#d7c7a2] md:text-5xl">

              Read it as the document your board would want before committing money.

            </h2>

            <a
              href="/estate-intelligence-review.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-16 inline-flex border-b border-[#d7c7a2] pb-2 text-lg transition hover:text-[#d7c7a2]"
            >
              Open the sample Executive Review →
            </a>

          </div>

          {/* REPORT MOCKUP */}

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-[#d7c7a2]/10 blur-[120px]" />

            <div className="relative rotate-3 bg-[#ece6db] p-10 shadow-[0_40px_140px_rgba(0,0,0,.65)] transition duration-700 hover:rotate-0">

              <div className="border-b border-black/20 pb-6">

                <p className="text-[0.55rem] tracking-[0.45em] text-black">

                  PRISM

                </p>

              </div>

              <div className="mt-10 h-2 w-2/3 bg-black/80" />
              <div className="mt-3 h-2 w-full bg-black/15" />
              <div className="mt-2 h-2 w-4/5 bg-black/15" />

              <div className="mt-12 grid grid-cols-2 gap-6">

                <div className="border border-black/10 p-6">

                  <div className="text-5xl text-black">

                    £2.4m

                  </div>

                </div>

                <div className="border border-black/10 p-6">

                  <div className="text-5xl text-black">

                    17

                  </div>

                </div>

              </div>

              <div className="mt-10 space-y-4">

                <div className="h-2 bg-black/15" />

                <div className="h-2 w-5/6 bg-black/15" />

                <div className="h-2 w-3/4 bg-black/15" />

                <div className="h-2 w-2/3 bg-black/15" />

                <div className="h-2 w-4/5 bg-black/15" />

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ==========================================
          SECTION 2
      =========================================== */}

      <section className="flex min-h-screen items-center justify-center px-8">

        <div className="mx-auto max-w-6xl text-center">

          <h2 className="text-6xl font-light leading-[1.05] tracking-[-0.05em] text-white md:text-8xl">

            Every financial decision
            <br />
            rests on an assumption.

          </h2>

        </div>

      </section>

      {/* ==========================================
          SECTION 3
      =========================================== */}

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-8">

        <div className="absolute inset-0">

          <div className="absolute right-0 top-1/2 h-[900px] w-[900px] -translate-y-1/2 rounded-full bg-[#d7c7a2]/10 blur-[160px]" />

        </div>

        <div className="relative mx-auto max-w-6xl text-center">

          <h2 className="text-6xl font-light leading-[1.05] tracking-[-0.05em] text-[#d7c7a2] md:text-8xl">

            The dangerous ones
            <br />
            are the assumptions
            <br />
            nobody realises
            <br />
            they're making.

          </h2>

        </div>

      </section>

      {/* ==========================================
          SECTION 4
      =========================================== */}

      <section className="flex min-h-screen items-center justify-center px-8">

        <div className="mx-auto max-w-6xl text-center">

          <p className="mb-10 text-xs uppercase tracking-[0.45em] text-[#d7c7a2]">

            IF YOUR BOARD ASKED TOMORROW...

          </p>

          <h2 className="text-6xl font-light leading-[1.02] tracking-[-0.05em] text-white md:text-8xl">

            Which assumptions
            <br />
            are shaping our
            <br />
            financial decisions?

          </h2>

          <h3 className="mt-12 text-4xl font-light leading-tight text-[#d7c7a2] md:text-6xl">

            What evidence
            <br />
            supports them?

          </h3>

        </div>

      </section>

      {/* ==========================================
          SECTION 5
      =========================================== */}

      <section className="flex min-h-screen items-center justify-center border-y border-white/10 bg-[#050505] px-8">

        <div className="mx-auto max-w-6xl text-center">

          <h2 className="text-6xl font-light leading-[1.02] tracking-[-0.05em] text-white md:text-8xl">

            The records
            <br />
            already exist.

          </h2>

          <h3 className="mt-12 text-4xl font-light leading-tight text-[#d7c7a2] md:text-6xl">

            The question
            <br />
            is what they imply.

          </h3>

        </div>

      </section>
            {/* ==========================================
          FINAL SECTION
      =========================================== */}

      <section className="flex min-h-screen items-center justify-center px-8">

        <div className="mx-auto max-w-6xl text-center">

          <h2 className="text-6xl font-light leading-[1.02] tracking-[-0.05em] text-white md:text-8xl">

            Most organisations
            <br />
            don't need
            <br />
            more information.

          </h2>

          <h3 className="mt-12 text-4xl font-light leading-tight text-[#d7c7a2] md:text-6xl">

            They need
            <br />
            better visibility.

          </h3>

        </div>

      </section>

      {/* ==========================================
          CLOSING SECTION
      =========================================== */}

      <section className="flex min-h-screen items-center justify-center border-t border-white/10 px-8">

        <div className="mx-auto max-w-6xl text-center">

          <h2 className="text-6xl font-light leading-[1.02] tracking-[-0.05em] text-white md:text-8xl">

            If your Chair
            <br />
            asked for this report
            <br />
            next Monday...

          </h2>

          <h3 className="mt-12 text-5xl font-light leading-tight text-[#d7c7a2] md:text-7xl">

            Could you
            <br />
            produce it?

          </h3>

          <a
            href="/estate-intelligence-review.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-20 inline-flex border-b border-[#d7c7a2] pb-2 text-2xl transition hover:text-[#d7c7a2]"
          >
            Open the sample Executive Review →
          </a>

          <p className="mt-20 text-xs uppercase tracking-[0.35em] text-white/40">

            No software &nbsp;&nbsp;•&nbsp;&nbsp;
            No implementation &nbsp;&nbsp;•&nbsp;&nbsp;
            No contract

          </p>

        </div>

      </section>

    </main>
  );
}
