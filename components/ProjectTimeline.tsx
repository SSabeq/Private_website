"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { useReducedMotion } from "motion/react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

export function ProjectTimeline({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id ?? "");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  const activeIndex = useMemo(
    () => projects.findIndex((project) => project.id === activeProjectId),
    [activeProjectId, projects],
  );

  const updateHorizontalState = useCallback(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const maxScroll = track.scrollWidth - track.clientWidth;
    setScrollProgress(maxScroll > 0 ? track.scrollLeft / maxScroll : 1);

    const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-project-id]"));
    const closestCard = cards.reduce<HTMLElement | null>((closest, card) => {
      if (!closest) {
        return card;
      }

      const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
      const closestCenter = closest.getBoundingClientRect().left + closest.offsetWidth / 2;
      return Math.abs(cardCenter - trackCenter) < Math.abs(closestCenter - trackCenter) ? card : closest;
    }, null);

    if (closestCard?.dataset.projectId) {
      setActiveProjectId(closestCard.dataset.projectId);
    }
  }, []);

  const scrollToProject = useCallback((project: Project) => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>(`[data-project-id="${project.id}"]`);

    setActiveProjectId(project.id);
    card?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest", inline: "center" });
  }, [reduceMotion]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    updateHorizontalState();

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return;
      }

      event.preventDefault();
      track.scrollLeft += event.deltaY;
    };

    track.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", updateHorizontalState);

    return () => {
      track.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", updateHorizontalState);
    };
  }, [updateHorizontalState]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!trackRef.current) {
      return;
    }

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      trackRef.current.scrollBy({ left: 420, behavior: reduceMotion ? "auto" : "smooth" });
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      trackRef.current.scrollBy({ left: -420, behavior: reduceMotion ? "auto" : "smooth" });
    }
  };

  return (
    <section id="timeline" className="relative px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="timeline-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300">
            Project timeline
          </p>
          <h2 id="timeline-heading" className="mt-3 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
            Work shown as a horizontal technical build log.
          </h2>
          <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base">
            Hover over the timeline and scroll to move sideways. Use the node buttons or arrow keys for direct navigation.
          </p>
        </div>

        <div className="rounded-md border border-line bg-panel/70 p-4 shadow-[var(--shadow-panel)] md:p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.14em] text-muted">
            <span>Horizontal rail</span>
            <span>Wheel over timeline: scrolls left / right</span>
          </div>

          <div
            ref={trackRef}
            tabIndex={0}
            role="region"
            aria-label="Scrollable horizontal project timeline"
            onScroll={updateHorizontalState}
            onKeyDown={handleKeyDown}
            className="horizontal-timeline-scroll focus-ring -mx-4 overflow-x-auto overflow-y-hidden px-4 pb-5 pt-2 md:-mx-6 md:px-6"
          >
            <div className="relative w-max min-w-full">
              <div className="absolute left-0 right-0 top-[1.15rem] h-px bg-line" aria-hidden="true" />
              <div
                className="absolute left-0 top-[1.15rem] h-px bg-white transition-[width]"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
                aria-hidden="true"
              />

              <div className="relative z-10 flex gap-5">
                {projects.map((project) => {
                  const isActive = project.id === activeProjectId;

                  return (
                    <div key={project.id} className="w-[82vw] shrink-0 sm:w-[28rem]" data-project-id={project.id}>
                      <div className="mb-5 flex justify-center">
                        <button
                          type="button"
                          onClick={() => {
                            scrollToProject(project);
                            setSelectedProject(project);
                          }}
                          aria-label={`Open details for ${project.title}`}
                          aria-current={isActive ? "step" : undefined}
                          className={cn(
                            "focus-ring h-5 w-5 rounded-full border transition-colors",
                            isActive
                              ? "border-white bg-white shadow-[0_0_24px_rgb(255_255_255_/_0.38)]"
                              : "border-neutral-600 bg-black hover:border-white",
                          )}
                        />
                      </div>

                      <ProjectCard
                        project={project}
                        isActive={isActive}
                        align="right"
                        onActive={setActiveProjectId}
                        onViewDetails={setSelectedProject}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-md border border-line bg-black/45 p-4 text-xs uppercase tracking-[0.14em] text-muted">
            <span>
              Active node {activeIndex + 1 > 0 ? activeIndex + 1 : 1} / {projects.length}
            </span>
            <span>{Math.round(scrollProgress * 100)}% across rail</span>
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
