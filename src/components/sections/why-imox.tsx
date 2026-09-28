import { features, highlightFeature } from "@/data/features";
import copilotTeam from "@/assets/imox-copilot-team.jpg";

export function WhyImox() {
  const { icon: HighlightIcon, title: highlightTitle, text: highlightText } = highlightFeature;

  return (
    <section id="why" className="py-12 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div className="reveal">
            <p className="mb-4 text-xs font-bold uppercase text-brand-deep">Why iMOX is different</p>
            <h2 className="text-3xl font-bold md:text-6xl">
              Most tools help manage work.{" "}
              <span className="text-brand-gradient">iMOX makes work move.</span>
            </h2>
            <img
              src={copilotTeam}
              alt="Colleagues keeping work moving through a shared conversation"
              loading="lazy"
              width={1600}
              height={1072}
              className="mt-8 aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {features.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="reveal audience-card audience-gradient-card group flex flex-col gap-3 overflow-hidden rounded-2xl border-2 border-transparent p-4 sm:gap-4 sm:p-5 lg:p-6"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-soft text-primary sm:size-10 lg:size-11">
                  <Icon className="size-4 sm:size-5" />
                </span>
                <div>
                  <p className="text-[0.78rem] font-bold leading-5 text-brand-ink sm:text-sm sm:leading-6 lg:text-base">
                    {title}
                  </p>
                  <p className="mt-1.5 text-[0.68rem] leading-5 text-muted-foreground sm:text-xs lg:text-sm lg:leading-6">
                    {text}
                  </p>
                </div>
              </div>
            ))}
            <div className="reveal audience-card audience-gradient-card group flex items-start gap-3 overflow-hidden rounded-2xl border-2 border-transparent p-4 sm:gap-4 sm:p-5 lg:col-span-2 lg:items-center lg:p-6">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-soft text-primary sm:size-10 lg:size-11">
                <HighlightIcon className="size-4 sm:size-5" />
              </span>
              <div>
                <p className="text-[0.78rem] font-bold leading-5 text-brand-ink sm:text-sm sm:leading-6 lg:text-base">
                  {highlightTitle}
                </p>
                <p className="mt-1.5 text-[0.68rem] leading-5 text-muted-foreground sm:text-xs lg:text-sm lg:leading-6">
                  {highlightText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
