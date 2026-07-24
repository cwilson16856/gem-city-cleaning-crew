/**
 * Composite title text onto a blog OG banner (FLUX or photo base).
 * Uses sharp + SVG overlay — same idea as HTML canvas export, CLI-friendly.
 * Overlay colors align with GCCC's brand: near-black base, pink accent
 * (not GCCT's navy/cyan software-UI palette).
 *
 * Usage:
 *   node scripts/overlay-blog-banner-title.js --input path/in.png --output path/out.png \
 *     --lines "Line 1|Line 2|Line 3" --kicker "Gem City Cleaning Crew — Category"
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function parseArgs() {
  const args = process.argv.slice(2)
  const out = { input: null, output: null, lines: null, kicker: null }
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--input') out.input = args[++i]
    if (args[i] === '--output') out.output = args[++i]
    if (args[i] === '--lines') out.lines = args[++i]
    if (args[i] === '--kicker') out.kicker = args[++i]
  }
  return out
}

async function main() {
  const cli = parseArgs()
  if (!cli.input || !cli.output) {
    console.error('[overlay] --input and --output are required.')
    console.error('Usage: node scripts/overlay-blog-banner-title.js --input <path> --output <path> --lines "Line 1|Line 2" --kicker "Gem City Cleaning Crew — Category"')
    process.exit(1)
  }

  const inputPath = path.resolve(__dirname, '..', cli.input)
  const outputPath = path.resolve(__dirname, '..', cli.output)

  const meta = await sharp(inputPath).metadata()
  const w = meta.width
  const h = meta.height

  const lines = cli.lines
    ? cli.lines.split('|').map((s) => s.trim()).filter(Boolean)
    : ['Untitled', 'Blog Post']

  const kicker = cli.kicker || 'Gem City Cleaning Crew'

  // Font must be an explicitly-named, actually-installed system font — NOT
  // a generic keyword chain (`system-ui`/`-apple-system` only resolves to
  // San Francisco on macOS; a headless Linux box has none of those and
  // silently falls back to a generic sans, which is why a VPS-generated
  // cover looked different from one made locally — root-caused on GCCT's
  // pipeline 2026-07-23 and ported here). Also NOT a base64 @font-face embed
  // (empirically confirmed broken/silently ignored by this box's librsvg).
  // "Inter" must be installed via fontconfig on every machine that runs this
  // script (VPS + Chris's Mac).
  const FONT_BOLD = 'Inter'
  const FONT_BOLD_WEIGHT = '700'
  const FONT_SEMIBOLD = 'Inter'
  const FONT_SEMIBOLD_WEIGHT = '600'

  const lineHeight = Math.round(h * 0.095)
  const fontSize = Math.round(h * 0.09)
  const startY = Math.round(h * 0.22)
  const padX = Math.round(w * 0.04)

  const textBlocks = lines
    .map((line, i) => {
      const y = startY + i * lineHeight
      return `<text x="${padX}" y="${y}" font-family="${FONT_BOLD}" font-weight="${FONT_BOLD_WEIGHT}" font-size="${fontSize}" fill="#ffffff">${escapeXml(line)}</text>`
    })
    .join('\n    ')

  const fadeW = Math.round(w * 0.58)
  const svg = `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ogFade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="rgba(28, 28, 28, 0.92)"/>
      <stop offset="50%" stop-color="rgba(28, 28, 28, 0.48)"/>
      <stop offset="100%" stop-color="rgba(28, 28, 28, 0)"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.45"/>
    </filter>
  </defs>
  <rect width="${fadeW}" height="${h}" fill="url(#ogFade)"/>
  <g filter="url(#shadow)">
    ${textBlocks}
  </g>
  <text x="${padX}" y="${startY + lines.length * lineHeight + Math.round(fontSize * 0.85)}" font-family="${FONT_SEMIBOLD}" font-weight="${FONT_SEMIBOLD_WEIGHT}" font-size="${Math.round(fontSize * 0.33)}" fill="#F06292">${escapeXml(kicker)}</text>
</svg>`.trim()

  const buf = await sharp(inputPath)
    .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
    .png({ compressionLevel: 9 })
    .toBuffer()

  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, buf)
  console.log('Wrote', outputPath)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
