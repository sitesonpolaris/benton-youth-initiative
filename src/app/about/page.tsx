import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { board, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About BYI",
  description:
    "The story, mission and board of Benton Youth Initiative, founded by James Alex Benton to get first-generation students onto HBCU campuses and into college.",
};

const d = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About BYI"
        intro="Progressive ideas, bold action, and a community that refuses to give up on its young people."
        image="/images/church-youth-sunday.jpg"
        alt="BYI young men with pastors and mentors at the front of a church sanctuary"
        position="50% 40%"
      />

      <section aria-labelledby="story-title" className="py-24 lg:py-40">
        <div className="mx-auto grid max-w-[90rem] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
          <div className="lg:col-span-7">
            <h2 id="story-title" data-reveal className="display text-6xl text-navy sm:text-8xl">
              The BYI story
            </h2>
            <div data-reveal style={d(1)} className="mt-8 space-y-6 text-xl">
              <p className="font-heading text-2xl font-semibold leading-snug text-navy sm:text-[1.75rem]">
                James Alex Benton is a North Carolina native who made it because his parents and
                mentors made sure he did.
              </p>
              <p>
                For more than two decades he has worked with colleges, hosted college fairs and stood
                beside young people others had written off. He founded Benton Youth Initiative to do
                for other students what was done for him: put them on a college campus, introduce them
                to the people who run it, and help them through every form between here and their
                first day of class.
              </p>
              <p>
                Today BYI partners with Title I schools, churches, community groups and HBCUs to give
                first-generation and financially challenged students a clear, affordable path to
                college.
              </p>
            </div>
          </div>
          <figure data-reveal="scale" style={d(2)} className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/james-benton-2.jpg"
                alt="Portrait of BYI founder James Alex Benton"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 text-base text-ink-soft">James Alex Benton, founder</figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="mvp-title" className="bg-navy py-24 text-white lg:py-36">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <h2 id="mvp-title" data-reveal className="display text-6xl sm:text-8xl">
            What drives us
          </h2>
          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            {[
              { t: "Mission", b: site.mission },
              { t: "Vision", b: site.vision },
              { t: "Purpose", b: site.purpose },
            ].map((x, i) => (
              <div key={x.t} data-reveal style={d(i)}>
                <span aria-hidden="true" className="pennant mb-6 block h-8 w-20 bg-gold" />
                <h3 className="display text-5xl">{x.t}</h3>
                <p className="mt-4 text-xl text-white/90">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="moments-title" className="py-24 lg:py-36">
        <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
          <h2 id="moments-title" data-reveal className="display text-6xl text-navy sm:text-8xl">
            Moments that matter
          </h2>
          <div className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              { src: "/images/grads-stoles.jpg", alt: "Three young men in graduation stoles with James Benton", span: "col-span-2 row-span-2" },
              { src: "/images/team-day.jpg", alt: "BYI young men in yellow team shirts with James Benton", span: "" },
              { src: "/images/college-fair-table.jpg", alt: "A BYI student and James Benton seated at a college fair table", span: "" },
              { src: "/images/career-fair.jpg", alt: "Two young women in business attire at a career fair", span: "" },
              { src: "/images/grad-hug.jpg", alt: "A graduate hugging James Benton", span: "" },
            ].map((p, i) => (
              <div key={p.src} data-reveal="scale" style={d(i)} className={`relative aspect-[3/4] overflow-hidden bg-navy ${p.span} ${p.span ? "aspect-auto min-h-80" : ""}`}>
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="board" aria-labelledby="board-title" className="scroll-mt-18 bg-paper-deep py-24 lg:py-36">
        <div className="mx-auto grid max-w-[90rem] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-4">
            <h2 id="board-title" data-reveal className="display text-6xl text-navy sm:text-8xl">
              Our board
            </h2>
            <p data-reveal style={d(1)} className="mt-6 text-xl">
              Pastors, coaches, educators and business owners who give their time so BYI students have
              more adults in their corner.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex font-heading text-lg font-bold text-navy underline decoration-gold decoration-4 underline-offset-8 hover:text-navy-600"
            >
              Contact the board
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {board.map((m, i) => (
              <li key={m.name} data-reveal style={d(i % 4)} className="bg-paper p-7">
                <p className="font-heading text-2xl font-bold text-navy">{m.name}</p>
                <p className="mt-1 text-lg text-ink-soft">{m.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
