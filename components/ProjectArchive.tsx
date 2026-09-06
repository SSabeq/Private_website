"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/shared/ProjectCard";
import type { Project } from "@/types/project";

export function ProjectArchive({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState("All projects");
  const [oldestFirst, setOldestFirst] = useState(false);
  const categories = ["All projects", "Engineering", "Automation", "Business & design"];
  const filtered = projects.filter((project) => {
    if (category === "Engineering") return /Embedded|CAD/.test(project.category);
    if (category === "Automation") return /Automation|Python/.test(project.category);
    if (category === "Business & design") return /Web|Operations/.test(project.category);
    return true;
  }).sort((a, b) => oldestFirst ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date));
  const years = [...new Set(filtered.map((project) => project.date.slice(0, 4)))];

  return <section aria-label="Project timeline" className="border-t border-line pt-8">
    <div className="flex flex-wrap items-center justify-between gap-5">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {categories.map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`focus-ring min-h-11 rounded-full border px-4 text-sm transition-colors ${category === item ? "border-foreground bg-foreground text-background" : "border-line hover:border-foreground"}`}>{item}</button>)}
      </div>
      <label className="flex items-center gap-2 text-sm text-muted">Order
        <select className="focus-ring min-h-11 rounded-md border border-line bg-background px-3 text-foreground" value={oldestFirst ? "oldest" : "newest"} onChange={(event) => setOldestFirst(event.target.value === "oldest")}>
          <option value="newest">Newest first</option><option value="oldest">Oldest first</option>
        </select>
      </label>
    </div>
    <p aria-live="polite" className="my-6 text-sm text-muted">{filtered.length} projects · {years.length} years</p>
    <div className="space-y-10">
      {years.map((year) => <section key={year} aria-labelledby={`year-${year}`} className="grid gap-4 sm:grid-cols-[6rem_1fr]">
        <h2 id={`year-${year}`} className="pt-4 font-mono text-2xl tracking-tight">{year}</h2>
        <ol className="relative space-y-5 border-l border-strong-line pl-5 sm:pl-8">
          {filtered.filter((project) => project.date.startsWith(year)).map((project) => <li key={project.id} className="relative before:absolute before:-left-[1.6rem] before:top-7 before:h-3 before:w-3 before:rounded-full before:border-2 before:border-background before:bg-foreground sm:before:-left-[2.4rem]"><ProjectCard project={project} /></li>)}
        </ol>
      </section>)}
    </div>
  </section>;
}
