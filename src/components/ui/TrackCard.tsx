import Image from "next/image";
import type { Track } from "@/data/tracks";

const floatVariants = [
  "animate-float-up-down",
  "animate-float-right-left",
  "animate-float-down-up",
  "animate-float-left-right",
] as const;

type TrackCardProps = {
  track: Track;
  index: number;
};

export function TrackCard({ track, index }: TrackCardProps) {
  const floatClass = floatVariants[index % floatVariants.length];

  return (
    <div
      className={`group relative transition-transform duration-300 hover:-translate-y-2 motion-reduce:transition-none ${floatClass}`}
      style={{ animationDelay: `${index * 0.4}s` }}
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gold-400/0 blur-2xl transition-all duration-300 group-hover:bg-gold-400/10 motion-reduce:transition-none"
        aria-hidden="true"
      />

      {/* Frame + content — preserves card-frame.png natural ratio */}
      <div
        className="relative aspect-[1264/1724]"
        style={{ containerType: "inline-size" }}
      >
        <Image
          src="/assets/img/ui/card-frame.png"
          alt=""
          fill
          className="object-fill"
          sizes="(max-width: 768px) 90vw, 45vw"
          aria-hidden="true"
        />

        {/* Text within cream interior — all dimensions in cqw so everything scales with card */}
        <div
          className="absolute inset-0 flex flex-col items-center text-center"
          style={{ padding: "50cqw 18cqw 8cqw" }}
        >
          <h3
            className="section-heading font-bold tracking-[0.05em] text-sienna-600"
            style={{ fontSize: "5cqw" }}
          >
            {track.name}
          </h3>

          <p
            className="font-medium text-gold-500"
            style={{ fontSize: "2.7cqw" }}
          >
            {track.tagline}
          </p>

          <p
            className="line-clamp-4 px-2 leading-relaxed text-forest-950/70"
            style={{ fontSize: "3cqw", marginTop: "1cqw" }}
          >
            {track.description}
          </p>
        </div>
      </div>
    </div>
  );
}
