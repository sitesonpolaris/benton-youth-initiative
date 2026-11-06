import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { events } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/events" },
  title: "Events",
  description:
    "HBCU campus tours, the All White Party fundraiser, homecoming service days and Youth Sunday with Benton Youth Initiative.",
};

const d = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Tours & events"
        intro="Campus tours, celebrations and service days that get students moving toward college, and get the community behind them."
        image="/images/homecoming-service.jpg"
        alt="BYI students carrying supplies beside a passenger van during a homecoming service day"
        position="50% 60%"
      />

      <section aria-labelledby="upcoming-title" className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-[90rem] gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          <h2 id="upcoming-title" data-reveal className="display text-6xl text-navy sm:text-8xl lg:col-span-5">
            Coming up
          </h2>
          <div data-reveal style={d(1)} className="bg-gold p-8 text-midnight sm:p-12 lg:col-span-7">
            <p className="display text-5xl">New tour dates are on the way.</p>
            <p className="mt-4 text-xl">
              We&apos;re scheduling the next round of HBCU tours and family workshops. Leave your
              details and we&apos;ll send dates as soon as they&apos;re set.
            </p>
            <Link
              href="/contact?topic=events"
              className="mt-8 inline-flex bg-midnight px-7 py-4 font-heading text-lg font-bold text-white transition-[background-color,transform] hover:bg-navy active:scale-[0.97]"
            >
              Get event updates
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="past-title" className="bg-navy py-24 text-white lg:py-36">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <h2 id="past-title" data-reveal className="display text-6xl sm:text-8xl">
            What we do together
          </h2>
          <div className="mt-16 space-y-20">
            {events.map((e, i) => (
              <article key={e.id} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16">
                <div data-reveal="scale" className={`relative aspect-[4/3] overflow-hidden bg-midnight lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}>
                  <Image src={e.image} alt={e.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
                <div data-reveal style={d(1)} className="lg:col-span-6">
                  <p className="font-heading text-lg font-bold text-gold">
                    {e.when} · {e.where}
                  </p>
                  <h3 className="display mt-2 text-5xl sm:text-6xl">{e.title}</h3>
                  <p className="mt-4 max-w-xl text-xl text-white/90">{e.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
