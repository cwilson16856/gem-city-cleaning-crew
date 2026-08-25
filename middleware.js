// Vercel Routing Middleware (platform-level, not Next.js-specific) — runs
// before the CDN cache on every request matching `config.matcher` below.
//
// Serves the text/markdown variant of a route when a client negotiates for
// it via the Accept header (acceptmarkdown.com), and always sets
// `Vary: Accept` so the CDN never returns a cached HTML response to a
// markdown request or vice versa.
//
// The markdown files themselves are static output written by
// scripts/prerender.js (index.md next to every prerendered index.html) —
// this middleware only decides which variant to serve, it does no
// rendering of its own.

import { next } from '@vercel/functions'

// Skip any path with a file extension (assets, sitemap.xml, llms.txt, the
// .md files themselves) — only clean-URL page routes negotiate content type.
// This also prevents the same-origin fetch below from ever re-entering
// middleware, since .md paths never match this matcher.
export const config = {
  matcher: ['/((?!.*\\.).*)'],
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
