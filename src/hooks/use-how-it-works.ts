import { useEffect, useRef, useState } from "react";
import { steps } from "@/data/steps";

/**
 * Drives the "How it works" steps. On small screens (and reduced motion) it
 * cycles the active step every 2s. On large screens the active step is instead
 * derived from scroll position within a tall pinned track, and clicking a card
 * scrolls to that step's position.
 */
export function useHowItWorks() {
  const [activeHowStep, setActiveHowStep] = useState(0);
  const [howPaused, setHowPaused] = useState(false);
  const howTrackRef = useRef<HTMLDivElement>(null);
  const activeHowStepData = steps[activeHowStep] ?? steps[0];

  // On small screens (where the sticky scroll-driver below is disabled) cycle
  // through the How-it-works steps every 2s; pause while the visitor hovers or
  // focuses the block, then resume once they move away. On large screens the
  // active step is driven by scroll position instead, so the timer stays off.
  useEffect(() => {
    if (howPaused) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia?.("(min-width: 1024px)").matches) return;
    const id = window.setInterval(() => {
      setActiveHowStep((i) => (i + 1) % steps.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, [howPaused]);

  // Drive the active How-it-works step from scroll position on large screens.
  // The phone + cards are pinned (sticky) inside a tall track; the fraction of
  // the track scrolled maps to step 0..3. Disabled on small screens and when
  // reduced motion is requested, where the simple stacked layout is used.
  useEffect(() => {
    const track = howTrackRef.current;
    if (!track) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollable = track.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const scrolled = window.scrollY - track.offsetTop;
      const progress = Math.min(1, Math.max(0, scrolled / scrollable));
      const index = Math.min(steps.length - 1, Math.floor(progress * steps.length));
      setActiveHowStep(index);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const enabled = () => desktop.matches && !reduce.matches;
    const sync = () => {
      window.removeEventListener("scroll", onScroll);
      if (enabled()) {
        window.addEventListener("scroll", onScroll, { passive: true });
        update();
      }
    };
    sync();
    desktop.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      desktop.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Clicking a step card jumps to its position so the pinned view follows along
  // on large screens; on small screens it simply activates the step.
  const handleHowStepSelect = (index: number) => {
    setActiveHowStep(index);
    const track = howTrackRef.current;
    if (!track) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const scrollable = track.offsetHeight - window.innerHeight;
    if (scrollable <= 0) return;
    const target = track.offsetTop + (scrollable * (index + 0.5)) / steps.length;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return {
    activeHowStep,
    activeHowStepData,
    howTrackRef,
    setHowPaused,
    handleHowStepSelect,
  };
}
