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
        "rounded-lg border-l-4 p-4",
        categoryColors[event.category]
      )}
    >
      <div className="flex items-baseline gap-3">
        <span className="shrink-0 font-mono text-xs text-text-muted">
          {event.startTime}
          {event.endTime !== event.startTime ? ` – ${event.endTime}` : null}
        </span>
        <h4 className="text-sm font-semibold text-text-primary">
          {event.title}
        </h4>
      </div>
      {event.description ? (
        <p className="mt-1 pl-[calc(3.5rem+0.75rem)] text-xs leading-relaxed text-text-muted sm:pl-0 sm:mt-1.5">
          {event.description}
        </p>
      ) : null}
    </div>
  );
}
