import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { cases } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from Little Lions Head: Paintsmiths, Dekro, and Xaref. Software and AI an organisation can run.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        kicker="Case studies"
        title="The work."
        lede="Three systems. Store operations, a head office that sees every complaint, and a platform for how the models talk about a brand."
      />
      <div className="bg-paper text-sumi">
        <div className="shell border-b border-sumi/15 py-4">
          {cases.map((item) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="group grid grid-cols-1 gap-5 border-t border-sumi/15 py-12 md:grid-cols-[5rem_minmax(0,0.8fr)_minmax(0,1fr)] md:gap-10 md:py-16"
            >
              <p className="kicker text-stone">{item.number}</p>
              <div>
                <p className="kicker text-stone">
                  {item.client} — {item.sector}
                </p>
                <h2 className="mt-4 text-4xl font-light tracking-[-0.04em] md:text-5xl">
                  {item.title}
                </h2>
              </div>
              <p className="max-w-prose text-base leading-8 text-stone md:pt-8">
                {item.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="shell py-16">
        <p className="max-w-md text-base leading-7 text-mist">
          If the work in front of you looks like one of these, start with a short brief.
        </p>
        <Link href="/start" className="action mt-6 inline-flex">
          Start a project
        </Link>
      </div>
    </>
  );
}
