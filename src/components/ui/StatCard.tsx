import type { Stat } from "@/data/stats";

type StatCardProps = {
  stat: Stat;
  index: number;
};

export function StatCard({ stat }: StatCardProps) {
  return (
    <div className="relative">
      <div className="relative aspect-[5/7]">
        <div
          className="absolute inset-0 bg-[length:100%_100%] bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/img/ui/floating-card.png')" }}
          aria-hidden="true"
        />
        {/* Content inside cream interior */}
        <div className="relative flex h-full flex-col items-center justify-center px-[16%] pt-[16%] pb-[16%] text-center">
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold leading-tight text-sienna-600 sm:text-2xl">
            {stat.title}
          </p>
          <p className="mt-1 font-[family-name:var(--font-heading)] text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-gold-500 sm:text-xs">
            {stat.highlight}
          </p>
          <div
            className="mx-auto mt-2.5 mb-2.5 h-px w-2/3"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--color-sienna-600) 30%, var(--color-sienna-600) 70%, transparent)",
              opacity: 0.25,
            }}
            aria-hidden="true"
          />
          <p className="text-xs leading-relaxed text-forest-950/55 sm:text-sm">
            {stat.description}
          </p>
        </div>
      </div>
    </div>
  );
}
