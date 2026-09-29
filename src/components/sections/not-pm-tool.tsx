import { Check, CirclePlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import organizedLife from "@/assets/imox-life-organized.jpg";

const benefits = [
  "No training",
  "No complicated workflows",
  "No behavior change",
  "Just better outcomes",
];

export function NotPmTool({ onWatchDemo }: { onWatchDemo: () => void }) {
  return (
    <section className="bg-brand-ink py-10 text-primary-foreground md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <figure className="reveal relative min-h-[340px] overflow-hidden rounded-2xl border border-primary-foreground/10 sm:min-h-[440px] lg:min-h-[520px]">
          <img
            src={organizedLife}
            alt="Friends using iMOX to organize work, travel, and an upcoming wedding"
            loading="lazy"
            width={1600}
            height={912}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/65 via-transparent to-transparent" />
          <figcaption className="absolute bottom-6 left-6 right-6 text-sm font-semibold">
            Planning stays in the conversation—not in another complicated tool.
          </figcaption>
        </figure>
        <div className="reveal">
          <p className="mb-4 text-xs font-bold uppercase text-brand-lime">
            Built for how people actually work
          </p>
          <h2 className="text-[clamp(1.7rem,5.5vw,3.75rem)] font-bold leading-[1.1]">
            Not another project management tool.
          </h2>
          <p className="mt-5 text-base leading-7 text-primary-foreground/70 sm:mt-6 sm:text-lg sm:leading-8">
            Most platforms ask teams to stop working and start managing software. iMOX does the
            opposite. It fits directly into the way people already communicate.
          </p>
          <div className="mt-8 space-y-3">
            {benefits.map((x) => (
              <p key={x} className="flex items-center gap-3 font-semibold">
                <Check className="text-brand-lime" /> {x}
              </p>
            ))}
          </div>
          <Button variant="inverted" size="xl" className="mt-8" onClick={onWatchDemo}>
            <CirclePlay /> Watch 30-second video
          </Button>
        </div>
      </div>
    </section>
  );
}
