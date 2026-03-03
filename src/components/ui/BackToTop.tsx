"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold-400/60 bg-forest-950/80 text-gold-400 shadow-[0_0_20px_oklch(0.78_0.16_75/0.3),inset_0_0_8px_oklch(0.78_0.16_75/0.1)] backdrop-blur-sm transition-all duration-200 hover:border-gold-400 hover:bg-forest-950/90 hover:text-gold-300 hover:shadow-[0_0_30px_oklch(0.78_0.16_75/0.45),inset_0_0_12px_oklch(0.78_0.16_75/0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 touch-action-manipulation motion-reduce:transition-none"
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
