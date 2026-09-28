import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { Audiences } from "@/components/sections/audiences";
import { HowItWorks } from "@/components/sections/how-it-works";
import { AhaMoment } from "@/components/sections/aha-moment";
import { NotPmTool } from "@/components/sections/not-pm-tool";
import { WhyImox } from "@/components/sections/why-imox";
import { DownloadCta } from "@/components/sections/download-cta";
import { DemoModal } from "@/components/demo-modal";

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

function Index() {
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = () => setDemoOpen(true);

  return (
    <main id="top" className="text-foreground">
      <SiteHeader />
      <Hero onWatchDemo={openDemo} />
      <Audiences />
      <HowItWorks />
      <AhaMoment />
      <NotPmTool onWatchDemo={openDemo} />
      <WhyImox />
      <DownloadCta />
      <SiteFooter />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </main>
  );
}
