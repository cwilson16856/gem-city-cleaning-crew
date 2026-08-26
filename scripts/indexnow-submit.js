// Pings the IndexNow API (fans out to Bing, Yandex, Seznam, Naver, etc.) with
// every URL in public/sitemap.xml so search engines recrawl sooner instead of
// waiting on their own schedule. Run manually after publishing/updating
// content, same as `npm run generate-sitemap` (which should run first).
//
// Usage: node scripts/indexnow-submit.js [url1 url2 ...]
// With no args, submits every <loc> in public/sitemap.xml. Extra args let you
// submit specific URLs on top of (or instead of) the sitemap — e.g. a stale
// URL you want recrawled quickly so a 404 gets deindexed faster.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const SITE_HOST = 'gemcitycleaningcrew.com'
const INDEXNOW_KEY = '7b3c3c515fc9bdf12c240af4e55ae785'
const KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`
const ENDPOINT = 'https://api.indexnow.org/indexnow'

function urlsFromSitemap() {
  const xml = fs.readFileSync(path.join(ROOT, 'public', 'sitemap.xml'), 'utf-8')
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
}

async function main() {
  const extraUrls = process.argv.slice(2)
  const urlList = extraUrls.length > 0 ? extraUrls : urlsFromSitemap()

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  })

  console.log(`Submitted ${urlList.length} URL(s) to IndexNow — status ${res.status}`)
  if (!res.ok) {
    console.error(await res.text())
    process.exit(1)
  }
}

main()
