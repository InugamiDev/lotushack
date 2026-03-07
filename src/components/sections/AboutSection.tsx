"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { SectionReveal } from "@/components/ui/SectionReveal";

import { StatCard } from "@/components/ui/StatCard";
import { stats } from "@/data/stats";

function useSimpleLayout() {
  const [simple, setSimple] = useState(true); // SSR default: simple
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setSimple(isMobile || prefersReduced);
  }, []);
  return simple;
}

/** Left panel — sign image on desktop, text content on mobile */
function AboutSignPanel() {
  return (
    <>
      {/* Desktop: about sign image — scales with viewport, overflows container */}
      <div className="relative hidden overflow-visible lg:flex lg:items-start lg:justify-start lg:-ml-20 lg:-mt-16 xl:-ml-28 xl:-mt-20" style={{ height: "170vh" }}>
        <Image
          src="/assets/img/ui/about-sign-arrow.png"
          alt="Welcome to LotusHacks x HackHarvard Vietnam, the largest 36-hour hackathon in Vietnam."
          width={2048}
          height={3072}
          className="relative h-full w-auto max-w-none object-contain"
          sizes="(min-width: 1024px) 60vw, 50vw"
          priority
        />
      </div>

      {/* Mobile: text content */}
      <div className="flex flex-col items-center text-center lg:hidden">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold uppercase tracking-wider text-cream-50 sm:text-3xl">
          Welcome to
        </h2>
        <p className="mt-2 font-[family-name:var(--font-heading)] text-lg font-semibold tracking-wide text-gold-400 sm:text-xl">
          LotusHacks x HackHarvard Vietnam
        </p>

        <div
          className="mt-4 h-px w-40 sm:w-48"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-gold-400), transparent)",
          }}
          aria-hidden="true"
        />

        <p className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary">
          The largest 36-hour hackathon in Vietnam. We&rsquo;re bringing
          together 800+ builders, creators, and hackers to Ho Chi Minh City to
          build bold ideas. Over one weekend, collaborate, learn from top
          mentors, and connect with engineers and founders from leading tech
          companies.
        </p>

        <p className="mt-4 max-w-lg text-base leading-relaxed text-text-secondary">
          Whether you&rsquo;re a seasoned developer or just curious about tech,
          LotusHacks x HackHarvard is your launchpad. We handle
          everything&nbsp;&mdash; you focus on building. Join us in Vietnam and
          build what&rsquo;s next.
        </p>
      </div>
    </>
  );
}

/** Single scroll-driven card — enters from bottom, travels up and exits out the top */
function ScrollCard({
  index,
  scrollYProgress,
}: {
  index: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const stat = stats[index];
  const total = stats.length;
  const isLast = index === total - 1;

  // Each card occupies a segment of the scroll range
  const segSize = 0.9 / total;
  const start = 0.05 + index * segSize;
  const center = start + segSize * 0.5;
  const end = start + segSize;

  // Continuous upward travel: bottom (300px) → center (0) → top (-300px)
  // Last card stops at center
  const y = useTransform(
    scrollYProgress,
    isLast ? [start, center] : [start, center, end],
    isLast ? [300, 0] : [300, 0, -300],
  );

  // Opacity: fade in on enter, fade out on exit (last card stays)
  const opacity = useTransform(
    scrollYProgress,
    isLast
      ? [start, start + segSize * 0.3]
      : [start, start + segSize * 0.3, end - segSize * 0.3, end],
    isLast ? [0, 1] : [0, 1, 1, 0],
  );

  // Scale: grow in, shrink out (last card stays full)
  const scale = useTransform(
    scrollYProgress,
    isLast
      ? [start, start + segSize * 0.3]
      : [start, start + segSize * 0.3, end - segSize * 0.3, end],
    isLast ? [0.85, 1] : [0.85, 1, 1, 0.85],
  );

  return (
    <motion.div
      className="absolute w-80 sm:w-96 lg:w-100"
      style={{ y, opacity, scale }}
    >
      <StatCard stat={stat} index={index} />
    </motion.div>
  );
}

/** Desktop scroll-pinned experience */
function PinnedAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Progress bar: fills up, then fades out at the end
  const progressWidth = useTransform(
    scrollYProgress,
    [0, 0.92],
    ["0%", "100%"],
  );
  const progressOpacity = useTransform(scrollYProgress, [0.88, 1], [1, 0]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative"
      style={{ height: "1000vh" }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-visible">
        {/* Subtle gold glow orb behind cards */}
        <div
          className="pointer-events-none absolute right-[15%] top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-gold-400/[0.06] blur-[80px]"
          aria-hidden="true"
        />

        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          {/* Left: about sign image */}
          <div className="flex items-center">
            <AboutSignPanel />
          </div>

          {/* Right: one-at-a-time scroll-driven cards */}
          <div className="relative flex items-center justify-center">
            {/* Reserve space for the card aspect ratio */}
            <div
              className="w-64 sm:w-72 lg:w-96"
              style={{ aspectRatio: "5/7" }}
            />
            {stats.map((_, i) => (
              <ScrollCard
                key={stats[i].title}
                index={i}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Gold progress bar at bottom — fades out when done */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gold-400/40"
          style={{ width: progressWidth, opacity: progressOpacity }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

/** Mobile / reduced-motion fallback — simple stacked layout */
function SimpleAbout() {
  return (
    <section id="about" className="py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal variant="fade-up">
          <AboutSignPanel />
        </SectionReveal>

        <SectionReveal variant="slide-up" delay={0.15}>
          <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-6">
            {stats.map((stat, i) => (
              <div key={stat.title} className="w-[80vw] sm:w-48 lg:w-52">
                <SectionReveal variant="slide-up" delay={0.1 + i * 0.08}>
                  <StatCard stat={stat} index={i} />
                </SectionReveal>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export function AboutSection() {
  const useSimple = useSimpleLayout();
  return useSimple ? <SimpleAbout /> : <PinnedAbout />;
}
