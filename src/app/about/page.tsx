import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { board, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About BYI",
  description:
    "The story, mission and board of Benton Youth Initiative, a North Carolina nonprofit founded by James Alex Benton to help first-generation students reach college.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About BYI"
        intro="Progressive ideas, bold action, and a community that refuses to give up on its young people."
        image="/images/church-sunday.jpg"
        alt="BYI young men with church leaders and mentors"
      />

      <section aria-labelledby="story-title" className="py-24 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 id="story-title" data-reveal className="text-4xl font-bold leading-tight text-navy sm:text-6xl">
              The BYI story
            </h2>
            <div data-reveal style={{ "--i": 1 } as React.CSSProperties} className="mt-8 space-y-6 text-xl">
              <p>
                James Alex Benton is a North Carolina native who made it because his parents and mentors
                made sure he did. For more than two decades he has worked with colleges, hosted college
                fairs and stood beside young people others had written off.
              </p>
              <p>
                He founded Benton Youth Initiative to do for other students what was done for him:
                put them on a college campus, introduce them to the people who run it, and help them
                through every form between here and their first day of class.
              </p>
              <p>
                Today BYI partners with Title I schools, churches, community groups and HBCUs to give
                first-generation and financially challenged students a clear, affordable path to college.
              </p>
            </div>
          </div>
          <figure data-reveal style={{ "--i": 2 } as React.CSSProperties} className="lg:col-span-5 lg:pt-24">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/community-service.jpg"
                alt="James Benton with BYI students and neighbors after a service visit"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[55%_50%]"
              />
            </div>
            <figcaption className="mt-3 text-base text-ink-soft">
              Founder James Benton with BYI students on a community service visit.
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-labelledby="mvp-title" className="bg-navy-50 py-24 lg:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 id="mvp-title" data-reveal className="text-4xl font-bold leading-tight text-navy sm:text-6xl">
            What drives us
          </h2>
          <div className="mt-14 grid gap-12 lg:grid-cols-3">
            {[
              { t: "Mission", b: site.mission },
              { t: "Vision", b: site.vision },
              { t: "Purpose", b: site.purpose },
            ].map((x, i) => (
              <div key={x.t} data-reveal style={{ "--i": i } as React.CSSProperties} className="border-t-8 border-gold pt-6">
                <h3 className="text-3xl font-bold text-navy">{x.t}</h3>
                <p className="mt-4 text-lg">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="board" aria-labelledby="board-title" className="scroll-mt-20 py-24 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="board-title" data-reveal className="text-4xl font-bold leading-tight text-navy sm:text-6xl">
              Our board
            </h2>
            <p data-reveal style={{ "--i": 1 } as React.CSSProperties} className="mt-6 text-xl">
              Pastors, coaches, educators and business owners who give their time so BYI students
              have more adults in their corner.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex font-display text-lg font-bold text-navy underline decoration-gold decoration-4 underline-offset-8 hover:text-navy-500"
            >
              Contact the board
            </Link>
          </div>
          <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {board.map((m, i) => (
              <li key={m.name} data-reveal style={{ "--i": i % 4 } as React.CSSProperties} className="bg-navy-50 p-6">
                <p className="font-display text-2xl font-bold text-navy">{m.name}</p>
                <p className="mt-1 text-lg text-ink-soft">{m.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
