"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import type { AnimationVariant } from "./StaggerReveal";

const variantMap: Record<
  AnimationVariant,
  {
    initial: Record<string, number>;
    whileInView: Record<string, number>;
  }
> = {
  "fade-up": {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
  },
  "slide-left": {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
  },
  "slide-right": {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
  },
  "fade-scale": {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
  },
  "slide-up": {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
  },
};

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: AnimationVariant;
};

export function SectionReveal({
  children,
  className,
  delay = 0,
  variant = "fade-up",
}: SectionRevealProps) {
  const v = variantMap[variant];

  return (
    <motion.div
      initial={v.initial}
      whileInView={v.whileInView}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
