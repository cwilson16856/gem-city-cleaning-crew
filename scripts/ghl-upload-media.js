// Uploads blog cover images to GoHighLevel media storage, so social posts can
// reference a reliable GHL-hosted image URL instead of the live site URL.
//
// GHL_TOKEN is a plain Node env var (loaded via dotenv below) — it must NEVER be
// VITE_-prefixed, since that would ship it into the client bundle. There is no
// fallback token in this file; the script hard-fails if GHL_TOKEN is unset.
//
// Usage:
//   node scripts/ghl-upload-media.js upload-all
//   node scripts/ghl-upload-media.js upload <file> [file..]
//   node scripts/ghl-upload-media.js upload-url <url> [name]
//   node scripts/ghl-upload-media.js list

import fs from 'node:fs'
import path from 'node:path'
import https from 'node:https'
import { fileURLToPath } from 'node:url'
import 'dotenv/config'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const GHL_API_BASE = 'https://services.leadconnectorhq.com'
const GHL_TOKEN = process.env.GHL_TOKEN

const BLOG_IMAGES_DIR = path.join(__dirname, '../public/images/blog')

const MIME_TYPES = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
}

function requireToken() {
  if (!GHL_TOKEN) {
    console.error('[GHL] GHL_TOKEN env var is required — no fallback token exists for this repo. Set it in .env (never commit it).')
    process.exit(1)
  }
}

