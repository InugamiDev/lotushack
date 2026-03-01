export type Track = {
  name: string;
  tagline: string;
  description: string;
  image: string;
};

export const tracks: Track[] = [
  {
    name: "Enterprise",
    tagline: "Solutions for large-scale business challenges",
    description:
      "Build tools that transform how businesses operate — from supply chain optimization and workplace automation to AI-powered analytics and B2B platforms.",
    image: "/assets/img/tracks/brick1-enterprise.png",
  },
  {
    name: "Consumer",
    tagline: "Applications designed for everyday users",
    description:
      "Design products people love to use. Social platforms, productivity tools, entertainment apps, or anything that delights and serves real users.",
    image: "/assets/img/tracks/brick2-consumer.png",
  },
  {
    name: "Societies",
    tagline: "Technology for social good and community impact",
    description:
      "Tackle pressing social challenges — healthcare accessibility, environmental sustainability, civic engagement, or any solution that makes a meaningful difference.",
    image: "/assets/img/tracks/brick3-societies.png",
  },
  {
    name: "Ed. Tech",
    tagline: "Innovations in education and learning",
    description:
      "Reimagine how people learn and teach. AI tutors, interactive platforms, accessibility tools, or anything that makes education more engaging for everyone.",
    image: "/assets/img/tracks/brick4-edtech.png",
  },
];
