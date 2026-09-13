// Local verification tool for the location-page textual-duplication finding
// (2026-09-11 SEO audit follow-up). Measures pairwise word-shingle Jaccard
// similarity across the 30 in-scope location pages, without needing another
// external audit pass. Run against a built `dist/` directory:
//
//   node scripts/measure-location-similarity.js
//
// Reuses the markdown fragments the existing postbuild prerender step
// already writes to dist/locations/<city>/<slug>/index.md (see
// scripts/prerender.js + scripts/html-to-markdown.js) -- no separate render
// pass needed. Isolates the CityServicePage-owned content window (intro,
// landmarks, zips, What's Included, How It Works, FAQ) between two stable
// markers present verbatim on every one of the 30 files -- "Professional
// Staff" (the last hero differentiator chip) and "### Areas We Serve" (the
// next shared sitewide section) -- so the comparison excludes the
// header/hero/footer chrome every page on the site shares, which isn't part
// of this finding.
//
// This is a CLI reporting tool, not shipped product code -- console output
// is the whole point here, matching the existing precedent in
// scripts/prerender.js and scripts/generate-sitemap-and-llms.js.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const DIST = path.join(ROOT, 'dist')

const CITIES_RESIDENTIAL = [
  'dayton', 'kettering', 'oakwood', 'centerville', 'miamisburg', 'springboro',
  'huber-heights', 'riverside', 'beavercreek', 'fairborn', 'yellow-springs',
  'tipp-city', 'bellbrook', 'vandalia', 'troy'
]
const CITIES_COMMERCIAL = [
  'dayton', 'kettering', 'oakwood', 'centerville', 'miamisburg', 'springboro',
  'huber-heights', 'riverside', 'xenia', 'fairborn', 'yellow-springs',
  'tipp-city', 'bellbrook', 'vandalia', 'troy'
]

const START_MARKER = 'Professional Staff'
const END_MARKER = '### Areas We Serve'

function extractWindow(markdown) {
  const startIdx = markdown.indexOf(START_MARKER)
  const endIdx = markdown.indexOf(END_MARKER)
  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
    throw new Error(`Could not find both markers -- markdown shape may have changed. start=${startIdx} end=${endIdx}`)
  }
  return markdown.slice(startIdx + START_MARKER.length, endIdx).trim()
}

function shingles(text, size = 5) {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
  const set = new Set()
  for (let i = 0; i <= words.length - size; i++) {
    set.add(words.slice(i, i + size).join(' '))
  }
  return set
}

function jaccard(a, b) {
  if (a.size === 0 && b.size === 0) return 0
  let intersection = 0
  for (const x of a) if (b.has(x)) intersection++
  const union = a.size + b.size - intersection
  return union === 0 ? 0 : intersection / union
}

function loadWindow(city, slug) {
  const mdPath = path.join(DIST, 'locations', city, slug, 'index.md')
  if (!fs.existsSync(mdPath)) {
    throw new Error(`Missing prerendered markdown: ${mdPath} -- run \`npm run build\` first.`)
  }
  const raw = fs.readFileSync(mdPath, 'utf-8')
  return extractWindow(raw)
}

function report(label, cities, slug) {
  const windows = cities.map((city) => ({ city, text: loadWindow(city, slug) }))
  const shingleSets = windows.map((w) => ({ city: w.city, set: shingles(w.text) }))

  let total = 0
  let count = 0
  let maxSim = -1
  let maxPair = null
  let exactDuplicates = []

  for (let i = 0; i < shingleSets.length; i++) {
    for (let j = i + 1; j < shingleSets.length; j++) {
      const sim = jaccard(shingleSets[i].set, shingleSets[j].set)
      total += sim
      count++
      if (sim > maxSim) {
        maxSim = sim
        maxPair = [shingleSets[i].city, shingleSets[j].city]
      }
      if (windows[i].text === windows[j].text) {
        exactDuplicates.push([windows[i].city, windows[j].city])
      }
    }
  }

  const avg = count ? total / count : 0
  console.log(`\n=== ${label} (${cities.length} pages, ${count} pairs) ===`)
  console.log(`Average pairwise similarity: ${(avg * 100).toFixed(1)}%`)
  console.log(`Highest-similarity pair: ${maxPair ? maxPair.join(' vs ') : 'n/a'} (${(maxSim * 100).toFixed(1)}%)`)
  console.log(`Exact-duplicate content windows: ${exactDuplicates.length}${exactDuplicates.length ? ' -- ' + exactDuplicates.map((p) => p.join('/')).join(', ') : ''}`)

  return { avg, maxSim, maxPair, exactDuplicates }
}

function main() {
  if (!fs.existsSync(DIST)) {
    console.error('[measure-location-similarity] dist/ not found -- run `npm run build` first.')
    process.exit(1)
  }

  const residential = report('Residential location pages', CITIES_RESIDENTIAL, 'house-cleaning-services')
  const commercial = report('Commercial location pages', CITIES_COMMERCIAL, 'commercial-cleaning-services')

  console.log('\n=== Summary ===')
  console.log(`Residential avg similarity: ${(residential.avg * 100).toFixed(1)}%`)
  console.log(`Commercial avg similarity:  ${(commercial.avg * 100).toFixed(1)}%`)
  const totalExactDupes = residential.exactDuplicates.length + commercial.exactDuplicates.length
  if (totalExactDupes > 0) {
    console.warn(`\n[WARNING] ${totalExactDupes} pair(s) of pages have byte-identical content windows.`)
    process.exitCode = 1
  } else {
    console.log('\nNo byte-identical content windows between any two pages of the same service type.')
  }
}

main()
