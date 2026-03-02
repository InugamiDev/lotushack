"use client";

import Image from "next/image";
import type { Sponsor } from "@/data/sponsors";
import { cn } from "@/lib/utils";

type SponsorLogoWallProps = {
  sponsors: Sponsor[];
};

/**
 * Bento grid layout — same structure as lotushack.org reference,
 * restyled to match the dark forest/gold Vietnamese theme.
 */
const gridSpan: Record<string, string> = {
  "OpenAI": "col-span-2 row-span-2 md:row-span-2",
  "Lovable": "col-span-2",
  "ElevenLabs": "col-span-2",
  "OpenRouter": "col-span-2",
  "Trae": "col-span-2",
};

/** Fixed ordering to match the reference bento layout */
const sponsorOrder = [
  "OpenAI", "Lovable", "ElevenLabs",
  "OpenRouter", "Agora", "Exa",
  "VNG Corporation", "CoderSchool", "valsea", "eTest",
  "JigsawStack", "Algorithmics", "HRG", "FreightPilot.AI",
  "Trae", "n8n", "Redis",
  "Veracia", "GreenNode", "AI.SEA", "The Flour Donut",
];

/** Detect square-ish logos to apply rounded corners */
function isSquareLogo(w: number, h: number): boolean {
  const ratio = w / h;
  return ratio >= 0.8 && ratio <= 1.25;
}

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const span = gridSpan[sponsor.name] ?? "";
  const isBig = span.includes("row-span-2");
  const isWide = span.includes("col-span-2") && !isBig;
  const square = isSquareLogo(sponsor.width, sponsor.height);

  // Use white/light version on dark cards, fall back to regular logo
  const logoSrc = sponsor.lightLogo ?? sponsor.logo;
  const isSvg = logoSrc.endsWith(".svg");

  const logoHeight = isBig
    ? "max-h-20 sm:max-h-28"
    : isWide
      ? "max-h-8 sm:max-h-14"
      : "max-h-8 sm:max-h-12";

  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${sponsor.name}`}
      className={cn(
        "group relative flex items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] p-2 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-gold-400/20 hover:shadow-[0_0_20px_oklch(0.78_0.16_75/0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 md:rounded-2xl md:p-3",
        span,
      )}
      style={{
        background:
          "linear-gradient(145deg, oklch(0.18 0.04 155 / 0.6) 0%, oklch(0.14 0.03 155 / 0.7) 100%)",
      }}
    >
      {/* Subtle inner glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.78 0.16 75 / 0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Image
        src={logoSrc}
        alt={sponsor.name}
        width={sponsor.width}
        height={sponsor.height}
        unoptimized={isSvg}
        className={cn(
          "relative h-auto w-auto object-contain opacity-70 transition-all duration-300 group-hover:opacity-100",
          logoHeight,
          square && "rounded-xl",
        )}
      />
    </a>
  );
}

export function SponsorLogoWall({ sponsors }: SponsorLogoWallProps) {
  const sorted = sponsorOrder
    .map((name) => sponsors.find((s) => s.name === name))
    .filter((s): s is Sponsor => s != null);

  const remaining = sponsors.filter(
    (s) => !sponsorOrder.includes(s.name),
  );

  const all = [...sorted, ...remaining];

  return (
    <div className="rounded-3xl border border-white/[0.04] bg-forest-950/30 px-3 py-6 backdrop-blur-md sm:px-6 sm:py-10">
      <h3 className="section-heading mb-6 text-center text-xl font-bold tracking-[0.2em] text-gold-400 sm:mb-8 sm:text-2xl">
        Our Sponsors
      </h3>

      <div
        className="grid grid-cols-2 gap-1.5 md:grid-cols-4 md:gap-2.5"
        style={{ gridAutoRows: "minmax(60px, 1fr)" }}
      >
        {all.map((sponsor) => (
          <SponsorCard key={sponsor.name} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
}
