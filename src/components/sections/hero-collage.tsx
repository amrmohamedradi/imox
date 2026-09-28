import { type CSSProperties } from "react";
import { BellRing, ListChecks } from "lucide-react";
import heroCollageMain from "../../../assets/imox-hero-team-table.webp";

export function HeroCollage() {
  return (
    <div
      className="hero-collage hero-reveal relative lg:col-span-7"
      style={{ "--reveal-delay": "360ms" } as CSSProperties}
      aria-label="iMOX team collaboration"
    >
      <figure className="hero-collage-main">
        <img
          src={heroCollageMain}
          alt="A team gathered around a table coordinating work on their phones"
          width={1800}
          height={1200}
          loading="eager"
          fetchPriority="high"
        />
        <figcaption className="hero-floating-stack" aria-label="iMOX automated actions">
          <span
            className="hero-floating-card"
            style={{ "--notification-delay": "0ms" } as CSSProperties}
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-brand">
              <ListChecks className="size-5" />
            </span>
            <span>
              <span className="block text-sm font-bold text-brand-ink">Task created</span>
              <span className="mt-1 block text-xs font-medium text-muted-foreground">
                Client proposal · Sarah
              </span>
            </span>
          </span>
          <span
            className="hero-floating-card"
            style={{ "--notification-delay": "320ms" } as CSSProperties}
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-brand-lime text-brand-ink shadow-sm">
              <BellRing className="size-5" />
            </span>
            <span>
              <span className="block text-sm font-bold text-brand-ink">Follow-up ready</span>
              <span className="mt-1 block text-xs font-medium text-muted-foreground">
                Tomorrow · 12 PM
              </span>
            </span>
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
