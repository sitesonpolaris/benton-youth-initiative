import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Checks, Field, NetlifyForm, Select, TextArea } from "@/components/NetlifyForm";

export const metadata: Metadata = {
  title: "Apply",
  description: "Apply to the Benton Youth Initiative program for campus tours, mentoring, scholarships and college application support.",
};

const interests = ["Campus tours", "Academic support", "Scholarships and financial aid", "Mentorship", "Leadership development"];

export default function ApplyPage() {
  return (
    <>
      <PageHero
        title="Apply to BYI"
        intro="The first step toward college takes about five minutes. Tell us about yourself and we'll be in touch within a week."
        image="/images/campus-dining-hall.jpg"
        alt="BYI students during a college campus visit"
      />
      <section aria-labelledby="form-title" className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 id="form-title" className="text-4xl font-bold leading-tight text-navy sm:text-5xl">
              Your application
            </h2>
            <h3 className="mt-10 text-2xl font-bold text-navy">Who should apply</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-lg marker:text-gold-600">
              <li>High school students planning for college</li>
              <li>First-generation college students</li>
              <li>Students at Title I schools</li>
              <li>Students anywhere in the U.S. are welcome</li>
            </ul>
            <h3 className="mt-10 text-2xl font-bold text-navy">What happens next</h3>
            <p className="mt-3 text-lg">
              A BYI team member calls you and your parent or guardian to talk about your goals, then
              invites you to the next campus tour.
            </p>
          </div>
          <div className="lg:col-span-8">
            <NetlifyForm
              name="apply"
              submitLabel="Submit application"
              successTitle="Application received."
              successBody="Thank you for applying to BYI. We'll reach out within a week to talk about next steps."
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="First name" name="first-name" required autoComplete="given-name" />
                <Field label="Last name" name="last-name" required autoComplete="family-name" />
                <Field label="Email" name="email" type="email" required autoComplete="email" />
                <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
                <Field label="High school" name="high-school" required />
                <Select label="Grade" name="grade" required options={["9th grade", "10th grade", "11th grade", "12th grade", "Graduated"]} />
                <Field label="Parent or guardian name" name="guardian" />
                <Field label="Parent or guardian phone" name="guardian-phone" type="tel" />
              </div>
              <Checks legend="What are you interested in?" name="interests" options={interests} />
              <TextArea label="Tell us about your college goals" name="goals" />
            </NetlifyForm>
          </div>
        </div>
      </section>
    </>
  );
}
