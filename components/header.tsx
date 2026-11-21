"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { nav, services } from "@/lib/content";
import { Mark } from "@/components/logo";

export function Header() {
  const pathname = usePathname();
  return <HeaderNav key={pathname} pathname={pathname} />;
}

function HeaderNav({ pathname }: { pathname: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
    <header
      id="top"
      className={`fixed inset-x-0 top-0 z-50 bg-canvas/88 backdrop-blur-md ${
        scrolled || menuOpen ? "border-b border-faint" : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Little Lions Head Studios, home">
          <Mark className="h-10 w-auto" />
          <span className="hidden leading-none sm:block">
            <span className="block font-display text-[13px] font-medium tracking-[-0.03em] text-ink">
              Little Lions Head
            </span>
            <span className="mt-0.5 block text-center font-script text-[1.35rem] leading-none text-ink">
              studios
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          <div className="group relative">
            <Link
              href="/services"
              className={`kicker transition-colors hover:text-ink ${
                pathname.startsWith("/services") ? "text-ink" : "text-muted"
              }`}
              aria-current={pathname.startsWith("/services") ? "page" : undefined}
            >
              Services
            </Link>
            <div
              id="services-menu"
              className="invisible absolute left-1/2 top-full z-20 w-72 -translate-x-1/2 pt-4 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
            >
              <div className="border border-rule bg-canvas py-2">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex items-baseline gap-4 px-4 py-2.5 hover:bg-white/5"
                  >
                    <span className="kicker text-muted">{service.number}</span>
                    <span className="text-sm font-light text-ink">{service.title}</span>
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="kicker mt-1 block border-t border-rule px-4 py-3 text-muted hover:text-ink"
                >
                  All services
                </Link>
              </div>
            </div>
          </div>

          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`kicker transition-colors hover:text-ink ${
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "text-ink"
                  : "text-muted"
              }`}
              aria-current={
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "page"
                  : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link href="/start" className="action hidden sm:inline-flex">
            Start a project
          </Link>
          <button
            type="button"
            className="kicker text-ink lg:hidden"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>

      {menuOpen ? (
        <nav
          className="shell fixed inset-x-0 bottom-0 top-20 z-40 flex flex-col gap-1 overflow-auto border-t border-faint bg-canvas py-6 lg:hidden"
          aria-label="Mobile"
        >
          <p className="kicker mb-2 text-muted">Services</p>
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="py-2 text-3xl font-extralight uppercase tracking-[-0.04em]"
            >
              {service.title}
            </Link>
          ))}
          <div className="my-4 h-px bg-rule" />
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-2 text-3xl font-extralight uppercase tracking-[-0.04em]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/start"
            className="mt-4 py-2 text-3xl font-extralight uppercase tracking-[-0.04em] text-sun"
          >
            Start a project
          </Link>
        </nav>
      ) : null}
    </>
  );
}
