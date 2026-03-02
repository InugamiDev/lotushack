"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

type RotatingWordsProps = {
  words: string[];
  interval?: number;
  className?: string;
};

export function RotatingWords({
  words,
  interval = 2500,
  className,
}: RotatingWordsProps) {
  const [index, setIndex] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % words.length);
  }, [words.length]);

  useEffect(() => {
    if (isReducedMotion) return;

    let timer: ReturnType<typeof setInterval>;

    const startCycling = () => {
      timer = setInterval(advance, interval);
    };

    const handleVisibility = () => {
      if (document.hidden) {
        clearInterval(timer);
      } else {
        startCycling();
      }
    };

    startCycling();
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [advance, interval, isReducedMotion]);

  if (isReducedMotion) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span className="inline-block min-w-[7ch] text-center align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={`inline-block ${className ?? ""}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
