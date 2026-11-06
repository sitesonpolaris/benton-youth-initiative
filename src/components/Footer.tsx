import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { Year } from "@/components/Year";

export function Footer() {
  return (
    <footer className="bg-midnight text-white">
      <div className="mx-auto max-w-[90rem] px-5 pb-10 pt-24 sm:px-8 lg:px-12">
        <p aria-hidden="true" className="display select-none text-[17vw] text-navy-600 lg:text-[12.5rem]">
          Bound for campus.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4">
              <Image src="/images/byi-crest.png" alt="Benton Youth Initiative crest" width={76} height={76} />
              <p className="display text-3xl">
                Benton Youth
                <br /> Initiative
              </p>
            </div>
            <p className="mt-6 max-w-sm text-white/80">
              A North Carolina nonprofit getting first-generation students onto HBCU campuses, into
              college and across the stage.
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="font-heading text-lg font-bold text-gold">Explore</h2>
            <ul className="mt-4 space-y-2 text-white/85">
              <li><Link className="hover:text-gold" href="/about">About BYI</Link></li>
              <li><Link className="hover:text-gold" href="/about#board">Board</Link></li>
              <li><Link className="hover:text-gold" href="/events">Events</Link></li>
              <li><Link className="hover:text-gold" href="/apply">Apply</Link></li>
              <li><Link className="hover:text-gold" href="/#donate">Donate</Link></li>
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="font-heading text-lg font-bold text-gold">Get in touch</h2>
            <ul className="mt-4 space-y-2 text-white/85">
              <li><a className="hover:text-gold" href={site.phoneHref}>{site.phone}</a></li>
              <li><a className="break-all hover:text-gold" href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><Link className="hover:text-gold" href="/contact">Send us a message</Link></li>
            </ul>
            <ul className="mt-6 flex gap-5">
              <li>
                <a className="hover:text-gold" href={site.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
              </li>
              <li>
                <a className="hover:text-gold" href={site.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 text-sm text-white/65 sm:flex-row sm:justify-between">
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
