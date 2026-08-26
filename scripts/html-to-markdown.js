// Converts one route's rendered <main> HTML fragment into Markdown, for the
// text/markdown variant served by middleware.js on Accept: text/markdown
// negotiation (acceptmarkdown.com).
//
// Deliberately NOT using `turndown` (the standard HTML->Markdown library):
// turndown requires a real `window.DOMParser`, and this repo already hit
// that exact class of problem with dompurify — see src/utils/sanitizeHtml.js
// for why jsdom (the usual polyfill) was rejected: its `undici` dependency
// breaks in Vercel's build image. `htmlparser2` (already a transitive dep
// via sanitize-html) is a pure-JS SAX-style parser with no DOM dependency,
// so it works the same in this Node build step and in the Edge runtime.
//
// This is intentionally a lightweight, "good enough for an agent to read"
// converter, not a general-purpose HTML->Markdown library: headings,
// paragraphs, links, and list items get real Markdown syntax; everything
// else (MUI's div/span/Chip/Rating wrapper soup) is flattened to plain text.

import { Parser } from 'htmlparser2'

const HEADING_PREFIX = { h1: '# ', h2: '## ', h3: '### ', h4: '#### ', h5: '##### ', h6: '###### ' }
const BLOCK_TAGS = new Set([
  'p', 'div', 'section', 'article', 'header', 'footer', 'main', 'nav',
  'ul', 'ol', 'li', 'table', 'tr', 'td', 'th', 'blockquote', 'figure', 'figcaption',
  ...Object.keys(HEADING_PREFIX),
])
// Elements with no useful text content for an agent (icons, embeds, raw code).
const SKIP_TAGS = new Set(['script', 'style', 'svg', 'path', 'iframe', 'video', 'source', 'noscript'])

export function htmlFragmentToMarkdown(html, { siteUrl = '' } = {}) {
  const lines = []
  let current = ''

  // Stack of { name, skipping } per open tag, not a bare counter — a bare
  // counter incremented on any "skip" condition (SKIP_TAGS OR aria-hidden)
  // but only decremented on SKIP_TAGS would permanently wedge open once an
  // aria-hidden element closed, silently dropping the rest of the document.
  const tagStack = []
  let skipDepth = 0

  // Stack of open <a> contexts, not a single variable — this codebase wraps
  // whole cards (CardActionArea) and chips in one <a>, so a link's content
  // is frequently block-level (headings, paragraphs), not plain inline
  // text. `hadFlush` records whether a block boundary fired while this link
  // was open: if so, [text](href) is invalid Markdown (link text can't
  // legally contain headings/blank lines), so that case renders the block
  // content normally and appends a trailing "→ href" line instead of
  // wrapping it in brackets.
  const linkStack = []

  function flush() {
    const text = current.replace(/\s+/g, ' ').trim()
    if (text) lines.push(text)
    current = ''
    if (linkStack.length > 0) linkStack[linkStack.length - 1].hadFlush = true
  }

  const parser = new Parser(
    {
      onopentag(name, attribs) {
        // aria-hidden content (e.g. the inactive words of a rotating
        // headline, only one of which is visible at a time via CSS) has no
        // text an agent should read — skip its whole subtree, matching what
        // a screen reader would also skip.
        const shouldSkip = SKIP_TAGS.has(name) || attribs['aria-hidden'] === 'true'
        tagStack.push(shouldSkip)
        if (shouldSkip) {
          skipDepth++
          return
        }
        if (skipDepth > 0) return

        if (name === 'br') {
          current += ' '
        } else if (name === 'a' && attribs.href) {
          if (current && !/\s$/.test(current)) current += ' '
          linkStack.push({ href: attribs.href, hadFlush: false })
        } else if (name === 'li') {
          flush()
          current = '- '
        } else if (BLOCK_TAGS.has(name)) {
          flush()
        }
      },
      ontext(text) {
        if (skipDepth === 0) current += text
      },
      onclosetag(name) {
        const wasSkipping = tagStack.pop()
        if (wasSkipping) {
          skipDepth = Math.max(0, skipDepth - 1)
          return
        }
        if (skipDepth > 0) return

        if (name === 'a' && linkStack.length > 0) {
          const { href, hadFlush } = linkStack.pop()
          const resolvedHref = href.startsWith('/') && siteUrl ? `${siteUrl}${href}` : href
          if (hadFlush) {
            flush()
            lines.push(`→ ${resolvedHref}`)
          } else {
            const text = current.trim()
            current = text ? `[${text}](${resolvedHref})` : ''
          }
        } else if (HEADING_PREFIX[name]) {
          current = HEADING_PREFIX[name] + current.trim()
          flush()
        } else if (BLOCK_TAGS.has(name)) {
          flush()
        }
      },
    },
    { decodeEntities: true }
  )

  parser.write(html)
  parser.end()
  flush()

  return lines.filter(Boolean).join('\n\n').trim()
}
