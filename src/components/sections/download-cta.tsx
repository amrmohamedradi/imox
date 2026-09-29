import { Mail } from "lucide-react";
import { AppIcon } from "@/components/brand/app-icon";
import { StoreBadges } from "@/components/brand/store-badges";

export function DownloadCta() {
  return (
    <section id="download" className="px-5 pb-10 pt-4">
      <div className="cta-aurora relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-16 text-center text-primary-foreground md:px-16 md:py-24">
        <AppIcon className="mx-auto size-16" />
        <h2 className="mx-auto mt-8 max-w-4xl text-[clamp(1.7rem,5.5vw,3.75rem)] font-bold leading-[1.1]">
          Get your whole team on iMOX.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-primary-foreground/80">
          Download iMOX Copilot on iOS or Android and bring your team together in minutes. Want a
          hand? Email us — we&rsquo;ll set you up.
        </p>
        <StoreBadges className="mt-9 justify-center" />
        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-primary-foreground/80">
          <Mail className="size-4" />
          Or contact us at{" "}
          <a href="mailto:info@imox-app.com" className="font-semibold hover:underline">
            info@imox-app.com
          </a>
        </p>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/45">
          Free to download · iOS &amp; Android
        </p>
      </div>
    </section>
  );
}
