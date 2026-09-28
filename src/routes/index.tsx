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

const SITE_URL = "https://imox-app.com";

// Schema.org structured data for rich results. A single @graph node keeps the
// Organization, WebSite, and SoftwareApplication entities cross-referenced.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "iMOX",
      url: SITE_URL,
      logo: `${SITE_URL}/icon-mark.svg`,
      email: "info@imox-app.com",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "iMOX",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#app`,
      name: "iMOX Copilot",
      description:
        "iMOX turns conversations into tasks, ownership, deadlines, and follow-ups automatically.",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "iOS, Android",
      url: SITE_URL,
      image: `${SITE_URL}/og-image.png`,
      publisher: { "@id": `${SITE_URL}/#organization` },
      downloadUrl: [
        "https://apps.apple.com/us/app/imox-copilot/id6777773188",
        "https://play.google.com/store/apps/details?id=com.imox.copilot",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
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
