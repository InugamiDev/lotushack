import Image from "next/image";
import { NAV_LINKS, SOCIALS } from "@/lib/constants";

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "instagram":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      );
    case "email":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 7l-10 6L2 7" />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-forest-900/90 backdrop-blur-sm">
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
            <span className="text-lg font-semibold text-text-primary">
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
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
            Navigate
          </h3>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors duration-200 hover:text-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900 rounded-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
            Connect
          </h3>
          <div className="flex gap-4">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-text-muted transition-colors duration-200 hover:bg-forest-800 hover:text-gold-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900 touch-action-manipulation"
              >
                <SocialIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-subtle">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
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
