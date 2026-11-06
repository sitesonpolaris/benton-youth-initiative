"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

/** Posts to Netlify Forms. The matching static form lives in public/__forms.html. */
export function NetlifyForm({
  name,
  children,
  submitLabel,
  successTitle,
  successBody,
}: {
  name: string;
  children: React.ReactNode;
  submitLabel: string;
  successTitle: string;
  successBody: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    // Multiple checkboxes with one name collapse to a single readable value.
    const body = new URLSearchParams();
    const seen = new Map<string, string[]>();
    data.forEach((v, k) => seen.set(k, [...(seen.get(k) ?? []), String(v)]));
    seen.forEach((v, k) => body.set(k, v.join(", ")));
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="bg-gold p-8 text-midnight sm:p-10">
        <p className="font-heading text-3xl font-bold">{successTitle}</p>
        <p className="mt-3 text-xl">{successBody}</p>
      </div>
    );
  }

  return (
    <form name={name} method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit} className="space-y-6">
      <input type="hidden" name="form-name" value={name} />
      <p hidden>
        <label>
          Don&apos;t fill this out: <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      {children}
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-navy px-8 py-4 font-heading text-lg font-bold text-white transition-[background-color,transform] hover:bg-midnight active:scale-[0.97] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : submitLabel}
      </button>
      {status === "error" && (
        <p role="alert" className="text-lg font-semibold text-[#9b1c1c]">
          Something went wrong sending the form. Please try again, or call us.
        </p>
      )}
    </form>
  );
}

const inputCls =
  "mt-2 block w-full border-2 border-paper-deep bg-white px-4 py-3 text-lg text-ink transition-colors focus:border-navy focus:outline-none";

export function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="font-heading text-lg font-semibold text-navy">
        {label}
        {!required && <span className="font-sans font-normal text-ink-soft"> (optional)</span>}
      </span>
      <input name={name} type={type} required={required} autoComplete={autoComplete} placeholder={placeholder} className={inputCls} />
    </label>
  );
}

export function Select({
  label,
  name,
  options,
  defaultValue,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  defaultValue?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-heading text-lg font-semibold text-navy">{label}</span>
      <select name={name} required={required} defaultValue={defaultValue ?? ""} className={inputCls}>
        <option value="" disabled>
          Choose one
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

export function TextArea({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="font-heading text-lg font-semibold text-navy">
        {label}
        {!required && <span className="font-sans font-normal text-ink-soft"> (optional)</span>}
      </span>
      <textarea name={name} rows={5} required={required} className={inputCls} />
    </label>
  );
}

export function Checks({ legend, name, options }: { legend: string; name: string; options: string[] }) {
  return (
    <fieldset>
      <legend className="font-heading text-lg font-semibold text-navy">{legend}</legend>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {options.map((o) => (
          <label key={o} className="flex cursor-pointer items-center gap-3 bg-paper px-4 py-3 text-lg">
            <input type="checkbox" name={name} value={o} className="size-5 accent-navy" />
            {o}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
