import { SectionReveal } from "@/components/ui/SectionReveal";
import { TimelineEvent } from "@/components/ui/TimelineEvent";
import { schedule } from "@/data/schedule";

export function TimelineSection() {
  return (
    <section id="schedule" className="bg-forest-900/80 py-16 backdrop-blur-sm sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal>
          <div className="text-center">
            <h2
              className="section-heading text-3xl font-bold text-text-primary sm:text-4xl"
              style={{ textWrap: "balance" }}
            >
              Schedule
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
              36 hours of hacking, workshops, meals, and fun. Here&apos;s what
              to expect.
            </p>
          </div>
        </SectionReveal>

        {/* Desktop: 3-column grid */}
        <SectionReveal delay={0.15}>
          <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-3">
            {schedule.map((day) => (
              <div key={day.label}>
                <div className="mb-4 rounded-lg bg-surface-elevated px-4 py-3">
                  <h3 className="text-sm font-semibold text-gold-400">
                    {day.label}
                  </h3>
                  <p className="text-xs text-text-muted">{day.date}</p>
                </div>
                <div className="flex flex-col gap-3">
                  {day.events.map((event, i) => (
                    <TimelineEvent key={`${day.date}-${i}`} event={event} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Mobile: stacked vertical timeline */}
        <div className="mt-12 flex flex-col gap-10 lg:hidden">
          {schedule.map((day, dayIndex) => (
            <SectionReveal key={day.label} delay={dayIndex * 0.1}>
              <div>
                <div className="mb-4 rounded-lg bg-surface-elevated px-4 py-3">
                  <h3 className="text-sm font-semibold text-gold-400">
                    {day.label}
                  </h3>
                  <p className="text-xs text-text-muted">{day.date}</p>
                </div>
                <div className="flex flex-col gap-3">
                  {day.events.map((event, i) => (
                    <TimelineEvent key={`${day.date}-m-${i}`} event={event} />
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
