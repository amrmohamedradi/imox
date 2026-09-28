import { steps } from "@/data/steps";
import { useHowItWorks } from "@/hooks/use-how-it-works";

export function HowItWorks() {
  const { activeHowStep, activeHowStepData, howTrackRef, setHowPaused, handleHowStepSelect } =
    useHowItWorks();

  return (
    <section id="how" className="py-12 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal text-center">
          <p className="mb-4 text-xs font-bold uppercase text-brand-deep">How it works</p>
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight md:text-6xl">
            Communication That{" "}
            <span className="text-brand-gradient">Automatically Becomes Execution</span>
          </h2>
        </div>
      </div>

      {/* Tall track drives the scroll-linked step changes on large screens;
          on small screens it collapses to normal flow (height: auto). */}
      <div ref={howTrackRef} className="mt-14 lg:mt-0 lg:h-[360vh]">
        <div className="mx-auto max-w-7xl px-5 lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:items-center lg:px-8">
          <div
            className="grid items-center gap-8 lg:w-full lg:grid-cols-[0.9fr_1.1fr] xl:gap-10"
            onMouseEnter={() => setHowPaused(true)}
            onMouseLeave={() => setHowPaused(false)}
            onFocusCapture={() => setHowPaused(true)}
            onBlurCapture={() => setHowPaused(false)}
          >
            <figure className="relative order-2 mx-auto aspect-[1512/2017] w-full max-w-[300px] overflow-hidden rounded-[2rem] sm:max-w-[460px] lg:order-1">
              <img
                key={activeHowStepData.title}
                src={activeHowStepData.image}
                alt={activeHowStepData.alt}
                loading="lazy"
                width={1512}
                height={2017}
                className="step-media h-full w-full object-cover"
              />
            </figure>

            <div className="order-1 grid grid-cols-4 gap-2 md:grid-cols-2 md:gap-4 lg:order-2 lg:grid-cols-1 lg:gap-3">
              {steps.map((step, i) => {
                const isActive = i === activeHowStep;
                return (
                  <button
                    key={step.title}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => handleHowStepSelect(i)}
                    className={`group grid min-h-0 grid-cols-1 items-start gap-1 rounded-xl border bg-background px-2 py-3 text-left transition-all duration-300 sm:gap-2 sm:px-4 md:min-h-[116px] md:grid-cols-[3.2rem_1fr] md:gap-4 md:px-5 md:py-5 ${
                      isActive
                        ? "border-primary bg-[color-mix(in_oklab,var(--primary)_6%,var(--background))] shadow-brand"
                        : "border-border hover:border-primary/45 hover:bg-secondary/60"
                    }`}
                  >
                    <span
                      className={`block text-base font-bold leading-tight transition-colors sm:text-2xl md:text-3xl md:leading-none ${
                        isActive ? "text-primary" : "text-primary/45 group-hover:text-primary"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block text-[0.55rem] font-bold leading-[0.8rem] text-brand-ink sm:text-sm md:text-lg">
                        {step.title}
                      </span>
                      <span className="mt-1 block max-w-lg text-[0.5rem] leading-[0.72rem] text-muted-foreground sm:text-xs md:mt-3 md:text-sm md:leading-6">
                        {step.text}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
