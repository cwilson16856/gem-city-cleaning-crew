// Vercel Routing Middleware (platform-level, not Next.js-specific) — runs
// before the CDN cache on every request matching `config.matcher` below.
//
// Two responsibilities:
//
// 1. Legacy URL / www->apex redirects (added 2026-09-13). These used to
//    live in vercel.json's `redirects` array, but Vercel's declarative
//    redirects (and its `trailingSlash: false` normalization) short-circuit
//    BEFORE Edge Middleware runs, so they cannot carry the custom security
//    headers vercel.json's own `headers` block applies to real page
//    responses -- confirmed live: a redirect produced by the `redirects`
//    array only ever carried a bare `Strict-Transport-Security: max-age=...`,
//    missing `includeSubDomains; preload`, which fails hstspreload.org's
//    eligibility check (it requires the full directive set on any redirect
//    served from the HTTPS site, not just the final destination). Doing the
//    redirect here instead means we construct the Response ourselves, so we
//    control every header on it.
//
//    Known, accepted residual gap: `trailingSlash: false` normalization
//    (the platform stripping a trailing slash before this middleware ever
//    sees the request) still produces a bare-header redirect for the
//    trailing-slash variant of every route on the site, including the
//    trailing-slash variant of the legacy paths below. Fixing that would
//    mean removing `trailingSlash: false` entirely and reimplementing
//    trailing-slash canonicalization for the whole site in here -- a much
//    larger, unbounded-blast-radius change (real duplicate-content risk
//    during the changeover) to satisfy a check hstspreload.org's own
//    crawler doesn't actually exercise (it only ever requests
//    https://domain/ and the www variant, never an arbitrary deep
//    trailing-slash URL). Intentionally out of scope here.
//
//    Also note: this middleware's own `config.matcher` (below) excludes any
//    path containing a dot, so a request to a dotted asset path on the www
//    host (e.g. www.gemcitycleaningcrew.com/favicon.ico) will NOT be
//    redirected by the code below -- it falls through to Vercel's default
//    handling for the www domain alias. This only affects asset requests,
//    not page URLs (the thing GSC/SEO actually tracks as a duplicate
//    origin), and widening the matcher risks breaking the markdown
//    negotiation logic below, which relies on this same exclusion to avoid
//    the same-origin fetch re-entering middleware. Accepted as a narrow,
//    documented gap rather than restructuring the shared matcher.
//
// 2. Serves the text/markdown variant of a route when a client negotiates
//    for it via the Accept header (acceptmarkdown.com), and always sets
//    `Vary: Accept` so the CDN never returns a cached HTML response to a
//    markdown request or vice versa.
//
//    The markdown files themselves are static output written by
//    scripts/prerender.js (index.md next to every prerendered index.html) --
//    this middleware only decides which variant to serve, it does no
//    rendering of its own.

import { next } from '@vercel/functions'

// Skip any path with a file extension (assets, sitemap.xml, llms.txt, the
// .md files themselves) — only clean-URL page routes negotiate content type
// or get redirect-checked. This also prevents the same-origin fetch below
// from ever re-entering middleware, since .md paths never match this
// matcher.
export const config = {
  matcher: ['/((?!.*\\.).*)'],
}

// Keep this set in sync with vercel.json's `headers` array (the `/(.*)`
// block) -- these are the 6 security headers every real page response
// carries; redirects need them too so a browser's very first HTTPS hit to
// the site (which may be a redirect) is still HSTS-preload-eligible.
const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  'Cross-Origin-Opener-Policy': 'same-origin',
}

// Moved out of vercel.json's `redirects` array 2026-09-13 -- see the
// header comment above for why. Keys are matched with any trailing slash
// already stripped, so one entry covers both the slash and no-slash form
// of each legacy URL.
const REDIRECTS = {
  '/deep-cleaning-services': '/deep-cleaning',
  '/house-cleaning-services-springboro-ohio': '/locations/springboro/house-cleaning-services',
  '/house-cleaning-services-dayton-ohio': '/locations/dayton/house-cleaning-services',
  '/dayton-house-cleaning-services': '/locations/dayton/house-cleaning-services',
  '/locations/beavercreek/commercial-services': '/locations/beavercreek/commercial-cleaning-services',
  '/contact-us': '/quote',
  '/school-cleaning': '/daycare-cleaning',
}

function redirectResponse(destination) {
  return new Response(null, {
    status: 308,
    headers: { Location: destination, ...SECURITY_HEADERS },
  })
}

function prefersMarkdown(acceptHeader) {
  if (!acceptHeader) return false

  const parsed = acceptHeader.split(',').map((part) => {
    const [type, ...params] = part.trim().split(';')
    let q = 1
    for (const param of params) {
      const [key, value] = param.trim().split('=')
      if (key === 'q' && value) q = parseFloat(value)
    }
    return { type: type.trim().toLowerCase(), q: Number.isNaN(q) ? 1 : q }
  })

  const markdown = parsed.find((p) => p.type === 'text/markdown')
  if (!markdown) return false

  const html = parsed.find((p) => p.type === 'text/html' || p.type === 'text/*' || p.type === '*/*')
  return !html || markdown.q >= html.q
}

function markdownPathFor(pathname) {
  const trimmed = pathname.replace(/^\/+|\/+$/g, '')
  return trimmed === '' ? '/index.md' : `/${trimmed}/index.md`
}

export default async function middleware(request) {
  const url = new URL(request.url)

  if (url.hostname === 'www.gemcitycleaningcrew.com') {
    const destination = `https://gemcitycleaningcrew.com${url.pathname}${url.search}`
    return redirectResponse(destination)
  }

  const strippedPath = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, '') : url.pathname
  const legacyTarget = REDIRECTS[strippedPath]
  if (legacyTarget) {
    return redirectResponse(`${legacyTarget}${url.search}`)
  }

  if (prefersMarkdown(request.headers.get('accept'))) {
    const markdownUrl = new URL(markdownPathFor(url.pathname), url.origin)
    const markdownResponse = await fetch(markdownUrl)

    if (markdownResponse.ok) {
      const headers = new Headers(markdownResponse.headers)
      headers.set('Content-Type', 'text/markdown; charset=utf-8')
      headers.set('Vary', 'Accept, Accept-Encoding')
      return new Response(markdownResponse.body, { status: 200, headers })
    }
  }

  return next({ headers: { Vary: 'Accept, Accept-Encoding' } })
}
