import { homeSections } from "@/content/site";
import { ContentCard } from "@/components/shared/ContentCard";

export function SectionCards() {
  return (
    <section className="py-12 sm:py-16" aria-labelledby="sections-heading">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.12em] text-muted">Explore</p>
        <h2 id="sections-heading" className="mt-2 text-2xl font-semibold text-foreground">
          Main sections
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {homeSections.map((section) => (
          <ContentCard key={section.href} card={section} />
        ))}
      </div>
    </section>
  );
}
