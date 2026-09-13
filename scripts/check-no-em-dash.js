#!/usr/bin/env node
// Guards against a 4th em-dash cleanup round (see the 2026-09-13 content-trust
// plan). Walks src/ and reports any em dash ("—") found outside a //
// or /* */ comment. This is a line-based check, not a real parser -- a
// multi-line /* */ comment or a template literal containing "//" can fool
// it. Treat a false positive as a one-line manual re-check, not a bug in
// the build.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..', 'src')
const EM_DASH = '—'

function isCommentLine(line) {
  const trimmed = line.trim()
  return trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*') || trimmed.startsWith('{/*')
}

function walk(dir, files) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walk(full, files)
    } else if (/\.(js|jsx|ts|tsx)$/.test(entry.name)) {
      files.push(full)
    }
  }
  return files
}

const files = walk(ROOT, [])
const offenders = []

for (const file of files) {
  const lines = fs.readFileSync(file, 'utf8').split('\n')
  lines.forEach((line, i) => {
    if (line.includes(EM_DASH) && !isCommentLine(line)) {
      offenders.push(`${path.relative(process.cwd(), file)}:${i + 1}: ${line.trim()}`)
    }
  })
}

if (offenders.length > 0) {
  console.log(`Found ${offenders.length} em dash(es) in visible copy:\n`)
  offenders.forEach((o) => console.log(o))
  process.exit(1)
}

console.log('No em dashes found in visible copy.')
