// Post-build step: snapshots /blog and every /blog/:slug to static HTML so
// non-JS-executing crawlers (AI answer engines, some SEO bots) see real content
// instead of the empty CSR shell. Scope is deliberately limited to blog routes —
// the rest of the site has the same CSR gap but is a separate follow-up.
//
// Runs as "postbuild" (see package.json), after `vite build` has produced dist/.
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

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const PORT = 4173

async function snapshot(page, browserUrl, outFile) {
  await page.goto(browserUrl, { waitUntil: 'networkidle' })
  await page.waitForSelector('main.main-content', { state: 'attached' })
  // react-helmet-async commits <title>/<meta>/JSON-LD in a useEffect after mount —
  // give it a beat past networkidle before capturing.
  await page.waitForTimeout(300)

  const html = await page.content()
  fs.mkdirSync(path.dirname(outFile), { recursive: true })
  fs.writeFileSync(outFile, html)
  console.log(`Prerendered ${outFile}`)
}

async function main() {
  const distDir = path.join(ROOT, 'dist')
  if (!fs.existsSync(distDir)) {
    console.error('[prerender] dist/ not found — run `vite build` first.')
    process.exit(1)
  }

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

    await snapshot(page, `${baseUrl}/blog`, path.join(distDir, 'blog', 'index.html'))

    const posts = getAllPosts()
    for (const post of posts) {
      await snapshot(
        page,
        `${baseUrl}/blog/${post.slug}`,
        path.join(distDir, 'blog', post.slug, 'index.html')
      )
    }

    console.log(`Prerendered /blog + ${posts.length} post(s).`)
  } finally {
    // Both may be undefined if failure happened before they were assigned —
    // guard each close independently so cleanup never itself throws, and so
    // the process is always free to exit (no dangling server keeping it alive).
    if (browser) await browser.close().catch(() => {})
    if (server) await new Promise((resolve) => server.httpServer.close(resolve))
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('[prerender] failed, continuing without prerendered blog pages:', error)
    process.exit(0)
  })
