"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { LotusDecoration } from "./LotusDecoration";
import { CloudTransition } from "./CloudTransition";

export function SplashScreen() {
  const [phase, setPhase] = useState<"splash" | "clouds" | "done">("splash");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setPrefersReducedMotion(true);
      setPhase("done");
      return;
    }

    // Lock scroll during splash
    document.body.style.overflow = "hidden";

    // After logo fade-in (600ms) + hold (1900ms) = 2500ms, trigger clouds
    const timer = setTimeout(() => {
      setPhase("clouds");
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const handleCloudComplete = useCallback(() => {
    setPhase("done");
    document.body.style.overflow = "";
  }, []);

  if (prefersReducedMotion || phase === "done") return null;

  return (
    <>
      <AnimatePresence>
        {phase === "splash" && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-cream-100"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Corner lotus decorations */}
            <LotusDecoration
              size="lg"
              variant="muted"
              className="absolute top-8 left-8 opacity-20 animate-lotus-drift"
            />
            <LotusDecoration
              size="md"
              variant="muted"
              className="absolute top-8 right-8 opacity-15 animate-lotus-float"
            />
            <LotusDecoration
              size="md"
              variant="muted"
              className="absolute bottom-8 left-8 opacity-15 animate-lotus-float"
              style={{ animationDelay: "2s" }}
            />
            <LotusDecoration
              size="lg"
              variant="muted"
              className="absolute bottom-8 right-8 opacity-20 animate-lotus-drift"
              style={{ animationDelay: "1s" }}
            />

            {/* Logo fade-in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center gap-6"
            >
              <Image
                src="/assets/img/hero/logo.png"
                alt="LotusHack"
                width={120}
                height={120}
                priority
                className="h-28 w-28 sm:h-32 sm:w-32"
              />
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="section-heading text-xl font-semibold text-sienna-600 sm:text-2xl"
              >
                LotusHack 2026
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {phase === "clouds" && (
        <CloudTransition onComplete={handleCloudComplete} />
      )}
    </>
  );
}
