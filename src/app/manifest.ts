import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LotusHacks 2026 — Vietnam's Largest Hackathon",
    short_name: "LotusHacks",
    description:
      "Join 600+ builders for a 36-hour hackathon at LotusHacks x HackHarvard 2026. March 20-22, Ho Chi Minh City.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a1f1a",
    theme_color: "#0a1f1a",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
