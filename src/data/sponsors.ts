export type SponsorTier = "hero" | "gold" | "silver" | "bronze" | "community";

export type Sponsor = {
  name: string;
  logo: string;
  url: string;
  width: number;
  height: number;
  tier: SponsorTier;
};

export const sponsors: Sponsor[] = [
  // Row 1 — Hero (3 per row)
  {
    name: "eTest",
    logo: "/assets/img/sponsors/etest.png",
    url: "https://etest.edu.vn",
    width: 6879,
    height: 1823,
    tier: "hero",
  },
  {
    name: "OpenAI",
    logo: "/assets/img/sponsors/openai-black.png",
    url: "https://openai.com",
    width: 1604,
    height: 718,
    tier: "hero",
  },
  {
    name: "VNG Corporation",
    logo: "/assets/img/sponsors/vng.png",
    url: "https://vng.com.vn",
    width: 200,
    height: 80,
    tier: "hero",
  },

  // Row 2 — Gold (4 per row)
  {
    name: "Trae",
    logo: "/assets/img/sponsors/trae-dark.png",
    url: "https://trae.ai",
    width: 1755,
    height: 1241,
    tier: "gold",
  },
  {
    name: "OpenRouter",
    logo: "/assets/svg/sponsors/openrouter.svg",
    url: "https://openrouter.ai",
    width: 200,
    height: 60,
    tier: "gold",
  },
  {
    name: "Agora",
    logo: "/assets/img/sponsors/agora-blue.png",
    url: "https://agora.io",
    width: 600,
    height: 600,
    tier: "gold",
  },
  {
    name: "n8n",
    logo: "/assets/img/sponsors/n8n-dark.png",
    url: "https://n8n.io",
    width: 160,
    height: 60,
    tier: "gold",
  },

  // Row 3 — Silver (4 per row)
  {
    name: "HRG",
    logo: "/assets/svg/sponsors/hrg-dark.svg",
    url: "https://hackerresidencygroup.com",
    width: 2078,
    height: 600,
    tier: "silver",
  },
  {
    name: "ElevenLabs",
    logo: "/assets/img/sponsors/elevenlabs-black.png",
    url: "https://elevenlabs.io",
    width: 2082,
    height: 270,
    tier: "silver",
  },
  {
    name: "Algorithmics",
    logo: "/assets/img/sponsors/algorithmics-dark.png",
    url: "https://algo.edu.vn",
    width: 2160,
    height: 2160,
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

  // Row 4 — Bronze (4 per row)
  {
    name: "Lovable",
    logo: "/assets/img/sponsors/lovable-dark.png",
    url: "https://lovable.dev",
    width: 200,
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
    name: "JigsawStack",
    logo: "/assets/svg/sponsors/jigsawstack.svg",
    url: "https://jigsawstack.com",
    width: 200,
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

  // Row 5 — Community (6 per row)
  {
    name: "CoderSchool",
    logo: "/assets/img/sponsors/coderschool-red.png",
    url: "https://coderschool.vn",
    width: 160,
    height: 60,
    tier: "community",
  },
  {
    name: "GreenNode",
    logo: "/assets/img/sponsors/greennode.jpg",
    url: "https://greennode.ai",
    width: 1000,
    height: 1000,
    tier: "community",
  },
  {
    name: "AI.SEA",
    logo: "",
    url: "https://aisea.builders",
    width: 0,
    height: 0,
    tier: "community",
  },
  {
    name: "The Flour Department",
    logo: "",
    url: "https://theflourdepartment.cococart.co",
    width: 0,
    height: 0,
    tier: "community",
  },
  {
    name: "valsea",
    logo: "/assets/img/sponsors/valsea.png",
    url: "https://valsea.app",
    width: 160,
    height: 60,
    tier: "community",
  },
  {
    name: "FreightPilot.AI",
    logo: "/assets/img/sponsors/freightpilot.png",
    url: "https://freightpilot.ai",
    width: 160,
    height: 60,
    tier: "community",
  },
];
