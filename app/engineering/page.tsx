import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ContactCta } from "@/components/shared/ContactCta";
import { ContentSection } from "@/components/shared/ContentSection";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { engineeringContent } from "@/content/engineering";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Engineering | Dominik Jasiński",
  description: "Embedded systems, measurement, CAD, Raspberry Pi, STM32, and prototyping work.",
};

export default function EngineeringPage() {
  const engineeringProjects = projects.filter((project) =>
    [
      "raspberry-pi-tank-controller",
      "stm32-adc-labview-test-system",
      "fit2u-custom-shoe-prototype",
    ].includes(project.id),
  );

  return (
    <PageShell>
      <section className="pb-10 sm:pb-12">
        <SectionIntro intro={engineeringContent.intro} />
      </section>

      {engineeringContent.sections.map((section) => (
        <ContentSection key={section.title} section={section} />
      ))}

      <section className="border-t border-line py-10 sm:py-12" aria-labelledby="engineering-projects-heading">
        <div className="mb-6 max-w-3xl">
          <h2 id="engineering-projects-heading" className="text-2xl font-semibold text-foreground">
            Featured engineering projects
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted">
            A closer look at the interfaces, measurements, and prototypes behind the work.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {engineeringProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {engineeringContent.cta ? <ContactCta {...engineeringContent.cta} /> : null}
    </PageShell>
  );
}
