import { HeroPrism } from '@/components/hero-prism'
import { RelationshipField } from '@/components/relationship-field'

const reviewEmail =
  'mailto:my@snapxact.com?subject=Executive%20Estate%20Intelligence%20Review&body=Hello%20Matthew%2C%0A%0AI%27d%20like%20to%20discuss%20an%20Executive%20Estate%20Intelligence%20Review.%0A%0AOrganisation%3A%0ARole%3A%0AWhat%20we%27re%20trying%20to%20understand%3A%0A'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroPrism />
      <SiteHeader />
      <Revelation />
      <ExecutiveVisibility />
      <EstateIntelligence />
      <RelationshipSection />
      <ReviewSection />
      <FinalCTA />
    </main>
  )
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/78 px-5 py-4 backdrop-blur-xl md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#top" className="font-sans text-xs font-medium tracking-[0.55em] text-foreground/92">
          PRISM
        </a>
        <nav className="hidden items-center gap-9 text-[0.72rem] text-foreground/55 md:flex">
          <a href="#visibility" className="transition hover:text-foreground">
            Executive Visibility
          </a>
          <a href="#estate" className="transition hover:text-foreground">
            Estate Intelligence
          </a>
          <a href="#review" className="transition hover:text-foreground">
            Review
          </a>
          <a
            href={reviewEmail}
            className="border border-line px-4 py-2 text-foreground/88 transition hover:border-foreground/30 hover:bg-foreground hover:text-background"
          >
            Request Review
          </a>
        </nav>
      </div>
    </header>
  )
}

function Revelation() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line px-6 py-28 md:px-10 md:py-40">
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <div>
          <p className="mb-8 text-xs uppercase tracking-[0.36em] text-muted-foreground">The premise</p>
          <h2 className="max-w-3xl font-serif text-5xl font-light leading-[1.04] tracking-[-0.035em] text-balance md:text-7xl">
            Nothing was missing.
            <br />
            Only unseen.
          </h2>
        </div>
        <div className="max-w-xl md:ml-auto">
          <p className="text-xl font-light leading-relaxed text-foreground/72 md:text-2xl">
            Most organisations already hold the signals they need. They sit across asset registers,
            condition data, compliance records, funding pressure, operational judgement and local
            knowledge.
          </p>
          <p className="mt-8 text-lg leading-relaxed text-foreground/52">
            Prism exists to reveal the relationships between them — so leadership teams can see the
            shape of decisions before they become problems.
          </p>
        </div>
      </div>
    </section>
  )
}

