import Link from "next/link";
import type { ContentCard as ContentCardType } from "@/types/content";
import { TagList } from "@/components/shared/TagList";

export function ContentCard({ card }: { card: ContentCardType }) {
  const Icon = card.icon;
  const content = (
    <article className="h-full rounded-lg border border-line bg-card p-5 transition-colors hover:border-strong-line">
      <div className="flex items-start justify-between gap-4">
        <div>
          {card.meta ? <p className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-muted">{card.meta}</p> : null}
          <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
        </div>
        {Icon ? <Icon className="h-5 w-5 shrink-0 text-muted" /> : null}
      </div>
      <p className="mt-3 text-sm leading-6 text-muted">{card.description}</p>
      {card.tags?.length ? (
        <div className="mt-4">
          <TagList tags={card.tags} />
        </div>
      ) : null}
    </article>
  );

  if (card.href) {
    return (
      <Link href={card.href} className="focus-ring block rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}
