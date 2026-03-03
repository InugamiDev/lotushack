export type SponsorTier = "hero" | "gold" | "silver" | "bronze" | "community";

export type Sponsor = {
  name: string;
  logo: string;
  lightLogo?: string;
  url: string;
  width: number;
  height: number;
  tier: SponsorTier;
  description?: string;
};

export const sponsors: Sponsor[] = [
  // Hero
  {
    name: "eTest",
    logo: "/assets/img/sponsors/etest.png",
    lightLogo: "/assets/svg/sponsors/etest-white.svg",
    url: "https://etest.edu.vn",
    width: 6879,
    height: 1823,
    tier: "hero",
    description:
      "Vietnam's leading online exam platform, empowering millions of students with smart assessments and personalized learning.",
  },
  {
    name: "OpenAI",
    logo: "/assets/img/sponsors/openai-black.png",
    lightLogo: "/assets/svg/sponsors/openai-white.svg",
    url: "https://openai.com",
    width: 1604,
    height: 718,
    tier: "hero",
    description:
      "Building safe and beneficial AI systems that push the frontiers of intelligence for the benefit of all.",
  },
  {
    name: "VNG Corporation",
    logo: "/assets/img/sponsors/vng.png",
    lightLogo: "/assets/svg/sponsors/vng-white.svg",
    url: "https://vng.com.vn",
    width: 1040,
    height: 570,
    tier: "hero",
    description:
      "Vietnam's leading technology company building world-class digital products across gaming, AI, cloud, and fintech.",
  },

  // Gold
  {
    name: "Trae",
    logo: "/assets/img/sponsors/trae-light.png",
    lightLogo: "/assets/svg/sponsors/trae-white.svg",
    url: "https://trae.ai",
    width: 3510,
    height: 2482,
    tier: "gold",
    description:
      "AI-powered coding assistant helping developers build faster with intelligent code generation and debugging.",
  },
  {
    name: "OpenRouter",
    logo: "/assets/img/sponsors/openrouter.png",
    lightLogo: "/assets/svg/sponsors/openrouter-white.svg",
    url: "https://openrouter.ai",
    width: 2400,
    height: 800,
    tier: "gold",
    description:
      "Unified API gateway for the best AI models — find, compare, and use any LLM through a single interface.",
  },
  {
    name: "Agora",
    logo: "/assets/img/sponsors/agora-blue.png",
    lightLogo: "/assets/svg/sponsors/agora-white.svg",
    url: "https://agora.io",
    width: 600,
    height: 600,
    tier: "gold",
    description:
      "Real-time engagement platform powering voice, video, and interactive experiences for billions of users.",
  },
  {
    name: "n8n",
    logo: "/assets/img/sponsors/n8n-light.png",
    lightLogo: "/assets/svg/sponsors/n8n-white.svg",
    url: "https://n8n.io",
    width: 576,
    height: 160,
    tier: "gold",
    description:
      "Open-source workflow automation that connects your apps and services with a visual, code-optional approach.",
  },

  // Silver
  {
    name: "HRG",
    logo: "/assets/svg/sponsors/hrg-dark.svg",
    lightLogo: "/assets/svg/sponsors/hrg-white.svg",
    url: "https://hackerresidencygroup.com",
    width: 2078,
    height: 600,
    tier: "silver",
  },
  {
    name: "ElevenLabs",
    logo: "/assets/img/sponsors/elevenlabs-black.png",
    lightLogo: "/assets/svg/sponsors/elevenlabs-white.svg",
    url: "https://elevenlabs.io",
    width: 2082,
    height: 270,
    tier: "silver",
  },
  {
    name: "Algorithmics",
    logo: "/assets/img/sponsors/algorithmics-dark.png",
    lightLogo: "/assets/svg/sponsors/algorithmics-white.svg",
    url: "https://algo.edu.vn",
    width: 4320,
    height: 2160,
    tier: "silver",
  },
  {
    name: "Exa",
    logo: "/assets/img/sponsors/exa-blue.png",
    lightLogo: "/assets/svg/sponsors/exa-white.svg",
    url: "https://exa.ai",
    width: 1386,
    height: 480,
    tier: "silver",
  },

  // Bronze
  {
    name: "Lovable",
    logo: "/assets/img/sponsors/lovable-dark.png",
    lightLogo: "/assets/svg/sponsors/lovable-white.svg",
    url: "https://lovable.dev",
    width: 911,
    height: 155,
    tier: "bronze",
  },
  {
    name: "Redis",
    logo: "/assets/img/sponsors/redis.jpg",
    lightLogo: "/assets/svg/sponsors/redis-white.svg",
    url: "https://redis.io",
    width: 2091,
    height: 658,
    tier: "bronze",
  },
  {
    name: "JigsawStack",
    logo: "/assets/svg/sponsors/jigsawstack.svg",
    lightLogo: "/assets/svg/sponsors/jigsawstack-white.svg",
    url: "https://jigsawstack.com",
    width: 731,
    height: 110,
    tier: "bronze",
  },
  {
    name: "Veracia",
    logo: "/assets/img/sponsors/veracia.png",
    lightLogo: "/assets/svg/sponsors/veracia-white.svg",
    url: "https://veracia.ai",
    width: 1000,
    height: 1000,
    tier: "bronze",
  },

  // Community
  {
    name: "CoderSchool",
    logo: "/assets/img/sponsors/coderschool.png",
    lightLogo: "/assets/svg/sponsors/coderschool-white.svg",
    url: "https://coderschool.vn",
    width: 2000,
    height: 1551,
    tier: "community",
  },
  {
    name: "GreenNode",
    logo: "/assets/img/sponsors/greennode.jpg",
    lightLogo: "/assets/svg/sponsors/greennode-white.svg",
    url: "https://greennode.ai",
    width: 2000,
    height: 2000,
    tier: "community",
  },
  {
    name: "AI.SEA",
    logo: "/assets/img/sponsors/aisea.png",
    lightLogo: "/assets/svg/sponsors/aisea-white.svg",
    url: "https://aisea.builders",
    width: 512,
    height: 512,
    tier: "community",
  },
  {
    name: "The Flour Donut",
    logo: "/assets/img/sponsors/donut.png",
    lightLogo: "/assets/svg/sponsors/donut-white.svg",
    url: "https://theflourdonut.com",
    width: 500,
    height: 500,
    tier: "community",
  },
  {
    name: "valsea",
    logo: "/assets/img/sponsors/valsea.png",
    lightLogo: "/assets/svg/sponsors/valsea-white.svg",
    url: "https://valsea.app",
    width: 1024,
    height: 1024,
    tier: "community",
  },
  {
    name: "FreightPilot.AI",
    logo: "/assets/img/sponsors/freightpilot.png",
    lightLogo: "/assets/svg/sponsors/freightpilot-white.svg",
    url: "https://freightpilot.ai",
    width: 300,
    height: 100,
    tier: "community",
  },
];
