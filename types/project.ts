import type { LucideIcon } from "lucide-react";

export type ProjectStatus = "Built" | "Prototype" | "In progress" | "Concept" | "Operational";

export type Project = {
  id: string;
  date: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  status: ProjectStatus;
  accent: "mono";
  photos?: { src: string; alt: string; caption?: string; width: number; height: number }[];
  links?: { label: string; href: string }[];
  story?: { title: string; body: string }[];
  detail: {
    overview: string;
    outcomes: string[];
    nextSteps: string[];
  };
};

export type SkillGroup = {
  name: string;
  icon: LucideIcon;
  skills: {
    name: string;
    relatedProjectIds: string[];
  }[];
};
