import type { ScheduleEvent } from "@/data/schedule";
import { categoryColors } from "@/data/schedule";
import { cn } from "@/lib/utils";

type TimelineEventProps = {
  event: ScheduleEvent;
};

export function TimelineEvent({ event }: TimelineEventProps) {
  return (
    <div
      className={cn(
        "group relative rounded-xl border-l-4 px-5 py-4 transition-all duration-200 hover:translate-x-1 motion-reduce:transition-none sm:px-6 sm:py-5",
        categoryColors[event.category],
      )}
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl bg-cream-50/0 transition-all duration-300 group-hover:bg-cream-50/[0.02] motion-reduce:transition-none"
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-4">
        <span className="shrink-0 font-mono text-sm tabular-nums text-gold-400/70 sm:min-w-[7rem]">
          {event.startTime}
          {event.endTime !== event.startTime ? ` – ${event.endTime}` : null}
        </span>
        <div className="flex-1">
          <h4 className="font-[family-name:var(--font-heading)] text-base font-semibold tracking-wide text-text-primary">
            {event.title}
          </h4>
          {event.description ? (
            <p className="mt-1 text-sm leading-relaxed text-text-muted">
              {event.description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
