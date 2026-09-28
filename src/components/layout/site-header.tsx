import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/brand/logo";
import { primaryNav } from "@/data/navigation";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {primaryNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href="#download" className="text-sm font-medium text-brand-ink">
            Open iMOX Web
          </a>
          <Button asChild variant="brand" size="lg" className="group btn-sheen">
            <a href="#download">
              Get the app{" "}
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
        <Button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {menuOpen && (
        <nav id="mobile-nav" className="border-t border-border bg-background px-5 py-5 md:hidden">
          {primaryNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-border py-3 text-sm font-semibold"
            >
              {item.label}
            </a>
          ))}
          <Button asChild variant="brand" className="mt-4 w-full">
            <a href="#download">Get the app</a>
          </Button>
        </nav>
      )}
    </header>
  );
}
