"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { FAQItem } from "@/data/faq";

type AccordionItemProps = {
  item: FAQItem;
};

export function AccordionItem({ item }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gold-400/15">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors duration-200 hover:text-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 rounded-sm touch-action-manipulation"
        aria-expanded={open}
      >
        <span className="font-[family-name:var(--font-heading)] text-base font-medium text-cream-50 sm:text-lg">
          {item.question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`h-5 w-5 shrink-0 text-gold-400/40 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-relaxed text-cream-50/85">
              {item.answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
