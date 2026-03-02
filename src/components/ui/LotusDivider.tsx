import { cn } from "@/lib/utils";
import { LotusDecoration } from "./LotusDecoration";

/**
 * Map Tailwind bg class strings to actual CSS color values
 * so we can build an inline linear-gradient.
 */
const BG_COLOR_MAP: Record<string, string> = {
  "bg-forest-900/80": "oklch(0.17 0.035 155 / 0.8)",
  "bg-forest-950/80": "oklch(0.12 0.03 155 / 0.8)",
  transparent: "transparent",
};

type LotusDividerProps = {
  variant?: "pink" | "gold" | "muted";
  /** Tailwind bg + backdrop classes matching the section ABOVE */
  prevBg: string;
  /** Tailwind bg + backdrop classes matching the section BELOW */
  nextBg: string;
};

export function LotusDivider({
  variant = "gold",
  prevBg,
  nextBg,
}: LotusDividerProps) {
  const colorFrom = BG_COLOR_MAP[prevBg] ?? "oklch(0.19 0.04 165 / 0.8)";
  const colorTo = BG_COLOR_MAP[nextBg] ?? "oklch(0.14 0.04 165 / 0.8)";
  const hasBlur = prevBg !== "transparent" || nextBg !== "transparent";

  return (
    <div className="relative" aria-hidden="true">
      {/* Smooth gradient background from prev section color → next section color */}
      <div
        className={cn("absolute inset-0", hasBlur && "backdrop-blur-sm")}
        style={{
          background: `linear-gradient(to bottom, ${colorFrom}, ${colorTo})`,
        }}
      />

      {/* Lotus line — centered within the gradient */}
      <div className="relative flex h-16 items-center justify-center">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-400/30 to-gold-400/50" />
        {/* Diamond accent left */}
        <div className="mx-2 h-1.5 w-1.5 rotate-45 bg-gold-400/50" />
        <LotusDecoration size="sm" variant={variant} className="mx-3 shrink-0 animate-lotus-float" />
        {/* Diamond accent right */}
        <div className="mx-2 h-1.5 w-1.5 rotate-45 bg-gold-400/50" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold-400/30 to-gold-400/50" />
      </div>
    </div>
  );
}
