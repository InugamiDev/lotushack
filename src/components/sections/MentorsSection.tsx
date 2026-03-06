"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { LotusDecoration } from "@/components/ui/LotusDecoration";

const mentors = [
  "TingXi Tan",
  "Derek Zheng",
  "Gabriel Chua",
  "Robert Sherwood",
  "Louis Vichy",
  "Tuyen Le",
  "Hieu Nguyen",
  "Laura Nguyen",
  "Binh Tran",
  "Erik Jonsson",
  "Caroline Tran",
  "Vineet Agarwaal",
  "Duy Anh Nguyen",
  "Chelsea Ouyang",
  "Travis Fischer",
  "Minh Phuc Tran",
  "Tony Dinh",
  "Subrant Subrahmanya",
  "Son Le Thanh",
  "Sukone Hong",
  "Hao Tran",
  "Vinnie Lauria",
  "Valencia Queck",
  "Linh Pham",
  "Trung Nguyen",
  "Justine Mach",
];

/** Split the list into two rows for the marquee */
const mid = Math.ceil(mentors.length / 2);
const row1 = mentors.slice(0, mid);
const row2 = mentors.slice(mid);

function MarqueeRow({
  names,
  direction,
}: {
  names: string[];
  direction: "left" | "right";
}) {
  // Duplicate for seamless loop
  const items = [...names, ...names];

  return (
    <div className="relative overflow-hidden py-4">
      <div
        className={`flex w-max items-center gap-3 motion-reduce:animate-none ${
          direction === "left" ? "marquee-left" : "marquee-right"
        }`}
      >
        {items.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="shrink-0 whitespace-nowrap border-b border-transparent px-4 py-2 font-[family-name:var(--font-heading)] text-sm tracking-wide text-cream-50/60 transition-all duration-300 hover:border-gold-400/40 hover:text-gold-300 sm:text-base"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function MentorsSection() {
  return (
    <section id="mentors" className="relative overflow-hidden py-24 sm:py-36">
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/[0.04] blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/4 bottom-1/4 h-[300px] w-[400px] rounded-full bg-jade-500/[0.03] blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/3 h-[250px] w-[350px] rounded-full bg-lotus-400/[0.03] blur-[100px]"
        aria-hidden="true"
      />

      {/* Floating lotus decorations */}
      <LotusDecoration
        size="lg"
        variant="gold"
        className="pointer-events-none absolute left-[6%] top-[15%] opacity-[0.08] animate-lotus-drift-glow motion-reduce:animate-none"
      />
      <LotusDecoration
        size="md"
        variant="gold"
        className="pointer-events-none absolute right-[5%] bottom-[20%] opacity-[0.06] animate-lotus-float-glow motion-reduce:animate-none"
        style={{ animationDelay: "2.5s" }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <SectionReveal>
          <div className="flex flex-col items-center gap-3 text-center">
            <LotusDecoration size="md" variant="gold" />
            <h2 className="section-heading text-4xl font-bold tracking-[0.15em] text-cream-50 sm:text-5xl md:text-6xl">
              Special Thanks to Our Mentors
            </h2>
            <div className="mx-auto mt-4 h-px w-20 shimmer-gold" />
            <p className="mx-auto mt-3 max-w-2xl text-base text-text-secondary sm:text-lg">
              Industry leaders, founders, and engineers guiding you through 36
              hours of building.
            </p>
          </div>
        </SectionReveal>
      </div>

      {/* Marquee rows — full bleed */}
      <div className="mt-14 space-y-1">
        {/* Top decorative line */}
        <div className="mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

        <MarqueeRow names={row1} direction="left" />

        {/* Middle decorative line */}
        <div className="mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-gold-400/10 to-transparent" />

        <MarqueeRow names={row2} direction="right" />

        {/* Bottom decorative line */}
        <div className="mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      </div>
    </section>
  );
}
