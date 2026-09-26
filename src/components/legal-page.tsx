import { type ReactNode } from "react";

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

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="size-5">
      <path d="M16.365 1.43c0 1.14-.46 2.23-1.2 3.03-.79.86-2.08 1.53-3.14 1.44-.13-1.09.44-2.25 1.15-3 .8-.85 2.18-1.48 3.19-1.47zm3.96 16.02c-.58 1.34-.86 1.93-1.6 3.11-1.04 1.65-2.5 3.7-4.31 3.72-1.61.02-2.02-1.05-4.2-1.04-2.18.01-2.63 1.06-4.24 1.04-1.81-.02-3.2-1.87-4.24-3.51-2.9-4.59-3.2-9.98-1.42-12.85 1.27-2.04 3.27-3.23 5.15-3.23 1.92 0 3.12 1.05 4.71 1.05 1.54 0 2.48-1.05 4.7-1.05 1.68 0 3.46.91 4.73 2.49-4.16 2.28-3.48 8.22.72 10.27z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-5">
      <path d="M3.6 2.2c-.3.22-.5.6-.5 1.1v17.4c0 .5.2.88.5 1.1l9.05-9.8L3.6 2.2z" fill="#00d0ff" />
      <path d="M17.4 8.4 13.9 6.4 3.6 2.2c.06-.04.13-.06.2-.06l13.6 6.26z" fill="#00e676" />
      <path d="m17.4 8.4-3.5 3.6 3.5 3.6 3.4-1.96c.7-.4.7-1.44 0-1.84L17.4 8.4z" fill="#ffce00" />
      <path d="m3.6 21.8 10.3-9.8 3.5 3.6-13.6 6.26c-.07 0-.14-.02-.2-.06z" fill="#ff3d47" />
    </svg>
  );
}

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
