import { SectionReveal } from "@/components/ui/SectionReveal";
import { TrackCard } from "@/components/ui/TrackCard";
import { tracks } from "@/data/tracks";

export function TracksSection() {
  return (
    <section id="tracks" className="py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal>
          <div className="text-center">
            <h2 className="section-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Hackathon Tracks
            </h2>
            <div className="mx-auto mt-3 h-px w-16 shimmer-gold" />
            <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
              Build across 4 real-world tracks. Choose the challenge that
              matches your passion — each with dedicated prizes, mentors, and
              judging criteria.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {tracks.map((track, i) => (
            <SectionReveal
              key={track.name}
              variant={i % 2 === 0 ? "slide-left" : "slide-right"}
              delay={i * 0.1}
            >
              <TrackCard track={track} index={i} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
