import { steps } from "@/data/steps";
import { useHowItWorks } from "@/hooks/use-how-it-works";

export function HowItWorks() {
  const { activeHowStep, activeHowStepData, setHowPaused, handleHowStepSelect } = useHowItWorks();

  return (
    <section id="how" className="py-10 md:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal text-center">
          <p className="mb-4 text-xs font-bold uppercase text-brand-deep">How it works</p>
          <h2 className="mx-auto max-w-3xl text-[clamp(1.7rem,5.5vw,3.75rem)] font-bold leading-tight">
            Communication That{" "}
            <span className="text-brand-gradient">Automatically Becomes Execution</span>
          </h2>
        </div>
      </div>

      <div className="mt-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div
            className="grid items-center gap-8 lg:w-full lg:grid-cols-[0.9fr_1.1fr] xl:gap-10"
            onMouseLeave={() => setHowPaused(false)}
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
                    onMouseEnter={() => {
                      setHowPaused(true);
                      handleHowStepSelect(i);
                    }}
                    onFocus={() => {
                      setHowPaused(true);
                      handleHowStepSelect(i);
                    }}
                    className={`group grid min-h-0 grid-cols-1 items-start gap-1 rounded-xl border bg-background px-2 py-3 text-left transition-all duration-300 sm:gap-2 sm:px-4 md:min-h-[116px] md:grid-cols-[2.75rem_1fr] md:gap-3 md:px-5 md:py-5 ${
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
                      <span className="block text-[0.55rem] font-bold leading-[0.8rem] text-brand-ink sm:text-sm md:text-base md:leading-tight lg:text-lg">
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
