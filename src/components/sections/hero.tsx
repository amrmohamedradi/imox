import { type CSSProperties } from "react";
import { ArrowRight, CirclePlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroAvatarStack } from "./hero-avatar-stack";
import { HeroCollage } from "./hero-collage";

export function Hero({ onWatchDemo }: { onWatchDemo: () => void }) {
  return (
    <section className="relative overflow-hidden px-5 pt-24 pb-12 lg:px-8 lg:pt-28 xl:min-h-[min(100svh,860px)]">
      <div className="absolute inset-0 imox-grid hero-grid-mask opacity-80" />
      <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-10">
        <div className="max-w-2xl lg:col-span-5 lg:flex lg:min-h-[624px] lg:flex-col lg:justify-between lg:py-1">
          <div>
            <h1
              className="hero-reveal max-w-[12ch] text-[2.05rem] font-bold leading-[1.06] sm:text-5xl sm:leading-[1.04] lg:text-6xl xl:text-7xl"
              style={{ "--reveal-delay": "80ms" } as CSSProperties}
            >
              Your group chat
              <br />
              finally <span className="text-brand-gradient">remembers.</span>
            </h1>
            <p
              className="hero-reveal mt-5 max-w-xl text-[0.95rem] leading-6 text-muted-foreground sm:text-base sm:leading-7 md:text-lg"
              style={{ "--reveal-delay": "160ms" } as CSSProperties}
            >
              Just chat. iMOX handles the rest—turning conversations into tasks, ownership,
              deadlines, and follow-ups automatically. No setup. No chasing people.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <div
              className="hero-reveal flex flex-col gap-3 sm:flex-row"
              style={{ "--reveal-delay": "240ms" } as CSSProperties}
            >
              <Button
                asChild
                variant="brand"
                size="xl"
                className="group btn-sheen active:scale-[.98]"
              >
                <a href="#download">
                  Start free{" "}
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                variant="brandOutline"
                size="xl"
                className="active:scale-[.98]"
                onClick={onWatchDemo}
              >
                <CirclePlay /> Watch 30-second demo
              </Button>
            </div>
            <div
              className="hero-reveal mt-6 flex items-center gap-4"
              style={{ "--reveal-delay": "320ms" } as CSSProperties}
            >
              <HeroAvatarStack />
              <p className="text-xs font-medium leading-5 text-muted-foreground">
                Available on Web, iOS, and Android
              </p>
            </div>
          </div>
        </div>

        <HeroCollage />
      </div>
    </section>
  );
}
