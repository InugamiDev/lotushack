"use client";

import Image from "next/image";
import type { Sponsor } from "@/data/sponsors";
import { cn } from "@/lib/utils";

type SponsorLogoWallProps = {
  sponsors: Sponsor[];
};

/**
 * Sponsor logo wall matching the lotushack.org reference layout:
 * 5 rows of 3 main sponsors + 1 row of 6 community sponsors.
 * Uses a 6-column grid so main sponsors span 2 cols each.
 */

/** Fixed ordering to match the reference layout (top→bottom, left→right) */
const sponsorOrder = [
  // Row 1 — Hero
  "eTest",
  "OpenAI",
  "VNG Corporation",
  // Row 2 — Gold
  "Trae",
  "OpenRouter",
  "Agora",
  // Row 3 — Gold + Bronze
  "n8n",
  "Redis",
  "Lovable",
  // Row 4 — Silver
  "Exa",
  "ElevenLabs",
  "JigsawStack",
  // Row 5 — Silver + Community
  "Algorithmics",
  "HRG",
  "FreightPilot.AI",
  // Row 6 — Community (6 across)
  "Veracia",
  "The Flour Donut",
  "GreenNode",
  "AI.SEA",
  "valsea",
  "CoderSchool",
];

const communitySponsors = new Set([
  "Veracia",
  "The Flour Donut",
  "GreenNode",
  "AI.SEA",
  "valsea",
  "CoderSchool",
]);

/** Row-based sizing — each visual row gets a consistent height */
const ROW_HEIGHTS = [
  "max-h-16 sm:max-h-24 md:max-h-28",      // Row 1: Hero — biggest
  "max-h-10 sm:max-h-16 md:max-h-20",      // Row 2: Gold
  "max-h-10 sm:max-h-16 md:max-h-20",      // Row 3: Gold + Bronze
  "max-h-8 sm:max-h-14 md:max-h-[4.5rem]", // Row 4: Silver
  "max-h-9 sm:max-h-14 md:max-h-18",       // Row 5: Silver + Community (bigger)
  "max-h-9 sm:max-h-14 md:max-h-16",       // Row 6: Community (bigger)
] as const;

/** Per-sponsor size overrides */
const SPONSOR_SIZE_OVERRIDES: Record<string, string> = {
  Agora: "max-h-12 sm:max-h-18 md:max-h-22",          // Row 2: bigger
  Exa: "max-h-6 sm:max-h-10 md:max-h-12",             // Row 4: smaller
  Algorithmics: "max-h-12 sm:max-h-18 md:max-h-22",   // Row 5: bigger
};

/** Per-sponsor positional nudges */
const SPONSOR_NUDGES: Record<string, string> = {
  Agora: "translate-y-1 sm:translate-y-1.5",                   // down a bit to align row 2
  OpenAI: "translate-x-2 md:translate-x-4",                     // nudge right
  "VNG Corporation": "-translate-x-2 md:-translate-x-4",       // nudge left
  ElevenLabs: "-translate-x-4 md:-translate-x-8",              // to the left
};

/** Map each sponsor name → its visual row index */
const sponsorRowMap = new Map<string, number>();
// Rows 1–5: 3 sponsors each
for (let i = 0; i < 15; i++) {
  sponsorRowMap.set(sponsorOrder[i], Math.floor(i / 3));
}
// Row 6: community (indices 15–20)
for (let i = 15; i < sponsorOrder.length; i++) {
  sponsorRowMap.set(sponsorOrder[i], 5);
}

/** Detect square-ish logos to apply rounded corners */
function isSquareLogo(w: number, h: number): boolean {
  const ratio = w / h;
  return ratio >= 0.8 && ratio <= 1.25;
}

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const isCommunity = communitySponsors.has(sponsor.name);
  const square = isSquareLogo(sponsor.width, sponsor.height);

  const logoSrc = sponsor.lightLogo ?? sponsor.logo;
  const isSvg = logoSrc.endsWith(".svg");

  const row = sponsorRowMap.get(sponsor.name) ?? 4;
  const heightClass = SPONSOR_SIZE_OVERRIDES[sponsor.name] ?? ROW_HEIGHTS[row];
  const nudge = SPONSOR_NUDGES[sponsor.name];

  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${sponsor.name}`}
      className={cn(
        "group relative flex items-center justify-center p-0.5 transition-all duration-300 hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 md:p-1",
        isCommunity ? "col-span-1" : "col-span-2",
        row === 1 && "translate-x-1 md:translate-x-2",
        row === 2 && "-translate-x-3 md:-translate-x-6",
        row === 3 && "-translate-x-5 md:-translate-x-10",
        row === 4 && "-translate-x-3 md:-translate-x-6",
        row === 5 && "-translate-x-3 md:-translate-x-6",
        nudge,
      )}
    >
      <Image
        src={logoSrc}
        alt={sponsor.name}
        width={sponsor.width}
        height={sponsor.height}
        unoptimized={isSvg}
        className={cn(
          "relative h-auto w-auto object-contain opacity-70 transition-all duration-300 group-hover:opacity-100",
          heightClass,
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

  const remaining = sponsors.filter((s) => !sponsorOrder.includes(s.name));

  const all = [...sorted, ...remaining];

  return (
    <div className="translate-x-3 md:translate-x-6 px-2 py-3 sm:px-4 sm:py-4">
      <h3 className="section-heading mb-3 text-center text-2xl font-semibold tracking-[0.25em] text-gold-500 sm:mb-4 sm:text-3xl">
        Our Sponsors
      </h3>

      <div
        className="grid grid-cols-6 gap-0"
        style={{ gridAutoRows: "minmax(44px, auto)" }}
      >
        {all.map((sponsor) => (
          <SponsorCard key={sponsor.name} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
}
