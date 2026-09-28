import type { Step } from "@/types/landing";
import s4Step01 from "../../assets/s4/step 01.webp";
import s4Step02 from "../../assets/s4/step 02.webp";
import s4Step03 from "../../assets/s4/step 03.webp";
import s4Step04 from "../../assets/s4/step 04.webp";

export const steps = [
  {
    title: "Turn Messages Into Tasks.",
    text: "Just message naturally, iMOX creates the task, assigns it, and sets the due date.",
    image: s4Step01,
    alt: "iMOX creates a task from a natural chat message",
  },
  {
    title: "No More Chasing.",
    text: "iMOX follows up automatically so work keeps moving.",
    image: s4Step02,
    alt: "iMOX follow-up reminder keeping work moving",
  },
  {
    title: "Deadlines In One Calendar.",
    text: "Track upcoming tasks and important dates in a simple calendar view.",
    image: s4Step03,
    alt: "iMOX calendar view showing upcoming deadlines",
  },
  {
    title: "See Every Task Clearly.",
    text: "Review all tasks in one simple list view by status, owner, and date.",
    image: s4Step04,
    alt: "iMOX list view showing tasks by status owner and date",
  },
] as const satisfies readonly Step[];
