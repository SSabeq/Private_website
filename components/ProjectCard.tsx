"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  isActive: boolean;
  align: "left" | "right";
  onActive: (projectId: string) => void;
  onViewDetails: (project: Project) => void;
};

const accentGradient = {
  mono: "from-white/24 via-neutral-800/70 to-black",
};

export function ProjectCard({
  project,
  isActive,
  align,
  onActive,
  onViewDetails,
}: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      tabIndex={0}
      onFocus={() => onActive(project.id)}
      onViewportEnter={() => onActive(project.id)}
      viewport={{ amount: 0.45, margin: "-10% 0px -20% 0px" }}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "focus-ring rounded-md border bg-panel/82 p-5 shadow-[var(--shadow-panel)] backdrop-blur transition-colors",
        isActive
          ? "border-white/80 bg-panel-strong"
          : "border-line/80 hover:border-neutral-500/80",
        align === "left" ? "md:text-left" : "md:text-left",
      )}
      aria-label={`${project.title}, ${project.category}`}
    >
      <div
        className={cn(
          "mb-5 h-28 overflow-hidden rounded-md border border-line bg-gradient-to-br",
          accentGradient[project.accent],
        )}
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[linear-gradient(90deg,rgb(255_255_255_/_0.08)_1px,transparent_1px),linear-gradient(rgb(255_255_255_/_0.08)_1px,transparent_1px)] bg-[size:18px_18px] opacity-55" />
      </div>
      <div
        className={cn(
          "flex flex-wrap items-center gap-2",
          align === "left" ? "md:justify-start" : "md:justify-start",
        )}
      >
        <Badge tone={project.accent}>{project.status}</Badge>
        <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted">{project.date}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-normal text-foreground">{project.title}</h3>
      <p className="mt-2 text-sm uppercase tracking-[0.13em] text-neutral-300">{project.category}</p>
      <p className="mt-4 text-sm leading-6 text-neutral-300">{project.summary}</p>
      <div
        className={cn(
          "mt-5 flex flex-wrap gap-2",
          align === "left" ? "md:justify-start" : "md:justify-start",
        )}
      >
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-sm border border-line bg-neutral-950/60 px-2 py-1 text-xs text-neutral-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className={cn("mt-6 flex", align === "left" ? "md:justify-start" : "md:justify-start")}>
        <Button variant={isActive ? "primary" : "secondary"} onClick={() => onViewDetails(project)}>
          View details
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </motion.article>
  );
}
