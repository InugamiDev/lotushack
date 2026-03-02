"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export type AnimationVariant =
  | "fade-up"
  | "slide-left"
  | "slide-right"
  | "fade-scale"
  | "slide-up";

const itemVariants: Record<
  AnimationVariant,
  { hidden: Record<string, number>; visible: Record<string, number> }
> = {
  "fade-up": {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-scale": {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
};

type StaggerRevealProps = {
  children: ReactNode[];
  staggerDelay?: number;
  variant?: AnimationVariant;
  className?: string;
};

export function StaggerReveal({
  children,
  staggerDelay = 0.1,
  variant = "fade-up",
  className,
}: StaggerRevealProps) {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const item = {
    hidden: itemVariants[variant].hidden,
    visible: {
      ...itemVariants[variant].visible,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children.map((child, i) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
