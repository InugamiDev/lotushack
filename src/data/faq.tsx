import type { ReactNode } from "react";
import { REGISTER_URL, DISCORD_URL } from "@/lib/constants";

export type FAQCategory = "general" | "tracks" | "registration" | "logistics";

export type FAQItem = {
  question: string;
  answer: ReactNode;
  plainAnswer: string;
  category: FAQCategory;
};

const linkClass =
  "text-gold-400 underline underline-offset-4 transition-colors duration-200 hover:text-gold-300";

export const faqItems: FAQItem[] = [
  /* ── General ─────────────────────────────────────────────── */
  {
    category: "general",
    question: "What is LotusHacks?",
    answer:
      "LotusHacks is a 36-hour in-person hackathon hosted in collaboration with HackHarvard Vietnam, taking place March 20–22, 2026 at VNG Campus in Ho Chi Minh City. Over 800 builders from 30+ countries come together to design, build, and ship real projects in one intense weekend.",
    plainAnswer:
      "LotusHacks is a 36-hour in-person hackathon hosted in collaboration with HackHarvard Vietnam, taking place March 20–22, 2026 at VNG Campus in Ho Chi Minh City. Over 800 builders from 30+ countries come together to design, build, and ship real projects in one intense weekend.",
  },
  {
    category: "general",
    question: "What is a hackathon?",
    answer:
      "A hackathon is a collaborative building event where teams create a working project in a short time. It’s not just coding — you can design, prototype, pitch, and learn. Hackathons are open to all skill levels, and LotusHacks especially welcomes first-timers.",
    plainAnswer:
      "A hackathon is a collaborative building event where teams create a working project in a short time. It's not just coding - you can design, prototype, pitch, and learn. Hackathons are open to all skill levels, and LotusHacks especially welcomes first-timers.",
  },
  {
    category: "general",
    question: "How much does it cost?",
    answer:
      "Nothing — LotusHacks is completely free. That includes all meals, snacks, workspace, Wi-Fi, swag, and access to mentors and workshops throughout the event.",
    plainAnswer:
      "Nothing - LotusHacks is completely free. That includes all meals, snacks, workspace, Wi-Fi, swag, and access to mentors and workshops throughout the event.",
  },
  {
    category: "general",
    question: "I've never been to a hackathon before!",
    answer:
      "You're in the right place. We run beginner workshops, pair you with dedicated mentors, and host team formation activities so nobody builds alone. There are also beginner-friendly prizes so you're competing on a level playing field.",
    plainAnswer:
      "You're in the right place. We run beginner workshops, pair you with dedicated mentors, and host team formation activities so nobody builds alone. There are also beginner-friendly prizes so you're competing on a level playing field.",
  },
  {
    category: "general",
    question: "How do I stay updated before the event?",
    answer: (
      <>
        Join our{" "}
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Discord
        </a>
        , follow us on social media, and keep an eye on{" "}
        <a href="https://lotushack.org" className={linkClass}>
          lotushack.org
        </a>{" "}
        for announcements, speaker reveals, and schedule updates.
      </>
    ),
    plainAnswer:
      "Join our Discord, follow us on social media, and keep an eye on lotushack.org for announcements, speaker reveals, and schedule updates.",
  },

  /* ── Tracks & Prizes ─────────────────────────────────────── */
  {
    category: "tracks",
    question: "What are hackathon tracks?",
    answer:
      "Tracks are optional themes you can build around: Enterprise, Consumer, Societies, and Ed. Tech. Submitting to a track makes you eligible for track-specific prizes, but it's not required — you can also compete for general prizes.",
    plainAnswer:
      "Tracks are optional themes you can build around: Enterprise, Consumer, Societies, and Ed. Tech. Submitting to a track makes you eligible for track-specific prizes, but it's not required - you can also compete for general prizes.",
  },
  {
    category: "tracks",
    question: "What can I win?",
    answer:
      "Over 250M+ VND in total prizes across general awards, track-specific awards, a beginner prize, sponsor prizes, and cloud credits. Full prize details will be announced closer to the event.",
    plainAnswer:
      "Over 250M+ VND in total prizes across general awards, track-specific awards, a beginner prize, sponsor prizes, and cloud credits. Full prize details will be announced closer to the event.",
  },
  {
    category: "tracks",
    question: "Do I have to submit a project?",
    answer:
      "No — you're welcome to attend just for the workshops, networking, and experience. But you must submit a project to be eligible for prizes.",
    plainAnswer:
      "No - you're welcome to attend just for the workshops, networking, and experience. But you must submit a project to be eligible for prizes.",
  },
  {
    category: "tracks",
    question: "What can I build?",
    answer:
      "Anything. Web apps, mobile apps, hardware hacks, AI tools, games, browser extensions — any stack, any platform. The only rule is that your project must be built during the 36-hour event.",
    plainAnswer:
      "Anything. Web apps, mobile apps, hardware hacks, AI tools, games, browser extensions - any stack, any platform. The only rule is that your project must be built during the 36-hour event.",
  },

  /* ── Registration & Teams ────────────────────────────────── */
  {
    category: "registration",
    question: "Who can participate?",
    answer:
      "Students, recent graduates, and early-career builders — developers, designers, and product thinkers. You must be 18 or older. International participants are welcome.",
    plainAnswer:
      "Students, recent graduates, and early-career builders - developers, designers, and product thinkers. You must be 18 or older. International participants are welcome.",
  },
  {
    category: "registration",
    question: "How do I register?",
    answer: (
      <>
        Sign up through our{" "}
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          registration page
        </a>
        . Spots are filled on a rolling basis, so early registration is
        recommended.
      </>
    ),
    plainAnswer:
      "Sign up through our registration page. Spots are filled on a rolling basis, so early registration is recommended.",
  },
  {
    category: "registration",
    question: "How do teams work?",
    answer: (
      <>
        Teams can have up to 4 members. You can form a team before the event or
        find teammates on-site through our team formation activities and the{" "}
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Discord
        </a>{" "}
        team-finding channel. Solo participants are always welcome.
      </>
    ),
    plainAnswer:
      "Teams can have up to 4 members. You can form a team before the event or find teammates on-site through our team formation activities and the Discord team-finding channel. Solo participants are always welcome.",
  },
  {
    category: "registration",
    question: "Can I attend from outside Vietnam?",
    answer: (
      <>
        Absolutely. Handle your own travel and visa arrangements. If you need an
        invitation letter for visa purposes, reach out to{" "}
        <a href="mailto:team@lotushack.org" className={linkClass}>
          team@lotushack.org
        </a>{" "}
        and we'll help.
      </>
    ),
    plainAnswer:
      "Absolutely. Handle your own travel and visa arrangements. If you need an invitation letter for visa purposes, reach out to team@lotushack.org and we'll help.",
  },

  /* ── Logistics ───────────────────────────────────────────── */
  {
    category: "logistics",
    question: "When and where is LotusHacks?",
    answer:
      "March 20–22, 2026 at VNG Campus, District 7, Ho Chi Minh City. Check-in opens Friday at 4 PM, and the event runs through Sunday afternoon.",
    plainAnswer:
      "March 20-22, 2026 at VNG Campus, District 7, Ho Chi Minh City. Check-in opens Friday at 4 PM, and the event runs through Sunday afternoon.",
  },
  {
    category: "logistics",
    question: "Will food be provided?",
    answer:
      "Yes — all meals from Friday dinner through Sunday lunch are covered, plus 24/7 snacks, coffee, and drinks throughout the event.",
    plainAnswer:
      "Yes - all meals from Friday dinner through Sunday lunch are covered, plus 24/7 snacks, coffee, and drinks throughout the event.",
  },
  {
    category: "logistics",
    question: "Can I stay overnight?",
    answer:
      "Yes. This is a 36-hour event and the venue is open around the clock. Designated rest areas are provided — we recommend bringing a sleeping bag or light blanket. The venue is secured and staffed 24/7.",
    plainAnswer:
      "Yes. This is a 36-hour event and the venue is open around the clock. Designated rest areas are provided - we recommend bringing a sleeping bag or light blanket. The venue is secured and staffed 24/7.",
  },
  {
    category: "logistics",
    question: "What should I bring?",
    answer:
      "Your laptop and chargers, toiletries, a change of clothes, a sleeping bag or blanket if you plan to rest on-site, and deodorant. Everything else — food, Wi-Fi, power strips — is on us.",
    plainAnswer:
      "Your laptop and chargers, toiletries, a change of clothes, a sleeping bag or blanket if you plan to rest on-site, and deodorant. Everything else - food, Wi-Fi, power strips - is on us.",
  },
  {
    category: "logistics",
    question: "I still have questions!",
    answer: (
      <>
        Email us at{" "}
        <a href="mailto:team@lotushack.org" className={linkClass}>
          team@lotushack.org
        </a>{" "}
        or ask in our{" "}
        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          Discord
        </a>
        . We're happy to help.
      </>
    ),
    plainAnswer:
      "Email us at team@lotushack.org or ask in our Discord. We're happy to help.",
  },
];
