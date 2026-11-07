"use client";

import Image from "next/image";
import { useState } from "react";
import { campuses } from "@/lib/site";

/** "Campuses we've visited": tap a pennant to see BYI's real photo from that campus. */
export function PennantWall() {
  const [active, setActive] = useState(campuses[0].id);
  const c = campuses.find((x) => x.id === active) ?? campuses[0];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <div role="tablist" aria-label="Campuses" className="flex flex-col gap-3 lg:col-span-5">
        {campuses.map((x, i) => {
          const on = x.id === active;
          return (
            <button
              key={x.id}
              role="tab"
              type="button"
              id={`pennant-${x.id}`}
              aria-selected={on}
              aria-controls="campus-panel"
              onClick={() => setActive(x.id)}
              style={{ animationDelay: `${i * 0.35}s` }}
              className={`group relative flex h-20 w-full max-w-[30rem] items-stretch text-left transition-transform duration-300 ease-[var(--ease-out-expo)] sm:h-22 ${
                on ? "translate-x-3" : "hover:translate-x-1.5"
              }`}
            >
              <span aria-hidden="true" className={`relative z-10 -mr-px w-4 shrink-0 ${on ? "bg-gold" : "bg-navy-600"}`} />
              <span
                className={`pennant flex flex-1 items-center pl-5 pr-[35%] transition-colors duration-300 ${
                  on ? "bg-gold text-midnight" : "bg-navy text-white group-hover:bg-navy-600"
                } ${on ? "pennant-wave" : ""}`}
                data-anim
              >
                <span className="display text-[1.75rem] leading-none sm:text-[2.125rem]">{x.short}</span>
              </span>
            </button>
          );
        })}
      </div>

      <figure
        id="campus-panel"
        role="tabpanel"
        aria-labelledby={`pennant-${c.id}`}
        key={c.id}
        className="animate-[panel-in_420ms_var(--ease-out-expo)] lg:col-span-7"
        data-anim
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-navy">
          <Image src={c.image} alt={c.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
        </div>
        <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
          <span className="font-heading text-2xl font-bold text-white">{c.name}</span>
          <span className="text-lg text-white/75">{c.city}</span>
          <span className="w-full text-lg text-white/85">{c.caption}</span>
        </figcaption>
      </figure>
    </div>
  );
}