async function uploadFile(filePath) {
  const fileName = path.basename(filePath)
  const ext = path.extname(filePath).toLowerCase()
  const mimeType = MIME_TYPES[ext] || 'application/octet-stream'
  const fileBuffer = fs.readFileSync(filePath)

  const boundary = `----FormBoundary${Date.now()}`
  const formParts = [
    `--${boundary}\r\n` +
      `Content-Disposition: form-data; name="file"; filename="${fileName}"\r\n` +
      `Content-Type: ${mimeType}\r\n\r\n`,
    fileBuffer,
    '\r\n',
    `--${boundary}\r\n` + 'Content-Disposition: form-data; name="hosted"\r\n\r\n' + 'false\r\n',
    `--${boundary}\r\n` + 'Content-Disposition: form-data; name="name"\r\n\r\n' + `${fileName}\r\n`,
    `--${boundary}--\r\n`,
  ]

  const body = Buffer.concat(formParts.map((part) => (Buffer.isBuffer(part) ? part : Buffer.from(part, 'utf-8'))))

  return new Promise((resolve, reject) => {
    const url = new URL(`${GHL_API_BASE}/medias/upload-file`)
    const req = https.request(
      {
        hostname: url.hostname,
        port: 443,
        path: url.pathname,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GHL_TOKEN}`,
          Version: '2021-07-28',
          'Content-Type': `multipart/form-data; boundary=${boundary}`,
          'Content-Length': body.length,
        },
      },
      (res) => {
        let data = ''
        res.on('data', (chunk) => { data += chunk })
        res.on('end', () => {
          try {
            resolve({ status: res.statusCode, data: JSON.parse(data) })
          } catch {
            resolve({ status: res.statusCode, data })
          }
        })
      }
    )
    req.on('error', reject)
    req.write(body)
    req.end()
  })
}

async function listMedia(offset = 0, limit = 50) {
  return new Promise((resolve, reject) => {
    const url = new URL(`${GHL_API_BASE}/medias/files`)
    url.searchParams.set('offset', offset)
    url.searchParams.set('limit', limit)
    url.searchParams.set('sortBy', 'createdAt')
    url.searchParams.set('sortOrder', 'desc')

    const req = https.request(
      {
        hostname: url.hostname,
        port: 443,
        path: `${url.pathname}${url.search}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${GHL_TOKEN}`,
          Version: '2021-07-28',
          Accept: 'application/json',
        },
      },
      (res) => {
        let data = ''
        res.on('data', (chunk) => { data += chunk })
        res.on('end', () => {
          try {
            resolve({ status: res.statusCode, data: JSON.parse(data) })
          } catch {
            resolve({ status: res.statusCode, data })
          }
        })
      }
    )
    req.on('error', reject)
    req.end()
  })
}

function findBlogCoverImages() {
  const indexPath = path.join(__dirname, '../src/content/blog/index.js')
  const indexContent = fs.readFileSync(indexPath, 'utf-8')

  const coverRegex = /coverImage:\s*['"]([^'"]+)['"]/g
  const images = []
  let match
  while ((match = coverRegex.exec(indexContent)) !== null) {
    const imgRelPath = match[1]
    const imgFullPath = path.join(__dirname, '../public', imgRelPath)
    if (fs.existsSync(imgFullPath)) {
      images.push(imgFullPath)
    } else {
      console.warn(`  Warning: Image not found locally: ${imgRelPath}`)
    }
  }
  return [...new Set(images)]
}

async function uploadBlogImages(specificImages) {
  const images = specificImages || findBlogCoverImages()
  console.log(`\nUploading ${images.length} image(s) to GHL media storage...\n`)

  const results = []
  for (const imgPath of images) {
    const name = path.basename(imgPath)
    process.stdout.write(`  Uploading: ${name}... `)
    try {
      const result = await uploadFile(imgPath)
      if (result.status === 200 || result.status === 201) {
        const url = result.data?.url || result.data?.fileUrl || 'unknown'
        console.log(`OK -> ${url}`)
        results.push({ name, url, success: true })
      } else {
        console.log(`FAILED (${result.status})`)
        console.log(`    ${JSON.stringify(result.data)}`)
        results.push({ name, success: false, error: result.data })
      }
    } catch (err) {
      console.log(`ERROR: ${err.message}`)
      results.push({ name, success: false, error: err.message })
    }
  }

  console.log('\n--- Summary ---')
  const succeeded = results.filter((r) => r.success)
  const failed = results.filter((r) => !r.success)
  console.log(`Uploaded: ${succeeded.length}/${results.length}`)
  if (failed.length > 0) {
    console.log('Failed:')
    failed.forEach((f) => console.log(`  - ${f.name}: ${JSON.stringify(f.error)}`))
  }

  if (succeeded.length > 0) {
    const mapping = {}
    succeeded.forEach((s) => { mapping[s.name] = s.url })
    const mappingPath = path.join(__dirname, 'ghl-media-urls.json')
    fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2))
    console.log(`\nURL mapping saved to: ${mappingPath}`)
  }

  return results
}

const command = process.argv[2] || 'help'

switch (command) {
  case 'upload-all':
    requireToken()
    uploadBlogImages().catch((err) => { console.error(err); process.exit(1) })
    break

  case 'upload': {
    requireToken()
    const files = process.argv
      .slice(3)
      .map((f) => {
        if (path.isAbsolute(f)) return f
        const inBlogDir = path.join(BLOG_IMAGES_DIR, f)
        if (fs.existsSync(inBlogDir)) return inBlogDir
        const inCwd = path.resolve(f)
        if (fs.existsSync(inCwd)) return inCwd
        console.warn(`File not found: ${f}`)
        return null
      })
      .filter(Boolean)

    if (files.length === 0) {
      console.log('No valid files to upload.')
      process.exit(1)
    }
    uploadBlogImages(files).catch((err) => { console.error(err); process.exit(1) })
    break
  }

  case 'list':
    requireToken()
    listMedia().then((result) => {
      if (result.data?.files) {
        result.data.files.forEach((f) => console.log(`${f.name || f.altId} -> ${f.url}`))
        console.log(`\nTotal: ${result.data.files.length}`)
      } else {
        console.log(JSON.stringify(result, null, 2))
      }
    }).catch((err) => { console.error(err); process.exit(1) })
    break

  case 'help':
  default:
    console.log(`
GCCC GHL Media Upload Script
=============================

Usage:
  node scripts/ghl-upload-media.js <command> [args]

Commands:
  upload-all              Upload all blog cover images referenced in src/content/blog/index.js
  upload <file> [file..]  Upload specific local files (relative to public/images/blog/, or absolute)
  list                    List existing media files in GHL

Environment Variables:
  GHL_TOKEN   Required. Set in .env (never commit it). No fallback exists.

Examples:
  node scripts/ghl-upload-media.js upload-all
  node scripts/ghl-upload-media.js upload some-post-slug.png
  node scripts/ghl-upload-media.js list
    `)
}
