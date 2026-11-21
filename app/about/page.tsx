import type { Metadata } from "next";
import Link from "next/link";
import { OwnedField } from "@/components/owned-field";
import { PageHero } from "@/components/page-hero";
import { line } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Little Lions Head builds software and AI for intelligent organisations. A Cape Town studio for data, agents, and tools the organisation owns.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="The studio"
        title="Owned intelligence."
        lede="Little Lions Head is the peak above Cape Town. The studio takes its name from that outline. The practice is the software and AI an organisation can own."
      />

      <section className="shell grid items-center gap-12 pb-20 md:grid-cols-2 md:pb-28">
        <OwnedField />
        <div>
          <p className="kicker text-muted">Cape Town</p>
          <p className="mt-5 text-lg font-light leading-relaxed text-mist">
            We are engineers. The practice is data platforms, AI systems, and
            the tools a team uses to decide. We stay small so the people you
            meet are the people who build the work.
          </p>
          <p className="mt-5 text-lg font-light leading-relaxed text-mist">
            The studio is in Cape Town. The work travels. Knowledge should stay
            with the organisation that earned it, and the systems around it
            should be able to move.
          </p>
          <Link href="/start" className="action mt-8 inline-flex">
            Start a project
          </Link>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="shell py-16 md:py-24">
          <p className="kicker text-muted">How we work</p>
          <h2 className="section-title mt-5 max-w-[14ch]">The same line, every system.</h2>
          <ol className="mt-12 grid border-t border-rule md:grid-cols-4">
            {line.map((step) => (
              <li
                key={step.number}
                className="border-b border-rule py-8 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"
              >
                <p className="kicker text-sun">{step.number}</p>
                <h3 className="mt-6 text-2xl font-light tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-mist">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
