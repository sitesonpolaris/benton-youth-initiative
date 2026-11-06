"use client";

import { useState } from "react";
import { donate } from "@/lib/site";

/** Gift picker: choose an amount and see what it does before going to the giving form. */
export function DonateBlock() {
  const [amount, setAmount] = useState(donate.levels[1].amount);
  const [monthly, setMonthly] = useState(false);
  const level = donate.levels.find((l) => l.amount === amount) ?? donate.levels[1];

  return (
    <div className="bg-white p-6 text-ink sm:p-10">
      <fieldset>
        <legend className="font-display text-xl font-bold text-navy">Choose a gift</legend>
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {donate.levels.map((l) => (
            <label key={l.amount} className="cursor-pointer">
              <input
                type="radio"
                name="amount"
                value={l.amount}
                checked={amount === l.amount}
                onChange={() => setAmount(l.amount)}
                className="peer sr-only"
              />
              <span className="block bg-navy-50 py-4 text-center font-display text-2xl font-bold text-navy transition-[background-color,transform] duration-150 peer-checked:bg-navy peer-checked:text-gold peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold hover:bg-navy-100 active:scale-[0.97]">
                ${l.amount}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <p aria-live="polite" className="mt-6 min-h-[3.3em] text-lg">
        <strong className="font-semibold">
          ${amount}
          {monthly ? " a month" : ""}:
        </strong>{" "}
        {level.funds}
      </p>

      <div className="mt-4 flex gap-2 bg-navy-50 p-1" role="group" aria-label="Gift frequency">
        {[
          { v: false, label: "Give once" },
          { v: true, label: "Give monthly" },
        ].map((o) => (
          <button
            key={o.label}
            type="button"
            aria-pressed={monthly === o.v}
            onClick={() => setMonthly(o.v)}
            className={`flex-1 py-2.5 font-display font-semibold transition-colors ${
              monthly === o.v ? "bg-white text-navy" : "text-ink-soft hover:text-navy"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      <a
        href={donate.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex w-full items-center justify-center gap-3 bg-gold px-6 py-4 font-display text-xl font-bold text-navy-900 transition-[background-color,transform] hover:bg-gold-600 active:scale-[0.98]"
      >
        Donate ${amount}
        {monthly ? " monthly" : ""}
      </a>
      <p className="mt-4 text-base text-ink-soft">
        BYI is a 501(c)(3) nonprofit. Your gift is tax-deductible to the extent allowed by law, and
        you&apos;ll get a receipt by email.
      </p>
    </div>
  );
}
