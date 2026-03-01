import { SectionReveal } from "@/components/ui/SectionReveal";
import { TrackCard } from "@/components/ui/TrackCard";
import { tracks } from "@/data/tracks";

export function TracksSection() {
  return (
    <section id="tracks" className="bg-forest-950/80 py-24 backdrop-blur-sm sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionReveal>
          <div className="text-center">
            <h2 className="section-heading text-3xl font-bold text-text-primary sm:text-4xl">
              Hackathon Tracks
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-text-secondary">
              Build across 4 real-world tracks. Choose the challenge that
              matches your passion — each with dedicated prizes, mentors, and
              judging criteria.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {tracks.map((track, i) => (
              <TrackCard key={track.name} track={track} index={i} />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
