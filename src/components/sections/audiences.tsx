import { type CSSProperties } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { audiences } from "@/data/audiences";
import { useAudienceCarousel } from "@/hooks/use-audience-carousel";

const problems = [
  "Messages get buried",
  "Tasks get forgotten",
  "People assume someone else is handling it",
  "Follow-ups become endless.",
];

export function Audiences() {
  const {
    audienceSlideIndex,
    audienceTransition,
    setAudiencePaused,
    mobileAudienceRef,
    activeAudience,
    loopedAudiences,
    showAudience,
    showPreviousAudience,
    showNextAudience,
    handleAudienceTransitionEnd,
    syncMobileAudience,
  } = useAudienceCarousel();

  return (
    <section id="for-whom" className="overflow-hidden py-10 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[0.84fr_1.16fr] lg:gap-12 lg:px-8">
        <div className="reveal">
          <p className="mb-4 text-xs font-bold uppercase text-brand-deep">
            Built for real life and real work
          </p>
          <h2 className="max-w-md text-[clamp(1.7rem,5.5vw,3.75rem)] font-bold leading-[1.04]">
            Who is
            <span className="block text-brand-gradient">iMOX for?</span>
          </h2>
          <p className="mt-6 text-base font-semibold leading-6 sm:mt-7 sm:text-lg sm:leading-7">
            Work happens in chat. But nothing gets tracked.
          </p>
          <ul className="mt-6 grid max-w-md gap-2" aria-label="What goes wrong today">
            {problems.map((x) => (
              <li
                key={x}
                className="group inline-flex w-fit items-center gap-2 rounded-full border border-primary/10 bg-background/80 px-3.5 py-2 text-sm font-medium leading-none text-muted-foreground shadow-sm shadow-primary/5 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-[linear-gradient(110deg,var(--primary),var(--brand-deep),var(--brand-cyan))] hover:text-primary-foreground hover:shadow-brand"
              >
                <span className="size-1.5 rounded-full bg-primary/70 transition-colors duration-300 group-hover:bg-primary-foreground/85" />
                {x}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="reveal min-w-0"
          onMouseEnter={() => setAudiencePaused(true)}
          onMouseLeave={() => setAudiencePaused(false)}
          onFocusCapture={() => setAudiencePaused(true)}
          onBlurCapture={() => setAudiencePaused(false)}
        >
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <p className="min-w-0 flex-1 text-sm font-semibold leading-5 text-muted-foreground">
              Four audiences. One shared way to keep work moving.
            </p>
            <div className="hidden items-center gap-2 self-end sm:flex sm:self-auto">
              <Button
                type="button"
                variant="brandOutline"
                size="icon"
                aria-label="Show previous audience"
                onClick={showPreviousAudience}
              >
                <ArrowLeft className="size-4" />
              </Button>
              <Button
                type="button"
                variant="brand"
                size="icon"
                aria-label="Show next audience"
                onClick={showNextAudience}
              >
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
          <div className="audience-gallery hidden md:block" aria-live="polite">
            <div
              className={`audience-gallery-track ${
                audienceTransition ? "" : "audience-gallery-track-instant"
              }`}
              style={{ "--audience-index": audienceSlideIndex } as CSSProperties}
              onTransitionEnd={(event) => {
                if (event.currentTarget === event.target) handleAudienceTransitionEnd();
              }}
            >
              {loopedAudiences.map((item, i) => (
                <article
                  key={`${item.title}-${i}`}
                  className="audience-gallery-card group"
                  aria-hidden={i < audienceSlideIndex || i > audienceSlideIndex + 2}
                >
                  <figure className="audience-gallery-media">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      width={900}
                      height={620}
                      className={item.imageClass}
                    />
                  </figure>
                  <div className="grid grid-cols-[1fr_auto] items-start gap-3 px-1 pt-4">
                    <div>
                      <h3 className="text-sm font-bold leading-5 text-brand-ink sm:text-[0.95rem]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-5 text-muted-foreground">{item.text}</p>
                    </div>
                    <ArrowRight className="mt-2 size-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div
            ref={mobileAudienceRef}
            className="audience-gallery-mobile md:hidden"
            aria-label="Swipe audiences"
            onScroll={syncMobileAudience}
          >
            {audiences.map((item) => (
              <article key={item.title} className="audience-gallery-card group">
                <figure className="audience-gallery-media">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    width={900}
                    height={620}
                    className={item.imageClass}
                  />
                </figure>
                <div className="grid grid-cols-[1fr_auto] items-start gap-3 px-1 pt-4">
                  <div>
                    <h3 className="text-lg font-bold leading-6 text-brand-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
                  </div>
                  <ArrowRight className="mt-2 size-4 shrink-0 text-primary" />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-5 flex justify-center gap-2" aria-label="Audience gallery position">
            {audiences.map((item, i) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Show ${item.title}`}
                aria-pressed={i === activeAudience}
                onClick={() => showAudience(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeAudience ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/45"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
