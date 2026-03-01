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
      className={`group relative pt-12 sm:pt-14 ${floatClass}`}
      style={{ animationDelay: `${index * 0.4}s` }}
    >
      {/* Track icon — floats above the frame, centered */}
      <div className="absolute left-1/2 top-0 z-10 h-20 w-20 -translate-x-1/2 sm:h-24 sm:w-24">
        <Image
          src={track.image}
          alt=""
          fill
          className="object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
          sizes="96px"
        />
      </div>

      {/* Frame + content — preserves card-frame.png natural ratio */}
      <div className="relative aspect-[1264/1424]">
        <Image
          src="/assets/img/ui/card-frame.png"
          alt=""
          fill
          className="object-fill"
          sizes="(max-width: 768px) 90vw, 45vw"
          aria-hidden="true"
        />

        {/* Text within cream interior */}
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden px-[10%] pt-[16%] pb-[10%] text-center">
          <h3 className="section-heading text-xl font-bold text-sienna-600 sm:text-2xl lg:text-3xl">
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
