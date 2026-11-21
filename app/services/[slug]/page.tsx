import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getService, services } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  return (
    <Suspense fallback={<ServiceFallback />}>
      <ServiceBody params={params} />
    </Suspense>
  );
}

function ServiceFallback() {
  return (
    <div className="shell pb-24 pt-36 md:pt-44" aria-hidden>
      <p className="kicker text-muted">Services</p>
      <div className="mt-6 h-24 max-w-md bg-white/5" />
    </div>
  );
}

async function ServiceBody({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = services.findIndex((item) => item.slug === service.slug);
  const next = services[(index + 1) % services.length];

  return (
    <>
      <header className="shell pb-12 pt-36 md:pt-44">
        <p className="kicker text-muted">
          {service.number} / 05 — Services
        </p>
        <h1 className="display mt-6">{service.title}</h1>
        <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-mist md:text-xl">
          {service.lede}
        </p>
      </header>

      <div className="shell grid gap-12 pb-20 md:grid-cols-[minmax(0,1fr)_280px] md:pb-28">
        <div className="border-b border-rule">
          {service.points.map((point) => (
            <article key={point.label} className="grid gap-3 border-t border-rule py-7 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8">
              <h2 className="text-lg font-light tracking-[-0.03em]">{point.label}</h2>
              <p className="text-sm leading-7 text-mist">{point.body}</p>
            </article>
          ))}
        </div>

        <aside className="h-fit border border-rule p-6 md:sticky md:top-28">
          <p className="kicker text-muted">In the room</p>
          <ul className="mt-5 space-y-3">
            {service.includes.map((item) => (
              <li key={item} className="border-t border-rule pt-3 text-sm font-light">
                {item}
              </li>
            ))}
          </ul>
          <Link href={`/start?interest=${encodeURIComponent(service.title)}`} className="action mt-8 inline-flex">
            Start with {service.title}
          </Link>
        </aside>
      </div>

      <div className="shell flex items-center justify-between border-t border-rule py-8">
        <Link href="/services" className="kicker text-muted hover:text-ink">
          All services
        </Link>
        <Link href={`/services/${next.slug}`} className="kicker text-ink hover:text-sun">
          Next — {next.title}
        </Link>
      </div>
    </>
  );
}
