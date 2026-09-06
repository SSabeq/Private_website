import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { ProjectArchive } from "@/components/ProjectArchive";
import { projects } from "@/content/projects";

export const metadata: Metadata = { title: "Project timeline | Dominik Jasiński", description: "A chronological collection of engineering, automation, design, and business projects, with stories and lessons from each build." };

export default function ProjectsPage() {
  return <PageShell>
    <section className="pb-10"><SectionIntro intro={{ eyebrow: "The project archive", title: "One build leads to the next.", description: "A timeline of projects across code, hardware, design, and business. Explore the work by year or follow a particular thread." }} /></section>
    <ProjectArchive projects={projects} />
  </PageShell>;
}
