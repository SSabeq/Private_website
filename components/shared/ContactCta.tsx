import Link from "next/link";
import type { LinkAction } from "@/types/content";

export function ContactCta({
  title,
  description,
  primary,
  secondary,
}: {
  title: string;
  description: string;
  primary?: LinkAction;
  secondary?: LinkAction;
}) {
  return (
    <section className="rounded-lg border border-line bg-card p-6 sm:p-8">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {primary ? (
            <Link
              href={primary.href}
              className="focus-ring inline-flex h-10 items-center rounded-md bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
            >
              {primary.label}
            </Link>
          ) : null}
          {secondary ? (
            <Link
              href={secondary.href}
              className="focus-ring inline-flex h-10 items-center rounded-md border border-line px-4 text-sm font-medium text-foreground transition-colors hover:border-strong-line hover:bg-muted-bg"
            >
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
