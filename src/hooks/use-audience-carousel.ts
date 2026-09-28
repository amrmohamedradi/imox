import { useEffect, useRef, useState } from "react";
import { audiences } from "@/data/audiences";

/**
 * Drives the "Who is iMOX for?" gallery: the looped desktop track, the mobile
 * swipe sync, dot navigation, and the 3.5s autoplay (paused on hover/focus and
 * disabled on small screens / reduced motion).
 */
export function useAudienceCarousel() {
  const [audienceSlideIndex, setAudienceSlideIndex] = useState(0);
  const [audienceTransition, setAudienceTransition] = useState(true);
  const [audiencePaused, setAudiencePaused] = useState(false);
  const mobileAudienceRef = useRef<HTMLDivElement>(null);

  const activeAudience =
    ((audienceSlideIndex % audiences.length) + audiences.length) % audiences.length;
  const loopedAudiences = [...audiences, ...audiences.slice(0, 3)];

  const showAudience = (index: number) => {
    const nextIndex = (index + audiences.length) % audiences.length;
    setAudienceTransition(true);
    setAudienceSlideIndex(nextIndex);
    const nextCard = mobileAudienceRef.current?.children[nextIndex] as HTMLElement | undefined;
    nextCard?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };
  const showPreviousAudience = () => {
    setAudienceTransition(true);
    setAudienceSlideIndex((current) => {
      if (current > 0) return current - 1;
      window.requestAnimationFrame(() => {
        setAudienceTransition(false);
        setAudienceSlideIndex(audiences.length);
        window.requestAnimationFrame(() => {
          setAudienceTransition(true);
          setAudienceSlideIndex(audiences.length - 1);
        });
      });
      return current;
    });
  };
  const showNextAudience = () => {
    setAudienceTransition(true);
    setAudienceSlideIndex((current) => {
      if (current >= audiences.length) return current;
      return current + 1;
    });
  };
  const handleAudienceTransitionEnd = () => {
    if (audienceSlideIndex !== audiences.length) return;
    setAudienceTransition(false);
    setAudienceSlideIndex(0);
    window.requestAnimationFrame(() => setAudienceTransition(true));
  };
  const syncMobileAudience = () => {
    const gallery = mobileAudienceRef.current;
    if (!gallery) return;
    const cards = Array.from(gallery.children) as HTMLElement[];
    const nearest = cards.reduce(
      (best, card, index) => {
        const distance = Math.abs(card.offsetLeft - gallery.scrollLeft);
        return distance < best.distance ? { distance, index } : best;
      },
      { distance: Number.POSITIVE_INFINITY, index: activeAudience },
    );
    if (nearest.index !== activeAudience) {
      setAudienceTransition(true);
      setAudienceSlideIndex(nearest.index);
    }
  };

  useEffect(() => {
    if (audiencePaused) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia?.("(max-width: 767px)").matches) return;
    const id = window.setInterval(() => {
      showNextAudience();
    }, 3500);
    return () => window.clearInterval(id);
  }, [audiencePaused]);

  return {
    audienceSlideIndex,
    audienceTransition,
    audiencePaused,
    setAudiencePaused,
    mobileAudienceRef,
    activeAudience,
    loopedAudiences,
    showAudience,
    showPreviousAudience,
    showNextAudience,
    handleAudienceTransitionEnd,
    syncMobileAudience,
  };
}
