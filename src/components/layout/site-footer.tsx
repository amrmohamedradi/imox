import { Logo } from "@/components/brand/logo";
import { StoreBadges } from "@/components/brand/store-badges";
import { footerLegalLinks, footerProductLinks } from "@/data/navigation";

export function SiteFooter() {
  return (
    <footer className="bg-brand-ink text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/60">
              The AI-native workspace where your whole team — and its copilot — works as one.
            </p>
            <StoreBadges className="mt-7" />
            <a
              href="mailto:info@imox-app.com"
              className="mt-6 inline-block text-sm text-primary-foreground/70 hover:text-primary-foreground"
            >
              info@imox-app.com
            </a>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/55">
              Product
            </p>
            <ul className="mt-5 space-y-3.5 text-sm text-primary-foreground/70">
              {footerProductLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-primary-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/55">
              Legal
            </p>
            <ul className="mt-5 space-y-3.5 text-sm text-primary-foreground/70">
              {footerLegalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-primary-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 iMOX. All rights reserved.</p>
          <p>Built for teams that move fast.</p>
        </div>
      </div>
    </footer>
  );
}
