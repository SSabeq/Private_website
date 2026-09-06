import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type LinkAction = {
  label: string;
  href: string;
};

export type ContentCard = {
  title: string;
  description: string;
  href?: string;
  icon?: LucideIcon;
  meta?: string;
  tags?: string[];
};

export type PageIntro = {
  eyebrow?: string;
  title: string;
  description: string;
};

export type ContentSection = {
  title: string;
  description?: string;
  items: ContentCard[];
};

export type SimplePageContent = {
  intro: PageIntro;
  sections: ContentSection[];
  cta?: {
    title: string;
    description: string;
    primary?: LinkAction;
    secondary?: LinkAction;
  };
};
