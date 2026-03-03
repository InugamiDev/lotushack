"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { RotatingWords } from "@/components/ui/RotatingWords";
import { REGISTER_URL, DISCORD_URL } from "@/lib/constants";

const HERO_WORDS = [
  "builders",
  "innovators",
  "creators",
  "dreamers",
  "hackers",
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const pagodaY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const lanternY1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const lanternY2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* Floating lanterns with golden glow */}
      <motion.div
        className="pointer-events-none absolute left-[10%] top-[15%] z-0 animate-lantern-sway opacity-50 drop-shadow-[0_0_12px_oklch(0.78_0.16_75/0.4)]"
        aria-hidden="true"
        style={reducedMotion ? undefined : { y: lanternY1 }}
      >
        <Image
          src="/assets/img/hero/lantern.png"
          alt=""
          width={60}
          height={100}
          className="h-auto w-auto"
          aria-hidden="true"
        />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[12%] top-[20%] z-0 animate-float-slow opacity-60 drop-shadow-[0_0_12px_oklch(0.78_0.16_75/0.4)]"
        aria-hidden="true"
        style={reducedMotion ? undefined : { y: lanternY2 }}
      >
        <Image
          src="/assets/img/hero/lantern.png"
          alt=""
          width={48}
          height={80}
          className="h-auto w-auto"
          aria-hidden="true"
        />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute left-[25%] top-[8%] z-0 animate-float-medium opacity-30 drop-shadow-[0_0_12px_oklch(0.78_0.16_75/0.4)]"
        aria-hidden="true"
        style={reducedMotion ? undefined : { y: lanternY1 }}
      >
        <Image
          src="/assets/img/hero/lantern.png"
          alt=""
          width={36}
          height={60}
          className="h-auto w-auto"
          aria-hidden="true"
        />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-[30%] top-[12%] z-0 animate-lantern-sway opacity-35 drop-shadow-[0_0_12px_oklch(0.78_0.16_75/0.4)]"
        style={
          reducedMotion
            ? { animationDelay: "1.5s" }
            : { animationDelay: "1.5s", y: lanternY2 }
        }
        aria-hidden="true"
      >
        <Image
          src="/assets/img/hero/lantern.png"
          alt=""
          width={42}
          height={70}
          className="h-auto w-auto"
          aria-hidden="true"
        />
      </motion.div>

      {/* Layered celestial glow orbs */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/15 blur-[100px] animate-celestial-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[40%] z-0 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-600/10 blur-[80px] animate-celestial-glow"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-[30%] top-[45%] z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-jade-500/8 blur-[60px] animate-celestial-glow"
        style={{ animationDelay: "4s" }}
        aria-hidden="true"
      />

      {/* Dragon silhouette — absolute, large, black filter */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 z-[1] w-[500px] -translate-x-1/2 -translate-y-1/2 sm:w-[700px] md:w-[900px] lg:w-[1100px]"
        style={reducedMotion ? undefined : { y: contentY }}
        aria-hidden="true"
      >
        <Image
          src="/assets/img/hero/dragon-hack.png"
          alt=""
          width={1024}
          height={1024}
          priority
          className="h-auto w-full object-contain brightness-0 opacity-30"
          sizes="(max-width: 640px) 500px, (max-width: 768px) 700px, (max-width: 1024px) 900px, 1100px"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 px-6 text-center"
        style={reducedMotion ? undefined : { y: contentY }}
      >
        {/* Title */}
        <h1
          className="section-heading text-5xl font-bold tracking-[0.05em] text-cream-50 sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ textWrap: "balance" }}
        >
          LOTUS
          <span className="text-celestial-gold">HACK</span>
        </h1>

        {/* Subtitle */}
        <p className="font-[family-name:var(--font-heading)] text-sm font-medium uppercase tracking-[0.2em] text-cream-100/60 sm:text-base">
          Presented by LotusHacks &times; HackHarvard
        </p>

        {/* Date */}
        <p className="font-[family-name:var(--font-heading)] text-lg tracking-[0.1em] text-gold-400 sm:text-xl">
          Mar 20&ndash;22, 2026
        </p>

        {/* Tagline */}
        <p
          className="max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl"
          style={{ textWrap: "balance" }}
        >
          Join 600+{" "}
          <RotatingWords
            words={HERO_WORDS}
            className="text-gold-400 font-semibold"
          />{" "}
          in shaping a defining moment for SE Asia&apos;s builder community.
        </p>

        {/* Countdown */}
        <CountdownTimer />

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href={REGISTER_URL}
            className="btn-register inline-flex min-h-[2.625rem] items-center justify-center px-8 py-4 text-base font-semibold text-gold-400 hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 touch-action-manipulation transition-colors duration-300"
          >
            <span className="brush-bg" aria-hidden="true" />
            <span className="relative font-[family-name:var(--font-heading)] tracking-wide">
              Register Now
            </span>
          </a>
          <a
            href="#about"
            className="inline-flex min-h-[2.625rem] items-center justify-center rounded-lg border border-gold-400/40 px-8 py-4 font-[family-name:var(--font-heading)] text-base font-semibold tracking-wide text-gold-400 transition-colors duration-200 hover:border-gold-400 hover:bg-gold-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 touch-action-manipulation"
          >
            Learn More
          </a>
        </div>

        {/* Discord link */}
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-2 inline-flex items-center gap-2 text-base text-cream-100/50 transition-colors duration-200 hover:text-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 rounded-sm"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
          </svg>
          <span className="underline decoration-transparent underline-offset-4 transition-all duration-200 group-hover:decoration-gold-400/50">
            Join our Discord
          </span>
        </a>
      </motion.div>
    </section>
  );
}
