import type { ContentSection as ContentSectionType } from "@/types/content";
import { ContentCard } from "@/components/shared/ContentCard";

export function ContentSection({ section }: { section: ContentSectionType }) {
  return (
    <section className="border-t border-line py-10 sm:py-12">
      <div className="mb-6 max-w-3xl">
        <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
        {section.description ? <p className="mt-3 text-sm leading-6 text-muted">{section.description}</p> : null}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {section.items.map((item) => (
          <ContentCard key={`${section.title}-${item.title}`} card={item} />
        ))}
      </div>
    </section>
  );
}
