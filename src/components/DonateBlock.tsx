"use client";

import { useState } from "react";
import { donate } from "@/lib/site";

/** Gift picker: choose an amount, see what it does, then continue to the Zeffy form. */
export function DonateBlock() {
  const [amount, setAmount] = useState(donate.levels[1].amount);
  const [monthly, setMonthly] = useState(false);
  const level = donate.levels.find((l) => l.amount === amount) ?? donate.levels[1];

  return (
    <div className="bg-midnight p-6 text-white sm:p-10">
      <div className="flex bg-navy p-1" role="group" aria-label="Gift frequency">
        {[
          { v: false, label: "Give once" },
          { v: true, label: "Give monthly" },
        ].map((o) => (
          <button
            key={o.label}
            type="button"
            aria-pressed={monthly === o.v}
            onClick={() => setMonthly(o.v)}
            className={`flex-1 py-3 font-heading text-lg font-bold transition-colors ${
              monthly === o.v ? "bg-white text-midnight" : "text-white/80 hover:text-white"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      <fieldset className="mt-8">
        <legend className="font-heading text-xl font-bold">Choose an amount</legend>
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
              <span className="display block bg-navy py-5 text-center text-4xl transition-[background-color,color,transform] duration-150 peer-checked:bg-gold peer-checked:text-midnight peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold hover:bg-navy-600 active:scale-[0.97]">
                ${l.amount}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <p aria-live="polite" className="mt-6 min-h-[3.3em] text-xl text-white/90">
        <strong className="font-semibold text-gold">
          ${amount}
          {monthly ? " a month" : ""}
        </strong>{" "}
        {level.funds}
      </p>

      <a
        href={donate.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex w-full items-center justify-center gap-3 bg-gold px-6 py-5 font-heading text-xl font-bold text-midnight transition-[background-color,transform] hover:bg-white active:scale-[0.98]"
      >
        Donate ${amount}
        {monthly ? " monthly" : ""}
      </a>
      <p className="mt-4 text-base text-white/75">
        BYI is a 501(c)(3) nonprofit. Gifts are tax-deductible to the extent allowed by law, and
        you&apos;ll get a receipt by email.
      </p>
    </div>
  );
}
