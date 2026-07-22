// Post-build step: snapshots /blog and every /blog/:slug to static HTML so
// non-JS-executing crawlers (AI answer engines, some SEO bots) see real content
// instead of the empty CSR shell. Scope is deliberately limited to blog routes —
// the rest of the site has the same CSR gap but is a separate follow-up.
//
// Runs as "postbuild" (see package.json), after `vite build` has produced dist/.

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

  const server = await preview({
    root: ROOT,
    preview: { port: PORT, strictPort: true },
  })
  const baseUrl = `http://localhost:${PORT}`

  const browser = await chromium.launch()
  try {
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
    await browser.close()
    await new Promise((resolve) => server.httpServer.close(resolve))
  }
}

main().catch((error) => {
  // Non-fatal by design: prerendering only helps non-JS-executing crawlers see
  // blog content early. The SPA works fine without it, so a prerender failure
  // (e.g. a missing browser binary in a fresh CI environment) must never fail
  // `npm run build` and take the whole production deploy down with it.
  console.error('[prerender] failed, continuing without prerendered blog pages:', error)
  process.exitCode = 0
})
