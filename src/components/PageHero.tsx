import Image from "next/image";

export function PageHero({
  title,
  intro,
  image,
  alt,
  position = "center",
}: {
  title: string;
  intro: string;
  image: string;
  alt: string;
  position?: string;
}) {
  return (
    <section className="relative isolate flex min-h-[70svh] items-end overflow-hidden bg-midnight text-white">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="-z-10 object-cover" style={{ objectPosition: position }} />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-midnight/60" />
      <div className="mx-auto w-full max-w-[90rem] px-5 pb-20 pt-36 sm:px-8 lg:px-12 lg:pb-24">
        <h1 data-reveal className="display max-w-5xl text-[4rem] sm:text-8xl lg:text-[8.5rem]">
          {title}
        </h1>
        <p data-reveal style={{ "--i": 1 } as React.CSSProperties} className="mt-6 max-w-2xl text-xl text-white/95 sm:text-2xl">
          {intro}
        </p>
      </div>
    </section>
  );
}
