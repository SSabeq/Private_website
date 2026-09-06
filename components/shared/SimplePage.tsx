import type { SimplePageContent } from "@/types/content";
import { ContactCta } from "@/components/shared/ContactCta";
import { ContentSection } from "@/components/shared/ContentSection";
import { SectionIntro } from "@/components/shared/SectionIntro";

export function SimplePage({ content }: { content: SimplePageContent }) {
  return (
    <>
      <section className="pb-10 sm:pb-12">
        <SectionIntro intro={content.intro} />
      </section>

      {content.sections.map((section) => (
        <ContentSection key={section.title} section={section} />
      ))}

      {content.cta ? (
        <div className="pt-4">
          <ContactCta {...content.cta} />
        </div>
      ) : null}
    </>
  );
}
