import {
  BellRing,
  CalendarClock,
  LayoutGrid,
  ListChecks,
  MessagesSquare,
  UserCheck,
  Zap,
} from "lucide-react";
import type { Feature } from "@/types/landing";

export const features: Feature[] = [
  {
    icon: MessagesSquare,
    title: "AI turns conversations into tasks",
    text: "Every decision in the chat becomes a trackable action.",
  },
  {
    icon: UserCheck,
    title: "AI assigns ownership",
    text: "Each task lands with a clear owner, automatically.",
  },
  {
    icon: CalendarClock,
    title: "AI tracks deadlines",
    text: "Due dates are captured and watched for you.",
  },
  {
    icon: BellRing,
    title: "AI follows up automatically",
    text: "iMOX nudges the right people so you don't have to.",
  },
  {
    icon: ListChecks,
    title: "AI summarizes progress",
    text: "See where things stand without asking around.",
  },
  {
    icon: LayoutGrid,
    title: "One workspace for communication and execution",
    text: "Talk and get work done in the very same place.",
  },
];

// Rendered as a full-width highlight card below the grid.
export const highlightFeature: Feature = {
  icon: Zap,
  title: "No training or setup",
  text: "It works the moment you start chatting—nothing to configure.",
};
