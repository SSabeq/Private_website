import type { PageIntro } from "@/types/content";

export function SectionIntro({ intro }: { intro: PageIntro }) {
  return (
    <div className="max-w-3xl">
      {intro.eyebrow ? <p className="text-sm font-medium uppercase tracking-[0.12em] text-muted">{intro.eyebrow}</p> : null}
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{intro.title}</h1>
      <p className="mt-5 text-base leading-7 text-muted sm:text-lg">{intro.description}</p>
    </div>
  );
}
