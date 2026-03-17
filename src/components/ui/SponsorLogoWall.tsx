"use client";

import Image from "next/image";
import type { Sponsor } from "@/data/sponsors";
import { cn } from "@/lib/utils";

type SponsorLogoWallProps = {
  sponsors: Sponsor[];
};

/**
 * Sponsor logo wall matching the reference layout:
 * 7 rows with varying items per row.
 * Row 1 (3 hero) → Row 2 (4 gold) → Row 3 (5 silver)
 * → Row 4 (6 bronze) → Row 5 (5 bronze) → Row 6 (6 community)
 * → Row 7 (8 community, smallest)
 */

type RowConfig = {
  names: string[];
  heightClass: string;
  cols: number;
  widthClass?: string;
};

const ROWS: RowConfig[] = [
  // Row 1 — Hero (3 sponsors, large)
  {
    names: ["eTest", "OpenAI", "AWS"],
    heightClass: "max-h-14 sm:max-h-20 md:max-h-24",
    cols: 3,
  },
  // Row 2 — Gold (4 sponsors)
  {
    names: ["VNG Corporation", "Trae", "OpenRouter", "Agora"],
    heightClass: "max-h-10 sm:max-h-14 md:max-h-18",
    cols: 4,
  },
  // Row 3 — Silver (5 sponsors)
  {
    names: ["n8n", "Redis", "Lovable", "TinyFish", "TASCO"],
    heightClass: "max-h-8 sm:max-h-12 md:max-h-16",
    cols: 5,
  },
  // Row 4 — Bronze (6 sponsors)
  {
    names: ["CIS", "MLC Sports", "PhongVu.vn", "Galaxy Holdings", "Coca-Cola", "Exa"],
    heightClass: "max-h-7 sm:max-h-10 md:max-h-14",
    cols: 6,
    widthClass: "w-[92%]",
  },
  // Row 5 — Bronze (5 sponsors)
  {
    names: ["ElevenLabs", "GenAI Fund", "Algorithmics", "Replit", "Manus"],
    heightClass: "max-h-7 sm:max-h-10 md:max-h-14",
    cols: 5,
  },
  // Row 6 — Community (6 sponsors)
  {
    names: ["FreightPilot.AI", "Notion", "Bright Data", "Qwen", "fal", "Dify"],
    heightClass: "max-h-6 sm:max-h-9 md:max-h-12",
    cols: 6,
  },
  // Row 7 — Community (8 sponsors, smallest)
  {
    names: [
      "HRG",
      "GreenNode",
      "AI.SEA",
      "valsea",
      "CoderSchool",
      "The Flour Donut",
      "AI Hay",
      "igot.ai",
    ],
    heightClass: "max-h-8 sm:max-h-10 md:max-h-12",
    cols: 8,
  },
];

/** Per-sponsor size overrides */
const SPONSOR_SIZE_OVERRIDES: Record<string, string> = {
  Agora: "max-h-12 sm:max-h-16 md:max-h-20",
  Algorithmics: "max-h-10 sm:max-h-14 md:max-h-18",
  AWS: "max-h-10 sm:max-h-14 md:max-h-18",
  eTest: "max-h-12 sm:max-h-18 md:max-h-22",
  fal: "max-h-8 sm:max-h-12 md:max-h-16",
  Notion: "max-h-8 sm:max-h-12 md:max-h-16",
  TASCO: "max-h-14 sm:max-h-22 md:max-h-28",
};

/** Per-sponsor positional nudges (translate offsets) */
const SPONSOR_NUDGES: Record<string, string> = {
  OpenAI: "translate-x-4 sm:translate-x-6 md:translate-x-8",
};

/** Detect square-ish logos to apply rounded corners */
function isSquareLogo(w: number, h: number): boolean {
  const ratio = w / h;
  return ratio >= 0.8 && ratio <= 1.25;
}

function SponsorCard({
  sponsor,
  heightClass,
}: {
  sponsor: Sponsor;
  heightClass: string;
}) {
  const square = isSquareLogo(sponsor.width, sponsor.height);
  const logoSrc = sponsor.logo;
  const isSvg = logoSrc.endsWith(".svg");
  const sizeClass = SPONSOR_SIZE_OVERRIDES[sponsor.name] ?? heightClass;
  const nudge = SPONSOR_NUDGES[sponsor.name];

  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${sponsor.name}`}
      className={cn(
        "group flex items-center justify-center p-1 transition-all duration-300 hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 sm:p-2",
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
          "relative h-auto w-auto object-contain opacity-70 mix-blend-screen transition-all duration-300 group-hover:opacity-100",
          sizeClass,
          square && "rounded-xl",
        )}
      />
    </a>
  );
}

export function SponsorLogoWall({ sponsors }: SponsorLogoWallProps) {
  return (
    <div className="px-2 py-3 sm:px-4 sm:py-4">
      <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
        {ROWS.map((row, rowIdx) => {
          const rowSponsors = row.names
            .map((name) => sponsors.find((s) => s.name === name))
            .filter((s): s is Sponsor => s != null);

          if (rowSponsors.length === 0) return null;

          return (
            <div
              key={rowIdx}
              className={cn(
                "items-center",
                row.widthClass ?? "w-full",
                row.widthClass ? "self-start" : "justify-center",
              )}
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${row.cols}, minmax(0, 1fr))`,
                gap: "0.25rem",
              }}
            >
              {rowSponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.name}
                  sponsor={sponsor}
                  heightClass={row.heightClass}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
