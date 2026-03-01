export type SponsorTier = "hero" | "gold" | "silver" | "bronze";

export type Sponsor = {
  name: string;
  /** Logo for white/light backgrounds (dark version) */
  logo: string;
  url: string;
  width: number;
  height: number;
  tier: SponsorTier;
};

export const sponsors: Sponsor[] = [
  // Hero
  {
    name: "OpenAI",
    logo: "/assets/img/sponsors/openai-black.png",
    url: "https://openai.com",
    width: 1604,
    height: 718,
    tier: "hero",
  },
  // Gold
  {
    name: "VNG Corporation",
    logo: "/assets/img/sponsors/vng.png",
    url: "https://vng.com.vn",
    width: 200,
    height: 80,
    tier: "gold",
  },
  {
    name: "ElevenLabs",
    logo: "/assets/img/sponsors/elevenlabs-black.png",
    url: "https://elevenlabs.io",
    width: 2082,
    height: 270,
    tier: "gold",
  },
  // Silver
  {
    name: "OpenRouter",
    logo: "/assets/svg/sponsors/openrouter.svg",
    url: "https://openrouter.ai",
    width: 200,
    height: 60,
    tier: "silver",
  },
  {
    name: "Lovable",
    logo: "/assets/img/sponsors/lovable-dark.png",
    url: "https://lovable.dev",
    width: 200,
    height: 60,
    tier: "silver",
  },
  {
    name: "Exa",
    logo: "/assets/img/sponsors/exa-blue.png",
    url: "https://exa.ai",
    width: 160,
    height: 60,
    tier: "silver",
  },
  {
    name: "Agora",
    logo: "/assets/img/sponsors/agora-blue.png",
    url: "https://agora.io",
    width: 600,
    height: 600,
    tier: "silver",
  },
  // Bronze
  {
    name: "JigsawStack",
    logo: "/assets/svg/sponsors/jigsawstack.svg",
    url: "https://jigsawstack.com",
    width: 200,
    height: 60,
    tier: "bronze",
  },
  {
    name: "HRG",
    logo: "/assets/svg/sponsors/hrg-dark.svg",
    url: "https://hrg.com",
    width: 2078,
    height: 600,
    tier: "bronze",
  },
  {
    name: "eTest",
    logo: "/assets/img/sponsors/etest.png",
    url: "https://etest.vn",
    width: 6879,
    height: 1823,
    tier: "bronze",
  },
  {
    name: "Trae",
    logo: "/assets/img/sponsors/trae-dark.png",
    url: "https://trae.ai",
    width: 1755,
    height: 1241,
    tier: "bronze",
  },
  {
    name: "Algorithmics",
    logo: "/assets/img/sponsors/algorithmics-dark.png",
    url: "https://algorithmics.com",
    width: 2160,
    height: 2160,
    tier: "bronze",
  },
  {
    name: "CoderSchool",
    logo: "/assets/img/sponsors/coderschool-red.png",
    url: "https://coderschool.vn",
    width: 160,
    height: 60,
    tier: "bronze",
  },
  {
    name: "n8n",
    logo: "/assets/img/sponsors/n8n-dark.png",
    url: "https://n8n.io",
    width: 160,
    height: 60,
    tier: "bronze",
  },
  {
    name: "Redis",
    logo: "/assets/img/sponsors/redis.jpg",
    url: "https://redis.io",
    width: 160,
    height: 60,
    tier: "bronze",
  },
  {
    name: "FreightPilot",
    logo: "/assets/img/sponsors/freightpilot.png",
    url: "https://freightpilot.ai",
    width: 160,
    height: 60,
    tier: "bronze",
  },
  {
    name: "Valsea",
    logo: "/assets/img/sponsors/valsea.png",
    url: "https://valsea.com",
    width: 160,
    height: 60,
    tier: "bronze",
  },
  {
    name: "Veracia",
    logo: "/assets/img/sponsors/veracia.png",
    url: "https://veracia.ai",
    width: 500,
    height: 500,
    tier: "bronze",
  },
  {
    name: "GreenNode",
    logo: "/assets/img/sponsors/greennode.jpg",
    url: "https://greennode.ai",
    width: 1000,
    height: 1000,
    tier: "bronze",
  },
  // Text-only partners
  {
    name: "AISEA",
    logo: "",
    url: "https://www.aisea.builders",
    width: 0,
    height: 0,
    tier: "bronze",
  },
  {
    name: "The Flour Dept",
    logo: "",
    url: "#",
    width: 0,
    height: 0,
    tier: "bronze",
  },
  {
    name: "UpYouth",
    logo: "",
    url: "https://upyouth.org",
    width: 0,
    height: 0,
    tier: "bronze",
  },
];
