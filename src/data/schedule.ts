export type EventCategory =
  | "ceremony"
  | "workshop"
  | "meal"
  | "hacking"
  | "judging";

export type ScheduleEvent = {
  title: string;
  startTime: string;
  endTime: string;
  category: EventCategory;
  description?: string;
};

export type ScheduleDay = {
  label: string;
  date: string;
  events: ScheduleEvent[];
};

export const categoryColors: Record<EventCategory, string> = {
  ceremony: "border-l-gold-400 bg-gold-400/5",
  workshop: "border-l-lotus-400 bg-lotus-400/5",
  meal: "border-l-jade-400 bg-jade-400/5",
  hacking: "border-l-forest-700 bg-forest-800/30",
  judging: "border-l-gold-400 bg-gold-400/5",
};

export const schedule: ScheduleDay[] = [
  {
    label: "Day 1 — Friday",
    date: "March 20",
    events: [
      {
        title: "Check-in & Registration",
        startTime: "16:00",
        endTime: "18:00",
        category: "ceremony",
        description: "Pick up your badge, swag, and find your workspace",
      },
      {
        title: "Dinner",
        startTime: "18:00",
        endTime: "19:00",
        category: "meal",
      },
      {
        title: "Opening Ceremony",
        startTime: "19:00",
        endTime: "20:00",
        category: "ceremony",
        description: "Welcome keynote, sponsor intros, and rules",
      },
      {
        title: "Hacking Begins!",
        startTime: "20:00",
        endTime: "23:59",
        category: "hacking",
        description: "36 hours on the clock — start building!",
      },
    ],
  },
  {
    label: "Day 2 — Saturday",
    date: "March 21",
    events: [
      {
        title: "Hacking Continues",
        startTime: "00:00",
        endTime: "08:00",
        category: "hacking",
      },
      {
        title: "Breakfast",
        startTime: "08:00",
        endTime: "09:00",
        category: "meal",
      },
      {
        title: "Workshop: AI & APIs",
        startTime: "09:00",
        endTime: "10:00",
        category: "workshop",
        description: "Hands-on session with OpenAI and ElevenLabs APIs",
      },
      {
        title: "Hacking",
        startTime: "10:00",
        endTime: "12:00",
        category: "hacking",
      },
      {
        title: "Lunch",
        startTime: "12:00",
        endTime: "13:00",
        category: "meal",
      },
      {
        title: "Workshop: Pitching 101",
        startTime: "13:00",
        endTime: "14:00",
        category: "workshop",
        description: "Learn how to present your project to judges",
      },
      {
        title: "Hacking",
        startTime: "14:00",
        endTime: "18:00",
        category: "hacking",
      },
      {
        title: "Dinner",
        startTime: "18:00",
        endTime: "19:00",
        category: "meal",
      },
      {
        title: "Hacking",
        startTime: "19:00",
        endTime: "23:59",
        category: "hacking",
      },
    ],
  },
  {
    label: "Day 3 — Sunday",
    date: "March 22",
    events: [
      {
        title: "Hacking (Final Hours)",
        startTime: "00:00",
        endTime: "06:00",
        category: "hacking",
      },
      {
        title: "Breakfast",
        startTime: "06:00",
        endTime: "07:00",
        category: "meal",
      },
      {
        title: "Submissions Due",
        startTime: "08:00",
        endTime: "08:00",
        category: "judging",
        description: "All projects must be submitted by 8:00 AM",
      },
      {
        title: "Judging & Demos",
        startTime: "08:00",
        endTime: "11:00",
        category: "judging",
        description: "Present your project to the judges",
      },
      {
        title: "Lunch",
        startTime: "11:00",
        endTime: "12:00",
        category: "meal",
      },
      {
        title: "Closing Ceremony & Awards",
        startTime: "12:00",
        endTime: "14:00",
        category: "ceremony",
        description: "Winners announced, prizes awarded, group photos!",
      },
    ],
  },
];
