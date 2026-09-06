"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { skillGroups } from "@/content/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

export function SkillsMap({ projects }: { projects: Project[] }) {
  const firstSkill = skillGroups[0]?.skills[0]?.name ?? "";
  const [activeSkill, setActiveSkill] = useState(firstSkill);

  const selectedSkill = useMemo(
    () => skillGroups.flatMap((group) => group.skills).find((skill) => skill.name === activeSkill),
    [activeSkill],
  );

  const relatedProjects = useMemo(() => {
    if (!selectedSkill) {
      return [];
    }

    return projects.filter((project) => selectedSkill.relatedProjectIds.includes(project.id));
  }, [projects, selectedSkill]);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="skills-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-300">Skills map</p>
          <h2 id="skills-heading" className="mt-3 text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
            Capabilities grouped by build context.
          </h2>
          <p className="mt-4 text-sm leading-6 text-neutral-300 sm:text-base">
            Select a skill to see which local project entries already connect to it.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.name} className="rounded-md border border-line bg-panel/75 p-5">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-neutral-100" />
                    <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-neutral-200">
                      {group.name}
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => {
                      const isActive = skill.name === activeSkill;
                      return (
                        <button
                          key={skill.name}
                          type="button"
                          onMouseEnter={() => setActiveSkill(skill.name)}
                          onFocus={() => setActiveSkill(skill.name)}
                          onClick={() => setActiveSkill(skill.name)}
                          className={cn(
                            "focus-ring rounded-sm border px-2.5 py-1.5 text-xs transition-colors",
                            isActive
                              ? "border-white bg-white text-black"
                              : "border-line bg-black/45 text-neutral-300 hover:border-neutral-500",
                          )}
                        >
                          {skill.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <aside className="rounded-md border border-line bg-panel-strong/80 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">Related projects</h3>
              {activeSkill ? <Badge>{activeSkill}</Badge> : null}
            </div>

            <div className="mt-5 space-y-4">
              {relatedProjects.length > 0 ? (
                relatedProjects.map((project) => (
                  <a
                    key={project.id}
                    href="#timeline"
                    className="focus-ring block rounded-md border border-line bg-background/45 p-4 transition-colors hover:border-white/70"
                  >
                    <p className="text-sm font-semibold text-foreground">{project.title}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.13em] text-muted">{project.category}</p>
                  </a>
                ))
              ) : (
                <p className="text-sm leading-6 text-neutral-300">
                  Select a skill to reveal connected projects as the case studies become more complete.
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
