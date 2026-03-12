export type Perk = {
  sponsor: string;
  logo: string;
  description: string;
  /** What the hacker receives, e.g. "$100 API Credits" */
  value: string;
  /** Category color token for card accent */
  accent: "gold" | "jade" | "lotus" | "amber";
};

/**
 * Perks available to verified hackers.
 * Codes are NOT stored here — they come from the verification API.
 */
export const perks: Perk[] = [
  {
    sponsor: "OpenAI",
    logo: "/assets/img/sponsors/openai-white.png",
    description: "API credits for GPT-4o, o1, and DALL-E during the hackathon",
    value: "API Credits",
    accent: "jade",
  },
  {
    sponsor: "ElevenLabs",
    logo: "/assets/img/sponsors/elevenlabs-white.png",
    description: "Text-to-speech and voice AI API access",
    value: "API Credits",
    accent: "lotus",
  },
  {
    sponsor: "Agora",
    logo: "/assets/img/sponsors/agora-white.png",
    description: "Real-time voice, video, and interactive live streaming SDK",
    value: "API Credits",
    accent: "gold",
  },
  {
    sponsor: "Redis",
    logo: "/assets/img/sponsors/redis-white.png",
    description: "Redis Cloud database credits for your project",
    value: "Cloud Credits",
    accent: "amber",
  },
  {
    sponsor: "n8n",
    logo: "/assets/img/sponsors/n8n-white.png",
    description: "Workflow automation platform credits",
    value: "Pro Access",
    accent: "jade",
  },
  {
    sponsor: "Exa",
    logo: "/assets/img/sponsors/exa-white.png",
    description: "AI-powered search API for your hackathon project",
    value: "API Credits",
    accent: "gold",
  },
];
