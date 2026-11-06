"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hero loop. The <video> is emitted as raw HTML so `muted` is server-rendered (iOS needs it).
 * Starts paused under reduced motion, pauses off-screen, and keeps a visitor's pause.
 */
export function HeroVideo() {
  const wrap = useRef<HTMLDivElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const v = wrap.current?.querySelector("video");
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      userPaused.current = true;
      v.pause();
      setPlaying(false);
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !userPaused.current) v.play().catch(() => setPlaying(false));
      else v.pause();
    });
    io.observe(v);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    return () => {
      io.disconnect();
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, []);

  function toggle() {
    const v = wrap.current?.querySelector("video");
    if (!v) return;
    if (v.paused) {
      userPaused.current = false;
      v.play();
    } else {
      userPaused.current = true;
      v.pause();
    }
  }

  return (
    <>
      <div
        ref={wrap}
        className="absolute inset-0 [&_video]:h-full [&_video]:w-full [&_video]:object-cover"
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<video autoplay muted loop playsinline preload="metadata" poster="/video/hero-poster.jpg">
  <source src="/video/hero-mobile.mp4" type="video/mp4" media="(max-width: 860px)">
  <source src="/video/hero.mp4" type="video/mp4">
</video>`,
        }}
      />
      <button
        type="button"
        onClick={toggle}
        className="absolute bottom-6 right-5 z-20 flex items-center gap-2 bg-midnight/70 px-4 py-2.5 font-heading text-sm font-bold text-white transition-colors hover:bg-midnight sm:right-8 lg:right-12"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" fill="currentColor">
          {playing ? <path d="M2 1h3.5v12H2zM8.5 1H12v12H8.5z" /> : <path d="M2.5 1l10 6-10 6z" />}
        </svg>
        {playing ? "Pause video" : "Play video"}
      </button>
    </>
  );
}
