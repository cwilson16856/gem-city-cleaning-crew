/**
 * Image Optimization Script
 * Converts blog cover images (PNG/JPG/WebP) to WebP + AVIF, recursively,
 * mirroring public/images/blog/ into public/images-optimized/blog/.
 *
 * Usage: node scripts/optimize-images.js
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const INPUT_DIR = path.join(__dirname, '../public/images/blog')
const OUTPUT_DIR = path.join(__dirname, '../public/images-optimized/blog')
const SUPPORTED_FORMATS = ['.png', '.jpg', '.jpeg', '.webp']

function findImages(dir, relativePath = '') {
  const images = []
  if (!fs.existsSync(dir)) return images

  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    const relPath = path.join(relativePath, entry.name)

    if (entry.isDirectory()) {
      images.push(...findImages(fullPath, relPath))
    } else if (entry.isFile() && SUPPORTED_FORMATS.includes(path.extname(entry.name).toLowerCase())) {
      images.push({ inputPath: fullPath, relativePath: relPath, fileName: entry.name })
    }
  }
  return images
}

async function optimizeImages() {
  if (!fs.existsSync(INPUT_DIR)) {
    console.log(`No blog images directory found at ${INPUT_DIR} — nothing to optimize.`)
    return
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  const allImages = findImages(INPUT_DIR)
  console.log(`\nFound ${allImages.length} image(s) to optimize (including subdirectories)\n`)

  let successCount = 0
  let errorCount = 0

  for (const { inputPath, relativePath, fileName } of allImages) {
    const fileNameWithoutExt = path.basename(fileName, path.extname(fileName))
    const relativeDir = path.dirname(relativePath)
    const outputSubDir = path.join(OUTPUT_DIR, relativeDir)
    fs.mkdirSync(outputSubDir, { recursive: true })

    try {
      const originalSize = fs.statSync(inputPath).size
      const inputExt = path.extname(fileName).toLowerCase()

      let webpPath
      let webpSize
      if (inputExt === '.webp') {
        webpPath = path.join(outputSubDir, fileName)
        fs.copyFileSync(inputPath, webpPath)
        webpSize = fs.statSync(webpPath).size
        console.log(`✓ ${relativePath} (already WebP, copied)`)
      } else {
        webpPath = path.join(outputSubDir, `${fileNameWithoutExt}.webp`)
        await sharp(inputPath).webp({ quality: 85, effort: 6 }).toFile(webpPath)
        webpSize = fs.statSync(webpPath).size
        const webpSavings = ((1 - webpSize / originalSize) * 100).toFixed(1)
        console.log(`✓ ${relativePath}`)
        console.log(`  Original: ${(originalSize / 1024).toFixed(1)} KB`)
        console.log(`  WebP:     ${(webpSize / 1024).toFixed(1)} KB (${webpSavings}% smaller)`)
      }

      const avifPath = path.join(outputSubDir, `${fileNameWithoutExt}.avif`)
      await sharp(inputPath).avif({ quality: 75, effort: 6 }).toFile(avifPath)
      const avifSize = fs.statSync(avifPath).size
      const avifSavings = ((1 - avifSize / originalSize) * 100).toFixed(1)
      console.log(`  AVIF:     ${(avifSize / 1024).toFixed(1)} KB (${avifSavings}% smaller)\n`)

      successCount++
    } catch (error) {
      console.error(`✗ Error processing ${relativePath}:`, error.message)
      errorCount++
    }
  }

  console.log('='.repeat(50))
  console.log('OPTIMIZATION COMPLETE')
  console.log('='.repeat(50))
  console.log(`✓ Successfully optimized: ${successCount} image(s)`)
  if (errorCount > 0) console.log(`✗ Errors: ${errorCount} image(s)`)
  console.log(`\nOptimized images saved to:\n${OUTPUT_DIR}`)
}

optimizeImages().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})
