export type EventCategory =
  | "ceremony"
  | "workshop"
  | "meal"
  | "judging"
  | "activity"
  | "speaker";

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

export const categoryStyle: Record<
  EventCategory,
  { label: string; bg: string; border: string; text: string; pill: string; glow: string }
> = {
  ceremony: {
    label: "Ceremony",
    bg: "bg-gold-400/25 hover:bg-gold-400/35",
    border: "border-l-gold-400",
    text: "text-gold-300",
    pill: "border-gold-400/30 bg-gold-400/10 text-gold-400",
    glow: "0 0 12px oklch(0.78 0.16 75 / 0.4), 0 0 24px oklch(0.78 0.16 75 / 0.15)",
  },
  workshop: {
    label: "Workshop",
    bg: "bg-lotus-400/25 hover:bg-lotus-400/35",
    border: "border-l-lotus-400",
    text: "text-lotus-300",
    pill: "border-lotus-400/30 bg-lotus-400/10 text-lotus-400",
    glow: "0 0 12px oklch(0.65 0.25 330 / 0.4), 0 0 24px oklch(0.65 0.25 330 / 0.15)",
  },
  meal: {
    label: "Meal",
    bg: "bg-jade-400/25 hover:bg-jade-400/35",
    border: "border-l-jade-400",
    text: "text-jade-400",
    pill: "border-jade-400/30 bg-jade-400/10 text-jade-400",
    glow: "0 0 12px oklch(0.55 0.17 165 / 0.4), 0 0 24px oklch(0.55 0.17 165 / 0.15)",
  },
  judging: {
    label: "Judging",
    bg: "bg-amber-600/25 hover:bg-amber-600/35",
    border: "border-l-amber-600",
    text: "text-gold-300",
    pill: "border-gold-400/30 bg-gold-400/10 text-gold-400",
    glow: "0 0 12px oklch(0.7 0.15 70 / 0.4), 0 0 24px oklch(0.7 0.15 70 / 0.15)",
  },
  activity: {
    label: "Activity",
    bg: "bg-sienna-500/25 hover:bg-sienna-500/35",
    border: "border-l-sienna-500",
    text: "text-sienna-400",
    pill: "border-sienna-500/30 bg-sienna-500/10 text-sienna-400",
    glow: "0 0 12px oklch(0.65 0.15 50 / 0.4), 0 0 24px oklch(0.65 0.15 50 / 0.15)",
  },
  speaker: {
    label: "Speaker",
    bg: "bg-sky-500/25 hover:bg-sky-500/35",
    border: "border-l-sky-400",
    text: "text-sky-300",
    pill: "border-sky-400/30 bg-sky-400/10 text-sky-400",
    glow: "0 0 12px oklch(0.65 0.18 240 / 0.4), 0 0 24px oklch(0.65 0.18 240 / 0.15)",
  },
};

