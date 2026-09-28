import { type CSSProperties } from "react";
import { Check } from "lucide-react";
import ahaMomentPhoto from "../../../assets/magnific_a-young-woman-with-auburn_Doqb5uwpcl.webp";

const ahaActions = [
  "Task created",
  "Assigned to someone",
  "Due tomorrow",
  "Added to progress tracking",
];

export function AhaMoment() {
  return (
    <section className="overflow-hidden bg-secondary py-12 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[.82fr_1.18fr] lg:px-8">
        <div className="reveal">
          <p className="mb-4 text-xs font-bold uppercase text-brand-deep">The aha moment</p>
          <h2 className="text-3xl font-bold md:text-6xl">
            Just say it.
            <br />
            <span className="text-brand-gradient">iMOX handles the execution.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">
            You communicate naturally. iMOX Copilot listens to the conversation and transforms it
            into structured action automatically.
          </p>
        </div>
        <div className="reveal relative">
          <figure className="aha-moment-media">
            <img
              src={ahaMomentPhoto}
              alt="A smiling woman using iMOX on her phone"
              loading="lazy"
              width={2400}
              height={1792}
            />
            <figcaption className="aha-floating-list" aria-label="iMOX automated actions">
              {ahaActions.map((x, i) => (
                <span
                  key={x}
                  className="aha-floating-pill"
                  style={{ "--notification-delay": `${i * 160}ms` } as CSSProperties}
                >
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-sm shadow-primary/20">
                    <Check className="size-3 stroke-[3.2]" />
                  </span>
                  {x}
                </span>
              ))}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
