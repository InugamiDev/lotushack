"use client";

import { useState } from "react";
import Image from "next/image";
import type { Sponsor } from "@/data/sponsors";
import { cn } from "@/lib/utils";
import { Skeleton } from "./Skeleton";

type SponsorLogoProps = {
  sponsor: Sponsor;
};

/** Grid span per tier */
const tierGrid: Record<string, string> = {
  hero: "col-span-2 row-span-2",
  gold: "col-span-2",
  silver: "",
  bronze: "",
};

/** Logo max-height per tier so higher tiers render bigger */
const tierLogoSize: Record<string, string> = {
  hero: "max-h-16 max-w-[80%]",
  gold: "max-h-12 max-w-[75%]",
  silver: "max-h-10 max-w-[70%]",
  bronze: "max-h-10 max-w-[70%]",
};

export function SponsorLogo({ sponsor }: SponsorLogoProps) {
  const [loaded, setLoaded] = useState(false);

  const content = sponsor.logo ? (
    <div className="relative flex items-center justify-center">
      {!loaded && (
        <Skeleton className="h-10 w-24 bg-gray-200" />
      )}
      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        width={sponsor.width}
        height={sponsor.height}
        className={cn(
          "h-auto w-auto object-contain transition-all duration-300",
          tierLogoSize[sponsor.tier],
          loaded ? "opacity-100" : "opacity-0 absolute inset-0",
          "group-hover:scale-110"
        )}
        onLoad={() => setLoaded(true)}
      />
    </div>
  ) : (
    <span className="whitespace-nowrap text-xs font-semibold tracking-wide text-forest-950/50 transition-all duration-300 group-hover:scale-110 group-hover:text-forest-950/80">
      {sponsor.name}
    </span>
  );

  const wrapper = cn(
    "group flex items-center justify-center rounded-xl border border-sienna-600/10 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-sienna-600/20",
    tierGrid[sponsor.tier]
  );

  if (!sponsor.url || sponsor.url === "#") {
    return (
      <div className={cn(wrapper, "opacity-60")}>{content}</div>
    );
  }

  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${sponsor.name}`}
      className={cn(
        wrapper,
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950"
      )}
    >
      {content}
    </a>
  );
}
