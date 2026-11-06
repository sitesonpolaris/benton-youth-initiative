import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { pastEvents } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/events" },
  title: "Events",
  description: "HBCU campus tours, family workshops, the All White Gala and community service days with Benton Youth Initiative.",
};

const gallery = [
  { src: "/images/nc-at-visit.jpg", alt: "BYI students and James Benton at North Carolina A&T", caption: "Campus visit, North Carolina A&T", wide: true },
  { src: "/images/church-sunday.jpg", alt: "BYI young men with mentors and pastors at church", caption: "Youth Sunday with our church partners" },
  { src: "/images/campus-dining-hall.jpg", alt: "BYI students in a college student union", caption: "Lunch in the student union on a college tour" },
  { src: "/images/community-service.jpg", alt: "Students with neighbors after a service visit", caption: "Community service day", wide: true },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        intro="Campus tours, workshops and celebrations that get students moving toward college, and get the community behind them."
      />

      <section aria-labelledby="upcoming-title" className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12">
          <h2 id="upcoming-title" data-reveal className="text-4xl font-bold leading-tight text-navy sm:text-6xl lg:col-span-5">
            Upcoming events
          </h2>
          <div data-reveal style={{ "--i": 1 } as React.CSSProperties} className="bg-gold p-8 text-navy-900 sm:p-10 lg:col-span-7">
            <p className="font-display text-3xl font-bold leading-tight">New dates are coming soon.</p>
            <p className="mt-4 text-xl">
              We&apos;re scheduling the next round of HBCU tours and family workshops. Leave your
              details and we&apos;ll send dates as soon as they&apos;re set.
            </p>
            <Link
              href="/contact?topic=events"
              className="mt-8 inline-flex bg-navy px-6 py-3.5 font-display text-lg font-bold text-white transition-[background-color,transform] hover:bg-navy-900 active:scale-[0.97]"
            >
              Get event updates
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="past-title" className="bg-navy-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 id="past-title" data-reveal className="text-4xl font-bold leading-tight text-navy sm:text-6xl">
            What we&apos;ve done together
          </h2>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {pastEvents.map((e, i) => (
              <li key={e.title} data-reveal style={{ "--i": i } as React.CSSProperties} className="border-t-8 border-gold pt-5">
                <h3 className="text-2xl font-bold text-navy">{e.title}</h3>
                <p className="mt-2 text-lg">{e.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-16 grid gap-3 sm:grid-cols-3">
            {gallery.map((g, i) => (
              <figure key={g.src} data-reveal style={{ "--i": i } as React.CSSProperties} className={g.wide ? "sm:col-span-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto sm:h-[26rem]">
                  <Image src={g.src} alt={g.alt} fill sizes="(min-width: 640px) 66vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="mt-2 text-base text-ink-soft">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
