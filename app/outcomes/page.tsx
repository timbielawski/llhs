import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { studies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Outcomes",
  description:
    "What Little Lions Head builds: trusted data platforms, AI tools the organisation owns, and one model for the decision.",
};

export default function OutcomesPage() {
  return (
    <>
      <PageHero
        kicker="The work"
        title="Outcomes."
        lede="Three results the practice is built to hold. A platform that can be trusted, tools the organisation owns, and decisions that share one model."
      />
      <div className="bg-paper text-sumi">
        <div className="shell border-b border-sumi/15 py-4">
          {studies.map((study) => (
            <article
              key={study.number}
              className="grid grid-cols-1 gap-5 border-t border-sumi/15 py-12 md:grid-cols-[5rem_minmax(0,0.8fr)_minmax(0,1fr)] md:gap-10 md:py-16"
            >
              <p className="kicker text-stone">{study.number}</p>
              <div>
                <p className="kicker text-stone">{study.kicker}</p>
                <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] md:text-5xl">
                  {study.title}
                </h2>
              </div>
              <p className="max-w-prose text-base leading-8 text-stone md:pt-8">{study.body}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="shell py-16">
        <p className="max-w-md text-base leading-7 text-mist">
          If one of these is the work in front of you, start with a short brief.
        </p>
        <Link href="/start" className="action mt-6 inline-flex">
          Start a project
        </Link>
      </div>
    </>
  );
}
