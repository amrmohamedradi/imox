import { createFileRoute } from "@tanstack/react-router";
import { useState, type CSSProperties, type ReactNode } from "react";
import {
  ArrowRight,
  BellRing,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  Check,
  CirclePlay,
  HeartPulse,
  LayoutGrid,
  ListChecks,
  Mail,
  Menu,
  MessagesSquare,
  Rocket,
  Sparkle,
  UserCheck,
  Users,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPeople from "@/assets/imox-people-hero.jpg";
import copilotTeam from "@/assets/imox-copilot-team.jpg";
import organizedLife from "@/assets/imox-life-organized.jpg";
import copilotBuilding from "@/assets/imox-copilot-building.webp";
import s3ActionIcon from "../../assets/s3/09.png";
import s3FollowUp from "../../assets/s3/11.png";
import s3TodoCard from "../../assets/s3/gfgfgf.png";
import s3NewGroup from "../../assets/s3/gghhgghhg.png";
import s3TasksHeader from "../../assets/s3/16.png";
import s3WebBanner from "../../assets/s3/web-banner.png";
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
    icon: Building2,
    title: "Small & Medium Businesses",
    text: "Stop chasing employees for updates. Manage operations, customer requests, daily tasks, and team coordination from one workspace.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Agencies & Freelancers",
    text: "Turn client conversations into trackable work. Manage approvals, campaigns, content requests, and deliverables without losing context.",
  },
  {
    icon: Rocket,
    title: "Startup Teams",
    text: "Move faster with less operational chaos. Keep everyone aligned without adding more tools or meetings.",
  },
  {
    icon: HeartPulse,
    title: "Clinics & Healthcare Teams",
    text: "Coordinate staff, operations, and internal communication with complete visibility.",
  },
  {
    icon: Users,
    title: "Private Groups",
    text: "Not every group is a business. Some groups are simply trying to get life organized.",
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
        href="https://www.imox-app.com/"
        top="Download on the"
        brand="App Store"
        glyph={<AppleGlyph className="size-6" />}
      />
      <StoreBadge
        href="https://www.imox-app.com/"
        top="Get it on"
        brand="Google Play"
        glyph={<PlayGlyph className="size-5" />}
      />
    </div>
  );
}

function PhoneChat({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  return (
    <div
      className={`relative mx-auto rounded-[2.4rem] border-[7px] border-brand-ink bg-background p-2 shadow-2xl ${compact ? "w-[230px]" : "w-[270px]"} ${className}`}
    >
      <div className="mx-auto mb-3 h-5 w-24 rounded-b-xl bg-brand-ink" />
      <div className="rounded-[1.7rem] bg-brand-soft/70 p-3">
        <div className="mb-5 flex items-center gap-2 border-b border-primary/10 pb-3">
          <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
            <Users className="size-4" />
          </span>
          <div>
            <p className="text-xs font-bold">Wedding plans</p>
            <p className="text-[9px] text-muted-foreground">8 members · iMOX Copilot on</p>
          </div>
        </div>
        <div className="space-y-3 text-[10px] leading-relaxed">
          <div className="mr-8 rounded-xl rounded-tl-sm bg-background p-2.5 shadow-sm">
            Maya, can you confirm the florist tomorrow?
          </div>
          <div className="ml-9 rounded-xl rounded-tr-sm bg-primary p-2.5 text-primary-foreground">
            Yes — I’ll call before noon.
          </div>
          <div className="rounded-xl border border-primary/20 bg-background p-3 shadow-sm">
            <div className="mb-2 flex items-center gap-1.5 font-bold text-primary">
              <WandSparkles className="size-3" /> Task created
            </div>
            <p className="font-semibold">Confirm the florist</p>
            <div className="mt-2 flex items-center justify-between text-[9px] text-muted-foreground">
              <span>Owner · Maya</span>
              <span>Tomorrow · 12 PM</span>
            </div>
          </div>
          <div className="mr-12 rounded-xl rounded-tl-sm bg-background p-2.5 shadow-sm">
            Perfect. One less thing to chase.
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between rounded-full bg-background px-3 py-2 text-[9px] text-muted-foreground shadow-sm">
          <span>Message the group…</span>
          <span className="grid size-6 place-items-center rounded-full bg-primary text-primary-foreground">
            ↑
          </span>
        </div>
      </div>
    </div>
  );
}

function HeroPhotoCard({
  src,
  alt,
  title,
  meta,
  className = "",
  imageClassName = "",
  priority = false,
  style,
}: {
  src: string;
  alt: string;
  title: string;
  meta: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  style?: CSSProperties;
}) {
  return (
    <article
      className={`hero-card group relative overflow-hidden rounded-3xl bg-brand-soft shadow-sm ${className}`}
      style={style}
    >
      <img
        src={src}
        alt={alt}
        width={1600}
        height={1072}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] ${imageClassName}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/50 via-brand-ink/5 to-transparent" />
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 rounded-2xl border border-primary-foreground/30 bg-background/88 px-3 py-2 text-left text-brand-ink shadow-sm backdrop-blur">
        <div className="min-w-0">
          <p className="truncate text-[11px] font-bold leading-none">{title}</p>
          <p className="mt-1 truncate text-[10px] font-medium text-muted-foreground">{meta}</p>
        </div>
        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-brand">
          <Check className="size-3.5" />
        </span>
      </div>
    </article>
  );
}

