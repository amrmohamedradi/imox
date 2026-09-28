import { type ReactNode } from "react";
import { AppleGlyph, PlayGlyph } from "./glyphs";

function StoreBadge({
  href,
  top,
  brand,
  glyph,
  className = "",
}: {
  href: string;
  top: string;
  brand: string;
  glyph: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 text-brand-ink shadow-lg ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-0.5 ${className}`}
    >
      <span className="shrink-0">{glyph}</span>
      <span className="text-left leading-none">
        <span className="block text-[9px] font-medium uppercase tracking-wide opacity-70">
          {top}
        </span>
        <span className="mt-0.5 block text-base font-semibold leading-tight">{brand}</span>
      </span>
    </a>
  );
}

export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <StoreBadge
        href="https://apps.apple.com/us/app/imox-copilot/id6777773188"
        top="Download on the"
        brand="App Store"
        glyph={<AppleGlyph className="size-6" />}
      />
      <StoreBadge
        href="https://play.google.com/store/apps/details?id=com.imox.copilot"
        top="Get it on"
        brand="Google Play"
        glyph={<PlayGlyph className="size-5" />}
      />
    </div>
  );
}
