"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { LotusDecoration } from "./LotusDecoration";
import { CloudTransition } from "./CloudTransition";
import { useImagePreloader } from "@/hooks/useImagePreloader";

const CRITICAL_IMAGES = [
  "/assets/img/hero/bg.avif",
  "/assets/img/hero/pagoda-tower.png",
  "/assets/img/hero/logo.png",
  "/assets/img/ui/about-sign-with-text.png",
];

export function SplashScreen() {
  const [phase, setPhase] = useState<"splash" | "clouds" | "done">("splash");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const { allLoaded } = useImagePreloader(CRITICAL_IMAGES);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setPrefersReducedMotion(true);
      setPhase("done");
      return;
    }

    // Lock scroll during splash
    document.body.style.overflow = "hidden";

    // Minimum splash duration for logo animation
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  // Trigger clouds once minimum time has passed AND images are loaded
  useEffect(() => {
    if (minTimeElapsed && allLoaded && phase === "splash") {
      setPhase("clouds");
    }
  }, [minTimeElapsed, allLoaded, phase]);

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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-950"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Central radial golden glow */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 50% 50% at 50% 50%, oklch(0.78 0.16 75 / 0.1), transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Corner lotus decorations */}
            <LotusDecoration
              size="lg"
              variant="gold"
              className="absolute top-8 left-8 opacity-15 animate-lotus-drift"
            />
            <LotusDecoration
              size="md"
              variant="gold"
              className="absolute top-8 right-8 opacity-10 animate-lotus-float"
            />
            <LotusDecoration
              size="md"
              variant="gold"
              className="absolute bottom-8 left-8 opacity-10 animate-lotus-float"
              style={{ animationDelay: "2s" }}
            />
            <LotusDecoration
              size="lg"
              variant="gold"
              className="absolute bottom-8 right-8 opacity-15 animate-lotus-drift"
              style={{ animationDelay: "1s" }}
            />

            {/* Logo fade-in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex flex-col items-center gap-6"
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
                className="section-heading text-xl font-semibold text-gold-400 sm:text-2xl"
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
