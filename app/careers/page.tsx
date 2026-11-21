import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { roles, studio } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Little Lions Head hires rarely. Data, AI, and software engineers who build systems an organisation can own.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title="Build the system."
        lede="We hire rarely, and only when the work needs another pair of hands. Data, AI, and the software around them. If this is how you already work, write to us."
      />
      <div className="shell border-b border-rule pb-8">
        {roles.map((role, index) => (
          <article
            key={role.title}
            className="grid grid-cols-1 gap-4 border-t border-rule py-8 md:grid-cols-[4.5rem_minmax(0,0.7fr)_minmax(0,1fr)_auto] md:items-center md:gap-8"
          >
            <p className="kicker text-muted">0{index + 1}</p>
            <h2 className="text-3xl font-light tracking-[-0.03em] md:text-4xl">{role.title}</h2>
            <p className="text-sm leading-7 text-mist">{role.body}</p>
            <Link
              href={`/start?interest=${encodeURIComponent(role.title)}`}
              className="kicker text-ink hover:text-sun"
            >
              Write
            </Link>
          </article>
        ))}
      </div>
      <div className="shell py-14">
        <p className="max-w-lg text-base leading-7 text-mist">
          Nothing here is a perfect fit? Send a note anyway, with the work you
          want to be doing.{" "}
          <a className="text-ink underline decoration-white/30 underline-offset-4" href={`mailto:${studio.email}`}>
            {studio.email}
          </a>
        </p>
      </div>
    </>
  );
}
