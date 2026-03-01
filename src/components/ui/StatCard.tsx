import { Clock, Brain, MapPin, Trophy, Users } from "lucide-react";
import type { Stat } from "@/data/stats";

const iconMap = {
  clock: Clock,
  brain: Brain,
  "map-pin": MapPin,
  trophy: Trophy,
  users: Users,
} as const;

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
  const Icon = iconMap[stat.icon];
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
        <div className="relative flex h-full flex-col items-center justify-center px-[14%] pt-[14%] pb-[18%] text-center">
          <Icon className="h-7 w-7 text-gold-500 sm:h-9 sm:w-9" strokeWidth={1.5} />
          <p className="mt-2 text-base font-bold text-sienna-600 sm:text-lg">
            {stat.title}
          </p>
          <p className="mt-1 text-[0.65rem] leading-snug text-forest-950/60 sm:text-xs">
            {stat.description}
          </p>
        </div>
      </div>
    </div>
  );
}
