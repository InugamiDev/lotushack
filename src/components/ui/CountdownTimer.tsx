"use client";

import { useCountdown } from "@/hooks/useCountdown";
import { EVENT_START } from "@/lib/constants";
import { pad } from "@/lib/utils";

type UnitProps = {
  value: string;
  label: string;
};

function Unit({ value, label }: UnitProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span
        className="min-w-[2.5rem] text-center font-mono text-3xl font-bold tabular-nums text-gold-400 sm:min-w-[3.5rem] sm:text-5xl md:text-6xl"
        style={{ textShadow: "0 0 20px oklch(0.78 0.16 75 / 0.4)" }}
      >
        {value}
      </span>
      <span className="font-[family-name:var(--font-heading)] text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <span
      className="self-start pt-1 font-mono text-2xl font-bold text-gold-400/40 sm:pt-2 sm:text-4xl md:text-5xl"
      aria-hidden="true"
    >
      :
    </span>
  );
}

export function CountdownTimer() {
  const { days, hours, minutes, seconds, mounted } = useCountdown(EVENT_START);

  const placeholder = "--";

  return (
    <div role="timer" aria-live="polite" aria-label="Countdown to LotusHack">
      <div className="flex items-start justify-center gap-3 sm:gap-4">
        <Unit
          value={mounted ? pad(days) : placeholder}
          label="Days"
        />
        <Separator />
        <Unit
          value={mounted ? pad(hours) : placeholder}
          label="Hours"
        />
        <Separator />
        <Unit
          value={mounted ? pad(minutes) : placeholder}
          label="Min"
        />
        <Separator />
        <Unit
          value={mounted ? pad(seconds) : placeholder}
          label="Sec"
        />
      </div>
    </div>
  );
}
