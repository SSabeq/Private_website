"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/types/project";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!project) {
      return;
    }

    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, project]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="max-h-[88svh] w-full max-w-3xl overflow-y-auto rounded-md border border-line bg-panel-strong shadow-[var(--shadow-panel)]"
            initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="flex items-start justify-between gap-5 border-b border-line p-5 sm:p-6">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone={project.accent}>{project.status}</Badge>
                  <span className="text-xs uppercase tracking-[0.16em] text-muted">{project.date}</span>
                </div>
                <h2 id="project-dialog-title" className="mt-4 text-2xl font-semibold tracking-normal text-foreground">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-neutral-300">
                  {project.category}
                </p>
              </div>
              <Button
                ref={closeButtonRef}
                variant="ghost"
                size="sm"
                onClick={onClose}
                aria-label="Close project details"
                className="h-9 w-9 px-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid gap-6 p-5 sm:p-6">
              <div className="rounded-md border border-line bg-background/45 p-4">
                <p className="text-sm leading-6 text-neutral-300">{project.detail.overview}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">Technology</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-line bg-neutral-950/70 px-2 py-1 text-xs text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">Outcomes</h3>
                  <ul className="mt-3 space-y-3">
                    {project.detail.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-3 text-sm leading-6 text-neutral-300">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-neutral-100" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">Next case-study inputs</h3>
                  <ul className="mt-3 space-y-3">
                    {project.detail.nextSteps.map((step) => (
                      <li key={step} className="flex gap-3 text-sm leading-6 text-neutral-300">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-neutral-100" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
