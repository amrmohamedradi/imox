import { createFileRoute } from "@tanstack/react-router";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  ArrowLeft,
  ArrowRight,
  BellRing,
  CalendarClock,
  Check,
  CirclePlay,
  LayoutGrid,
  ListChecks,
  Mail,
  Menu,
  MessagesSquare,
  UserCheck,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import copilotTeam from "@/assets/imox-copilot-team.jpg";
import organizedLife from "@/assets/imox-life-organized.jpg";
import audienceSmb from "@/assets/imox-audience-smb.png";
import audienceAgencies from "@/assets/imox-audience-agencies.png";
import audienceStartup from "@/assets/imox-audience-startup.png";
import audienceClinics from "@/assets/imox-audience-clinics.png";
import audiencePrivate from "@/assets/imox-audience-private.png";
import heroCollageMain from "../../assets/magnific_a-group-of-four-people-tw_jU2Z6N5LD0.png";
import heroCollageSolo from "../../assets/s1/magnific_a-man-with-dark-hair-and-_8a1hCHDIrU.png";
import heroCollageTeam from "../../assets/s1/magnific_bright-cheerful-lifestyle_SyzJRgOUb8.png";
import ahaMomentPhoto from "../../assets/magnific_a-young-woman-with-auburn_Doqb5uwpcl.png";
import s4Step01 from "../../assets/s4/step 01.png";
import s4Step02 from "../../assets/s4/step 02.png";
import s4Step03 from "../../assets/s4/step 03.png";
import s4Step04 from "../../assets/s4/step 04.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "iMOX Copilot — Your Group Chat Finally Remembers" },
      {
        name: "description",
        content:
          "iMOX turns conversations into tasks, ownership, deadlines, and follow-ups automatically.",
      },
      { property: "og:title", content: "iMOX Copilot — Your Group Chat Finally Remembers" },
      { property: "og:description", content: "Just chat. iMOX handles the rest." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const audiences = [
  {
    title: "Small & Medium Businesses",
    text: "Stop chasing employees for updates. Manage operations, customer requests, daily tasks, and team coordination from one workspace.",
    image: audienceSmb,
    alt: "Small business team coordinating work with iMOX",
    imageClass: "object-[48%_42%]",
  },
  {
    title: "Agencies & Freelancers",
    text: "Turn client conversations into trackable work. Manage approvals, campaigns, content requests, and deliverables without losing context.",
    image: audienceAgencies,
    alt: "Agency team reviewing project work together",
    imageClass: "object-[50%_42%]",
  },
  {
    title: "Startup Teams",
    text: "Move faster with less operational chaos. Keep everyone aligned without adding more tools or meetings.",
    image: audienceStartup,
    alt: "Startup team collaborating around a shared workspace",
    imageClass: "object-[45%_40%]",
  },
  {
    title: "Clinics & Healthcare Teams",
    text: "Coordinate staff, operations, and internal communication with complete visibility.",
    image: audienceClinics,
    alt: "Clinic and healthcare operations building",
    imageClass: "object-[50%_50%]",
  },
  {
    title: "Private Groups",
    text: "Not every group is a business. Some groups are simply trying to get life organized.",
    image: audiencePrivate,
    alt: "Private group organizing everyday plans with iMOX",
    imageClass: "object-[20%_38%]",
  },
];

const steps = [
  {
    title: "Turn Messages Into Tasks.",
    text: "Just message naturally, iMOX creates the task, assigns it, and sets the due date.",
    image: s4Step01,
    alt: "iMOX creates a task from a natural chat message",
  },
  {
    title: "No More Chasing.",
    text: "iMOX follows up automatically so work keeps moving.",
    image: s4Step02,
    alt: "iMOX follow-up reminder keeping work moving",
  },
  {
    title: "Deadlines In One Calendar.",
    text: "Track upcoming tasks and important dates in a simple calendar view.",
    image: s4Step03,
    alt: "iMOX calendar view showing upcoming deadlines",
  },
  {
    title: "See Every Task Clearly.",
    text: "Review all tasks in one simple list view by status, owner, and date.",
    image: s4Step04,
    alt: "iMOX list view showing tasks by status owner and date",
  },
] as const;

function Logo({ light = false, className = "h-9" }: { light?: boolean; className?: string }) {
  return (
    <a href="#top" className="inline-flex items-center" aria-label="iMOX home">
      <img
        src={light ? "/logo-light.svg" : "/logo.svg"}
        alt="iMOX"
        width={3237}
        height={1090}
        className={`w-auto ${className}`}
      />
    </a>
  );
}

function AppIcon({ className = "size-14" }: { className?: string }) {
  return (
    <img
      src="/icon-mark.svg"
      alt="iMOX app icon"
      width={1090}
      height={1090}
      className={`drop-shadow-[0_16px_38px_rgba(0,0,0,0.35)] ${className}`}
    />
  );
}

const AppleGlyph = ({ className = "size-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
    <path d="M16.365 1.43c0 1.14-.46 2.23-1.2 3.03-.79.86-2.08 1.53-3.14 1.44-.13-1.09.44-2.25 1.15-3 .8-.85 2.18-1.48 3.19-1.47zm3.96 16.02c-.58 1.34-.86 1.93-1.6 3.11-1.04 1.65-2.5 3.7-4.31 3.72-1.61.02-2.02-1.05-4.2-1.04-2.18.01-2.63 1.06-4.24 1.04-1.81-.02-3.2-1.87-4.24-3.51-2.9-4.59-3.2-9.98-1.42-12.85 1.27-2.04 3.27-3.23 5.15-3.23 1.92 0 3.12 1.05 4.71 1.05 1.54 0 2.48-1.05 4.7-1.05 1.68 0 3.46.91 4.73 2.49-4.16 2.28-3.48 8.22.72 10.27z" />
  </svg>
);

const PlayGlyph = ({ className = "size-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden className={className}>
    <path d="M3.6 2.2c-.3.22-.5.6-.5 1.1v17.4c0 .5.2.88.5 1.1l9.05-9.8L3.6 2.2z" fill="#00d0ff" />
    <path d="M17.4 8.4 13.9 6.4 3.6 2.2c.06-.04.13-.06.2-.06l13.6 6.26z" fill="#00e676" />
    <path d="m17.4 8.4-3.5 3.6 3.5 3.6 3.4-1.96c.7-.4.7-1.44 0-1.84L17.4 8.4z" fill="#ffce00" />
    <path d="m3.6 21.8 10.3-9.8 3.5 3.6-13.6 6.26c-.07 0-.14-.02-.2-.06z" fill="#ff3d47" />
  </svg>
);

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

function StoreBadges({ className = "" }: { className?: string }) {
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

function HeroAvatarStack() {
  const avatars = [
    { src: heroCollageMain, alt: "Team using iMOX" },
    { src: heroCollageTeam, alt: "Group coordinating through iMOX" },
    { src: heroCollageSolo, alt: "Person using iMOX on mobile" },
  ];

  return (
    <div className="flex -space-x-3" aria-label="iMOX groups">
      {avatars.map((avatar, index) => (
        <img
          key={avatar.alt}
          src={avatar.src}
          alt={avatar.alt}
          loading="lazy"
          width={44}
          height={44}
          className="size-11 rounded-full border-2 border-background object-cover shadow-sm"
          style={{ objectPosition: index === 0 ? "50% 42%" : index === 1 ? "48% 42%" : "50% 30%" }}
        />
      ))}
    </div>
  );
}

function HeroCollage() {
  return (
    <div
      className="hero-collage hero-reveal relative lg:col-span-7"
      style={{ "--reveal-delay": "360ms" } as CSSProperties}
      aria-label="iMOX team collaboration"
    >
      <figure className="hero-collage-main">
        <img
          src={heroCollageMain}
          alt="A team gathered around laptops while coordinating work"
          width={1800}
          height={1200}
          loading="eager"
          fetchPriority="high"
        />
        <figcaption className="hero-floating-card hero-floating-card-left">
          <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-brand">
            <ListChecks className="size-5" />
          </span>
          <span>
            <span className="block text-sm font-bold text-brand-ink">Task created</span>
            <span className="mt-1 block text-xs font-medium text-muted-foreground">
              Client proposal · Sarah
            </span>
          </span>
        </figcaption>
        <figcaption className="hero-floating-card hero-floating-card-right float-slow">
          <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-brand-lime text-brand-ink shadow-sm">
            <BellRing className="size-5" />
          </span>
          <span>
            <span className="block text-sm font-bold text-brand-ink">Follow-up ready</span>
            <span className="mt-1 block text-xs font-medium text-muted-foreground">
              Tomorrow · 12 PM
            </span>
          </span>
        </figcaption>
      </figure>
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [activeHowStep, setActiveHowStep] = useState(0);
  const [howPaused, setHowPaused] = useState(false);
  const [audienceSlideIndex, setAudienceSlideIndex] = useState(0);
  const [audienceTransition, setAudienceTransition] = useState(true);
  const [audiencePaused, setAudiencePaused] = useState(false);
  const mobileAudienceRef = useRef<HTMLDivElement>(null);
  const activeHowStepData = steps[activeHowStep] ?? steps[0];
  const activeAudience =
    ((audienceSlideIndex % audiences.length) + audiences.length) % audiences.length;
  const loopedAudiences = [...audiences, ...audiences.slice(0, 3)];
  const showAudience = (index: number) => {
    const nextIndex = (index + audiences.length) % audiences.length;
    setAudienceTransition(true);
    setAudienceSlideIndex(nextIndex);
    const nextCard = mobileAudienceRef.current?.children[nextIndex] as HTMLElement | undefined;
    nextCard?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };
  const showPreviousAudience = () => {
    setAudienceTransition(true);
    setAudienceSlideIndex((current) => {
      if (current > 0) return current - 1;
      window.requestAnimationFrame(() => {
        setAudienceTransition(false);
        setAudienceSlideIndex(audiences.length);
        window.requestAnimationFrame(() => {
          setAudienceTransition(true);
          setAudienceSlideIndex(audiences.length - 1);
        });
      });
      return current;
    });
  };
  const showNextAudience = () => {
    setAudienceTransition(true);
    setAudienceSlideIndex((current) => {
      if (current >= audiences.length) return current;
      return current + 1;
    });
  };
  const handleAudienceTransitionEnd = () => {
    if (audienceSlideIndex !== audiences.length) return;
    setAudienceTransition(false);
    setAudienceSlideIndex(0);
    window.requestAnimationFrame(() => setAudienceTransition(true));
  };
  const syncMobileAudience = () => {
    const gallery = mobileAudienceRef.current;
    if (!gallery) return;
    const cards = Array.from(gallery.children) as HTMLElement[];
    const nearest = cards.reduce(
      (best, card, index) => {
        const distance = Math.abs(card.offsetLeft - gallery.scrollLeft);
        return distance < best.distance ? { distance, index } : best;
      },
      { distance: Number.POSITIVE_INFINITY, index: activeAudience },
    );
    if (nearest.index !== activeAudience) {
      setAudienceTransition(true);
      setAudienceSlideIndex(nearest.index);
    }
  };

  // Cycle through the How-it-works steps every 2s; pause while the visitor
  // hovers or focuses the block, then resume once they move away.
  useEffect(() => {
    if (howPaused) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActiveHowStep((i) => (i + 1) % steps.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, [howPaused]);

  useEffect(() => {
    if (audiencePaused) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia?.("(max-width: 767px)").matches) return;
    const id = window.setInterval(() => {
      showNextAudience();
    }, 3500);
    return () => window.clearInterval(id);
  }, [audiencePaused]);

  const nav = [
    { label: "Who it’s for", href: "#for-whom" },
    { label: "How it works", href: "#how" },
    { label: "Why iMOX", href: "#why" },
  ];
  return (
    <main id="top" className="text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
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
            {nav.map((item) => (
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
                  onClick={() => setDemoOpen(true)}
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

      <section id="for-whom" className="overflow-hidden py-10 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[0.84fr_1.16fr] lg:gap-12 lg:px-8">
          <div className="reveal">
            <p className="mb-4 text-xs font-bold uppercase text-brand-deep">
              Built for real life and real work
            </p>
            <h2 className="max-w-md text-3xl font-bold leading-[1.04] md:text-6xl">
              Who is
              <span className="block text-brand-gradient">iMOX for?</span>
            </h2>
            <p className="mt-6 text-base font-semibold leading-6 sm:mt-7 sm:text-lg sm:leading-7">
              Work happens in chat. But nothing gets tracked.
            </p>
            <ul className="mt-6 grid max-w-md gap-2" aria-label="What goes wrong today">
              {[
                "Messages get buried",
                "Tasks get forgotten",
                "People assume someone else is handling it",
                "Follow-ups become endless.",
              ].map((x) => (
                <li
                  key={x}
                  className="group inline-flex w-fit items-center gap-2 rounded-full border border-primary/10 bg-background/80 px-3.5 py-2 text-sm font-medium leading-none text-muted-foreground shadow-sm shadow-primary/5 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-[linear-gradient(110deg,var(--primary),var(--brand-deep),var(--brand-cyan))] hover:text-primary-foreground hover:shadow-brand"
                >
                  <span className="size-1.5 rounded-full bg-primary/70 transition-colors duration-300 group-hover:bg-primary-foreground/85" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="reveal min-w-0"
            onMouseEnter={() => setAudiencePaused(true)}
            onMouseLeave={() => setAudiencePaused(false)}
            onFocusCapture={() => setAudiencePaused(true)}
            onBlurCapture={() => setAudiencePaused(false)}
          >
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <p className="min-w-0 flex-1 text-sm font-semibold leading-5 text-muted-foreground">
                Five audiences. One shared way to keep work moving.
              </p>
              <div className="hidden items-center gap-2 self-end sm:flex sm:self-auto">
                <Button
                  type="button"
                  variant="brandOutline"
                  size="icon"
                  aria-label="Show previous audience"
                  onClick={showPreviousAudience}
                >
                  <ArrowLeft className="size-4" />
                </Button>
                <Button
                  type="button"
                  variant="brand"
                  size="icon"
                  aria-label="Show next audience"
                  onClick={showNextAudience}
                >
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
            <div className="audience-gallery hidden md:block" aria-live="polite">
              <div
                className={`audience-gallery-track ${
                  audienceTransition ? "" : "audience-gallery-track-instant"
                }`}
                style={{ "--audience-index": audienceSlideIndex } as CSSProperties}
                onTransitionEnd={(event) => {
                  if (event.currentTarget === event.target) handleAudienceTransitionEnd();
                }}
              >
                {loopedAudiences.map((item, i) => (
                  <article
                    key={`${item.title}-${i}`}
                    className="audience-gallery-card group"
                    aria-hidden={i < audienceSlideIndex || i > audienceSlideIndex + 2}
                  >
                    <figure className="audience-gallery-media">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        width={900}
                        height={620}
                        className={item.imageClass}
                      />
                    </figure>
                    <div className="grid grid-cols-[1fr_auto] items-start gap-3 px-1 pt-4">
                      <div>
                        <h3 className="text-sm font-bold leading-5 text-brand-ink sm:text-[0.95rem]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-xs leading-5 text-muted-foreground">{item.text}</p>
                      </div>
                      <ArrowRight className="mt-2 size-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div
              ref={mobileAudienceRef}
              className="audience-gallery-mobile md:hidden"
              aria-label="Swipe audiences"
              onScroll={syncMobileAudience}
            >
              {audiences.map((item) => (
                <article key={item.title} className="audience-gallery-card group">
                  <figure className="audience-gallery-media">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      width={900}
                      height={620}
                      className={item.imageClass}
                    />
                  </figure>
                  <div className="grid grid-cols-[1fr_auto] items-start gap-3 px-1 pt-4">
                    <div>
                      <h3 className="text-lg font-bold leading-6 text-brand-ink">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
                    </div>
                    <ArrowRight className="mt-2 size-4 shrink-0 text-primary" />
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-5 flex justify-center gap-2" aria-label="Audience gallery position">
              {audiences.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Show ${item.title}`}
                  aria-pressed={i === activeAudience}
                  onClick={() => showAudience(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeAudience
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary/20 hover:bg-primary/45"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="py-12 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal text-center">
            <p className="mb-4 text-xs font-bold uppercase text-brand-deep">How it works</p>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight md:text-6xl">
              Communication That{" "}
              <span className="text-brand-gradient">Automatically Becomes Execution</span>
            </h2>
          </div>

          <div
            className="mt-14 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] xl:gap-10"
            onMouseEnter={() => setHowPaused(true)}
            onMouseLeave={() => setHowPaused(false)}
            onFocusCapture={() => setHowPaused(true)}
            onBlurCapture={() => setHowPaused(false)}
          >
            <figure className="relative order-2 mx-auto aspect-[1512/2017] w-full max-w-[300px] overflow-hidden rounded-[2rem] sm:max-w-[460px] lg:order-1">
              <img
                key={activeHowStepData.title}
                src={activeHowStepData.image}
                alt={activeHowStepData.alt}
                loading="lazy"
                width={1512}
                height={2017}
                className="step-media h-full w-full object-cover"
              />
            </figure>

            <div className="order-1 grid grid-cols-4 gap-2 md:grid-cols-2 md:gap-4 lg:order-2 lg:grid-cols-1 lg:gap-3">
              {steps.map((step, i) => {
                const isActive = i === activeHowStep;
                return (
                  <button
                    key={step.title}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveHowStep(i)}
                    className={`group grid min-h-0 grid-cols-1 items-start gap-1 rounded-xl border bg-background px-2 py-3 text-left transition-all duration-300 sm:gap-2 sm:px-4 md:min-h-[116px] md:grid-cols-[3.2rem_1fr] md:gap-4 md:px-5 md:py-5 ${
                      isActive
                        ? "border-primary bg-[color-mix(in_oklab,var(--primary)_6%,var(--background))] shadow-brand"
                        : "border-border hover:border-primary/45 hover:bg-secondary/60"
                    }`}
                  >
                    <span
                      className={`block text-base font-bold leading-tight transition-colors sm:text-2xl md:text-3xl md:leading-none ${
                        isActive ? "text-primary" : "text-primary/45 group-hover:text-primary"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block text-[0.55rem] font-bold leading-[0.8rem] text-brand-ink sm:text-sm md:text-lg">
                        {step.title}
                      </span>
                      <span className="mt-1 block max-w-lg text-[0.5rem] leading-[0.72rem] text-muted-foreground sm:text-xs md:mt-3 md:text-sm md:leading-6">
                        {step.text}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

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
                {[
                  "Task created",
                  "Assigned to someone",
                  "Due tomorrow",
                  "Added to progress tracking",
                ].map((x, i) => (
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

      <section className="bg-brand-ink py-12 text-primary-foreground md:py-32">
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
            <h2 className="text-3xl font-bold md:text-6xl">Not another project management tool.</h2>
            <p className="mt-5 text-base leading-7 text-primary-foreground/70 sm:mt-6 sm:text-lg sm:leading-8">
              Most platforms ask teams to stop working and start managing software. iMOX does the
              opposite. It fits directly into the way people already communicate.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "No training",
                "No complicated workflows",
                "No behavior change",
                "Just better outcomes",
              ].map((x) => (
                <p key={x} className="flex items-center gap-3 font-semibold">
                  <Check className="text-brand-lime" /> {x}
                </p>
              ))}
            </div>
            <Button variant="inverted" size="xl" className="mt-8" onClick={() => setDemoOpen(true)}>
              <CirclePlay /> Watch 30-second video
            </Button>
          </div>
        </div>
      </section>

      <section id="why" className="py-12 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div className="reveal">
              <p className="mb-4 text-xs font-bold uppercase text-brand-deep">
                Why iMOX is different
              </p>
              <h2 className="text-3xl font-bold md:text-6xl">
                Most tools help manage work.{" "}
                <span className="text-brand-gradient">iMOX makes work move.</span>
              </h2>
              <img
                src={copilotTeam}
                alt="Colleagues keeping work moving through a shared conversation"
                loading="lazy"
                width={1600}
                height={1072}
                className="mt-8 aspect-[4/3] w-full rounded-2xl object-cover shadow-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                {
                  icon: MessagesSquare,
                  title: "AI turns conversations into tasks",
                  text: "Every decision in the chat becomes a trackable action.",
                },
                {
                  icon: UserCheck,
                  title: "AI assigns ownership",
                  text: "Each task lands with a clear owner, automatically.",
                },
                {
                  icon: CalendarClock,
                  title: "AI tracks deadlines",
                  text: "Due dates are captured and watched for you.",
                },
                {
                  icon: BellRing,
                  title: "AI follows up automatically",
                  text: "iMOX nudges the right people so you don't have to.",
                },
                {
                  icon: ListChecks,
                  title: "AI summarizes progress",
                  text: "See where things stand without asking around.",
                },
                {
                  icon: LayoutGrid,
                  title: "One workspace for communication and execution",
                  text: "Talk and get work done in the very same place.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="reveal audience-card audience-gradient-card group flex flex-col gap-3 overflow-hidden rounded-2xl border-2 border-transparent p-4 sm:gap-4 sm:p-5 lg:p-6"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-soft text-primary sm:size-10 lg:size-11">
                    <Icon className="size-4 sm:size-5" />
                  </span>
                  <div>
                    <p className="text-[0.78rem] font-bold leading-5 text-brand-ink sm:text-sm sm:leading-6 lg:text-base">
                      {title}
                    </p>
                    <p className="mt-1.5 text-[0.68rem] leading-5 text-muted-foreground sm:text-xs lg:text-sm lg:leading-6">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
              <div className="reveal audience-card audience-gradient-card group flex items-start gap-3 overflow-hidden rounded-2xl border-2 border-transparent p-4 sm:gap-4 sm:p-5 lg:col-span-2 lg:items-center lg:p-6">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-soft text-primary sm:size-10 lg:size-11">
                  <Zap className="size-4 sm:size-5" />
                </span>
                <div>
                  <p className="text-[0.78rem] font-bold leading-5 text-brand-ink sm:text-sm sm:leading-6 lg:text-base">
                    No training or setup
                  </p>
                  <p className="mt-1.5 text-[0.68rem] leading-5 text-muted-foreground sm:text-xs lg:text-sm lg:leading-6">
                    It works the moment you start chatting—nothing to configure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="px-5 pb-10 pt-4">
        <div className="cta-aurora relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-16 text-center text-primary-foreground md:px-16 md:py-24">
          <AppIcon className="mx-auto size-16" />
          <h2 className="mx-auto mt-8 max-w-4xl text-3xl font-bold md:text-6xl">
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
                {[
                  // { label: "Features", href: "#for-whom" },
                  { label: "How it works", href: "#how" },
                  { label: "Why iMOX", href: "#why" },
                  // { label: "Download", href: "#download" },
                ].map((link) => (
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
                {["Terms of Use", "Privacy Policy", "Delete Account"].map((label) => (
                  <li key={label}>
                    <a
                      href={
                        label === "Terms of Use"
                          ? "/terms-of-use"
                          : label === "Privacy Policy"
                            ? "/privacy-policy"
                            : "/delete-account"
                      }
                      className="transition-colors hover:text-primary-foreground"
                    >
                      {label}
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

      {demoOpen && (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-brand-ink/70 p-5 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label="iMOX demo"
        >
          <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-background p-3 shadow-2xl">
            <Button
              aria-label="Close demo"
              variant="secondary"
              size="icon"
              className="absolute right-5 top-5 z-10"
              onClick={() => setDemoOpen(false)}
            >
              <X />
            </Button>
            <div className="flex aspect-video flex-col items-center justify-center rounded-xl bg-brand-ink px-8 text-center text-primary-foreground">
              <span className="mb-5 grid size-16 place-items-center rounded-2xl bg-primary shadow-brand">
                <CirclePlay className="size-8" />
              </span>
              <h3 className="text-2xl font-bold">Chat becomes action</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-primary-foreground/70">
                Say what needs to happen. iMOX detects the task, assigns an owner, tracks the
                deadline, and follows up automatically.
              </p>
              <Button asChild variant="inverted" className="mt-6">
                <a href="#download" onClick={() => setDemoOpen(false)}>
                  Start free <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
