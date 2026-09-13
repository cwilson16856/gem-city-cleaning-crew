import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import App from './App.jsx'
import './styles/index.css'

// hydrateRoot, not createRoot, but ONLY on "/" — see the long history below
// for why this is scoped to one route instead of every route.
//
// createRoot() ignores the real server-rendered markup already sitting in
// #root (every route is prerendered by scripts/prerender.js) and
// wipes+rebuilds the whole tree from scratch on mount, which was the likely
// dominant cause of the 8-11s LCP measured in the 2026-09-11 SEO audit
// (Google's own PageSpeed Insights, not just the local Lighthouse pass):
// the fast initial SSR paint got thrown away and replaced by a second, slow
// client render. hydrateRoot reconciles against the existing DOM instead,
// so the original paint can stand as the real LCP — worth it specifically
// on "/", the audit's worst offender (55/100, 11.2s LCP) and by far the
// site's highest-traffic page per GSC (77 clicks vs. near-zero elsewhere).
//
// Getting hydrateRoot to not throw took three fixes, in order:
// 1. An @emotion/cache with the SAME `key` ('css') created here AND in
//    entry-server.jsx. Without this, entry-server.jsx's Emotion style
//    extraction (moves inline <style> tags out of the server-rendered body
//    into <head>, fixing a separate SEO bug — see that file) made the
//    server markup's DOM shape not match a fresh client render's shape at
//    all. With matching cache keys, @emotion/cache's browser init
//    recognizes the exact <style data-emotion="css ..."> tags
//    entry-server.jsx's createEmotionServer().constructStyleTagsFromChunks()
//    put in <head>, marks those rules as already-inserted, and the client
//    render doesn't re-insert its own inline tags into the body.
// 2. entry-server.jsx switched from renderToStaticMarkup() to
//    renderToString() — renderToStaticMarkup never emits the hydration
//    marker comments a <Suspense> boundary needs, so hydrating a tree that
//    contains one (App.jsx wraps every route in <Suspense fallback={null}>
//    for React.lazy() code-splitting) was documented-unsupported. This
//    alone didn't fix anything by itself — see next point — but is a
//    required precondition.
// 3. entry-server.jsx's own render tree needed an actual <Suspense
//    fallback={null}> wrapped around <Routes>, matching App.jsx's — it had
//    none (its whole reason to eager-import every page instead of using
//    React.lazy() there is that renderToStaticMarkup/renderToString can't
//    await a lazy import, so it never needed Suspense). Adding a
//    structurally matching (but never-actually-suspending, since
//    entry-server.jsx's imports are all eager) boundary made "/" — the one
//    route where the *client* also never needs to suspend, since HomePage
//    is the one page App.jsx imports eagerly too — hydrate with zero
//    console errors.
//
// What's NOT fixed, and why this stays scoped to "/": every OTHER route is
// React.lazy() on the client (App.jsx), so its component code is still an
// in-flight dynamic import() when hydration begins. Even with fixes 1-3,
// hydrating those routes threw real errors (React #418/#425) rooted in
// every case at the lazy component's own first rendered element — this is
// a genuine, deeper React 18 limitation (hydrating a Suspense boundary
// whose content depends on a not-yet-resolved lazy import isn't reliable),
// not something fixable by matching styles or boundaries. The fix would be
// preloading the matched route's chunk before calling hydrateRoot, which
// trades away the code-splitting benefit for exactly the routes it exists
// to help and wasn't worth the added complexity/risk for a same-day change
// — createRoot on those routes is a zero-regression choice, identical to
// what shipped before any of this.
//
// Verified with a Playwright console-error check across ~12 routes
// (including several lazy ones) before shipping — re-run that check after
// touching this file, entry-server.jsx's Suspense/cache setup, or App.jsx's
// route eagerness.
//
// Re-evaluated 2026-09-11 (see .claude/plans/1. Pending/gccc-seo-visibility/GCCC/lcp-third-party-deferral-plan.md)
// -- same conclusion holds, no new information changed the preload-gap
// analysis above. That round shipped the Maps-embed lazy-load and
// GTM/Pixel idle-defer fixes instead, since neither needs hydrateRoot.
const clientCache = createCache({ key: 'css' })

const root = document.getElementById('root')
const app = (
  <React.StrictMode>
    <CacheProvider value={clientCache}>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </CacheProvider>
  </React.StrictMode>
)

const canHydrate = root.hasChildNodes() && window.location.pathname === '/'

if (canHydrate) {
  ReactDOM.hydrateRoot(root, app)
} else {
  ReactDOM.createRoot(root).render(app)
}
