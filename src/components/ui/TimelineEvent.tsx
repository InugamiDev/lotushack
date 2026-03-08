import type { ScheduleEvent } from "@/data/schedule";
import { categoryStyle } from "@/data/schedule";
import { cn } from "@/lib/utils";

type TimelineEventProps = {
  event: ScheduleEvent;
  dimmed?: boolean;
};

export function TimelineEvent({ event, dimmed = false }: TimelineEventProps) {
  const cat = categoryStyle[event.category];

  return (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-md border-l-[3px] p-2.5 transition-all duration-300 motion-reduce:transition-none sm:p-3",
        "hover:z-10 hover:shadow-lg hover:shadow-black/25",
        cat.bg,
        cat.border,
        dimmed && "opacity-25 blur-[1px] saturate-50",
      )}
    >
      <p className="font-mono text-[0.625rem] tabular-nums text-cream-50/50 sm:text-xs">
        {event.startTime}
        {event.endTime !== event.startTime ? ` – ${event.endTime}` : null}
      </p>
      <h4
        className={cn(
          "mt-0.5 truncate font-[family-name:var(--font-heading)] text-sm font-semibold leading-tight tracking-wide group-hover:whitespace-normal sm:text-base",
          cat.text,
        )}
      >
        {event.title}
      </h4>
      {event.description ? (
        <p className="mt-0.5 line-clamp-1 text-[0.6875rem] leading-snug text-cream-100/35 group-hover:line-clamp-none sm:text-xs">
          {event.description}
        </p>
      ) : null}
    </div>
  );
}
