// Shared HTML-sanitizing helper used by both the client bundle (real user
// rendering) and the Node SSR prerender build (scripts/prerender.js via
// entry-server.jsx). One environment check here beats duplicating it in
// every call site.
//
// Client path (real users): plain `dompurify`, unchanged from before —
// this is the actual shipped, security-relevant sanitization path, so it
// deliberately keeps the exact original library/behavior, zero regression
// risk.
//
// Node/SSR path: `sanitize-html`, NOT `isomorphic-dompurify`. Tried
// isomorphic-dompurify first (matches the original plan) — it depends on
// jsdom, whose `undici` dependency calls a Node API
// (`util.markAsUncloneable`) that only exists on Node >=22.14. That threw
// outright in this build environment (Node 20.19.5), and Vercel's actual
// build Node version isn't something this repo can confirm from here — the
// same "assumed it'll work in Vercel's environment" mistake already broke
// prerendering once (see scripts/prerender.js's history). sanitize-html has
// no jsdom dependency and is confirmed working on Node 20. Pinned to exactly
// 2.17.5 (not ^2.17.5) in package.json — 2.17.6 reintroduces a
// node >=22.12.0 engines requirement, which a routine `npm update` would
// otherwise silently pull in and break this again.
//
// SSR output here is a crawler-only snapshot — main.jsx uses createRoot
// (full client remount, not hydrateRoot), so the SSR-sanitized HTML never
// reaches a real user's DOM. Exact DOMPurify-vs-sanitize-html output parity
// isn't required, just safe, faithful-enough HTML for non-JS crawlers.
// Plain static imports, both bundled unconditionally — deliberately not a
// dynamic/conditional import. This file is shared by client and server code,
// so Rollup can't tree-shake a runtime `isBrowser` branch at build time
// either way; a dynamic import here would add async-timing complexity (and
// top-level-await across two different build pipelines — the client
// bundler and Node's own ESM runtime for the SSR bundle) for no real
// benefit. The bundle-size cost of shipping sanitize-html's ~small parser
// deps to the client is a fine trade for keeping this simple and reliable.
import DOMPurify from 'dompurify'
import sanitizeHtmlLib from 'sanitize-html'

const isBrowser = typeof window !== 'undefined'

// Sanitizes full HTML content for display (dangerouslySetInnerHTML), keeping
// the tags blog content actually uses (headings, lists, tables, links,
// emphasis, etc.).
export function sanitizeForDisplay(html) {
  if (!html) return ''
  if (isBrowser) return DOMPurify.sanitize(html)
  // sanitize-html's defaults cover every tag used across the existing blog
  // posts (verified via `grep -ohE "<[a-zA-Z]+" src/content/blog/posts/*.js`
  // against sanitizeHtmlLib.defaults.allowedTags) EXCEPT <img> — sanitize-html
  // omits it from defaults.allowedTags even though defaults.allowedAttributes
  // already has an img entry (an inconsistency in their own defaults).
  // Explicitly add it so a future post with an inline image isn't silently
  // stripped server-side while still rendering fine client-side via
  // DOMPurify's more permissive browser defaults — that divergence would
  // undermine the whole point of this SSR path (crawlers seeing the same
  // content real users do).
  return sanitizeHtmlLib(html, {
    allowedTags: sanitizeHtmlLib.defaults.allowedTags.concat(['img']),
  })
}

// Strips all HTML tags, returning plain text (meta descriptions, reading-time
// word counts).
export function stripTags(html) {
  if (!html) return ''
  if (isBrowser) return DOMPurify.sanitize(html, { ALLOWED_TAGS: [] })
  return sanitizeHtmlLib(html, { allowedTags: [], allowedAttributes: {} })
}
