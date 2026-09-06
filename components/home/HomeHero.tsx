import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site";

export function HomeHero() {
  return (
    <section className="grid gap-8 border-b border-line pb-12 sm:pb-16 lg:grid-cols-[1fr_22rem] lg:items-end">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.12em] text-muted">Engineering / Automation / Sport</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          {siteConfig.title}
        </h1>
        <p className="mt-6 text-base leading-7 text-muted sm:text-lg">{siteConfig.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="focus-ring inline-flex h-10 items-center gap-2 rounded-md bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-foreground/85"
          >
            Explore the project timeline
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/fitness"
            className="focus-ring inline-flex h-10 items-center rounded-md border border-line px-4 text-sm font-medium text-foreground transition-colors hover:border-strong-line hover:bg-muted-bg"
          >
            The sports journey
          </Link>
        </div>
      </div>

      <aside className="rounded-lg border border-line bg-card p-5">
        <p className="text-sm font-semibold text-foreground">Current focus</p>
        <div className="mt-4 grid gap-3 text-sm text-muted">
          <p>Embedded interfaces and measurement systems</p>
          <p>Automation for repetitive business workflows</p>
          <p>CAD/prototyping and disciplined performance training</p>
        </div>
      </aside>
    </section>
  );
}
