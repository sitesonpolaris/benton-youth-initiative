import Image from "next/image";
import Link from "next/link";
import { PathPicker } from "@/components/PathPicker";
import { DonateBlock } from "@/components/DonateBlock";
import { audiences, impact, pastEvents, programs, site } from "@/lib/site";

function Arrow() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 18 18">
      <path d="M5 2l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* MISSION */}
      <section aria-labelledby="hero-title" className="relative bg-navy text-white lg:chevron-bottom">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:pb-[calc(6rem+3.5vw)] lg:pt-20">
          <div className="lg:col-span-6 lg:pt-6">
            <h1
              id="hero-title"
              data-reveal
              className="text-[2.75rem] font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl xl:text-[5.25rem]"
            >
              First in the family. Bound for college.
            </h1>
            <p data-reveal style={{ "--i": 1 } as React.CSSProperties} className="mt-8 max-w-xl text-xl leading-relaxed text-white/90 sm:text-[1.375rem]">
              {site.mission}
            </p>
            <div data-reveal style={{ "--i": 2 } as React.CSSProperties} className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/apply"
                className="inline-flex items-center gap-3 bg-gold px-7 py-4 font-display text-lg font-bold text-navy-900 transition-[background-color,transform] hover:bg-white active:scale-[0.97]"
              >
                Apply to BYI <Arrow />
              </Link>
              <Link
                href="#what-we-do"
                className="inline-flex items-center gap-3 bg-navy-700 px-7 py-4 font-display text-lg font-bold text-white transition-[background-color,transform] hover:bg-navy-500 active:scale-[0.97]"
              >
                See what we do
              </Link>
            </div>
          </div>

          <figure className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
              <Image
                src="/images/nc-at-visit.jpg"
                alt="BYI students and founder James Benton throwing up the Aggie pride sign on a visit to North Carolina A&T"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="hero-photo object-cover object-[50%_40%]"
              />
            </div>
            <figcaption className="mt-3 text-base text-white/75">
              BYI students with founder James Benton on a campus visit to North Carolina A&amp;T.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* SHORTCUTS */}
      <section aria-labelledby="start-title" className="bg-navy-900 py-20 text-white lg:-mt-[3.5vw] lg:pt-[calc(5rem+3.5vw)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 id="start-title" data-reveal className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
            Start here. Where do you fit?
          </h2>
          <div data-reveal style={{ "--i": 1 } as React.CSSProperties} className="mt-10">
            <PathPicker />
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section aria-labelledby="serve-title" className="py-24 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 id="serve-title" data-reveal className="text-4xl font-bold leading-tight text-navy sm:text-6xl">
              Who we serve
            </h2>
            <p data-reveal style={{ "--i": 1 } as React.CSSProperties} className="mt-6 text-xl">
              BYI works with high school students in North Carolina who have the drive for college but
              not the roadmap. Students from anywhere in the United States are welcome to apply.
            </p>
            <div data-reveal style={{ "--i": 2 } as React.CSSProperties} className="relative mt-10 aspect-square overflow-hidden">
              <Image
                src="/images/church-sunday.jpg"
                alt="Young men from BYI standing with mentors, pastors and church members at the front of a sanctuary"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <ul className="grid content-start gap-x-10 sm:grid-cols-2 lg:col-span-7 lg:pt-4">
            {audiences.map((a, i) => (
              <li
                key={a.title}
                data-reveal
                style={{ "--i": i } as React.CSSProperties}
                className="border-t-8 border-gold pb-12 pt-6"
              >
                <h3 className="text-2xl font-bold leading-snug text-navy sm:text-3xl">{a.title}</h3>
                <p className="mt-3 text-lg">{a.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what-we-do" aria-labelledby="do-title" className="scroll-mt-20 bg-navy-50 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-12">
            <h2 id="do-title" data-reveal className="text-4xl font-bold leading-tight text-navy sm:text-6xl lg:col-span-6">
              What we do
            </h2>
            <p data-reveal style={{ "--i": 1 } as React.CSSProperties} className="text-xl lg:col-span-6 lg:pt-3">
              We take students from &ldquo;college isn&apos;t for me&rdquo; to an acceptance letter,
              one campus, one form and one conversation at a time.
            </p>
          </div>

          <div className="mt-16 space-y-20 lg:space-y-28">
            {programs.map((p, i) => (
              <article
                key={p.id}
                className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-16 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div data-reveal className="relative aspect-[4/3] overflow-hidden lg:col-span-7">
                  <Image src={p.image} alt={p.alt} fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
                </div>
                <div data-reveal style={{ "--i": 1 } as React.CSSProperties} className="lg:col-span-5">
                  <h3 className="text-3xl font-bold leading-tight text-navy sm:text-4xl">{p.title}</h3>
                  <p className="mt-4 text-xl">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <div className="bg-navy-50">
      <section aria-labelledby="impact-title" className="bg-navy py-24 text-white lg:chevron-top lg:pt-[calc(9rem+3.5vw)] lg:pb-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-12">
            <h2 id="impact-title" data-reveal className="text-4xl font-bold leading-tight sm:text-6xl lg:col-span-6">
              Our impact
            </h2>
            <p data-reveal style={{ "--i": 1 } as React.CSSProperties} className="text-xl text-white/90 lg:col-span-6 lg:pt-3">
              Since {site.founded}, BYI has been showing up in classrooms, on church steps and on
              campus lawns across North Carolina.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {impact.stats.map((s, i) => (
              <div key={s.label} data-reveal style={{ "--i": i } as React.CSSProperties} className="flex flex-col-reverse justify-end border-l-8 border-gold pl-5">
                <dt className="mt-2 text-lg text-white/85">{s.label}</dt>
                <dd className="font-display text-5xl font-bold tracking-[-0.03em] text-gold sm:text-7xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
          {!impact.confirmed && (
            <p className="mt-12 text-base text-white/70">Sample figures shown for layout. BYI to confirm before launch.</p>
          )}
        </div>
      </section>
      </div>

      {/* PROGRAMS & EVENTS */}
      <section aria-labelledby="events-title" className="py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 id="events-title" data-reveal className="text-4xl font-bold leading-tight text-navy sm:text-6xl">
              Programs and events
            </h2>
            <Link
              href="/events"
              className="inline-flex items-center gap-3 font-display text-lg font-bold text-navy underline decoration-gold decoration-4 underline-offset-8 transition-colors hover:text-navy-500"
            >
              All events <Arrow />
            </Link>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-12">
            <div data-reveal className="bg-gold p-8 text-navy-900 sm:p-10 lg:col-span-5">
              <h3 className="text-3xl font-bold leading-tight">Next up</h3>
              <p className="mt-4 text-xl">
                Our next campus tour and family workshop dates are being set now. Join the list and
                we&apos;ll tell you first.
              </p>
              <Link
                href="/contact?topic=events"
                className="mt-8 inline-flex items-center gap-3 bg-navy px-6 py-3.5 font-display text-lg font-bold text-white transition-[background-color,transform] hover:bg-navy-900 active:scale-[0.97]"
              >
                Get event updates <Arrow />
              </Link>
            </div>
            <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-7">
              {pastEvents.map((e, i) => (
                <li key={e.title} data-reveal style={{ "--i": i } as React.CSSProperties}>
                  <h3 className="text-2xl font-bold text-navy">{e.title}</h3>
                  <p className="mt-2 text-lg">{e.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
            {[
              { src: "/images/nc-at-visit.jpg", alt: "Students at NC A&T" },
              { src: "/images/campus-dining-hall.jpg", alt: "Students in a college student union" },
              { src: "/images/church-sunday.jpg", alt: "BYI young men at church with mentors" },
              { src: "/images/community-service.jpg", alt: "Students on a community service visit" },
            ].map((img, i) => (
              <div key={img.src} data-reveal style={{ "--i": i } as React.CSSProperties} className="group relative aspect-square overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out-quart)] group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section id="get-involved" aria-labelledby="involved-title" className="scroll-mt-20 bg-navy-900 py-24 text-white lg:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 id="involved-title" data-reveal className="text-4xl font-bold leading-tight sm:text-6xl">
            Get involved
          </h2>
          <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-14">
            {[
              {
                title: "Apply as a student",
                body: "High school students who want to go to college, especially first-generation students, can apply in about five minutes.",
                href: "/apply",
                cta: "Start your application",
              },
              {
                title: "Mentor or chaperone",
                body: "Ride along on a campus tour, share your college story, or meet with a student once a month.",
                href: "/contact?topic=volunteer",
                cta: "Volunteer with BYI",
              },
              {
                title: "Partner with BYI",
                body: "Schools, churches, colleges and businesses can host sessions, sponsor tours or open their doors to students.",
                href: "/contact?topic=partner",
                cta: "Become a partner",
              },
            ].map((c, i) => (
              <div key={c.title} data-reveal style={{ "--i": i } as React.CSSProperties} className="flex flex-col bg-navy-700 p-8 sm:p-10">
                <h3 className="text-3xl font-bold leading-tight text-gold">{c.title}</h3>
                <p className="mt-4 flex-1 text-lg text-white/90">{c.body}</p>
                <Link
                  href={c.href}
                  className="mt-8 inline-flex items-center gap-3 self-start font-display text-lg font-bold text-white underline decoration-gold decoration-4 underline-offset-8 transition-colors hover:text-gold"
                >
                  {c.cta} <Arrow />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" aria-labelledby="donate-title" className="scroll-mt-20 bg-gold py-24 text-navy-900 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 id="donate-title" data-reveal className="text-4xl font-bold leading-tight sm:text-6xl">
              Put a student on the bus to college
            </h2>
            <p data-reveal style={{ "--i": 1 } as React.CSSProperties} className="mt-6 max-w-xl text-xl">
              Your gift pays for campus tours, application fees, family workshops and the mentors who
              keep students on track. Give once, or join our monthly givers.
            </p>
            <div data-reveal style={{ "--i": 2 } as React.CSSProperties} className="relative mt-10 aspect-[4/3] overflow-hidden">
              <Image
                src="/images/campus-dining-hall.jpg"
                alt="BYI students and founder James Benton during a college campus visit"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div data-reveal style={{ "--i": 1 } as React.CSSProperties} className="lg:col-span-6 lg:pt-4">
            <DonateBlock />
          </div>
        </div>
      </section>
    </>
  );
}
