import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PhotoGallery } from "@/components/shared/PhotoGallery";
import { TagList } from "@/components/shared/TagList";
import { projects } from "@/content/projects";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.id })); }
export const dynamicParams = false;
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);
  return { title: project ? `${project.title} | Dominik Jasiński` : "Project not found", description: project?.summary };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);
  if (!project) notFound();
  return <PageShell className="max-w-5xl">
    <Link href="/projects/" className="focus-ring rounded-sm text-sm text-muted underline underline-offset-4">← All projects</Link>
    <header className="border-b border-line py-10">
      <p className="text-sm uppercase tracking-widest text-muted"><time dateTime={project.date}>{project.date}</time> / {project.status}</p>
      <h1 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{project.summary}</p>
      <div className="mt-6"><TagList tags={project.tags} /></div>
    </header>
    <section className="py-10"><h2 className="text-2xl font-semibold">The project</h2><p className="mt-4 max-w-3xl whitespace-pre-line leading-8 text-muted">{project.detail.overview}</p><PhotoGallery photos={project.photos} /></section>
    {project.story?.map((section) => <section key={section.title} className="border-t border-line py-8"><h2 className="text-2xl font-semibold">{section.title}</h2><p className="mt-4 max-w-3xl whitespace-pre-line leading-8 text-muted">{section.body}</p></section>)}
    <section className="border-t border-line py-8"><h2 className="text-2xl font-semibold">What came out of it</h2><ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-muted">{project.detail.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul></section>
    {!!project.links?.length && <nav aria-label="Project resources" className="flex flex-wrap gap-4 border-t border-line py-8">{project.links.map((link) => <a key={link.href} href={link.href} className="focus-ring rounded-sm underline underline-offset-4" target={link.href.startsWith("https://") ? "_blank" : undefined} rel="noreferrer">{link.label} ↗</a>)}</nav>}
    <Link href="/projects/" className="focus-ring mt-6 inline-flex min-h-11 items-center rounded-md bg-foreground px-5 text-sm font-medium text-background">Back to the timeline</Link>
  </PageShell>;
}
