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
      <div className="relative aspect-[1264/1724]">
        <Image
          src="/assets/img/ui/card-frame.png"
          alt=""
          fill
          className="object-fill"
          sizes="(max-width: 768px) 90vw, 45vw"
          aria-hidden="true"
        />

        {/* Text within cream interior */}
        <div className="absolute inset-0 flex flex-col items-center overflow-hidden px-[20%] pt-[53%] pb-[10%] text-center">
          <h3 className="section-heading text-xl font-bold tracking-[0.05em] text-sienna-600 sm:text-2xl lg:text-3xl">
            {track.name}
          </h3>

          <p className="mt-1 text-xs font-medium text-gold-500 sm:text-sm">
            {track.tagline}
          </p>

          <p className="mt-2 line-clamp-4 text-xs leading-relaxed text-forest-950/70 sm:text-sm lg:text-base">
            {track.description}
          </p>
        </div>
      </div>
    </div>
  );
}
