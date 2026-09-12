// Local lab-based LCP/TBT verification tool for the 2026-09-11 SEO audit
// follow-up, "mobile LCP still Poor" finding. Uses Lighthouse's own
// programmatic API (the same lab methodology PSI itself uses for its lab
// data) against a locally running `npm run preview` server, so before/after
// impact of the Maps-lazy-load + GTM/Pixel-idle-defer fixes can be verified
// without waiting on live PSI/CrUX field data (which wouldn't exist yet for
// an unreleased change).
//
// Usage (two terminals):
//   Terminal 1: npm run build && npm run postbuild && npm run preview
//   Terminal 2: node scripts/measure-lcp-lab.js
//
// This is a CLI reporting tool, not shipped product code -- console output
// is the whole point here, matching the existing precedent in
// scripts/measure-location-similarity.js.

import lighthouse from 'lighthouse'
import * as chromeLauncher from 'chrome-launcher'

const BASE_URL = 'http://localhost:4173'
const URLS = [
  { path: '/', label: 'Homepage (audit\'s own worst-offender baseline)' },
  { path: '/residential', label: 'Residential (tested service page)' },
  { path: '/locations/dayton/house-cleaning-services', label: 'Dayton location page (tested location page)' }
]

async function auditUrl(url, chromePort) {
  const result = await lighthouse(url, {
    port: chromePort,
    output: 'json',
    logLevel: 'silent',
    onlyCategories: ['performance'],
    formFactor: 'mobile',
    screenEmulation: {
      mobile: true,
      width: 360,
      height: 640,
      deviceScaleFactor: 2,
      disabled: false
    },
    throttlingMethod: 'simulate'
  })

  const { audits, categories } = result.lhr
  return {
    lcp: audits['largest-contentful-paint'].numericValue,
    tbt: audits['total-blocking-time'].numericValue,
    score: Math.round((categories.performance.score ?? 0) * 100)
  }
}

async function main() {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] })

  console.log('Lab-based Lighthouse comparison (mobile, simulated throttling)')
  console.log('Target:', BASE_URL)
  console.log('')
  console.log('URL'.padEnd(60), 'LCP (ms)'.padEnd(12), 'TBT (ms)'.padEnd(12), 'Score')
  console.log('-'.repeat(96))

  try {
    for (const { path, label } of URLS) {
      const url = `${BASE_URL}${path}`
      try {
        const { lcp, tbt, score } = await auditUrl(url, chrome.port)
        console.log(
          `${path} (${label})`.padEnd(60),
          Math.round(lcp).toString().padEnd(12),
          Math.round(tbt).toString().padEnd(12),
          score
        )
      } catch (err) {
        console.error(`[measure-lcp-lab] failed on ${url}:`, err.message)
      }
    }
  } finally {
    await chrome.kill()
  }
}

main()
