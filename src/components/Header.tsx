"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-navy text-white">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Benton Youth Initiative home">
          <Image src="/images/byi-crest.png" alt="" width={44} height={44} priority className="size-11" />
          <span className="font-display text-lg font-bold leading-tight tracking-tight">
            Benton Youth
            <br className="sm:hidden" /> Initiative
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8 font-display text-[1.0625rem] font-semibold">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative py-2 text-white/85 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/apply"
            className="hidden font-display font-semibold text-white transition-colors hover:text-gold md:inline-block md:px-3"
          >
            Apply
          </Link>
          <Link
            href="/#donate"
            className="bg-gold px-5 py-2.5 font-display font-bold text-navy-900 transition-[background-color,transform] duration-150 hover:bg-white active:scale-[0.97]"
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
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              {open ? (
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2.25" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2.25" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-18 overflow-y-auto bg-navy-900 px-5 pb-10 pt-6 sm:px-8 lg:hidden"
      >
        <ul className="font-display text-3xl font-bold">
          {[...nav, { href: "/apply", label: "Apply" }].map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block py-3 hover:text-gold" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