function HeroFeatureCard({
  variant = "soft",
  className = "",
  style,
}: {
  variant?: "violet" | "soft";
  className?: string;
  style?: CSSProperties;
}) {
  if (variant === "violet") {
    return (
      <article
        className={`hero-card group flex min-h-[172px] flex-col justify-between rounded-3xl bg-primary p-5 text-primary-foreground shadow-brand md:min-h-[190px] ${className}`}
        style={style}
      >
        <div>
          <p className="text-[11px] font-bold uppercase text-primary-foreground/70">
            Chat naturally
          </p>
          <h3 className="mt-3 text-lg font-bold leading-tight">Say it once. It becomes a task.</h3>
        </div>
        <div className="mt-5 rounded-2xl bg-primary-foreground/14 p-3 text-xs font-semibold text-primary-foreground transition-colors group-hover:bg-primary-foreground/20">
          Confirm the florist · Maya
        </div>
      </article>
    );
  }

  return (
    <article
      className={`hero-card flex min-h-[190px] flex-col justify-between rounded-3xl border border-brand-cyan/30 p-5 shadow-sm ${className}`}
      style={{
        backgroundColor: "color-mix(in oklab, var(--brand-cyan) 25%, var(--background))",
        ...style,
      }}
    >
      <span className="grid size-10 place-items-center rounded-2xl bg-background/85 text-primary shadow-sm">
        <CalendarClock className="size-5" />
      </span>
      <div>
        <h3 className="text-lg font-bold">AI follows up.</h3>
        <p className="mt-2 text-xs leading-5 text-muted-foreground">
          No more chasing. Friendly reminders when deadlines approach.
        </p>
      </div>
    </article>
  );
}

