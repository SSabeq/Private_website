import { HomeHero } from "@/components/home/HomeHero";
import { SectionCards } from "@/components/home/SectionCards";
import { PageShell } from "@/components/layout/PageShell";
import { ContactCta } from "@/components/shared/ContactCta";
import { ContentCard } from "@/components/shared/ContentCard";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { credibilityItems, siteConfig } from "@/content/site";
import { projects } from "@/content/projects";

export default function Home() {
  const selectedProjects = projects.filter((project) =>
    [
      "raspberry-pi-tank-controller",
      "excel-vba-automation-system",
      "stm32-adc-labview-test-system",
      "fit2u-custom-shoe-prototype",
    ].includes(project.id),
  );

  return (
    <PageShell>
      <HomeHero />
      <SectionCards />

      <section className="border-t border-line py-12 sm:py-16" aria-labelledby="selected-work-heading">
        <div className="mb-6">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-muted">Selected work</p>
          <h2 id="selected-work-heading" className="mt-2 text-2xl font-semibold text-foreground">
            Selected projects
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="border-t border-line py-12 sm:py-16" aria-labelledby="credibility-heading">
        <div className="mb-6">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-muted">Approach</p>
          <h2 id="credibility-heading" className="mt-2 text-2xl font-semibold text-foreground">
            How I work
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {credibilityItems.map((item) => (
            <ContentCard key={item.title} card={item} />
          ))}
        </div>
      </section>

      <ContactCta
        title={siteConfig.contact.title}
        description={siteConfig.contact.description}
        primary={{ label: "Explore all projects", href: "/projects" }}
        secondary={{ label: "About me", href: "/about" }}
      />
    </PageShell>
  );
}
