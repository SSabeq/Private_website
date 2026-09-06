import { Activity, BrainCircuit, Cpu, UserRound } from "lucide-react";
import type { ContentCard, LinkAction, NavItem } from "@/types/content";

export const siteConfig = {
  name: "Dominik Jasiński",
  title: "Building systems. Putting in the miles.",
  description:
    "I'm Dominik — a multidisciplinary builder working across engineering, automation, and design. This is a record of what I build, how I train, and what I learn along the way.",
  nav: [
    { label: "Projects", href: "/projects" },
    { label: "About Me", href: "/about" },
    { label: "Engineering", href: "/engineering" },
    { label: "AI & Automation", href: "/ai-automation" },
    { label: "Fitness", href: "/fitness" },
  ] satisfies NavItem[],
  contact: {
    title: "A closer look at the work.",
    description:
      "Explore the projects, the decisions behind them, and the practical lessons that carry into the next build.",
    links: [
      { label: "GitHub", href: "https://github.com/SSabeq" },
    ] satisfies LinkAction[],
  },
};

export const homeSections: ContentCard[] = [
  {
    title: "About Me",
    description: "Background, values, education, working style, and current technical focus.",
    href: "/about",
    icon: UserRound,
    meta: "Profile",
  },
  {
    title: "Engineering",
    description: "Embedded systems, Raspberry Pi, STM32, CAD, measurement, and prototyping work.",
    href: "/engineering",
    icon: Cpu,
    meta: "Hardware + product",
  },
  {
    title: "AI & Automation",
    description: "Excel/VBA, Python automation, AI workflows, reporting, and business process tools.",
    href: "/ai-automation",
    icon: BrainCircuit,
    meta: "Software systems",
  },
  {
    title: "Fitness",
    description: "From the first runs to strength training and preparing for an Ironman. A personal sports timeline.",
    href: "/fitness",
    icon: Activity,
    meta: "Performance",
  },
];

export const credibilityItems: ContentCard[] = [
  {
    title: "Practical systems mindset",
    description: "Projects are framed around useful output: logging, validation, measurements, exports, and repeatable workflows.",
  },
  {
    title: "Comfort across domains",
    description: "The work spans firmware, Python interfaces, CAD prototypes, business operations, and design decisions.",
  },
  {
    title: "Process-driven execution",
    description: "Engineering and training both benefit from measured iteration, consistency, and clear feedback loops.",
  },
];
