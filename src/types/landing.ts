import type { LucideIcon } from "lucide-react";

export interface Audience {
  title: string;
  text: string;
  image: string;
  alt: string;
  imageClass: string;
}

export interface Step {
  title: string;
  text: string;
  image: string;
  alt: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface NavItem {
  label: string;
  href: string;
}
