"use client";

import { useCallback, useRef } from "react";
import { motion } from "motion/react";

const SEGMENT_COUNT = 400;
const STAGGER = 0.002;

type CloudTransitionProps = {
  onComplete: () => void;
};

/**
 * Each segment is a full-height slab with wavy top & bottom edges.
 * The shape spans the entire viewBox so there are zero gaps.
 * Only the very top and bottom boundaries are wavy — the body is solid.
 */
function buildCloudPath(index: number): string {
  const W = 1600;
  const H = 100;
  const steps = 12;
  const dx = W / steps;

  const s = (index * 17 + 3) % 37;

  // Wavy top edge: oscillates between y=0 and y=~18
  let top = `M0 ${(s * 3) % 12}`;
  for (let i = 1; i <= steps; i++) {
    const cpx = dx * i - dx / 2;
    const cpy = (s * i * 7 + i * 11) % 18;
    const x = dx * i;
    const y = (s * i * 11 + i * 5) % 14;
    top += ` Q${cpx} ${cpy},${x} ${y}`;
  }

  // Wavy bottom edge (right-to-left): oscillates between y=H and y=~H-18
  let bottom = ` L${W} ${H - ((s * 2) % 12)}`;
  for (let i = steps - 1; i >= 0; i--) {
    const cpx = dx * i + dx / 2;
    const cpy = H - ((s * i * 5 + i * 7) % 18);
    const x = dx * i;
    const y = H - ((s * i * 3 + i * 9) % 14);
    bottom += ` Q${cpx} ${cpy},${x} ${y}`;
  }

  return `${top}${bottom} Z`;
}

/** Inline SVG data URI for use as CSS mask */
function buildMaskUri(index: number): string {
  const path = buildCloudPath(index);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 100' preserveAspectRatio='none'><path d='${path}' fill='white'/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}

const GRADIENT =
  "linear-gradient(to bottom, oklch(0.12 0.03 155), oklch(0 0 0))";

export function CloudTransition({ onComplete }: CloudTransitionProps) {
  const completedRef = useRef(false);

  const handleComplete = useCallback(() => {
    if (!completedRef.current) {
      completedRef.current = true;
      onComplete();
    }
  }, [onComplete]);

  const segments = Array.from({ length: SEGMENT_COUNT }, (_, i) => {
    const slidesLeft = i % 2 === 0;
    const heightPercent = 100 / SEGMENT_COUNT;
    // Generous overlap so wavy edges always overlap the neighbor
    const overlap = 0.25;

    return {
      index: i,
      top: `${i * heightPercent - overlap}%`,
      height: `${heightPercent + overlap * 2}%`,
      x: slidesLeft ? "-110vw" : "110vw",
      delay: i * STAGGER,
    };
  });

  const lastIndex = SEGMENT_COUNT - 1;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[99] overflow-hidden"
      aria-hidden="true"
    >
      {segments.map((seg) => (
        <motion.div
          key={seg.index}
          className="absolute left-0 w-screen"
          style={{
            top: seg.top,
            height: seg.height,
            background: GRADIENT,
            backgroundAttachment: "fixed",
            WebkitMaskImage: buildMaskUri(seg.index),
            WebkitMaskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskImage: buildMaskUri(seg.index),
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
          }}
          initial={{ x: 0 }}
          animate={{ x: seg.x }}
          transition={{
            duration: 0.7,
            ease: [0.4, 0, 0.2, 1],
            delay: seg.delay,
          }}
          onAnimationComplete={
            seg.index === lastIndex ? handleComplete : undefined
          }
        />
      ))}
    </div>
  );
}
