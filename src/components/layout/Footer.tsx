import Image from "next/image";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { NAV_LINKS, SOCIALS } from "@/lib/constants";

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
    </svg>
  );
}

const ICON_MAP: Record<string, LucideIcon | typeof DiscordIcon> = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  email: Mail,
  discord: DiscordIcon,
};

export function Footer() {
  return (
    <footer className="relative border-t border-gold-400/15 bg-forest-950/40 backdrop-blur-sm">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        {/* Branding */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/img/hero/logo.png"
              alt=""
              width={32}
              height={32}
              className="h-auto w-auto"
              aria-hidden="true"
            />
            <span className="font-[family-name:var(--font-heading)] text-lg font-semibold tracking-wider text-cream-50">
              LotusHack
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-text-muted">
            Vietnam&apos;s premier hackathon, organized by Vietnamese students
            worldwide. 36 hours of building, learning, and innovation.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-4 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-widest text-cream-100/50">
            Navigate
          </h3>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-[family-name:var(--font-heading)] text-sm tracking-wide text-text-secondary transition-colors duration-200 hover:text-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900 rounded-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="mb-4 font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-widest text-cream-100/50">
            Connect
          </h3>
          <div className="flex gap-4">
            {SOCIALS.map((social) => {
              const Icon = ICON_MAP[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-text-muted transition-colors duration-200 hover:bg-forest-800 hover:text-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900 touch-action-manipulation"
                >
                  {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold-400/15">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-6">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} LotusHack. All rights reserved.
          </p>
          <a
            href="https://hackharvard.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-text-muted transition-colors duration-200 hover:text-text-secondary"
          >
            <Image
              src="/assets/svg/branding/hackharvard-logo.svg"
              alt="HackHarvard"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span>A HackHarvard Initiative</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
