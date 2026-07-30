// Post-build step: snapshots every real route in the app to static HTML so
// non-JS-executing crawlers (Googlebot's initial pass, AI answer engines, some
// SEO bots) see real content instead of the empty CSR shell. Originally scoped
// to /blog only; extended to every route in ALL_PRERENDER_ROUTES (see
// scripts/routes.js) plus a real dist/404.html, once GSC showed 0 of 60
// sitemap URLs were indexed — Google was seeing an empty <div id="root">
// everywhere, not just on the blog.
//
// Runs as "postbuild" (see package.json), after `vite build` has produced dist/.
//
// IMPORTANT: every snapshot is held in memory and written to disk only after
// the preview server + browser are closed (see main()). Vite's preview server
// serves an SPA fallback (index.html) for any path it doesn't recognize as a
// real file — if we overwrote dist/index.html (the '/' route) mid-loop, later
// snapshots in the same run could start receiving that already-rendered,
// route-specific page back as their fallback instead of the real app shell.
// Writing everything at the end sidesteps that entirely.
//
// Best-effort only: Vercel's build image is not an officially-supported Playwright
// OS (it's missing shared libs like libnspr4.so that plain `playwright install`
// doesn't provide, and `--with-deps` needs apt, which isn't available there either).
// So this must (a) never leave the process hanging on a partially-started server/
// browser, and (b) always exit 0 on failure — a missing prerender is a lost SEO
// nice-to-have, not something that should ever block a deploy.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { preview } from 'vite'
import { chromium } from 'playwright'
import { getAllPosts } from '../src/content/blog/index.js'
import { ALL_PRERENDER_ROUTES } from './routes.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const PORT = 4173

// Maps a route path to where its prerendered index.html should live under dist/.
// '/' -> dist/index.html, '/blog' -> dist/blog/index.html,
// '/locations/kettering/house-cleaning-services' -> dist/locations/kettering/house-cleaning-services/index.html
function outFileFor(distDir, routePath) {
  const trimmed = routePath.replace(/^\/+|\/+$/g, '')
  return trimmed === ''
    ? path.join(distDir, 'index.html')
    : path.join(distDir, ...trimmed.split('/'), 'index.html')
}

async function snapshot(page, browserUrl) {
  await page.goto(browserUrl, { waitUntil: 'networkidle' })
  await page.waitForSelector('main.main-content', { state: 'attached' })
  // react-helmet-async commits <title>/<meta>/JSON-LD in a useEffect after mount —
  // give it a beat past networkidle before capturing.
  await page.waitForTimeout(300)
  return page.content()
}

async function main() {
  const distDir = path.join(ROOT, 'dist')
  if (!fs.existsSync(distDir)) {
    console.error('[prerender] dist/ not found — run `vite build` first.')
    process.exit(1)
  }

  const posts = getAllPosts()
  const routePaths = [
    ...ALL_PRERENDER_ROUTES.map((r) => r.path),
    ...posts.map((post) => `/blog/${post.slug}`),
  ]

  // Collected in memory; only written to dist/ after the preview server and
  // browser are both closed (see the big comment up top for why).
  const pending = []
  // A path that deliberately matches no <Route>, so the app's own `*` route
  // (NotFound) renders — captured as the site-wide 404 fallback Vercel serves
  // for any unmatched path (with a real 404 status, not a soft-404 200).
  const NOT_FOUND_PROBE_PATH = '/__prerender-404-probe__'

  let server
  let browser
  try {
    server = await preview({
      root: ROOT,
      preview: { port: PORT, strictPort: true },
    })
    const baseUrl = `http://localhost:${PORT}`

    browser = await chromium.launch()
    const page = await browser.newPage()

    for (const routePath of routePaths) {
      try {
        const html = await snapshot(page, `${baseUrl}${routePath}`)
        pending.push({ outFile: outFileFor(distDir, routePath), html, routePath })
      } catch (error) {
        console.error(`[prerender] failed on ${routePath}, skipping:`, error.message)
      }
    }

    try {
      const notFoundHtml = await snapshot(page, `${baseUrl}${NOT_FOUND_PROBE_PATH}`)
      pending.push({ outFile: path.join(distDir, '404.html'), html: notFoundHtml, routePath: '(404)' })
    } catch (error) {
      console.error('[prerender] failed to capture 404 page:', error.message)
    }

    console.log(`Snapshotted ${pending.length} of ${routePaths.length + 1} route(s), writing to dist/...`)
  } finally {
    // Both may be undefined if failure happened before they were assigned —
    // guard each close independently so cleanup never itself throws, and so
    // the process is always free to exit (no dangling server keeping it alive).
    if (browser) await browser.close().catch(() => {})
    if (server) await new Promise((resolve) => server.httpServer.close(resolve))
  }

  for (const { outFile, html } of pending) {
    fs.mkdirSync(path.dirname(outFile), { recursive: true })
    fs.writeFileSync(outFile, html)
  }

  console.log(`Prerendered ${pending.length} route(s) (${routePaths.length} app routes + 404).`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('[prerender] failed, continuing without prerendered pages:', error)
    process.exit(0)
  })
