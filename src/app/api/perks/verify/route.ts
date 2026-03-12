import { NextResponse } from "next/server";

/**
 * POST /api/perks/verify
 * Stub endpoint — replace with real Luma DB lookup.
 * For now, returns mock codes for any input so the UI can be tested.
 */
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  if (!body?.email || !body?.phone) {
    return NextResponse.json(
      { error: "Email and phone number are required." },
      { status: 400 },
    );
  }

  // TODO: Replace with real verification against Luma/database
  // For now, return mock perks for testing
  const mockPerks = [
    {
      sponsor: "OpenAI",
      logo: "/assets/img/sponsors/openai-white.png",
      description:
        "API credits for GPT-4o, o1, and DALL-E during the hackathon",
      value: "API Credits",
      accent: "jade",
      code: "sk-lh26-XXXX-XXXX-XXXX",
    },
    {
      sponsor: "ElevenLabs",
      logo: "/assets/img/sponsors/elevenlabs-white.png",
      description: "Text-to-speech and voice AI API access",
      value: "API Credits",
      accent: "lotus",
      code: "el-lh26-XXXX-XXXX",
    },
    {
      sponsor: "Agora",
      logo: "/assets/img/sponsors/agora-white.png",
      description:
        "Real-time voice, video, and interactive live streaming SDK",
      value: "API Credits",
      accent: "gold",
      code: "agora-lh26-XXXX-XXXX",
    },
    {
      sponsor: "Redis",
      logo: "/assets/img/sponsors/redis-white.png",
      description: "Redis Cloud database credits for your project",
      value: "Cloud Credits",
      accent: "amber",
      code: "redis-lh26-XXXX-XXXX",
    },
    {
      sponsor: "n8n",
      logo: "/assets/img/sponsors/n8n-white.png",
      description: "Workflow automation platform credits",
      value: "Pro Access",
      accent: "jade",
      code: "n8n-lh26-XXXX-XXXX",
    },
    {
      sponsor: "Exa",
      logo: "/assets/img/sponsors/exa-white.png",
      description: "AI-powered search API for your hackathon project",
      value: "API Credits",
      accent: "gold",
      code: "exa-lh26-XXXX-XXXX",
    },
  ];

  return NextResponse.json({ perks: mockPerks });
}
