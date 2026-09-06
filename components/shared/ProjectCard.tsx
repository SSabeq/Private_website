import type { Project } from "@/types/project";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TagList } from "@/components/shared/TagList";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-line bg-card p-5">
      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.12em] text-muted">
        <span>{project.date}</span>
        <span aria-hidden="true">/</span>
        <span>{project.status}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-foreground">{project.title}</h3>
      <p className="mt-2 text-sm font-medium text-foreground/80">{project.category}</p>
      <p className="mt-3 text-sm leading-6 text-muted">{project.summary}</p>
      <div className="mt-4">
        <TagList tags={project.tags} />
      </div>
      <Link href={`/projects/${project.id}/`} className="focus-ring mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold underline decoration-line underline-offset-4 hover:decoration-foreground">
        Read project story <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        <span className="sr-only">: {project.title}</span>
      </Link>
    </article>
  );
}
