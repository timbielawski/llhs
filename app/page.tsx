import Link from "next/link";
import { ScanSpecimen } from "@/components/scan-specimen";
import { cases, line, qualities, services } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="shell grid grid-cols-1 gap-10 pb-16 pt-32 md:gap-16 md:pb-24 md:pt-40 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.35fr)] lg:grid-rows-[auto_auto] lg:[grid-template-areas:'title_title''copy_specimen']">
        <div className="lg:[grid-area:title]">
          <p className="kicker text-muted">Software, data and AI</p>
          <h1 className="display mt-6">
            <span className="block">We build</span>
            <span className="block">intelligent</span>
            <span className="block">organisations.</span>
          </h1>
        </div>

        <div className="lg:[grid-area:copy]">
          <p className="max-w-[34ch] text-lg font-light leading-relaxed text-mist md:text-[1.35rem]">
            Little Lions Head builds the software and AI an organisation runs
            on. Data platforms, agents, and tools it owns.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
            <a href="#line" className="action">
              Explore the practice
            </a>
            <Link href="/start" className="kicker text-muted hover:text-ink">
              Start a project
            </Link>
          </div>
          <ul className="mt-12 grid max-w-sm grid-cols-2 gap-y-3">
            {qualities.map((quality) => (
              <li key={quality.title} className="kicker text-muted">
                {quality.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 lg:[grid-area:specimen]">
          <ScanSpecimen />
        </div>
      </section>

      <section className="max-w-full overflow-hidden border-y border-rule py-6" aria-hidden>
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, copy) => (
            <p
              key={copy}
              className="px-4 text-[clamp(2rem,5vw,4.5rem)] font-thin uppercase leading-none tracking-[-0.045em] text-ink"
            >
              Ground it. Govern it. Then decide. — Software and AI the
              organisation owns —{" "}
            </p>
          ))}
        </div>
      </section>

      <nav className="shell flex flex-wrap gap-x-8 border-b border-rule py-4" aria-label="On this page">
        {[
          ["01", "The line", "#line"],
          ["02", "The practice", "#practice"],
          ["03", "Case studies", "#work"],
          ["04", "The studio", "#studio"],
        ].map(([number, label, href]) => (
          <a key={href} href={href} className="kicker inline-flex items-center gap-3 py-2 text-mist hover:text-ink">
            <span className="text-muted">{number}</span>
            {label}
          </a>
        ))}
      </nav>

      <section id="line" className="shell py-20 md:py-28">
        <p className="kicker text-muted">01 — How the work moves</p>
        <h2 className="section-title mt-5 max-w-[12ch]">From source to decision.</h2>
        <p className="mt-6 max-w-md text-base leading-7 text-mist">
          Four passes, from a raw source to something the organisation can act
          on. The same line for a platform, a tool, or a system we keep running.
        </p>
        <ol className="mt-12 grid border-t border-rule md:grid-cols-4">
          {line.map((step) => (
            <li
              key={step.number}
              className="border-b border-rule py-8 pr-6 last:border-b-0 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"
            >
              <p className="kicker text-sun">{step.number}</p>
              <h3 className="mt-8 text-3xl font-light tracking-[-0.03em]">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-mist">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="practice" className="shell py-8 md:py-16">
        <p className="kicker text-muted">02 — What we build</p>
        <h2 className="section-title mt-5">
          The practice.
        </h2>
        <div className="mt-12 border-b border-rule">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group grid grid-cols-1 gap-4 border-t border-rule py-8 md:grid-cols-[4.5rem_minmax(0,0.7fr)_minmax(0,1fr)] md:items-start md:gap-8 md:py-10"
            >
              <p className="kicker text-muted transition-colors group-hover:text-sun">
                {service.number}
              </p>
              <h3 className="text-4xl font-light tracking-[-0.04em] transition-colors group-hover:text-sun md:text-5xl">
                {service.title}
              </h3>
              <p className="max-w-prose text-sm leading-7 text-mist md:pt-2">
                {service.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section id="work" className="bg-paper text-sumi">
        <div className="shell py-20 md:py-28">
          <p className="kicker text-stone">03 — Case studies</p>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
            <h2 className="section-title">The work.</h2>
            <Link href="/work" className="paper-action">
              All work
            </Link>
          </div>
          <div className="mt-12 border-b border-sumi/15">
            {cases.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="group grid grid-cols-1 gap-4 border-t border-sumi/15 py-8 md:grid-cols-[4.5rem_minmax(0,0.8fr)_minmax(0,1fr)] md:gap-8 md:py-10"
              >
                <p className="kicker text-stone transition-colors group-hover:text-sumi">
                  {item.number}
                </p>
                <div>
                  <p className="kicker text-stone">{item.client}</p>
                  <h3 className="mt-3 text-3xl font-light tracking-[-0.03em] md:text-4xl">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-7 text-stone md:pt-6">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="studio" className="shell py-20 md:py-28">
        <p className="kicker text-muted">04 — The studio</p>
        <h2 className="section-title mt-5 max-w-[12ch]">
          Named for the mountain.
        </h2>
        <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-mist">
          Little Lions Head is the peak above Cape Town. The studio takes its
          name from that outline. The work is the software and AI an
          organisation can own: grounded, governed, and built to decide with.
        </p>
        <Link href="/about" className="action mt-8 inline-flex">
          About the studio
        </Link>
      </section>
    </>
  );
}
