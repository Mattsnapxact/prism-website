// app/report/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Assumption Behind the Decision | Prism",
  description: "Executive Intelligence Review",
};

export default function ReportPage() {
  return (
    <main className="min-h-screen bg-[#040404] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="tracking-[0.6em] text-xs">PRISM</a>
          <div className="flex gap-6 items-center">
            <a href="tel:+442038741866" className="text-sm text-white/60">0203 874 1866</a>
            <a href="mailto:matthew@prismgroup.uk" className="border border-white/20 px-5 py-3 text-xs hover:bg-white hover:text-black transition">Contact →</a>
          </div>
        </div>
      </header>

      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl text-center">
          <p className="uppercase tracking-[0.45em] text-[#d7c7a2] text-xs">The Assumption Behind the Decision</p>

          <h1 className="mt-10 text-5xl md:text-8xl font-light leading-tight tracking-tight">
            Do not read this as another report.
          </h1>

          <h2 className="mt-10 text-3xl md:text-6xl font-light text-[#d7c7a2] leading-tight">
            Read it as the document your board would want before committing money.
          </h2>

          <a
            href="/estate-intelligence-review.pdf"
            target="_blank"
            className="inline-block mt-16 border-b border-[#d7c7a2] pb-2 text-lg hover:text-[#d7c7a2] transition"
          >
            Open the sample Executive Review →
          </a>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-6">
        <h2 className="max-w-5xl text-center text-5xl md:text-8xl font-light leading-tight">
          Every financial decision rests on an assumption.
        </h2>
      </section>

      <section className="min-h-screen flex items-center justify-center px-6 bg-black">
        <h2 className="max-w-5xl text-center text-5xl md:text-8xl font-light leading-tight text-[#d7c7a2]">
          The dangerous ones are the assumptions nobody realises they're making.
        </h2>
      </section>

      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl text-center">
          <p className="uppercase tracking-[0.4em] text-xs text-[#d7c7a2]">If your board asked tomorrow...</p>

          <h2 className="mt-10 text-5xl md:text-8xl font-light leading-tight">
            Which assumptions are shaping our financial decisions?
          </h2>

          <h3 className="mt-10 text-3xl md:text-6xl font-light text-[#d7c7a2]">
            What evidence supports them?
          </h3>
        </div>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#070707]">
        <div className="w-full max-w-md rounded-sm bg-[#ece7dc] shadow-2xl p-8 aspect-[0.72]">
          <div className="border-b border-black/20 pb-4 text-black tracking-[0.45em] text-xs">PRISM</div>
          <div className="mt-10 h-2 w-2/3 bg-black/80"/>
          <div className="mt-3 h-2 w-full bg-black/15"/>
          <div className="mt-2 h-2 w-3/4 bg-black/15"/>
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="border border-black/10 p-4">
              <div className="text-black text-3xl">£2.4m</div>
            </div>
            <div className="border border-black/10 p-4">
              <div className="text-black text-3xl">17</div>
            </div>
          </div>
        </div>

        <h2 className="mt-20 text-center text-5xl md:text-7xl font-light">
          The records already exist.
        </h2>

        <p className="mt-8 text-3xl text-[#d7c7a2] text-center">
          The question is what they imply.
        </p>
      </section>

      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-light">
            Most organisations don't need more information.
          </h2>

          <h3 className="mt-12 text-4xl md:text-6xl text-[#d7c7a2] font-light">
            They need better visibility.
          </h3>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center px-6 border-t border-white/10">
        <div className="text-center max-w-5xl">
          <h2 className="text-5xl md:text-8xl font-light">
            If your Chair asked for this report next Monday...
          </h2>

          <h3 className="mt-10 text-4xl md:text-6xl text-[#d7c7a2] font-light">
            Could you produce it?
          </h3>

          <a
            href="/estate-intelligence-review.pdf"
            target="_blank"
            className="inline-block mt-16 border-b border-[#d7c7a2] pb-2 text-xl hover:text-[#d7c7a2]"
          >
            Open the sample Executive Review →
          </a>

          <p className="mt-16 text-white/40 tracking-[0.25em] uppercase text-xs">
            No software • No implementation • No contract
          </p>
        </div>
      </section>
    </main>
  );
}
