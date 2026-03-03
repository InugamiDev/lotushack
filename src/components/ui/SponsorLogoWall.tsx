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

const heroSponsors = new Set(["eTest", "OpenAI", "VNG Corporation"]);

const communitySponsors = new Set([
  "Veracia",
  "The Flour Donut",
  "GreenNode",
  "AI.SEA",
  "valsea",
  "CoderSchool",
]);

/** Detect square-ish logos to apply rounded corners */
function isSquareLogo(w: number, h: number): boolean {
  const ratio = w / h;
  return ratio >= 0.8 && ratio <= 1.25;
}

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const isHero = heroSponsors.has(sponsor.name);
  const isCommunity = communitySponsors.has(sponsor.name);
  const square = isSquareLogo(sponsor.width, sponsor.height);

  const logoSrc = sponsor.lightLogo ?? sponsor.logo;
  const isSvg = logoSrc.endsWith(".svg");

  const logoHeight = isHero
    ? "max-h-12 sm:max-h-20 md:max-h-24"
    : isCommunity
      ? "max-h-10 sm:max-h-14 md:max-h-16"
      : "max-h-8 sm:max-h-14 md:max-h-16";

  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${sponsor.name}`}
      className={cn(
        "group relative flex items-center justify-center p-1 transition-all duration-300 hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 md:p-2",
        isCommunity ? "col-span-1" : "col-span-1 md:col-span-2",
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

  const remaining = sponsors.filter((s) => !sponsorOrder.includes(s.name));

  const all = [...sorted, ...remaining];

  return (
    <div className="px-3 py-4 sm:px-6 sm:py-6">
      <h3 className="section-heading mb-4 text-center text-2xl font-semibold tracking-[0.25em] text-gold-500 sm:mb-6 sm:text-3xl">
        Our Sponsors
      </h3>

      <div
        className="grid grid-cols-2 gap-0.5 md:grid-cols-6 md:gap-1"
        style={{ gridAutoRows: "minmax(50px, auto)" }}
      >
        {all.map((sponsor) => (
          <SponsorCard key={sponsor.name} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
}
