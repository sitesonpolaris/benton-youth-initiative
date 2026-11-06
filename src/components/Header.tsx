"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const overHero = pathname === "/" && !scrolled && !open;

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300 ${
        overHero ? "bg-transparent" : "bg-midnight"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-[90rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="Benton Youth Initiative home">
          <Image src="/images/byi-crest.png" alt="" aria-hidden="true" width={46} height={46} priority className="size-11.5" />
          <span className="display text-[1.375rem] leading-none tracking-wide">
            Benton Youth
            <br /> Initiative
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8 font-heading text-[1.0625rem] font-semibold">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="py-2 text-white/85 transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/apply"
            className="hidden px-4 py-2.5 font-heading font-bold text-white ring-2 ring-white/40 ring-inset transition-[box-shadow,color] hover:text-gold hover:ring-gold sm:inline-block"
          >
            Apply
          </Link>
          <Link
            href="/#donate"
            className="bg-gold px-5 py-2.5 font-heading font-bold text-midnight transition-[background-color,transform] duration-150 hover:bg-white active:scale-[0.97]"
          >
            Donate
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2.25" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h12" stroke="currentColor" strokeWidth="2.25" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-18 overflow-y-auto bg-midnight px-5 pb-10 pt-4 sm:px-8 lg:hidden"
      >
        <ul>
          {[...nav, { href: "/apply", label: "Apply" }].map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="display block py-3 text-5xl hover:text-gold" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