function ExecutiveVisibility() {
  return (
    <section id="visibility" className="relative border-b border-line px-6 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-7 text-xs uppercase tracking-[0.38em] text-muted-foreground">01</p>
            <h2 className="font-serif text-5xl font-light leading-none tracking-[-0.035em] md:text-7xl">
              Executive
              <br />
              Visibility
            </h2>
            <p className="mt-8 text-xs uppercase tracking-[0.42em] text-muted-foreground">
              A new executive discipline
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <Statement
              title="You cannot improve what you cannot see."
              body="Visibility is not another report. It is the ability to see what scattered information means when viewed as one connected system."
            />
            <Statement
              title="Interpretation changes behaviour."
              body="The value is not in collecting more data. The value is in making the relationships legible enough for confident leadership decisions."
            />
            <Statement
              title="The blind spot is rarely technical."
              body="Schools, trusts and public organisations often have systems. What they lack is an executive view that connects condition, risk, capital and consequence."
            />
            <Statement
              title="Prism reveals before it recommends."
              body="The review begins by making the existing picture visible. Only then can priorities, trade-offs and action become clearer."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Statement({ title, body }: { title: string; body: string }) {
  return (
    <article className="border-t border-line pt-6">
      <h3 className="font-serif text-3xl font-light leading-tight tracking-[-0.02em] text-foreground md:text-4xl">
        {title}
      </h3>
      <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/54">{body}</p>
    </article>
  )
}

function EstateIntelligence() {
  return (
    <section id="estate" className="relative overflow-hidden border-b border-line px-6 py-28 md:px-10 md:py-44">
      <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 [background:radial-gradient(circle_at_70%_40%,rgba(169,199,214,.28),transparent_38%)]" />
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.85fr_1.15fr] md:items-center">
        <div>
          <p className="mb-7 text-xs uppercase tracking-[0.38em] text-muted-foreground">02</p>
          <h2 className="font-serif text-5xl font-light leading-none tracking-[-0.035em] md:text-7xl">
            Estate
            <br />
            Intelligence
          </h2>
          <p className="mt-8 text-xs uppercase tracking-[0.42em] text-muted-foreground">
            The first application
          </p>
        </div>
        <div className="max-w-2xl">
          <p className="font-serif text-4xl font-light leading-tight tracking-[-0.025em] text-balance md:text-6xl">
            A focused review.
            <br />A wider perspective.
          </p>
          <div className="mt-10 h-px w-16 bg-foreground/35" />
          <p className="mt-10 text-xl font-light leading-relaxed text-foreground/68">
            Estate Intelligence is where Executive Visibility begins: a way of seeing the estate as
            one connected picture rather than a set of separate registers, issues and suppliers.
          </p>
          <p className="mt-7 text-lg leading-relaxed text-foreground/50">
            Condition, compliance, assets, funding and leadership judgement stop behaving like
            isolated fragments. They begin to show priorities, exposures and decisions forming
            beneath the surface.
          </p>
        </div>
      </div>
    </section>
  )
}

function RelationshipSection() {
  return (
    <section className="relative border-b border-line bg-[#f1f0eb] px-6 py-24 text-[#111] md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div className="order-2 md:order-1">
          <RelationshipField />
        </div>
        <div className="order-1 md:order-2 md:max-w-xl md:justify-self-end">
          <p className="mb-7 text-xs uppercase tracking-[0.38em] text-black/45">The review</p>
          <h2 className="font-serif text-5xl font-light leading-[1.03] tracking-[-0.035em] md:text-7xl">
            Relationships become visible.
          </h2>
          <div className="mt-9 h-px w-16 bg-black/35" />
          <p className="mt-9 text-lg leading-relaxed text-black/62">
            The Executive Estate Intelligence Review surfaces the connections that usually remain
            hidden: where risk touches funding, where compliance affects capital, and where local
            issues create strategic exposure.
          </p>
        </div>
      </div>
    </section>
  )
}

function ReviewSection() {
  return (
    <section id="review" className="border-b border-line px-6 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-[1fr_1fr] md:items-start">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.38em] text-muted-foreground">
              Executive Estate Intelligence Review
            </p>
            <h2 className="max-w-3xl font-serif text-5xl font-light leading-[1.02] tracking-[-0.035em] md:text-7xl">
              See the whole picture before the pressure arrives.
            </h2>
          </div>
          <div className="md:pt-20">
            <p className="text-xl font-light leading-relaxed text-foreground/70">
              A senior-level review designed for CEOs, CFOs, trustees, school leaders and business
              managers who need more than operational records.
            </p>
            <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
              {['No new system', 'No long contract', 'No sales theatre', 'One focused review'].map(
                (item) => (
                  <div key={item} className="bg-background p-6 text-sm text-foreground/68">
                    {item}
                  </div>
                ),
              )}
            </div>
            <a
              href={reviewEmail}
              className="mt-12 inline-flex items-center gap-6 border border-foreground/16 px-7 py-4 text-sm text-foreground transition hover:bg-foreground hover:text-background"
            >
              Request an Executive Review <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="px-6 py-28 text-center md:px-10 md:py-44">
      <p className="mx-auto max-w-4xl font-serif text-5xl font-light leading-[1.03] tracking-[-0.035em] text-balance md:text-7xl">
        Clarity changes decisions.
      </p>
      <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-foreground/56">
        Prism reveals what intelligent organisations overlook.
      </p>
      <a
        href={reviewEmail}
        className="mt-12 inline-flex items-center gap-6 border border-foreground/18 px-8 py-4 text-sm text-foreground transition hover:bg-foreground hover:text-background"
      >
        Request Your Review <span aria-hidden="true">→</span>
      </a>
      <div className="mx-auto mt-28 flex max-w-7xl items-center justify-between border-t border-line pt-8 text-xs text-foreground/38">
        <span className="tracking-[0.5em]">PRISM</span>
        <span>Executive Visibility</span>
      </div>
    </section>
  )
}
