"use client";

import Link from "next/link";
import { useState } from "react";
import { paths } from "@/lib/site";

/** "Where do you fit?" shortcut: one tap shows the next steps for each kind of visitor. */
export function PathPicker() {
  const [active, setActive] = useState(paths[0].id);
  const path = paths.find((p) => p.id === active) ?? paths[0];

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
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
              className={`flex min-h-16 items-center justify-between gap-3 px-5 py-4 text-left font-display text-lg font-bold transition-[background-color,color,transform] duration-200 active:scale-[0.98] sm:text-xl ${
                selected ? "bg-gold text-navy-900" : "bg-navy-700 text-white hover:bg-navy-500"
              }`}
            >
              {p.label}
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className={`hidden shrink-0 transition-transform duration-200 lg:block ${selected ? "translate-x-0" : "-translate-x-1 opacity-50"}`}
              >
                <path d="M5 2l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </button>
          );
        })}
      </div>

      <div
        id="path-panel"
        role="tabpanel"
        aria-labelledby={`tab-${path.id}`}
        key={path.id}
        className="animate-[panel-in_320ms_var(--ease-out-quart)] bg-white p-7 text-ink sm:p-10 lg:col-span-7"
      >
        <h3 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">{path.heading}</h3>
        <ol className="mt-7 space-y-4">
          {path.steps.map((step, i) => (
            <li key={step} className="flex gap-4 text-lg">
              <span
                aria-hidden="true"
                className="grid size-8 shrink-0 place-items-center bg-navy font-display text-sm font-bold text-gold"
              >
                {i + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
        <Link
          href={path.cta.href}
          className="mt-9 inline-flex items-center gap-3 bg-navy px-6 py-3.5 font-display text-lg font-bold text-white transition-[background-color,transform] hover:bg-navy-900 active:scale-[0.97]"
        >
          {path.cta.label}
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 18 18">
            <path d="M5 2l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
