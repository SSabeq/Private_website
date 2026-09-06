# Updating the portfolio

## Projects

Edit `content/projects.ts`. Each entry creates a card in the project timeline and a page at `/projects/<id>/`. Keep the ID stable so existing links keep working. Use `YYYY`, `YYYY-MM`, or `YYYY-MM-DD` for dates; do not invent a month or day you do not know.

The original project years and claims were carried forward from the existing website. Verify them as you expand each story. `detail.nextSteps` is an editorial checklist and is not displayed on the new case-study page.

Add longer descriptions with the optional `story` field:

```ts
story: [
  { title: "The problem", body: "What needed to change, and who it was for." },
  { title: "My role and approach", body: "What I built, important decisions, and tradeoffs." },
  { title: "What I learned", body: "What worked, what failed, and what I would change." },
],
links: [{ label: "Live website", href: "https://your-real-site.com" }],
```

For the current archive, category text containing Embedded/CAD appears under Engineering, Automation/Python under Automation, and Web/Operations under Business & design. All entries always appear under All projects. Update these groups in `components/ProjectArchive.tsx` if you introduce new disciplines.

## Photos, screenshots, and renders

1. Put a real image in `public/photos/` using a descriptive filename.
2. Export a sensibly sized WebP or JPEG (around 1600 px wide is normally enough). Remove unwanted location metadata before publishing.
3. Add `photos` to the relevant project or sports entry. Width and height should match the actual image dimensions:

```ts
photos: [{
  src: "/photos/tank-controller.webp",
  alt: "Tank controller touchscreen showing live sensor readings",
  caption: "The prototype during a bench test.",
  width: 1600,
  height: 1067,
}],
```

The site hides empty galleries. It does not invent images or show empty image boxes. Local images need no external image service; the static export serves your pre-optimized files directly.

## Sports timeline

Edit `content/sports.ts`. Entries sort chronologically. Add a unique ID, sortable date, human-readable `dateLabel`, title, discipline, and description. Optional fields: `reflection`, `photos` (same format as above), and `resultUrl` for the official race results.

The first four entries come from your original fitness text: running in 2016, lifting from December 2019, the April 2025 half-marathon chapter, and August 2025 Ironman preparation. No exact finish times or race names have been assumed.

## Profile and contact

Edit `content/about.ts` for your biography and education. Edit `content/site.ts` for the homepage and footer contact links. Email, LinkedIn, and CV are hidden until you supply real destinations. To add a CV, put the actual PDF in `public/` and link to it.

## Publish an update

Run `npm run typecheck` and `npm run build`, then commit and push to `main`. Once Cloudflare Git integration is connected, it builds and publishes the change automatically. Do not edit the generated `out/` directory.
