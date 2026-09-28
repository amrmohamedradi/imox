import type { Audience } from "@/types/landing";
import audienceSmb from "@/assets/imox-audience-smb.webp";
import audienceAgencies from "@/assets/imox-audience-agencies.webp";
import audienceStartup from "@/assets/imox-audience-startup.webp";
import audiencePrivate from "@/assets/imox-audience-private.webp";

export const audiences: Audience[] = [
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
    title: "Private Groups",
    text: "Not every group is a business. Some groups are simply trying to get life organized.",
    image: audiencePrivate,
    alt: "Private group organizing everyday plans with iMOX",
    imageClass: "object-[20%_38%]",
  },
];
