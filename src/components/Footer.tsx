import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { Year } from "@/components/Year";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <Image src="/images/byi-crest.png" alt="Benton Youth Initiative crest" width={72} height={72} />
              <p className="font-display text-2xl font-bold leading-tight">
                Benton Youth Initiative
              </p>
            </div>
            <p className="mt-6 max-w-sm text-white/80">
              A North Carolina nonprofit helping first-generation and at-risk students get to college,
              and through it.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="font-display text-lg font-bold text-gold">Explore</h2>
            <ul className="mt-4 space-y-2 text-white/85">
              <li><Link className="hover:text-gold" href="/about">About BYI</Link></li>
              <li><Link className="hover:text-gold" href="/about#board">Board</Link></li>
              <li><Link className="hover:text-gold" href="/events">Events</Link></li>
              <li><Link className="hover:text-gold" href="/apply">Apply</Link></li>
              <li><Link className="hover:text-gold" href="/#donate">Donate</Link></li>
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="font-display text-lg font-bold text-gold">Get in touch</h2>
            <ul className="mt-4 space-y-2 text-white/85">
              <li><a className="hover:text-gold" href={site.phoneHref}>{site.phone}</a></li>
              <li><a className="break-all hover:text-gold" href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><Link className="hover:text-gold" href="/contact">Send us a message</Link></li>
            </ul>
            <ul className="mt-6 flex gap-5">
              <li>
                <a className="hover:text-gold" href={site.social.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <a className="hover:text-gold" href={site.social.instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p
          aria-hidden="true"
          className="mt-20 select-none font-display text-[13vw] font-bold leading-[0.85] tracking-[-0.04em] text-navy-700 md:text-[11vw] xl:text-[9.5rem]"
        >
          Leadership. Empowerment.
        </p>

        <div className="mt-10 flex flex-col gap-2 text-sm text-white/65 sm:flex-row sm:justify-between">
          <span>
            © <Year /> Benton Youth Initiative. A 501(c)(3) nonprofit organization.
          </span>
          <span>
            Designed by{' '}
            <a
              href="https://www.sitesonpolaris.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition"
            >
              Sites on Polaris
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
