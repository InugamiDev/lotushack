export type Stat = {
  title: string;
  highlight: string;
  description: string;
  icon: "clock" | "brain" | "map-pin" | "trophy" | "users";
};

export const stats: Stat[] = [
  {
    title: "36 Hours",
    highlight: "March 20–22",
    description:
      "Non-stop hacking from Friday 8 PM to Sunday 8 AM. Build something incredible over one weekend.",
    icon: "clock",
  },
  {
    title: "Level Up",
    highlight: "Workshops & Mentors",
    description:
      "Hands-on workshops, 1-on-1 mentorship from industry pros, and career networking with top tech companies.",
    icon: "brain",
  },
  {
    title: "VNG Campus",
    highlight: "Ho Chi Minh City",
    description:
      "District 7's premier tech hub — world-class facilities, free meals, and everything you need to build.",
    icon: "map-pin",
  },
  {
    title: "250M+ VND",
    highlight: "Prizes & Rewards",
    description:
      "Cash prizes, cloud credits, sponsored perks, and exclusive opportunities across multiple award tracks.",
    icon: "trophy",
  },
  {
    title: "800+ Hackers",
    highlight: "From Across the World",
    description:
      "5 continents, 30+ countries — builders, designers, and dreamers from around the globe, all under one roof.",
    icon: "users",
  },
];
