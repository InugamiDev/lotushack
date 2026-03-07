"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useCountdown } from "@/hooks/useCountdown";
import {
  EVENT_END,
  EVENT_LOCATION,
  REGISTER_URL,
  DISCORD_URL,
} from "@/lib/constants";
import { pad } from "@/lib/utils";
import { schedule, categoryColors } from "@/data/schedule";
import type { EventCategory } from "@/data/schedule";
import { TimelineEvent } from "@/components/ui/TimelineEvent";
import { LotusDecoration } from "@/components/ui/LotusDecoration";

const categoryMeta: Record<EventCategory, { label: string; dot: string }> = {
  ceremony: { label: "Ceremony", dot: "bg-gold-400" },
  workshop: { label: "Workshop", dot: "bg-lotus-400" },
  meal: { label: "Meal", dot: "bg-jade-400" },
  hacking: { label: "Hacking", dot: "bg-forest-700 ring-1 ring-forest-600" },
  judging: { label: "Judging", dot: "bg-gold-400" },
};

function CountdownUnit({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <span
        className="min-w-[2.5rem] text-center font-mono text-3xl font-bold tabular-nums text-gold-400 sm:min-w-[3.5rem] sm:text-5xl"
        style={{ textShadow: "0 0 24px oklch(0.78 0.16 75 / 0.4)" }}
      >
        {value}
      </span>
      <span className="font-[family-name:var(--font-heading)] text-[0.625rem] font-medium uppercase tracking-[0.2em] text-text-muted sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState(0);
  const { days, hours, minutes, seconds, mounted } = useCountdown(EVENT_END);
  const ph = "--";

  return (
    <>
      {/* Fixed background — same as main site */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-[center_75%]"
        style={{ backgroundImage: "url('/assets/img/hero/bg.avif')" }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-forest-950/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-gold-400/[0.04] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-jade-600/[0.05] via-transparent to-transparent" />
        {/* Central radial golden haze */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 20%, oklch(0.78 0.16 75 / 0.05), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen">
        {/* ── Floating lotus decorations ── */}
        <LotusDecoration
          size="lg"
          variant="gold"
          className="pointer-events-none fixed right-[6%] top-[15%] z-0 opacity-[0.07] animate-lotus-drift-glow drop-shadow-[0_0_10px_oklch(0.78_0.16_75/0.4)] motion-reduce:animate-none"
        />
        <LotusDecoration
          size="md"
          variant="gold"
          className="pointer-events-none fixed left-[4%] top-[40%] z-0 opacity-[0.05] animate-lotus-float-glow drop-shadow-[0_0_8px_oklch(0.78_0.16_75/0.3)] motion-reduce:animate-none"
          style={{ animationDelay: "2.5s" }}
        />
        <LotusDecoration
          size="lg"
          variant="gold"
          className="pointer-events-none fixed left-[8%] bottom-[20%] z-0 opacity-[0.06] animate-lotus-drift-glow drop-shadow-[0_0_10px_oklch(0.78_0.16_75/0.4)] motion-reduce:animate-none"
          style={{ animationDelay: "4s" }}
        />
        <LotusDecoration
          size="md"
          variant="gold"
          className="pointer-events-none fixed right-[5%] bottom-[35%] z-0 opacity-[0.04] animate-lotus-float-glow drop-shadow-[0_0_8px_oklch(0.78_0.16_75/0.3)] motion-reduce:animate-none"
          style={{ animationDelay: "1s" }}
        />

        {/* ── Minimal header ── */}
        <motion.header
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10 flex items-center justify-between px-4 py-4 sm:px-8"
        >
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
          >
            <Image
              src="/assets/img/hero/logo.png"
              alt="LotusHacks logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="font-[family-name:var(--font-heading)] text-lg font-semibold tracking-wide text-cream-50 hidden sm:inline">
              LotusHack
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-gold-400/20 px-4 py-2.5 font-[family-name:var(--font-heading)] text-sm font-medium tracking-wide text-cream-100/60 transition-all duration-200 hover:border-gold-400/50 hover:text-gold-400 hover:shadow-[0_0_12px_oklch(0.78_0.16_75/0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back Home
          </Link>
        </motion.header>

        {/* ── Hero strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative z-10 px-4 pb-10 pt-8 text-center sm:pt-12"
        >
          <h1 className="section-heading text-4xl font-bold text-cream-50 sm:text-5xl md:text-6xl">
            LOTUS
            <span className="text-celestial-gold">HACK</span>
            {" "}2026
          </h1>

          {/* Live badge + location */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-cream-100/50">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-red-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              Live
            </span>
            <span aria-hidden="true" className="text-gold-400/30">&middot;</span>
            <span className="font-[family-name:var(--font-heading)] tracking-wide">
              {EVENT_LOCATION}
            </span>
          </div>

          {/* Countdown */}
          <div
            className="mt-8"
            role="timer"
            aria-live="polite"
            aria-label="Countdown until hacking ends"
          >
            <div className="flex items-start justify-center gap-3 sm:gap-5">
              <CountdownUnit value={mounted ? pad(days) : ph} label="Days" />
              <span
                className="self-start pt-1 font-mono text-2xl font-bold text-gold-400/30 sm:pt-2 sm:text-4xl"
                aria-hidden="true"
              >
                :
              </span>
              <CountdownUnit value={mounted ? pad(hours) : ph} label="Hours" />
              <span
                className="self-start pt-1 font-mono text-2xl font-bold text-gold-400/30 sm:pt-2 sm:text-4xl"
                aria-hidden="true"
              >
                :
              </span>
              <CountdownUnit value={mounted ? pad(minutes) : ph} label="Min" />
              <span
                className="self-start pt-1 font-mono text-2xl font-bold text-gold-400/30 sm:pt-2 sm:text-4xl"
                aria-hidden="true"
              >
                :
              </span>
              <CountdownUnit value={mounted ? pad(seconds) : ph} label="Sec" />
            </div>
            <p className="mt-3 font-[family-name:var(--font-heading)] text-xs uppercase tracking-[0.2em] text-cream-100/30">
              until hacking ends
            </p>
          </div>
        </motion.div>

        {/* ── Gold lotus divider ── */}
        <div className="relative mx-auto max-w-3xl px-6" aria-hidden="true">
          <div className="flex h-10 items-center justify-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-400/30 to-gold-400/50" />
            <div className="mx-2 h-1.5 w-1.5 rotate-45 bg-gold-400/40" />
            <LotusDecoration
              size="sm"
              variant="gold"
              className="mx-2 shrink-0 animate-lotus-float"
            />
            <div className="mx-2 h-1.5 w-1.5 rotate-45 bg-gold-400/40" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold-400/30 to-gold-400/50" />
          </div>
        </div>

        {/* ── Day tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}
          className="relative z-10 mx-auto max-w-3xl px-4 pt-6 sm:px-6"
        >
          <div
            className="flex justify-center gap-2 overflow-x-auto pb-1 sm:gap-3"
            role="tablist"
            aria-label="Schedule days"
          >
            {schedule.map((day, i) => (
              <button
                key={day.label}
                role="tab"
                id={`tab-day-${i}`}
                aria-selected={activeDay === i}
                aria-controls={`tabpanel-day-${i}`}
                onClick={() => setActiveDay(i)}
                className={`group relative shrink-0 rounded-xl px-5 py-3.5 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 sm:px-6 sm:py-4 ${
                  activeDay === i
                    ? "bg-gold-400/10 shadow-sm shadow-gold-400/10"
                    : "hover:bg-cream-50/[0.03]"
                }`}
              >
                {/* Active indicator line */}
                {activeDay === i && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-gradient-to-r from-gold-400/60 via-gold-400 to-gold-400/60"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`block font-[family-name:var(--font-heading)] text-sm font-semibold tracking-wide transition-colors duration-200 sm:text-base ${
                    activeDay === i
                      ? "text-gold-400"
                      : "text-cream-100/40 group-hover:text-cream-100/70"
                  }`}
                >
                  {day.label}
                </span>
                <span
                  className={`mt-0.5 block text-xs transition-colors duration-200 ${
                    activeDay === i
                      ? "text-gold-400/60"
                      : "text-cream-100/20 group-hover:text-cream-100/40"
                  }`}
                >
                  {day.date}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Category legend ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="relative z-10 mx-auto max-w-3xl px-4 pt-5 pb-2 sm:px-6"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {(Object.keys(categoryColors) as EventCategory[]).map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-2 rounded-full border border-cream-50/10 bg-cream-50/[0.03] px-3 py-1.5 text-xs text-cream-100/50"
              >
                <span
                  className={`inline-block h-2 w-2 rounded-full ${categoryMeta[cat].dot}`}
                />
                <span className="font-[family-name:var(--font-heading)] text-[0.6875rem] tracking-wide">
                  {categoryMeta[cat].label}
                </span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Subtle divider */}
        <div className="mx-auto max-w-3xl px-6 py-2" aria-hidden="true">
          <div className="h-px bg-gradient-to-r from-transparent via-gold-400/15 to-transparent" />
        </div>

        {/* ── Timeline events ── */}
        <AnimatePresence mode="wait">
          {schedule.map((day, i) =>
            activeDay === i ? (
              <motion.div
                key={day.label}
                id={`tabpanel-day-${i}`}
                role="tabpanel"
                aria-labelledby={`tab-day-${i}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative z-10 mx-auto max-w-3xl px-4 py-4 sm:px-6"
              >
                {/* Vertical timeline line */}
                <div className="absolute left-[1.35rem] top-8 bottom-8 w-px bg-gradient-to-b from-gold-400/20 via-gold-400/10 to-transparent sm:left-[1.85rem]" aria-hidden="true" />

                <div className="flex flex-col gap-3">
                  {day.events.map((event, eventIdx) => (
                    <motion.div
                      key={`${event.startTime}-${event.title}`}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: eventIdx * 0.05,
                      }}
                    >
                      <TimelineEvent event={event} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : null,
          )}
        </AnimatePresence>

        {/* ── Gold lotus divider ── */}
        <div className="relative mx-auto max-w-3xl px-6 pt-6" aria-hidden="true">
          <div className="flex h-10 items-center justify-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-400/20 to-gold-400/40" />
            <div className="mx-2 h-1.5 w-1.5 rotate-45 bg-gold-400/30" />
            <LotusDecoration
              size="sm"
              variant="gold"
              className="mx-2 shrink-0 animate-lotus-float"
              style={{ animationDelay: "2s" }}
            />
            <div className="mx-2 h-1.5 w-1.5 rotate-45 bg-gold-400/30" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold-400/20 to-gold-400/40" />
          </div>
        </div>

        {/* ── Quick links footer ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10 mx-auto max-w-3xl px-4 pb-16 pt-4 sm:px-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-register inline-flex min-h-[2.625rem] items-center justify-center px-8 py-3.5 font-[family-name:var(--font-heading)] text-sm font-semibold tracking-wide text-gold-400 transition-colors duration-300 hover:text-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 touch-action-manipulation"
            >
              <span className="brush-bg" aria-hidden="true" />
              <span className="relative">Register Now</span>
            </a>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[2.625rem] items-center justify-center gap-2.5 rounded-lg border border-gold-400/20 px-6 py-3.5 font-[family-name:var(--font-heading)] text-sm font-medium tracking-wide text-cream-100/60 transition-all duration-200 hover:border-gold-400/50 hover:text-gold-400 hover:shadow-[0_0_12px_oklch(0.78_0.16_75/0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
              </svg>
              Join Discord
            </a>
            <Link
              href="/"
              className="inline-flex min-h-[2.625rem] items-center justify-center gap-2 rounded-lg border border-gold-400/20 px-6 py-3.5 font-[family-name:var(--font-heading)] text-sm font-medium tracking-wide text-cream-100/60 transition-all duration-200 hover:border-gold-400/50 hover:text-gold-400 hover:shadow-[0_0_12px_oklch(0.78_0.16_75/0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Home
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
