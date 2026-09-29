import { useEffect, useState } from "react";
import { steps } from "@/data/steps";

/**
 * Drives the "How it works" steps. The active step advances automatically every
 * 2s on every screen size. Hovering (or focusing) a step card activates it and
 * pauses the auto-advance; moving away resumes it.
 */
export function useHowItWorks() {
  const [activeHowStep, setActiveHowStep] = useState(0);
  const [howPaused, setHowPaused] = useState(false);
  const activeHowStepData = steps[activeHowStep] ?? steps[0];

  // Auto-advance to the next step every 2s, pausing while the visitor hovers or
  // focuses a card. Honors reduced-motion by staying on the first step.
  useEffect(() => {
    if (howPaused) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActiveHowStep((i) => (i + 1) % steps.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, [howPaused]);

  // Hovering / clicking a step card activates it (its image opens).
  const handleHowStepSelect = (index: number) => {
    setActiveHowStep(index);
  };

  return {
    activeHowStep,
    activeHowStepData,
    setHowPaused,
    handleHowStepSelect,
  };
}
