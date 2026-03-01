export type Stat = {
  title: string;
  description: string;
  icon: "clock" | "brain" | "map-pin" | "trophy" | "users";
};

export const stats: Stat[] = [
  {
    title: "Time",
    description: "March 20 (20:00) – March 22 (08:00), 36 hours",
    icon: "clock",
  },
  {
    title: "Experience",
    description: "Workshops, mentorship, career opportunities",
    icon: "brain",
  },
  {
    title: "Location",
    description: "VNG Group JSC, District 7, Ho Chi Minh City",
    icon: "map-pin",
  },
  {
    title: "Prizes",
    description: "Over 250+ million VND in cash, credits, and sponsored rewards",
    icon: "trophy",
  },
  {
    title: "Builders",
    description: "600+ builders, creators, and hackers from across Vietnam",
    icon: "users",
  },
];
