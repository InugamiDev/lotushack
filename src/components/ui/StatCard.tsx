import type { Stat } from "@/data/stats";

/** Cycle through different float directions per card */
const floatVariants = [
  "animate-float-up-down",
  "animate-float-left-right",
  "animate-float-down-up",
  "animate-float-right-left",
  "animate-float-diagonal",
] as const;

type StatCardProps = {
  stat: Stat;
  index: number;
};

export function StatCard({ stat, index }: StatCardProps) {
  const floatClass = floatVariants[index % floatVariants.length];
  const delay = `${index * 0.5}s`;

  return (
    <div
      className={`relative ${floatClass}`}
      style={{ animationDelay: delay }}
    >
      <div className="relative aspect-[5/7]">
        <div
          className="absolute inset-0 bg-[length:100%_100%] bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/img/ui/floating-card.png')" }}
          aria-hidden="true"
        />
        {/* Content inside cream interior */}
        <div className="relative flex h-full flex-col items-center justify-center px-[18.2%] pt-[18%] pb-[18%] text-center">
          <p className="font-[family-name:var(--font-heading)] text-base font-bold text-sienna-600 sm:text-lg">
            {stat.title}
          </p>
          <p className="mt-1.5 text-[0.65rem] leading-snug text-forest-950/60 sm:text-xs">
            {stat.description}
          </p>
        </div>
      </div>
    </div>
  );
}
