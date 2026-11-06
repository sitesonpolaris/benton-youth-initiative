import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "@/components/HeroVideo";
import { PennantWall } from "@/components/PennantWall";
import { PathPicker } from "@/components/PathPicker";
import { DonateBlock } from "@/components/DonateBlock";
import { CountUp } from "@/components/CountUp";
import { audiences, events, graduates, impact, road, shortcuts, site } from "@/lib/site";

type CSSVars = React.CSSProperties & { "--i"?: number };
const d = (i: number): CSSVars => ({ "--i": i });

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" className={className}>
      <path d="M2 9h12M9 3l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO / MISSION */}
      <section aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-midnight text-white">
        <HeroVideo />
        <div aria-hidden="true" className="absolute inset-0 -z-0 bg-midnight/45 lg:bg-transparent lg:[background:linear-gradient(90deg,rgb(19_28_40/0.85),rgb(19_28_40/0.35)_60%,rgb(19_28_40/0.1))]" />
        <div className="relative z-10 mx-auto w-full max-w-[90rem] px-5 pb-28 pt-36 sm:px-8 lg:px-12 lg:pb-32">
          <h1 id="hero-title" data-reveal className="display max-w-5xl text-[4.25rem] sm:text-[7rem] lg:text-[10rem]">
            Your campus is waiting.
          </h1>
          <p data-reveal style={d(1)} className="mt-7 max-w-2xl text-xl leading-relaxed text-white/95 sm:text-2xl">
            Benton Youth Initiative puts first-generation students from Title I high schools on HBCU
            campuses, then walks with them all the way to graduation day.
          </p>
          <div data-reveal style={d(2)} className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center gap-3 bg-gold px-8 py-4 font-heading text-lg font-bold text-midnight transition-[background-color,transform] hover:bg-white active:scale-[0.97]"
            >
              Apply to BYI <Arrow />
            </Link>
            <Link
              href="#road"
              className="inline-flex items-center gap-3 px-8 py-4 font-heading text-lg font-bold text-white ring-2 ring-white/60 ring-inset transition-[box-shadow,color] hover:text-gold hover:ring-gold"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* SHORTCUTS */}
      <nav aria-label="Shortcuts" className="bg-gold text-midnight">
        <ul className="mx-auto grid max-w-[90rem] grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {shortcuts.map((s) => (
            <li key={s.href} className="last:col-span-2 sm:last:col-span-1">
              <Link
                href={s.href}
                className="group flex h-full items-center justify-between gap-3 px-5 py-6 transition-colors hover:bg-gold-deep sm:px-8 lg:px-8"
              >
                <span>
                  <span className="block text-base font-semibold text-midnight/75">{s.note}</span>
                  <span className="display block text-[1.75rem] sm:text-3xl">{s.label}</span>
                </span>
                <Arrow className="shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* MISSION */}
      <section aria-labelledby="mission-title" className="py-24 lg:py-40">
        <div className="mx-auto grid max-w-[90rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <figure data-reveal="left" className="lg:col-span-5">
            <div className="relative aspect-square overflow-hidden bg-midnight">
              <Image
                src="/images/james-benton.jpg"
                alt="Portrait of BYI founder James Alex Benton"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 text-base text-ink-soft">James Alex Benton, founder of BYI</figcaption>
          </figure>
          <div className="lg:col-span-7">
            <h2 id="mission-title" data-reveal className="display text-6xl text-navy sm:text-8xl">
              Our mission
            </h2>
            <p data-reveal style={d(1)} className="mt-8 font-heading text-2xl font-semibold leading-snug text-navy sm:text-[2rem]">
              {site.mission}
            </p>
            <p data-reveal style={d(2)} className="mt-6 max-w-2xl text-xl">
              Mr. Benton grew up in North Carolina with parents and mentors who would not let him
              fall through the cracks. BYI is how he passes that on: one bus ride, one campus and one
              student at a time.
            </p>
            <Link
              data-reveal
              style={d(3)}
              href="/about"
              className="mt-8 inline-flex items-center gap-3 font-heading text-lg font-bold text-navy underline decoration-gold decoration-4 underline-offset-8 transition-colors hover:text-navy-600"
            >
              Our story <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section aria-labelledby="serve-title" className="bg-navy text-white">
        <div className="relative h-[42vh] min-h-72 overflow-hidden lg:h-[60vh]">
          <Image
            src="/images/hall-group.jpg"
            alt="A large group of BYI students and mentors gathered in a banquet hall"
            fill
            sizes="100vw"
            className="object-cover object-[50%_45%]"
          />
        </div>
        <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-12">
            <h2 id="serve-title" data-reveal className="display text-6xl sm:text-8xl lg:col-span-6">
              Who we serve
            </h2>
            <p data-reveal style={d(1)} className="text-xl text-white/90 lg:col-span-6 lg:pt-4">
              High school students with the drive for college and no roadmap yet. Most come from North
              Carolina, and students from anywhere in the United States are welcome to apply.
            </p>
          </div>
          <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a, i) => (
              <li key={a.title} data-reveal style={d(i)}>
                <span aria-hidden="true" className="pennant mb-6 block h-8 w-20 bg-gold" />
                <h3 className="font-heading text-2xl font-bold">{a.title}</h3>
                <p className="mt-3 text-lg text-white/85">{a.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT WE DO: THE ROAD TO COLLEGE */}
      <section id="road" aria-labelledby="road-title" className="scroll-mt-18 py-24 lg:py-40">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-12">
            <h2 id="road-title" data-reveal className="display text-6xl text-navy sm:text-8xl lg:col-span-7">
              The road to college
            </h2>
            <p data-reveal style={d(1)} className="text-xl lg:col-span-5 lg:pt-4">
              What we do, from the first campus tour to graduation day. Students don&apos;t do any of
              it alone.
            </p>
          </div>

          <ol className="relative mt-20 space-y-20 lg:space-y-32">
            <span aria-hidden="true" className="absolute bottom-0 left-[1.15rem] top-0 w-2 bg-gold lg:left-1/2 lg:-ml-1" />
            {road.map((r, i) => (
              <li key={r.id} className="relative grid gap-8 pl-14 lg:grid-cols-2 lg:gap-24 lg:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 grid size-10 place-items-center bg-midnight lg:left-1/2 lg:top-1/2 lg:-ml-5 lg:-mt-5"
                >
                  <span className="pennant block h-4 w-5 bg-gold" />
                </span>
                <figure data-reveal="scale" className={i % 2 ? "lg:order-2" : ""}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                    <Image src={r.image} alt={r.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-[50%_25%]" />
                  </div>
                  <figcaption className="mt-3 text-base text-ink-soft">{r.caption}</figcaption>
                </figure>
                <div data-reveal style={d(1)} className={`self-center ${i % 2 ? "lg:order-1 lg:text-right" : ""}`}>
                  <h3 className="display text-5xl text-navy sm:text-6xl">{r.title}</h3>
                  <p className={`mt-5 max-w-xl text-xl ${i % 2 ? "lg:ml-auto" : ""}`}>{r.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CAMPUSES (live pennant wall) */}
      <section id="campuses" aria-labelledby="campuses-title" className="scroll-mt-18 bg-midnight py-24 text-white lg:py-36">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-12">
            <h2 id="campuses-title" data-reveal className="display text-6xl sm:text-8xl lg:col-span-7">
              Campuses we&apos;ve visited
            </h2>
            <p data-reveal style={d(1)} className="text-xl text-white/90 lg:col-span-5 lg:pt-4">
              Tap a pennant to see BYI students on campus. Every photo is from a real BYI trip.
            </p>
          </div>
          <div data-reveal style={d(2)} className="mt-16">
            <PennantWall />
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section aria-labelledby="impact-title" className="py-24 lg:py-40">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-12">
            <h2 id="impact-title" data-reveal className="display text-6xl text-navy sm:text-8xl lg:col-span-6">
              Our impact
            </h2>
            <p data-reveal style={d(1)} className="text-xl lg:col-span-6 lg:pt-4">
              Since {site.founded}, BYI has been showing up in classrooms, on church steps and on
              campus lawns across North Carolina.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {impact.stats.map((s, i) => (
              <div key={s.label} data-reveal style={d(i)} className="flex flex-col-reverse justify-end bg-white p-6 sm:p-8">
                <dt className="mt-2 font-heading text-lg font-semibold text-ink-soft">{s.label}</dt>
                <dd className="display text-6xl text-navy sm:text-8xl">
                  <CountUp value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
          {!impact.confirmed && (
            <p className="mt-6 text-base text-ink-soft">Sample figures shown for layout. BYI to confirm before launch.</p>
          )}

          <h3 data-reveal className="display mt-24 text-4xl text-navy sm:text-5xl">Where they are now</h3>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {graduates.map((g, i) => (
              <li key={g.image} data-reveal="scale" style={d(i)} className={`group relative aspect-[3/4] overflow-hidden bg-navy ${i === 4 ? "hidden lg:block" : ""}`}>
                <Image
                  src={g.image}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROGRAMS & EVENTS */}
      <section aria-labelledby="events-title" className="bg-navy py-24 text-white lg:py-36">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="events-title" data-reveal className="display text-6xl sm:text-8xl">
              Programs & events
            </h2>
            <Link
              href="/events"
              className="inline-flex items-center gap-3 font-heading text-lg font-bold underline decoration-gold decoration-4 underline-offset-8 transition-colors hover:text-gold"
            >
              All events <Arrow />
            </Link>
          </div>

          <article data-reveal className="mt-16 grid gap-0 bg-midnight lg:grid-cols-12">
            <div className="relative aspect-square lg:col-span-5">
              <Image src={events[0].image} alt={events[0].alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:col-span-7">
              <p className="font-heading text-lg font-bold text-gold">
                {events[0].when} · {events[0].where}
              </p>
              <h3 className="display mt-3 text-5xl sm:text-7xl">{events[0].title}</h3>
              <p className="mt-5 max-w-xl text-xl text-white/90">{events[0].body}</p>
              <Link
                href="/contact?topic=events"
                className="mt-8 inline-flex items-center gap-3 self-start bg-gold px-7 py-4 font-heading text-lg font-bold text-midnight transition-[background-color,transform] hover:bg-white active:scale-[0.97]"
              >
                Get next year&apos;s date <Arrow />
              </Link>
            </div>
          </article>

          <ul className="mt-12 grid gap-10 md:grid-cols-3">
            {events.slice(1).map((e, i) => (
              <li key={e.id} data-reveal style={d(i)}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={e.image} alt={e.alt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
                </div>
                <p className="mt-5 font-heading font-bold text-gold">{e.when}</p>
                <h3 className="mt-1 font-heading text-2xl font-bold">{e.title}</h3>
                <p className="mt-2 text-lg text-white/85">{e.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section id="get-involved" aria-labelledby="involved-title" className="scroll-mt-18 py-24 lg:py-40">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-12">
            <h2 id="involved-title" data-reveal className="display text-6xl text-navy sm:text-8xl lg:col-span-7">
              Get involved
            </h2>
            <p data-reveal style={d(1)} className="text-xl lg:col-span-5 lg:pt-4">
              Pick the one that fits you and we&apos;ll show you the next three steps.
            </p>
          </div>
          <div data-reveal style={d(2)} className="mt-14">
            <PathPicker />
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" aria-labelledby="donate-title" className="scroll-mt-18 bg-gold py-24 text-midnight lg:py-36">
        <div className="mx-auto grid max-w-[90rem] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <div className="lg:col-span-6">
            <h2 id="donate-title" data-reveal className="display text-6xl sm:text-8xl">
              Fund a seat on the bus
            </h2>
            <p data-reveal style={d(1)} className="mt-6 max-w-xl text-xl">
              Your gift pays for campus tours, application fees, family workshops and the mentors who
              keep students on track. Give once, or join our monthly givers.
            </p>
            <div data-reveal style={d(2)} className="relative mt-10 aspect-[4/3] overflow-hidden">
              <Image
                src="/images/team-day.jpg"
                alt="BYI young men in matching yellow shirts celebrating with James Benton"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div data-reveal style={d(1)} className="lg:col-span-6 lg:pt-4">
            <DonateBlock />
          </div>
        </div>
      </section>
    </>
  );
}
