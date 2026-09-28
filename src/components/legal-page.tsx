import { type ReactNode } from "react";
import { AppleGlyph, PlayGlyph } from "@/components/brand/glyphs";

const storeLinks = [
  {
    label: "App Store",
    helper: "Download on the",
    href: "https://apps.apple.com/us/app/imox-copilot/id6777773188",
    icon: "apple",
  },
  {
    label: "Google Play",
    helper: "Get it on",
    href: "https://play.google.com/store/apps/details?id=com.imox.copilot",
    icon: "play",
  },
] as const;

export function StoreLinksCard() {
  return (
    <section className="mt-10 rounded-xl border border-border bg-secondary/60 p-5">
      <h2 className="text-base font-bold text-brand-ink">Download iMOX Copilot</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">
        Open the app listing for your device:
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        {storeLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-lg bg-background px-4 py-2.5 text-brand-ink shadow-sm ring-1 ring-border transition-transform duration-200 hover:-translate-y-0.5 hover:text-primary"
          >
            {link.icon === "apple" ? <AppleGlyph /> : <PlayGlyph />}
            <span className="leading-none">
              <span className="block text-[9px] font-semibold uppercase text-muted-foreground">
                {link.helper}
              </span>
              <span className="mt-0.5 block text-sm font-bold">{link.label}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background px-5 py-14 text-foreground">
      <article className="mx-auto max-w-2xl">
        <a href="/" className="mb-10 inline-block">
          <img src="/logo.svg" alt="iMOX" width={3237} height={1090} className="h-8 w-auto" />
        </a>
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-4xl font-bold leading-tight text-brand-ink md:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>
        <div className="mt-6 space-y-4 text-base leading-7 text-muted-foreground">{intro}</div>
        <div className="mt-8 h-px bg-gradient-to-r from-primary via-brand-cyan to-transparent" />
        <div className="legal-content mt-10 space-y-10">{children}</div>
        <StoreLinksCard />
      </article>
    </main>
  );
}

export function LegalSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="grid gap-2">
      <h2 className="flex items-baseline gap-3 text-xl font-bold text-brand-ink">
        <span className="text-[11px] font-bold text-primary">{number}</span>
        {title}
      </h2>
      <div className="space-y-4 text-sm leading-7 text-muted-foreground">{children}</div>
    </section>
  );
}