export const schedule: ScheduleDay[] = [
  {
    label: "Day 1 — Friday",
    date: "March 20",
    events: [
      {
        title: "Check-In & Registration",
        startTime: "16:30",
        endTime: "17:00",
        category: "ceremony",
        description: "CIS MLC",
      },
      {
        title: "Voice Agents with Avatar",
        startTime: "17:00",
        endTime: "18:30",
        category: "workshop",
        description: "Agora — CIS MLC Theater",
      },
      {
        title: "OpenRouter Workshop",
        startTime: "17:00",
        endTime: "18:30",
        category: "workshop",
        description: "OpenRouter — CIS MLC Theater",
      },
      {
        title: "Transition to Bus",
        startTime: "18:30",
        endTime: "19:00",
        category: "ceremony",
        description: "CIS MLC — Everyone",
      },
      {
        title: "Bus to VNG",
        startTime: "19:00",
        endTime: "19:20",
        category: "ceremony",
      },
      {
        title: "Opening Ceremony & Keynote",
        startTime: "19:45",
        endTime: "20:45",
        category: "ceremony",
        description: "VNG Main Atrium",
      },
      {
        title: "Hackathon Starts!",
        startTime: "21:00",
        endTime: "21:30",
        category: "ceremony",
        description: "36 hours on the clock!",
      },
      {
        title: "Snacks",
        startTime: "22:00",
        endTime: "22:30",
        category: "meal",
        description: "VNG Lobby",
      },
    ],
  },
  {
    label: "Day 2 — Saturday",
    date: "March 21",
    events: [
      {
        title: "Late Night Domino's",
        startTime: "01:00",
        endTime: "02:00",
        category: "meal",
      },
      {
        title: "Morning Trivia",
        startTime: "02:00",
        endTime: "03:00",
        category: "activity",
      },
      {
        title: "Breakfast",
        startTime: "08:00",
        endTime: "08:30",
        category: "meal",
      },
      {
        title: "Mandatory Devpost Workshop",
        startTime: "08:00",
        endTime: "08:30",
        category: "ceremony",
        description: "Required for all hackers",
      },
      {
        title: "Outdoor Games",
        startTime: "09:00",
        endTime: "10:00",
        category: "activity",
      },
      {
        title: "Codex Workshop",
        startTime: "10:00",
        endTime: "11:00",
        category: "workshop",
        description: "Gabriel Chua — OpenAI — Training Room",
      },
      {
        title: "AWS Workshop",
        startTime: "11:00",
        endTime: "12:00",
        category: "workshop",
        description: "AWS — Training Room",
      },
      {
        title: "Team Indication Form Due",
        startTime: "12:00",
        endTime: "12:30",
        category: "ceremony",
        description: "Project and team form must be submitted",
      },
      {
        title: "Lunch",
        startTime: "12:00",
        endTime: "13:00",
        category: "meal",
      },
      {
        title: "CIO Coca-Cola",
        startTime: "12:00",
        endTime: "13:00",
        category: "speaker",
      },
      {
        title: "Algorithmics",
        startTime: "17:00",
        endTime: "18:00",
        category: "workshop",
        description: "Mr. Robert",
      },
      {
        title: "Dinner",
        startTime: "18:00",
        endTime: "19:00",
        category: "meal",
      },
      {
        title: "Sovico BoD",
        startTime: "18:00",
        endTime: "19:00",
        category: "speaker",
      },
      {
        title: "Peer Expo",
        startTime: "19:00",
        endTime: "20:30",
        category: "activity",
        description: "Show off your progress to fellow hackers!",
      },
      {
        title: "Snacks",
        startTime: "22:30",
        endTime: "23:00",
        category: "meal",
      },
    ],
  },
  {
    label: "Day 3 — Sunday",
    date: "March 22",
    events: [
      {
        title: "Late Night McDonald's",
        startTime: "01:00",
        endTime: "02:00",
        category: "meal",
      },
      {
        title: "Tech Support Available",
        startTime: "08:00",
        endTime: "09:00",
        category: "ceremony",
        description: "Last hour — get help before submissions close",
      },
      {
        title: "Submissions Due on Devpost",
        startTime: "09:00",
        endTime: "09:30",
        category: "judging",
        description: "Hackathon ends — all projects must be submitted",
      },
      {
        title: "Breakfast",
        startTime: "09:00",
        endTime: "10:00",
        category: "meal",
      },
      {
        title: "Booth Fair",
        startTime: "09:00",
        endTime: "10:00",
        category: "activity",
      },
      {
        title: "College Workshop",
        startTime: "09:00",
        endTime: "10:00",
        category: "workshop",
        description: "ETEST — Training Room",
      },
      {
        title: "Judges Briefing",
        startTime: "10:15",
        endTime: "10:30",
        category: "judging",
        description: "Meeting Room",
      },
      {
        title: "Judging Expo — Round 1",
        startTime: "10:30",
        endTime: "12:30",
        category: "judging",
        description: "Training Room — Judges and Sponsors",
      },
      {
        title: "Lunch",
        startTime: "12:30",
        endTime: "14:00",
        category: "meal",
        description: "VNG",
      },
      {
        title: "Judging Final",
        startTime: "14:30",
        endTime: "16:00",
        category: "judging",
        description: "Main Atrium",
      },
      {
        title: "Closing Ceremony & Awards",
        startTime: "16:30",
        endTime: "17:15",
        category: "ceremony",
        description: "Winners announced, prizes awarded!",
      },
    ],
  },
];
