import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { cases, getCase } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) return {};
  return {
    title: item.client,
    description: item.summary,
  };
}

export default function CasePage({ params }: { params: Promise<Params> }) {
  return (
    <Suspense fallback={<CaseFallback />}>
      <CaseBody params={params} />
    </Suspense>
  );
}

function CaseFallback() {
  return (
    <div className="shell pb-24 pt-36 md:pt-44" aria-hidden>
      <p className="kicker text-muted">Case study</p>
      <div className="mt-6 h-24 max-w-md bg-white/5" />
    </div>
  );
}

async function CaseBody({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  const index = cases.findIndex((entry) => entry.slug === item.slug);
  const next = cases[(index + 1) % cases.length];

  return (
    <>
      <header className="shell pb-12 pt-36 md:pt-44">
        <p className="kicker text-muted">
          {item.number} / 03 — {item.client}
        </p>
        <h1 className="display mt-6 max-w-[14ch]">{item.title}</h1>
        <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-mist md:text-xl">
          {item.lede}
        </p>
      </header>

      <div className="shell grid gap-12 pb-20 md:grid-cols-[minmax(0,1fr)_280px] md:pb-28">
        <div className="border-b border-rule">
          {item.points.map((point) => (
            <article
              key={point.label}
              className="grid gap-3 border-t border-rule py-7 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8"
            >
              <h2 className="text-lg font-light tracking-[-0.03em]">{point.label}</h2>
              <p className="text-sm leading-7 text-mist">{point.body}</p>
            </article>
          ))}
        </div>

        <aside className="h-fit border border-rule p-6 md:sticky md:top-28">
          <p className="kicker text-muted">{item.sector}</p>
          <p className="mt-4 text-2xl font-light tracking-[-0.03em]">{item.client}</p>
          <ul className="mt-6 space-y-3">
            {item.includes.map((entry) => (
              <li key={entry} className="border-t border-rule pt-3 text-sm font-light">
                {entry}
              </li>
            ))}
          </ul>
          <Link href="/start" className="action mt-8 inline-flex">
            Start a project
          </Link>
        </aside>
      </div>

      <div className="shell flex items-center justify-between border-t border-rule py-8">
        <Link href="/work" className="kicker text-muted hover:text-ink">
          All work
        </Link>
        <Link href={`/work/${next.slug}`} className="kicker text-ink hover:text-sun">
          Next — {next.client}
        </Link>
      </div>
    </>
  );
}
