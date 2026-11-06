import Image from "next/image";

export function PageHero({
  title,
  intro,
  image,
  alt,
}: {
  title: string;
  intro: string;
  image?: string;
  alt?: string;
}) {
  return (
    <section className="bg-navy text-white lg:chevron-bottom">
      <div className="mx-auto grid max-w-7xl items-end gap-10 px-5 pb-16 pt-14 sm:px-8 lg:grid-cols-12 lg:pb-[calc(5rem+3.5vw)] lg:pt-20">
        <div className={image ? "lg:col-span-6" : "lg:col-span-9"}>
          <h1 data-reveal className="text-5xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-7xl">
            {title}
          </h1>
          <p data-reveal style={{ "--i": 1 } as React.CSSProperties} className="mt-6 max-w-xl text-xl text-white/90 sm:text-[1.375rem]">
            {intro}
          </p>
        </div>
        {image && (
          <div className="relative aspect-[4/3] overflow-hidden lg:col-span-6">
            <Image src={image} alt={alt ?? ""} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="hero-photo object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