function HeroAvatarStack() {
  const avatars = [
    { src: copilotTeam, alt: "Project team using iMOX" },
    { src: organizedLife, alt: "Family trip group using iMOX" },
    { src: heroPeople, alt: "Wedding plans group using iMOX" },
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
          style={{ objectPosition: index === 0 ? "18% 40%" : index === 1 ? "35% 50%" : "8% 30%" }}
        />
      ))}
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [activeHowStep, setActiveHowStep] = useState(0);
  const activeHowStepData = steps[activeHowStep] ?? steps[0];
  const nav = [
    { label: "Who it’s for", href: "#for-whom" },
    { label: "How it works", href: "#how" },
    { label: "Why iMOX", href: "#why" },
  ];
  return (
    <main id="top" className="bg-background text-foreground">
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
            <Button asChild variant="brand" size="lg">
              <a href="#download">
                Get the app <ArrowRight />
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

      <section className="relative overflow-hidden px-5 pt-24 pb-16 lg:px-8 lg:pt-28 xl:min-h-[min(100svh,860px)]">
        <div className="absolute inset-0 hero-atmosphere" />
        <div className="absolute inset-0 imox-grid hero-grid-mask opacity-80" />
        <div className="relative mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <div className="max-w-2xl lg:col-span-5 lg:flex lg:min-h-[624px] lg:flex-col lg:justify-between lg:py-1">
            <div>
              <div
                className="hero-reveal mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-background/70 px-4 py-2 text-xs font-semibold text-primary shadow-sm backdrop-blur"
                style={{ "--reveal-delay": "0ms" } as CSSProperties}
              >
                <Sparkle className="size-3.5" /> MEET iMOX COPILOT
              </div>
              <h1
                className="hero-reveal max-w-[12ch] text-[2.6rem] font-bold leading-[1.04] sm:text-5xl lg:text-6xl xl:text-7xl"
                style={{ "--reveal-delay": "80ms" } as CSSProperties}
              >
                Your group chat
                <br />
                finally <span className="text-brand-gradient">remembers.</span>
              </h1>
              <p
                className="hero-reveal mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg"
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
                <Button asChild variant="brand" size="xl" className="active:scale-[.98]">
                  <a href="#download">
                    Start free <ArrowRight />
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

          <div className="grid grid-cols-2 gap-3 lg:col-span-7 lg:grid-cols-3 lg:grid-rows-[220px_180px_192px] lg:gap-4 xl:grid-rows-[232px_184px_192px]">
            <HeroPhotoCard
              src={copilotTeam}
              alt="Project team coordinating with iMOX Copilot on a phone"
              title="Project team"
              meta="Copilot on"
              priority
              className="hero-reveal order-2 aspect-[4/5] lg:order-none lg:row-span-2 lg:aspect-auto"
              imageClassName="object-[18%_40%]"
              style={{ "--reveal-delay": "360ms" } as CSSProperties}
            />
            <HeroFeatureCard
              variant="violet"
              className="hero-reveal order-4 lg:order-none lg:row-start-3"
              style={{ "--reveal-delay": "520ms" } as CSSProperties}
            />

            <article
              className="hero-reveal hero-card relative order-1 col-span-2 overflow-hidden rounded-3xl border border-primary/10 bg-brand-soft p-4 shadow-sm imox-grid lg:order-none lg:col-span-1 lg:row-span-2"
              style={{ "--reveal-delay": "440ms" } as CSSProperties}
            >
              <div className="absolute inset-0 bg-background/45" />
              <div className="relative flex min-h-[390px] items-center justify-center lg:min-h-full">
                <PhoneChat
                  compact
                  className="scale-[.82] sm:scale-[.86] lg:scale-[.78] xl:scale-[.85]"
                />
                <div className="float-slow absolute right-2 top-8 hidden rounded-2xl border border-border bg-background/92 p-3 text-left shadow-xl backdrop-blur md:block">
                  <p className="text-xs font-bold">Deadline tracked</p>
                  <p className="text-[10px] text-muted-foreground">Tomorrow · 12 PM</p>
                </div>
              </div>
            </article>
            <HeroPhotoCard
              src={organizedLife}
              alt="Family trip group organizing shared tasks in iMOX"
              title="Family trip"
              meta="4 tasks"
              className="hero-reveal order-5 hidden aspect-[4/3] sm:block lg:order-none lg:row-start-3 lg:aspect-auto"
              imageClassName="object-[35%_50%]"
              style={{ "--reveal-delay": "600ms" } as CSSProperties}
            />

            <HeroPhotoCard
              src={heroPeople}
              alt="Wedding planning group coordinating with iMOX"
              title="Wedding plans"
              meta="8 members"
              className="hero-reveal order-3 aspect-[3/4] lg:order-none lg:row-span-2 lg:aspect-auto"
              imageClassName="object-[8%_30%]"
              style={{ "--reveal-delay": "680ms" } as CSSProperties}
            />
            <HeroFeatureCard
              className="hero-reveal order-6 lg:order-none lg:row-start-3"
              style={{ "--reveal-delay": "760ms" } as CSSProperties}
            />
          </div>
        </div>
      </section>

      <section id="for-whom" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-x-4 gap-y-10 px-5 sm:grid-cols-2 lg:grid-cols-12 lg:px-8">
          <div className="reveal sm:col-span-2 lg:col-span-5 xl:col-span-4">
            <p className="mb-4 text-xs font-bold uppercase text-brand-deep">
              Built for real life and real work
            </p>
            <h2 className="max-w-md text-4xl font-bold leading-[1.04] md:text-6xl">
              Who is iMOX for?
            </h2>
            <p className="mt-7 text-lg font-semibold leading-7">
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
          <figure className="reveal group relative overflow-hidden rounded-3xl border border-border bg-secondary p-2 shadow-sm sm:col-span-2 lg:col-span-7 xl:col-span-8">
            <div className="relative overflow-hidden rounded-[1.15rem]">
              <img
                src={copilotBuilding}
                alt="iMOX Copilot logo on the facade of a modern office building"
                loading="lazy"
                width={1672}
                height={941}
                className="aspect-[16/10] w-full object-cover object-[45%_40%] transition-transform duration-700 ease-out group-hover:scale-[1.03] lg:aspect-auto lg:h-[396px]"
              />
            </div>
          </figure>
          <div className="grid gap-5 sm:col-span-2 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-12">
            {audiences.map((item, i) => {
              const span = i < 2 ? "lg:col-span-6" : "lg:col-span-4";
              return (
                <article
                  key={item.title}
                  className={`reveal audience-card audience-gradient-card group relative flex min-h-[216px] flex-col justify-between gap-8 overflow-hidden rounded-[1.35rem] border-2 border-transparent p-7 text-foreground sm:col-span-2 ${span}`}
                >
                  <span className="relative grid size-11 place-items-center rounded-xl bg-brand-soft text-primary transition-colors duration-300 group-hover:bg-primary/20 group-hover:text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <div className="relative">
                    <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-primary-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/70">
                      {item.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="reveal sm:col-span-2 lg:col-span-12">
            <Button
              variant="brandOutline"
              size="xl"
              className="w-full active:scale-[.98] sm:w-auto"
              onClick={() => setDemoOpen(true)}
            >
              <CirclePlay /> Watch 30-second video
            </Button>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-secondary py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[.82fr_1.18fr] lg:px-8">
          <div>
            <p className="mb-4 text-xs font-bold uppercase text-brand-deep">The aha moment</p>
            <h2 className="text-4xl font-bold md:text-6xl">
              Just say it.
              <br />
              <span className="text-brand-gradient">iMOX handles the execution.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              You communicate naturally. iMOX Copilot listens to the conversation and transforms it
              into structured action automatically.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                "Task created",
                "Assigned to someone",
                "Due tomorrow",
                "Added to progress tracking",
              ].map((x) => (
                <div key={x} className="flex items-center gap-2 text-sm font-semibold">
                  <span className="grid size-6 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3.5" />
                  </span>
                  {x}
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm font-semibold">
              No forms. No project setup. No manual task creation.
            </p>
            <Button asChild variant="brand" size="xl" className="mt-7">
              <a href="#download">
                Try iMOX Copilot <ArrowRight />
              </a>
            </Button>
          </div>
          <div className="relative">
            <figure className="relative overflow-visible">
              <img
                src={s3WebBanner}
                alt="iMOX Copilot execution collage showing people, tasks, follow-ups, and chat automation"
                loading="lazy"
                width={1600}
                height={1307}
                className="relative aspect-[1.22/1] w-full object-cover lg:min-h-[650px]"
              />
              <img
                src={s3ActionIcon}
                alt=""
                loading="lazy"
                width={56}
                height={56}
                className="float-slow absolute left-[16%] top-[9%] z-20 size-11"
              />
              <img
                src={s3TasksHeader}
                alt="Tasks controls"
                loading="lazy"
                width={377}
                height={52}
                className="float-delay absolute right-[22%] top-[23%] z-20 hidden w-56 sm:block"
              />
              <img
                src={s3NewGroup}
                alt="New group action"
                loading="lazy"
                width={123}
                height={42}
                className="float-slow absolute -left-3 bottom-[18%] z-20 w-24"
              />
              <img
                src={s3TodoCard}
                alt="To do card with deadlines"
                loading="lazy"
                width={384}
                height={80}
                className="float-delay absolute bottom-[29%] left-[43%] z-20 w-56"
              />
              <img
                src={s3FollowUp}
                alt="Follow-up action"
                loading="lazy"
                width={200}
                height={48}
                className="float-slow absolute bottom-[15%] right-[-0.75rem] z-20 hidden w-36 sm:block"
              />
            </figure>
          </div>
        </div>
      </section>

      <section id="how" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal text-center">
            <p className="mb-4 text-xs font-bold uppercase text-brand-deep">How it works</p>
            <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Communication That Automatically Becomes Execution
            </h2>
          </div>

          <div className="mt-14 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] xl:gap-10">
            <figure className="relative mx-auto aspect-[1512/2017] w-full max-w-[460px] overflow-hidden rounded-[2rem]">
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

            <div className="grid gap-4">
              {steps.map((step, i) => {
                const isActive = i === activeHowStep;
                return (
                  <button
                    key={step.title}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveHowStep(i)}
                    className={`group grid min-h-[116px] grid-cols-[3.2rem_1fr] items-start gap-4 rounded-xl border bg-background px-5 py-5 text-left transition-all duration-300 ${
                      isActive
                        ? "border-primary bg-[color-mix(in_oklab,var(--primary)_6%,var(--background))] shadow-brand"
                        : "border-border hover:border-primary/45 hover:bg-secondary/60"
                    }`}
                  >
                    <span
                      className={`text-3xl font-bold leading-none transition-colors ${
                        isActive ? "text-primary" : "text-primary/45 group-hover:text-primary"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block text-base font-bold text-brand-ink md:text-lg">
                        {step.title}
                      </span>
                      <span className="mt-3 block max-w-lg text-sm leading-6 text-muted-foreground">
                        {step.text}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-9 text-center">
            <Button asChild variant="brand" size="xl">
              <a href="#download">
                Start Using iMOX Copilot <ArrowRight />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-brand-ink py-24 text-primary-foreground md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <figure className="relative min-h-[520px] overflow-hidden rounded-2xl border border-primary-foreground/10">
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
          <div>
            <p className="mb-4 text-xs font-bold uppercase text-brand-lime">
              Built for how people actually work
            </p>
            <h2 className="text-4xl font-bold md:text-6xl">Not another project management tool.</h2>
            <p className="mt-6 text-lg leading-8 text-primary-foreground/70">
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

      <section id="why" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase text-brand-deep">Why iMOX is different</p>
              <h2 className="text-4xl font-bold md:text-6xl">
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
            <div className="grid gap-4 sm:grid-cols-2">
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
                  className="audience-card audience-gradient-card group flex flex-col gap-4 overflow-hidden rounded-2xl border-2 border-transparent p-6"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-bold leading-6 text-brand-ink transition-colors duration-300 group-hover:text-primary-foreground">
                      {title}
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/70">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
              <div className="audience-card audience-gradient-card group flex items-center gap-4 overflow-hidden rounded-2xl border-2 border-transparent p-6 sm:col-span-2">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Zap className="size-5" />
                </span>
                <div>
                  <p className="font-bold leading-6 text-brand-ink transition-colors duration-300 group-hover:text-primary-foreground">
                    No training or setup
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/70">
                    It works the moment you start chatting—nothing to configure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="px-5 pb-10 pt-4">
        <div className="cta-aurora relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-20 text-center text-primary-foreground md:px-16 md:py-24">
          <AppIcon className="mx-auto size-16" />
          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-bold md:text-6xl">
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
                  { label: "Features", href: "#for-whom" },
                  { label: "How it works", href: "#how" },
                  { label: "Why iMOX", href: "#why" },
                  { label: "Download", href: "#download" },
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
                    <a href="#" className="transition-colors hover:text-primary-foreground">
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
