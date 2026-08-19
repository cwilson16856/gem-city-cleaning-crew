// Post-build step: snapshots every real route in the app to static HTML so
// non-JS-executing crawlers (Googlebot's initial pass, AI answer engines, some
// SEO bots) see real content instead of the empty CSR shell. Covers every
// route in ALL_PRERENDER_ROUTES (see scripts/routes.js) plus every blog post
// plus a real dist/404.html.
//
// Runs as part of "postbuild" (see package.json), after two builds have
// already produced their output:
//   1. `vite build`                                          -> dist/
//   2. `vite build --ssr src/entry-server.jsx --outDir dist-ssr` -> dist-ssr/
//
// HISTORY — why this is a Node `react-dom/server` render, not a headless
// browser: the original version of this script (through commit 313834b)
// used Playwright + a real Chromium browser hitting a `vite preview` server,
// snapshotting each route's rendered `page.content()`. That was reverted
// (commit 9911fcd) because Playwright's bundled Chromium cannot launch in
// Vercel's build image — it's missing shared libs (e.g. libnspr4.so) that
// plain `playwright install` doesn't provide, and `--with-deps` needs `apt`,
// which isn't available there either. Since this script always exits 0 on
// failure (see main(), bottom of file) so a broken prerender never blocks a
// deploy, that Chromium failure was silent: every real Vercel build since
// has written zero prerendered files, and the SPA-fallback rewrite that was
// restored alongside the revert served the empty CSR shell for every route.
// Non-JS crawlers have been seeing an empty <div id="root"> for every page
// except possibly "/" as a result.
//
// This version replaces the browser entirely with `src/entry-server.jsx`'s
// `render(url)` — a plain `renderToStaticMarkup()` call, no browser, no
// Chromium, nothing that can hit Vercel's build-image gap. See
// entry-server.jsx's own header comment for the SSR-specific details (why
// route components must be eager-imported there, the dompurify/Node
// incompatibility and its fix, etc).

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getAllPosts } from '../src/content/blog/index.js'
import { ALL_PRERENDER_ROUTES } from './routes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

// Maps a route path to where its prerendered index.html should live under dist/.
// '/' -> dist/index.html, '/blog' -> dist/blog/index.html,
// '/locations/kettering/house-cleaning-services' -> dist/locations/kettering/house-cleaning-services/index.html
function outFileFor(distDir, routePath) {
  const trimmed = routePath.replace(/^\/+|\/+$/g, '')
  return trimmed === ''
    ? path.join(distDir, 'index.html')
    : path.join(distDir, ...trimmed.split('/'), 'index.html')
}

// Splices one route's SSR output into a copy of the real, Vite-built
// dist/index.html template — keeps the actual built <head> boilerplate
// (favicon links, font preloads, the hashed client script/style tags) rather
// than hand-reconstructing an <html> document here, and keeps the client
// bundle's own <script type="module"> tag intact so the page still fully
// remounts client-side on load (main.jsx uses createRoot, not hydrateRoot —
// this prerendered HTML is a crawler-only snapshot, not something the client
// hydrates into).
function buildDocument(template, appHtml, helmet) {
  const headTags = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ].join('')

  return template
    // index.html's own source has a static fallback <title> (for the raw,
    // un-prerendered dev/CSR case) — every prerendered page must replace it,
    // not add to it, or the built document ends up with two <title> tags.
    .replace(/<title>.*?<\/title>/s, '')
    .replace('</head>', `${headTags}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
}

async function main() {
  const distDir = path.join(ROOT, 'dist')
  const ssrEntryPath = path.join(ROOT, 'dist-ssr', 'entry-server.js')

  if (!fs.existsSync(distDir)) {
    console.error('[prerender] dist/ not found — run `vite build` first.')
    process.exit(1)
  }
  if (!fs.existsSync(ssrEntryPath)) {
    console.error('[prerender] dist-ssr/entry-server.js not found — run `vite build --ssr src/entry-server.jsx --outDir dist-ssr` first.')
    process.exit(1)
  }

  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')
  const { render } = await import(pathToFileUrl(ssrEntryPath))

  const posts = getAllPosts()
  const routePaths = [
    ...ALL_PRERENDER_ROUTES.map((r) => r.path),
    ...posts.map((post) => `/blog/${post.slug}`),
  ]
  // A path that deliberately matches no <Route>, so the app's own `*` route
  // (NotFound) renders — captured as the site-wide 404 fallback Vercel
  // serves for any unmatched path (with a real 404 status, not a soft-404 200).
  const NOT_FOUND_PROBE_PATH = '/__prerender-404-probe__'

  let succeeded = 0
  let failed = 0

  for (const routePath of routePaths) {
    try {
      const { appHtml, helmet } = render(routePath)
      const outFile = outFileFor(distDir, routePath)
      fs.mkdirSync(path.dirname(outFile), { recursive: true })
      fs.writeFileSync(outFile, buildDocument(template, appHtml, helmet))
      succeeded++
    } catch (error) {
      failed++
      console.error(`[prerender] failed on ${routePath}, skipping:`, error.message)
    }
  }

  try {
    const { appHtml, helmet } = render(NOT_FOUND_PROBE_PATH)
    fs.writeFileSync(path.join(distDir, '404.html'), buildDocument(template, appHtml, helmet))
    succeeded++
  } catch (error) {
    failed++
    console.error('[prerender] failed to capture 404 page:', error.message)
  }

  console.log(`Prerendered ${succeeded} of ${routePaths.length + 1} route(s) (${failed} failed).`)
}

// Node's dynamic import() needs a file:// URL on some platforms (notably
// Windows, but harmless everywhere) when given an absolute filesystem path.
function pathToFileUrl(absolutePath) {
  return `file://${absolutePath}`
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    // Best-effort only, same contract as before: a missing prerender is a
    // lost SEO nice-to-have, never something that should block a deploy.
    // Much less likely to actually trigger now — this no longer depends on
    // Chromium/apt/shared-libs, just Node itself — but the safety net costs
    // nothing to keep, and silently regressing to the old Chromium failure
    // mode is exactly what this rewrite exists to prevent.
    console.error('[prerender] failed, continuing without prerendered pages:', error)
    process.exit(0)
  })
