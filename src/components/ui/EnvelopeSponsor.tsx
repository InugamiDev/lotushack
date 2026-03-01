"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";

type EnvelopeSponsorProps = {
  children: ReactNode;
};

export function EnvelopeSponsor({ children }: EnvelopeSponsorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative mx-auto max-w-4xl" style={{ perspective: "800px" }}>
      {/* Envelope body */}
      <div className="relative overflow-hidden rounded-b-2xl bg-cream-100 shadow-lg">
        {/* Top flap */}
        <motion.div
          className="relative z-10 origin-top bg-cream-200"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            height: "clamp(60px, 12vw, 120px)",
          }}
          initial={{ rotateX: 0 }}
          animate={inView ? { rotateX: -180 } : { rotateX: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
        >
          {/* Heading on envelope face */}
          <div className="flex h-full items-start justify-center pt-[15%]">
            <span className="section-heading text-sm font-semibold text-sienna-600 sm:text-base">
              Our Sponsors
            </span>
          </div>
        </motion.div>

        {/* Sponsor logos inside envelope */}
        <motion.div
          className="relative z-0 -mt-2 px-6 py-8 sm:px-8 sm:py-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
