import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Field, NetlifyForm, TextArea } from "@/components/NetlifyForm";
import { TopicSelect } from "@/components/TopicSelect";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact",
  description: "Contact Benton Youth Initiative about student support, partnerships, volunteering, events or donations.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact BYI"
        intro="Parents, students, schools, churches and supporters: we'd love to hear from you."
        image="/images/hall-group.jpg"
        alt="A large group of BYI students and mentors gathered in a banquet hall"
      />
      <section aria-labelledby="contact-title" className="py-24 lg:py-36">
        <div className="mx-auto grid max-w-[90rem] gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 id="contact-title" className="display text-6xl text-navy sm:text-7xl">
              Reach us directly
            </h2>
            <dl className="mt-8 space-y-6 text-lg">
              <div>
                <dt className="font-heading font-bold text-navy">Call</dt>
                <dd><a className="text-2xl font-semibold underline decoration-gold decoration-4 underline-offset-4" href={site.phoneHref}>{site.phone}</a></dd>
              </div>
              <div>
                <dt className="font-heading font-bold text-navy">Email</dt>
                <dd><a className="break-all underline decoration-gold decoration-2 underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a></dd>
              </div>
              <div>
                <dt className="font-heading font-bold text-navy">Follow</dt>
                <dd className="flex gap-5">
                  <a className="underline decoration-gold decoration-2 underline-offset-4" href={site.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
                  <a className="underline decoration-gold decoration-2 underline-offset-4" href={site.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-8">
            <NetlifyForm
              name="contact"
              submitLabel="Send message"
              successTitle="Message sent."
              successBody="Thanks for reaching out. A member of the BYI team will get back to you soon."
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="First name" name="first-name" required autoComplete="given-name" />
                <Field label="Last name" name="last-name" required autoComplete="family-name" />
                <Field label="Email" name="email" type="email" required autoComplete="email" />
                <Field label="Phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <TopicSelect />
              <TextArea label="Your message" name="message" required />
            </NetlifyForm>
          </div>
        </div>
      </section>
    </>
  );
}
