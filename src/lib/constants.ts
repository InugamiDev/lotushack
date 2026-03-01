/** Event start: March 20, 2026 at 20:00 ICT (UTC+7) */
export const EVENT_START = new Date("2026-03-20T20:00:00+07:00");

/** Event end: March 22, 2026 at 08:00 ICT (UTC+7) */
export const EVENT_END = new Date("2026-03-22T08:00:00+07:00");

export const EVENT_LOCATION = "VNG Campus, Ho Chi Minh City, Vietnam";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Schedule", href: "#schedule" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
] as const;

export const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com/lotushack",
    icon: "instagram" as const,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/lotushack",
    icon: "facebook" as const,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/lotushack",
    icon: "linkedin" as const,
  },
  {
    label: "Email",
    href: "mailto:hello@lotushack.org",
    icon: "email" as const,
  },
] as const;

export const REGISTER_URL = "https://lotushack.org/register";
