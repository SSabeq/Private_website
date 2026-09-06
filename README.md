# Personal Portfolio Website

A personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Lucide icons. Exported as static HTML and hosted with Cloudflare Workers Static Assets.

## Routes

- `/` - homepage with overview, section cards, selected work, and contact CTA
- `/about` - biography, education, focus, values, and skills
- `/engineering` - embedded systems, CAD/prototyping, Raspberry Pi, STM32, and engineering projects
- `/ai-automation` - Excel/VBA, Python automation, AI workflows, and business process automation
- `/fitness` - training background, endurance/Ironman direction, bodybuilding, and process
- `/projects` - chronological project archive with category filters and date order
- `/projects/<id>` - individual project stories with optional photos and links

## Run Locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Run With Docker

```bash
docker compose up --build
```

The development server is exposed at `http://localhost:3000`.

## Useful Commands

```bash
npm run typecheck
npm run build
npm run preview
```

## Content

Editable site content lives in local TypeScript files:

- `content/site.ts`
- `content/about.ts`
- `content/engineering.ts`
- `content/aiAutomation.ts`
- `content/sports.ts`
- `content/projects.ts`

Shared content types live in `types/content.ts` and `types/project.ts`.

See [the content guide](docs/CONTENT-GUIDE.md) for adding stories, photos, captions, results, and contact links. See [the review and roadmap](docs/REVIEW-AND-ROADMAP.md) for suggested additions. The original `content/fitness.ts` is retained as source material; the live fitness timeline uses `content/sports.ts`.

## Cloudflare deployment

Connect the GitHub repository to Workers Builds. Use production branch `main`, build command `npm run build`, deploy command `npx wrangler deploy`, and repository root `/`. The Worker name must match `dominik-jasinski` in `wrangler.jsonc`. The build exports to `out/`; Cloudflare serves those files with trailing-slash URLs and a real 404 page. No runtime secrets or database are needed.

For manual deployment after authenticating with `npx wrangler login`, run `npm run deploy`. `npm start` or `npm run preview` serves the previously built export using the Cloudflare runtime; run `npm run build` first. Use `npm run dev` for editing with live reload.
