"use client";

import Image from "next/image";
import type { Sponsor, SponsorTier } from "@/data/sponsors";
import { cn } from "@/lib/utils";

type SponsorLogoWallProps = {
  sponsors: Sponsor[];
};

const tierOrder: SponsorTier[] = ["hero", "gold", "silver", "bronze", "community"];

const tierLogoSize: Record<SponsorTier, string> = {
  hero: "max-h-20",
  gold: "max-h-16",
  silver: "max-h-14",
  bronze: "max-h-12",
  community: "max-h-10",
};

const tierGap: Record<SponsorTier, string> = {
  hero: "gap-12 sm:gap-16",
  gold: "gap-10 sm:gap-14",
  silver: "gap-6 sm:gap-8",
  bronze: "gap-8 sm:gap-10",
  community: "gap-6 sm:gap-8",
};

function SponsorLogoItem({ sponsor }: { sponsor: Sponsor }) {
  const logoSrc = sponsor.lightLogo ?? sponsor.logo;
  const isSvg = logoSrc.endsWith(".svg");
  const sizeClass = tierLogoSize[sponsor.tier];

  const content = sponsor.logo ? (
    <Image
      src={logoSrc}
      alt={sponsor.name}
      width={sponsor.width}
      height={sponsor.height}
      unoptimized={isSvg}
      className={cn(
        "h-auto w-auto max-w-[40vw] object-contain transition-all duration-200 sm:max-w-[25vw]",
        sizeClass,
      )}
    />
  ) : (
    <span className="whitespace-nowrap text-sm font-semibold tracking-wide text-text-secondary">
      {sponsor.name}
    </span>
  );

  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${sponsor.name}`}
      className="inline-flex items-center justify-center opacity-60 transition-all duration-200 hover:opacity-100 hover:drop-shadow-[0_0_8px_oklch(0.78_0.16_75/0.2)] focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950 rounded-lg"
    >
      {content}
    </a>
  );
}

export function SponsorLogoWall({ sponsors }: SponsorLogoWallProps) {
  const grouped = tierOrder
    .map((tier) => ({
      tier,
      items: sponsors.filter((s) => s.tier === tier),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="space-y-10">
      {grouped.map(({ tier, items }) => (
        <div
          key={tier}
          className={cn(
            "flex flex-wrap items-center justify-center",
            tierGap[tier],
          )}
        >
          {items.map((sponsor) => (
            <SponsorLogoItem key={sponsor.name} sponsor={sponsor} />
          ))}
        </div>
      ))}
    </div>
  );
}
