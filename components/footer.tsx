"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { services, studio } from "@/lib/content";
import { Mark } from "@/components/logo";

export function Footer() {
  const pathname = usePathname();
  const showInvite = pathname !== "/start";

  return (
    <footer className="border-t border-rule">
      {showInvite ? (
        <div className="shell grid items-end gap-10 py-20 md:grid-cols-[minmax(0,1.4fr)_minmax(280px,420px)] md:py-28">
          <h2 className="section-title">
            <span className="block">Bring the problem.</span>
            <strong className="mt-2 block">Let&apos;s build it.</strong>
          </h2>
          <div>
            <p className="max-w-[34ch] text-sm leading-7 text-mist">
              Data, software, and AI. Tell us what the organisation needs to know,
              and what it should be able to do.
            </p>
            <Link
              href="/start"
              className="mt-6 flex items-center justify-between border border-ink px-5 py-4 text-sm font-light transition-colors hover:bg-ink hover:text-canvas"
            >
              Start a project
              <span aria-hidden className="text-lg">
                →
              </span>
            </Link>
          </div>
        </div>
      ) : null}

      <div className="border-t border-rule">
        <div className="shell grid gap-12 py-14 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
          <div>
            <Link href="/" aria-label={studio.name} className="relative block w-[168px]">
              <Mark className="h-auto w-full" />
              <span className="pointer-events-none absolute bottom-0 left-[58%] w-max -translate-x-1/2 translate-y-[37px] text-center leading-none">
                <span className="block font-display text-[24px] font-medium tracking-[-0.04em]">
                  <span className="text-ink">Little </span>
                  <span className="text-[#141414]">Lions</span>
                  <span className="text-ink"> Head</span>
                </span>
                <span className="mt-1 block font-script text-[48px] leading-none text-ink">
                  studios
                </span>
              </span>
            </Link>
            <p className="mt-12 max-w-[34ch] text-sm leading-7 text-mist">
              Software, data, and AI for organisations that need the work to
              hold. {studio.location}.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="kicker text-muted">Services</p>
              <ul className="mt-4 space-y-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm font-light text-mist hover:text-ink"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="kicker text-muted">Studio</p>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/work" className="text-sm font-light text-mist hover:text-ink">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/outcomes" className="text-sm font-light text-mist hover:text-ink">
                    Outcomes
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm font-light text-mist hover:text-ink">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm font-light text-mist hover:text-ink">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/start" className="text-sm font-light text-mist hover:text-ink">
                    Start a project
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="kicker text-muted">Contact</p>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href={`mailto:${studio.email}`}
                    className="text-sm font-light text-mist hover:text-ink"
                  >
                    {studio.email}
                  </a>
                </li>
                <li className="text-sm font-light text-mist">{studio.location}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="shell flex flex-wrap items-center justify-between gap-4 border-t border-rule py-5">
          <p className="text-xs font-light text-muted">
            © 2026 {studio.name}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="kicker text-muted hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms" className="kicker text-muted hover:text-ink">
              Terms
            </Link>
            <a href="#top" className="kicker text-muted hover:text-ink">
              Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
