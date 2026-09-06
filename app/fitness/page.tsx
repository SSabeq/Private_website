import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionIntro } from "@/components/shared/SectionIntro";
import { PhotoGallery } from "@/components/shared/PhotoGallery";
import { sportsMilestones } from "@/content/sports";

export const metadata: Metadata = {
  title: "Sports timeline | Dominik Jasiński",
  description: "My sports journey: running since 2016, lifting since 2019, and the half marathon and Ironman training chapter of 2025.",
};

export default function FitnessPage() {
  return (
    <PageShell>
      <section className="pb-10"><SectionIntro intro={{ eyebrow: "Beyond the workbench", title: "A different kind of building.", description: "Strength, endurance, and learning what keeps me coming back. A personal record of the training, challenges, and lessons along the way." }} /></section>
      <div className="mb-12 grid gap-4 border-y border-line py-6 sm:grid-cols-3">
        {[['2016', 'The first runs'], ['2019', 'The gym became a habit'], ['2025', 'An endurance chapter']].map(([year, label]) => <p key={year}><span className="block font-mono text-3xl">{year}</span><span className="mt-2 block text-sm text-muted">{label}</span></p>)}
      </div>
      <section aria-labelledby="sports-timeline-heading">
        <h2 id="sports-timeline-heading" className="mb-8 text-2xl font-semibold">The sports timeline</h2>
        <ol className="space-y-8">
          {[...sportsMilestones].sort((a, b) => a.date.localeCompare(b.date)).map((item) => <li key={item.id} className="grid gap-4 sm:grid-cols-[9rem_1fr]">
            <time dateTime={item.date} className="pt-5 font-mono text-sm text-muted">{item.dateLabel}</time>
            <article id={item.id} className="border-l-2 border-foreground bg-card p-5 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-widest text-muted">{item.discipline}</p>
              <h3 className="mt-3 text-xl font-semibold sm:text-2xl">{item.title}</h3>
              <p className="mt-4 max-w-3xl leading-7 text-muted">{item.description}</p>
              {item.reflection && <p className="mt-5 max-w-3xl border-t border-line pt-5 leading-7"><span className="font-semibold">What stayed with me. </span>{item.reflection}</p>}
              <PhotoGallery photos={item.photos} />
              {item.resultUrl && <a className="focus-ring mt-5 inline-flex min-h-11 items-center rounded-sm underline underline-offset-4" href={item.resultUrl} target="_blank" rel="noreferrer">Official result ↗</a>}
            </article>
          </li>)}
        </ol>
      </section>
      <section className="mt-12 border-t border-line pt-8"><h2 className="text-2xl font-semibold">The thread through it all</h2><p className="mt-4 max-w-3xl leading-8 text-muted">Training and engineering share a lot: consistency, honest feedback, and making small improvements over time. These days, strength training is the part I keep returning to.</p></section>
    </PageShell>
  );
}
