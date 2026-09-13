/**
 * Hero/section image optimization script (one-time CLI tool).
 * Converts the oversized hero and section images flagged by the 2026-09-13
 * LCP audit to WebP, right-sizing the ones that are wildly oversized for
 * their display box. Writes new files alongside the originals in
 * public/images/legacy/ (flat, matching how every other WebP file in that
 * folder already sits).
 *
 * Usage: node scripts/optimize-hero-images.js
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const LEGACY_DIR = path.join(__dirname, '../public/images/legacy')

const JOBS = [
  { input: 'katja-rooke-77JACslA8G0-unsplash-scaled.jpg', output: 'katja-rooke-77JACslA8G0-unsplash-scaled.webp', resizeWidth: 1920 },
  { input: 'clay-elliot-1by_GbwEMwc-unsplash-2.jpg', output: 'clay-elliot-1by_GbwEMwc-unsplash-2.webp', resizeWidth: null },
  { input: 'benjamin-child-GWe0dlVD9e0-unsplash.jpg', output: 'benjamin-child-GWe0dlVD9e0-unsplash.webp', resizeWidth: null },
  { input: 'naomi-hebert-MP0bgaS_d1c-unsplash-2-scaled.jpg', output: 'naomi-hebert-MP0bgaS_d1c-unsplash-2-scaled.webp', resizeWidth: 1200 },
  // Deliberate exception: overwritten in place because it's already WebP and
  // this deploy also ships the new long-lived cache header in the same PR —
  // see the performance-lcp-remediation-plan.md Section 4 note. Any future
  // edit to this file's content must use a new filename instead.
  { input: '20240512_125224-scaled.webp', output: '20240512_125224-scaled.webp', resizeWidth: 1200 },
  { input: 'FAQ.png', output: 'FAQ.webp', resizeWidth: 160 },
  { input: 'Plan.png', output: 'Plan.webp', resizeWidth: 160 },
  { input: 'No-Contracts.png', output: 'No-Contracts.webp', resizeWidth: 160 },
  { input: 'Trained.png', output: 'Trained.webp', resizeWidth: 160 },
]

async function run() {
  const rows = []
  for (const job of JOBS) {
    const inputPath = path.join(LEGACY_DIR, job.input)
    const outputPath = path.join(LEGACY_DIR, job.output)
    if (!fs.existsSync(inputPath)) {
      console.log(`SKIP (missing): ${job.input}`)
      continue
    }
    const beforeSize = fs.statSync(inputPath).size
    let pipeline = sharp(inputPath).webp({ quality: 85, effort: 6 })
    if (job.resizeWidth) {
      pipeline = pipeline.resize(job.resizeWidth, null, { withoutEnlargement: true })
    }
    await pipeline.toFile(outputPath + '.tmp')
    fs.renameSync(outputPath + '.tmp', outputPath)
    const afterSize = fs.statSync(outputPath).size
    rows.push({ input: job.input, output: job.output, beforeSize, afterSize })
  }

  console.log('\nHero/section image optimization results:')
  console.log('-'.repeat(90))
  for (const r of rows) {
    const beforeKB = (r.beforeSize / 1024).toFixed(1)
    const afterKB = (r.afterSize / 1024).toFixed(1)
    const pct = (100 - (r.afterSize / r.beforeSize) * 100).toFixed(0)
    console.log(`${r.input.padEnd(48)} ${beforeKB.padStart(8)}KB -> ${afterKB.padStart(8)}KB  (${pct}% smaller)  => ${r.output}`)
  }
  console.log('-'.repeat(90))
}

run()
