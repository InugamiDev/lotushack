"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import type { Sponsor } from "@/data/sponsors";
import { cn } from "@/lib/utils";

type SponsorCarouselProps = {
  sponsors: Sponsor[];
};

const INTERVAL_MS = 6000;

export function SponsorCarousel({ sponsors }: SponsorCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const paused = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const count = sponsors.length;
  const current = sponsors[index];

  const go = useCallback(
    (next: number) => {
      setDirection(next > index ? 1 : -1);
      setIndex(next);
    },
    [index],
  );

  const next = useCallback(
    () => go((index + 1) % count),
    [go, index, count],
  );

  const prev = useCallback(
    () => go((index - 1 + count) % count),
    [go, index, count],
  );

  // Auto-advance
  useEffect(() => {
    const tick = () => {
      if (!paused.current) next();
    };
    timerRef.current = setInterval(tick, INTERVAL_MS);
    return () => clearInterval(timerRef.current);
  }, [next]);

  // Pause on tab hidden
  useEffect(() => {
    const onVisibility = () => {
      paused.current = document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // Keyboard nav
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    },
    [prev, next],
  );

  const logoSrc = current.lightLogo ?? current.logo;
  const isSvg = logoSrc.endsWith(".svg");

  const slideVariants = {
    enter: (d: number) => ({ opacity: 0, x: d * 60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -60 }),
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured sponsors"
      className="relative"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
      onKeyDown={onKeyDown}
    >
      <div className="overflow-hidden rounded-2xl border border-gold-400/[0.12] bg-forest-950/30 shadow-[0_0_30px_oklch(0.78_0.16_75/0.06)] backdrop-blur-sm">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.name}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col items-center gap-8 px-8 py-10 sm:flex-row sm:px-12 sm:py-12 motion-reduce:transition-none"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${count}: ${current.name}`}
          >
            {/* Logo */}
            <div className="flex w-full shrink-0 items-center justify-center sm:w-2/5">
              <a
                href={current.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${current.name}`}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 rounded-lg"
              >
                <Image
                  src={logoSrc}
                  alt={current.name}
                  width={current.width}
                  height={current.height}
                  unoptimized={isSvg}
                  className="h-auto max-h-24 w-auto max-w-[280px] object-contain transition-all duration-200"
                />
              </a>
            </div>

            {/* Description */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold tracking-wide text-cream-50 sm:text-xl">
                {current.name}
              </h3>
              {current.description && (
                <p className="mt-3 text-base leading-relaxed text-text-secondary">
                  {current.description}
                </p>
              )}
              <a
                href={current.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold-400 transition-colors duration-200 hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 rounded-sm"
              >
                Learn more
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-4">
        {/* Prev */}
        <button
          onClick={prev}
          aria-label="Previous sponsor"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle/50 text-text-muted transition-all duration-200 hover:border-gold-400/40 hover:text-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2" role="tablist" aria-label="Sponsor slides">
          {sponsors.map((s, i) => (
            <button
              key={s.name}
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to ${s.name}`}
              onClick={() => go(i)}
              className={cn(
                "h-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400",
                i === index
                  ? "w-6 bg-gold-400"
                  : "w-2 bg-text-muted/30 hover:bg-text-muted/50",
              )}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          aria-label="Next sponsor"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle/50 text-text-muted transition-all duration-200 hover:border-gold-400/40 hover:text-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
