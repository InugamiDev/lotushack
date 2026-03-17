export type SponsorTier = "hero" | "gold" | "silver" | "bronze" | "community";

export type Sponsor = {
  name: string;
  logo: string;
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
    logo: "/assets/svg/sponsors/etest-white.svg",
    url: "https://etest.edu.vn",
    width: 2040,
    height: 541,
    tier: "hero",
    description:
      "Vietnam's leading online exam platform, empowering millions of students with smart assessments and personalized learning.",
  },
  {
    name: "OpenAI",
    logo: "/assets/svg/sponsors/openai-white.svg",
    url: "https://openai.com",
    width: 1522,
    height: 559,
    tier: "hero",
    description:
      "Building safe and beneficial AI systems that push the frontiers of intelligence for the benefit of all.",
  },
  {
    name: "AWS",
    logo: "/assets/svg/sponsors/aws-white.svg",
    url: "https://aws.amazon.com",
    width: 742,
    height: 445,
    tier: "hero",
    description:
      "Amazon Web Services — the world's most comprehensive cloud platform, powering innovation at scale.",
  },

  // Gold
  {
    name: "VNG Corporation",
    logo: "/assets/svg/sponsors/vng-white.svg",
    url: "https://vng.com.vn",
    width: 733,
    height: 298,
    tier: "gold",
    description:
      "Vietnam's leading technology company building world-class digital products across gaming, AI, cloud, and fintech.",
  },
  {
    name: "Trae",
    logo: "/assets/svg/sponsors/trae-white.svg",
    url: "https://trae.ai",
    width: 1150,
    height: 261,
    tier: "gold",
    description:
      "AI-powered coding assistant helping developers build faster with intelligent code generation and debugging.",
  },
  {
    name: "OpenRouter",
    logo: "/assets/svg/sponsors/openrouter-white.svg",
    url: "https://openrouter.ai",
    width: 1737,
    height: 335,
    tier: "gold",
    description:
      "Unified API gateway for the best AI models — find, compare, and use any LLM through a single interface.",
  },
  {
    name: "Agora",
    logo: "/assets/svg/sponsors/agora-white.svg",
    url: "https://agora.io",
    width: 926,
    height: 436,
    tier: "gold",
    description:
      "Real-time engagement platform powering voice, video, and interactive experiences for billions of users.",
  },

  // Silver
  {
    name: "n8n",
    logo: "/assets/svg/sponsors/n8n-white.svg",
    url: "https://n8n.io",
    width: 843,
    height: 239,
    tier: "silver",
  },
  {
    name: "Redis",
    logo: "/assets/svg/sponsors/redis-white.svg",
    url: "https://redis.io",
    width: 734,
    height: 229,
    tier: "silver",
  },
  {
    name: "Lovable",
    logo: "/assets/svg/sponsors/lovable-white.svg",
    url: "https://lovable.dev",
    width: 1160,
    height: 197,
    tier: "silver",
  },
  {
    name: "TinyFish",
    logo: "/assets/svg/sponsors/tinyfish-white.svg",
    url: "https://tinyfish.io",
    width: 756,
    height: 463,
    tier: "silver",
  },
  {
    name: "TASCO",
    logo: "/assets/svg/sponsors/tasco-white.svg",
    url: "https://tasco.com.vn",
    width: 1315,
    height: 692,
    tier: "silver",
  },

  // Bronze
  {
    name: "CIS",
    logo: "/assets/svg/sponsors/cis-white.svg",
    url: "https://cis.edu.vn",
    width: 458,
    height: 330,
    tier: "bronze",
  },
  {
    name: "MLC Sports",
    logo: "/assets/svg/sponsors/mlc-sports-white.svg",
    url: "https://mlcsports.vn",
    width: 642,
    height: 399,
    tier: "bronze",
  },
  {
    name: "PhongVu.vn",
    logo: "/assets/svg/sponsors/phongvu-white.svg",
    url: "https://phongvu.vn",
    width: 1160,
    height: 302,
    tier: "bronze",
  },
  {
    name: "Galaxy Holdings",
    logo: "/assets/svg/sponsors/galaxy-holdings-white.svg",
    url: "https://galaxyholdings.vn",
    width: 756,
    height: 229,
    tier: "bronze",
  },
  {
    name: "Coca-Cola",
    logo: "/assets/svg/sponsors/coca-cola-white.svg",
    url: "https://coca-cola.com.vn",
    width: 706,
    height: 531,
    tier: "bronze",
  },
  {
    name: "Exa",
    logo: "/assets/svg/sponsors/exa-white.svg",
    url: "https://exa.ai",
    width: 641,
    height: 220,
    tier: "bronze",
  },
  {
    name: "ElevenLabs",
    logo: "/assets/svg/sponsors/elevenlabs-white.svg",
    url: "https://elevenlabs.io",
    width: 1251,
    height: 165,
    tier: "bronze",
  },
  {
    name: "GenAI Fund",
    logo: "/assets/svg/sponsors/genai-fund-white.svg",
    url: "https://genaifund.ai",
    width: 513,
    height: 266,
    tier: "bronze",
  },
  {
    name: "Algorithmics",
    logo: "/assets/svg/sponsors/algorithmics-white.svg",
    url: "https://algo.edu.vn",
    width: 1178,
    height: 430,
    tier: "bronze",
  },
  {
    name: "Replit",
    logo: "/assets/svg/sponsors/replit-white.svg",
    url: "https://replit.com",
    width: 889,
    height: 482,
    tier: "bronze",
  },
  {
    name: "Manus",
    logo: "/assets/svg/sponsors/manus-white.svg",
    url: "https://manus.im",
    width: 853,
    height: 298,
    tier: "bronze",
  },

  // Community — Row 6
  {
    name: "FreightPilot.AI",
    logo: "/assets/svg/sponsors/freightpilot-white.svg",
    url: "https://freightpilot.ai",
    width: 1077,
    height: 344,
    tier: "community",
  },
  {
    name: "Notion",
    logo: "/assets/svg/sponsors/notion-white.svg",
    url: "https://notion.so",
    width: 701,
    height: 500,
    tier: "community",
  },
  {
    name: "Bright Data",
    logo: "/assets/svg/sponsors/bright-data-white.svg",
    url: "https://brightdata.com",
    width: 885,
    height: 229,
    tier: "community",
  },
  {
    name: "Qwen",
    logo: "/assets/svg/sponsors/qwen-white.svg",
    url: "https://qwen.ai",
    width: 872,
    height: 215,
    tier: "community",
  },
  {
    name: "fal",
    logo: "/assets/svg/sponsors/fal-white.svg",
    url: "https://fal.ai",
    width: 495,
    height: 500,
    tier: "community",
  },
  {
    name: "Dify",
    logo: "/assets/svg/sponsors/dify-white.svg",
    url: "https://dify.ai",
    width: 256,
    height: 256,
    tier: "community",
  },

  // Community — Row 7
  {
    name: "HRG",
    logo: "/assets/svg/sponsors/hrg-white.svg",
    url: "https://hackerresidencygroup.com",
    width: 600,
    height: 179,
    tier: "community",
  },
  {
    name: "GreenNode",
    logo: "/assets/svg/sponsors/greennode-white.svg",
    url: "https://greennode.ai",
    width: 605,
    height: 605,
    tier: "community",
  },
  {
    name: "AI.SEA",
    logo: "/assets/svg/sponsors/aisea-white.svg",
    url: "https://aisea.builders",
    width: 404,
    height: 403,
    tier: "community",
  },
  {
    name: "valsea",
    logo: "/assets/svg/sponsors/valsea-white.svg",
    url: "https://valsea.app",
    width: 413,
    height: 413,
    tier: "community",
  },
  {
    name: "CoderSchool",
    logo: "/assets/svg/sponsors/coderschool-white.svg",
    url: "https://coderschool.vn",
    width: 600,
    height: 453,
    tier: "community",
  },
  {
    name: "The Flour Donut",
    logo: "/assets/svg/sponsors/donut-white.svg",
    url: "https://theflourdonut.com",
    width: 404,
    height: 403,
    tier: "community",
  },
  {
    name: "AI Hay",
    logo: "/assets/svg/sponsors/ai-hay-white.svg",
    url: "https://aihay.vn",
    width: 610,
    height: 610,
    tier: "community",
  },
  {
    name: "igot.ai",
    logo: "/assets/svg/sponsors/igot-white.svg",
    url: "https://igot.ai",
    width: 931,
    height: 440,
    tier: "community",
  },
];
