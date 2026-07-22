# Gem City Cleaning Crew

The React frontend for [gemcitycleaningcrew.com](https://gemcitycleaningcrew.com) — a Dayton, OH residential/commercial cleaning service. Fully self-contained: content (service pages, location pages, blog) lives in this repo, not a CMS.

## Features

- 🚀 **Vite + React 18** — fast dev/build
- 🎨 **Material-UI** components
- 🔍 **SEO + AI-discoverability** — JSON-LD (`BlogPosting`, `FAQPage`, `BreadcrumbList`, `LocalBusiness`), `llms.txt`, AI-crawler-aware `robots.txt`, prerendered blog HTML for non-JS crawlers
- 🛡️ **DOMPurify** for content sanitization

## Quick Start

```bash
npm install
cp .env.example .env   # fill in VITE_SITE_URL / VITE_TWITTER_HANDLE as needed
npm run dev
```

App runs at `http://localhost:3000`.

Env vars use the Vite convention (`VITE_*`, read via `import.meta.env.VITE_*`) — not Create React App's `REACT_APP_*`. Business info (phone, address, service areas, social links) is hardcoded in the relevant components, not env-driven.

## Project Structure

```
src/
├── components/          # Header, Footer, shared UI
├── content/blog/        # Self-hosted blog content
│   ├── index.js         # getAllPosts()/getPostBySlug(), post metadata array
│   └── posts/{slug}.js  # Per-post HTML body strings
├── pages/                # Route-level pages (service, location, blog, quote)
├── utils/
│   ├── seo.js            # Generic SEO/structured-data helpers (LocalBusiness, breadcrumbs, canonical URLs)
│   └── blogSchema.js      # Blog-specific JSON-LD (BlogPosting, FAQPage, HowTo)
└── styles/                # Global CSS

scripts/                  # Node CLI tooling (image generation, GHL upload, sitemap/llms.txt regen, prerender)
.claude/skills/            # gccc-blog-research / gccc-blog-post content skill pair
```

## Blog Content

Blog posts are plain data, not fetched from any CMS. Each post is an entry in `src/content/blog/index.js` (metadata: slug, title, description, dates, category, tags, keywords, coverImage, faqs, optional howToSteps) paired with an HTML body string in `src/content/blog/posts/{slug}.js`. `BlogPage.jsx`/`PostPage.jsx` read directly from `getAllPosts()`/`getPostBySlug()` — no network call, nothing async.

Use the `gccc-blog-research` → `gccc-blog-post` skill pair (`.claude/skills/`) to research and author new posts, including image generation, sitemap/llms.txt updates, and social copy.

## SEO / AI-Discoverability

- `PostPage.jsx` emits `BlogPosting`, `FAQPage`, `BreadcrumbList`, and (when applicable) `HowTo` JSON-LD.
- `public/robots.txt` explicitly allows known AI-answer-engine crawlers (GPTBot, ChatGPT-User, Google-Extended, PerplexityBot, ClaudeBot, anthropic-ai, CCBot) alongside the general wildcard rule.
- `public/llms.txt` gives AI agents a plain-language index of services, service areas, and blog posts.
- `scripts/generate-sitemap-and-llms.js` regenerates `public/sitemap.xml` and `public/llms.txt` from the blog content index — run after adding/updating a post.
- `scripts/prerender.js` runs as a `postbuild` step, snapshotting `/blog` and every `/blog/:slug` to static HTML so non-JS-executing crawlers see real content instead of an empty SPA shell.

## Scripts

```bash
npm run dev                 # start dev server
npm run build                # production build (triggers postbuild prerender)
npm run preview              # preview the production build locally
npm run lint                 # eslint
npm run optimize-images      # regenerate WebP/AVIF for blog cover images
npm run generate-sitemap     # regenerate sitemap.xml + llms.txt from blog content
```

## Deployment

Hosted on Vercel, connected to this repo's `main` branch for automatic deploys. `vercel.json` handles SPA client-side routing.

## License

Private — Gem City Cleaning Crew.
