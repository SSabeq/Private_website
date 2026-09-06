import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ContactCta } from "@/components/shared/ContactCta";
import { ContentSection } from "@/components/shared/ContentSection";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { aiAutomationContent } from "@/content/aiAutomation";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "AI & Automation | Dominik Jasiński",
  description: "Excel/VBA, Python automation, AI workflows, reporting, and business process automation.",
};

export default function AiAutomationPage() {
  const automationProjects = projects.filter((project) =>
    ["excel-vba-automation-system", "raspberry-pi-tank-controller", "wadi-rum-camp-website-marketing"].includes(
      project.id,
    ),
  );

  return (
    <PageShell>
      <section className="pb-10 sm:pb-12">
        <SectionIntro intro={aiAutomationContent.intro} />
      </section>

      {aiAutomationContent.sections.map((section) => (
        <ContentSection key={section.title} section={section} />
      ))}

      <section className="border-t border-line py-10 sm:py-12" aria-labelledby="automation-projects-heading">
        <div className="mb-6 max-w-3xl">
          <h2 id="automation-projects-heading" className="text-2xl font-semibold text-foreground">
            Automation-related projects
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            Practical examples of automation, interfaces, process thinking, and business workflows.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {automationProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {aiAutomationContent.cta ? <ContactCta {...aiAutomationContent.cta} /> : null}
    </PageShell>
  );
}
