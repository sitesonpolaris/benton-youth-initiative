"use client";

import Link from "next/link";
import { useState } from "react";
import { paths } from "@/lib/site";

/** "Get involved" picker: one tap shows the next steps for each kind of visitor. */
export function PathPicker() {
  const [active, setActive] = useState(paths[0].id);
  const path = paths.find((p) => p.id === active) ?? paths[0];

  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
      <div role="tablist" aria-label="Choose who you are" className="grid grid-cols-2 gap-2 lg:col-span-5 lg:grid-cols-1">
        {paths.map((p) => {
          const selected = p.id === active;
          return (
            <button
              key={p.id}
              id={`tab-${p.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls="path-panel"
              onClick={() => setActive(p.id)}
              className={`pennant-tail flex min-h-18 items-center px-5 py-4 pr-12 text-left font-heading text-lg font-bold transition-[background-color,color,transform] duration-200 active:scale-[0.98] sm:text-xl ${
                selected ? "bg-gold text-midnight" : "bg-navy text-white hover:bg-navy-600"
              }`}
            >
              {p.label}
            </button>
          );
        })}
      </div>

      <div
        id="path-panel"
        role="tabpanel"
        aria-labelledby={`tab-${path.id}`}
        key={path.id}
        data-anim
        className="animate-[panel-in_360ms_var(--ease-out-expo)] bg-midnight p-8 text-white sm:p-12 lg:col-span-7"
      >
        <h3 className="display text-5xl sm:text-6xl">{path.heading}</h3>
        <ol className="mt-8 space-y-5">
          {path.steps.map((step, i) => (
            <li key={step} className="flex gap-4 text-xl">
              <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center bg-gold font-heading text-base font-bold text-midnight">
                {i + 1}
              </span>
              <span className="pt-0.5 text-white/90">{step}</span>
            </li>
          ))}
        </ol>
        <Link
          href={path.cta.href}
          className="mt-10 inline-flex items-center gap-3 bg-gold px-7 py-4 font-heading text-lg font-bold text-midnight transition-[background-color,transform] hover:bg-white active:scale-[0.97]"
        >
          {path.cta.label}
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
            <path d="M2 9h12M9 3l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
