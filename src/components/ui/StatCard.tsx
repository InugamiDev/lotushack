import type { Stat } from "@/data/stats";

const floatVariants = [
  "animate-float-up-down",
  "animate-float-right-left",
  "animate-float-down-up",
  "animate-float-left-right",
] as const;

type StatCardProps = {
  stat: Stat;
  index: number;
};

export function StatCard({ stat, index }: StatCardProps) {
  const floatClass = floatVariants[index % floatVariants.length];

  return (
    <div
      className={`group relative transition-transform duration-300 hover:-translate-y-2 motion-reduce:transition-none ${floatClass}`}
      style={{ animationDelay: `${index * 0.5}s` }}
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gold-400/0 blur-2xl transition-all duration-300 group-hover:bg-gold-400/10 motion-reduce:transition-none"
        aria-hidden="true"
      />
      <div className="relative aspect-[5/7]" style={{ containerType: "inline-size" }}>
        <div
          className="absolute inset-0 bg-[length:100%_100%] bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/img/ui/floating-card.png')" }}
          aria-hidden="true"
        />
        {/* Content inside cream interior — all dimensions in cqw */}
        <div
          className="relative flex h-full flex-col items-center justify-center text-center"
          style={{ padding: "14cqw 14cqw 14cqw" }}
        >
          <p
            className="font-[family-name:var(--font-heading)] font-bold leading-tight text-sienna-600"
            style={{ fontSize: "8cqw" }}
          >
            {stat.title}
          </p>
          <p
            className="font-[family-name:var(--font-heading)] font-semibold uppercase tracking-[0.12em] text-gold-500"
            style={{ fontSize: "3.5cqw", marginTop: "1cqw" }}
          >
            {stat.highlight}
          </p>
          <div
            className="mx-auto h-px w-2/3"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--color-sienna-600) 30%, var(--color-sienna-600) 70%, transparent)",
              opacity: 0.25,
              marginTop: "2cqw",
              marginBottom: "2cqw",
            }}
            aria-hidden="true"
          />
          <p
            className="leading-relaxed text-forest-950/55"
            style={{ fontSize: "4cqw" }}
          >
            {stat.description}
          </p>
        </div>
      </div>
    </div>
  );
}
