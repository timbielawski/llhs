import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Data engineering, AI engineering, AI tooling, analytics, and managed services from Little Lions Head Studios.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="The practice"
        title="Five practices."
        lede="Data platforms, production AI, the tools an organisation owns, the model its decisions share, and the work of keeping all of it running."
      />
      <div className="shell border-b border-rule pb-20">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group grid grid-cols-1 gap-4 border-t border-rule py-8 md:grid-cols-[4.5rem_minmax(0,0.7fr)_minmax(0,1fr)] md:items-start md:gap-8 md:py-10"
          >
            <p className="kicker text-muted group-hover:text-sun">{service.number}</p>
            <h2 className="text-4xl font-light tracking-[-0.04em] group-hover:text-sun md:text-5xl">
              {service.title}
            </h2>
            <p className="max-w-prose text-sm leading-7 text-mist md:pt-2">{service.summary}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
