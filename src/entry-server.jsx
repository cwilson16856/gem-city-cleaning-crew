// SSR-only entry point, used exclusively by scripts/prerender.js (via the
// dist-ssr/entry-server.js build produced by `vite build --ssr`). Never
// imported by the client bundle (main.jsx imports App.jsx directly).
//
// This mirrors App.jsx's <Routes> table, but with plain top-level imports
// instead of React.lazy(): renderToStaticMarkup() is fully synchronous and
// cannot wait for a lazy import's dynamic import() to resolve, so every lazy
// route in App.jsx would just render its Suspense fallback (null) here
// otherwise. Code-splitting is a client-bundle-size concern only — this is a
// one-shot Node build script, so eager imports cost nothing here.
//
// IMPORTANT: if you add, remove, or change a <Route> in App.jsx, mirror the
// same change here, or the new route silently won't get prerendered (it
// falls through to an empty CSR shell for non-JS-executing crawlers, the
// exact problem this file exists to fix).
//
// Reuses App.jsx's `theme` (named export) so the ~100-line MUI theme config
// has exactly one source of truth, not two drifting copies.

import { Suspense } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Routes, Route } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'

import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

import HomePage from './pages/HomePage'
import ResidentialPage from './pages/ResidentialCleaning/ResidentialPage'
import ResidentialChecklistPage from './pages/ResidentialCleaning/ResidentialChecklistPage'
import RecurringCleaningPage from './pages/ResidentialCleaning/RecurringCleaningPage'
import DeepCleaningPage from './pages/ResidentialCleaning/DeepCleaningPage'
import MoveInOutCleaningPage from './pages/ResidentialCleaning/MoveInOutCleaningPage'
import MoveInCleaningPage from './pages/ResidentialCleaning/MoveInCleaning'
import PostConstructionCleaningPage from './pages/ResidentialCleaning/PostConstructionCleaning'
import MoveOutCleaningPage from './pages/ResidentialCleaning/MoveOutCleaning'
import AirBnbCleaning from './pages/ResidentialCleaning/AirBnbCleaning'
import ApartmentCleaning from './pages/ResidentialCleaning/ApartmentCleaning'
import CondoCleaning from './pages/ResidentialCleaning/CondoCleaning'
import KitchenCleaningServices from './pages/ResidentialCleaning/KitchenCleaningServices'
import BathroomCleaningServices from './pages/ResidentialCleaning/BathroomCleaningServices'
import CommercialPage from './pages/CommercialCleaning/CommercialPage'
import CommercialOneTimeCleaning from './pages/CommercialCleaning/CommercialOneTimeCleaning'
import OfficeCleaning from './pages/CommercialCleaning/OfficeCleaning'
import OfficeCleaningChecklist from './pages/CommercialCleaning/OfficeCleaningChecklist'
import RetailCleaning from './pages/CommercialCleaning/RetailCleaning'
import DaycareCleaning from './pages/CommercialCleaning/EducationCenterCleaning'
import ApartmentBuildingCleaning from './pages/CommercialCleaning/ApartmentBuildingCleaning'
import IndustrialCleaning from './pages/CommercialCleaning/IndustrialCleaning'
import BeavercreekCommercialPage from './pages/Locations/Beavercreek/CommercialCleaning/BeavercreekCommercialPage'
import XeniaHouseCleaningPage from './pages/Locations/Xenia/HouseCleaning/XeniaHouseCleaningPage'
import LocationPage from './pages/LocationPage'
import BlogPage from './pages/BlogPage'
import PostPage from './pages/PostPage'
import AboutPage from './pages/AboutPage'
import OurTrainingProgram from './pages/OurTrainingProgram'
import HiringPage from './pages/HiringPage'
import QuotePage from './pages/QuotePage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import NotFound from './pages/NotFound'

import { theme } from './App.jsx'
import { generateLocalBusinessSchema } from './utils/localBusinessSchema'

// renderToStaticMarkup() with Emotion's DEFAULT (no CacheProvider, no
// extraction) SSR behavior emits one <style data-emotion="css HASH">
// .css-HASH{...}</style> tag inline at EVERY point in the tree where a
// styled class first appears — including inside flow-content elements like
// <h2>/<h3>/<span>. Real browsers render this correctly (style content is
// never visually displayed regardless of position), which is why this was
// invisible in manual/visual QA. But it corrupts any *text-extraction*-based
// reader of the static prerendered HTML this file's output ends up in: an
// ancestor element's .textContent legitimately includes descendant <style>
// text per the DOM spec, so a heading like "We Make Life {rotating text}"
// was extractable as "We Make Life .css-dc0kb5{display:inline-block;...}
// {rotating text}" by any tool that reads text content directly from the
// raw HTML — AI answer engines, other SEO crawlers, and this project's own
// html-to-markdown prerender step all hit this.
//
// Fix: an explicit @emotion/cache (`key: 'css'`, module-scoped so it's
// reused across every route this file renders in one prerender run) fed
// through createEmotionServer()'s extractCriticalToChunks +
// constructStyleTagsFromChunks — Emotion's own official SSR extraction
// mechanism, not a hand-rolled regex. It strips every inline <style> tag
// back out of the rendered html and returns the same CSS as one deduped
// block of correctly `data-emotion`-tagged <style> elements for <head>,
// which is also what makes hydration safe: the browser's createCache with
// the same key ('css', see main.jsx) recognizes those exact tags on init
// and marks their rules as already-inserted, so a client-side render
// produces the same DOM shape the server sent instead of re-inserting
// fresh inline <style> tags into the body — see main.jsx for the client
// half of this and the hydrateRoot attempt/revert history that found this
// gap in the first place.
const emotionCache = createCache({ key: 'css' })
const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(emotionCache)

function extractEmotionStyles(html) {
  const chunks = extractCriticalToChunks(html)
  return { cleanedHtml: chunks.html, css: constructStyleTagsFromChunks(chunks) }
}

// Renders one URL to a static HTML string plus its collected react-helmet-async
// tags. Returns three pieces (rather than one combined document) because
// scripts/prerender.js splices each into a shared dist/index.html template —
// see that file for why (it keeps the real, Vite-built <head> boilerplate
// — favicon links, font preloads, the client script tag — instead of
// hand-reconstructing an <html> document here). `emotionCss` is Emotion's
// inline <style> tags, stripped out of appHtml and deduped — see
// extractEmotionStyles() above for why; scripts/prerender.js places it in
// <head> alongside the helmet tags.
export function render(url) {
  const helmetContext = {}
  const localBusinessData = generateLocalBusinessSchema()

  const appHtml = renderToString(
    <CacheProvider value={emotionCache}>
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Helmet>
              <title>Gem City Cleaning Crew - Professional Cleaning Services</title>
              <meta
                name="description"
                content="Professional residential and commercial cleaning services in Dayton, OH. We make life easier with reliable, thorough cleaning. Call 937-892-4157 for a free quote."
              />
              <meta name="keywords" content="cleaning services, house cleaning, commercial cleaning, Dayton Ohio, residential cleaning, office cleaning, Gem City" />
              <meta name="author" content="Gem City Cleaning Crew" />

              {/* Structured Data */}
              <script type="application/ld+json">
                {JSON.stringify(localBusinessData)}
              </script>

              {/* Open Graph */}
              <meta property="og:type" content="website" />
              <meta property="og:title" content="Gem City Cleaning Crew - Professional Cleaning Services" />
              <meta property="og:description" content="Professional residential and commercial cleaning services in Dayton, OH. We make life easier with reliable, thorough cleaning." />
              <meta property="og:url" content="https://gemcitycleaningcrew.com" />
              <meta property="og:site_name" content="Gem City Cleaning Crew" />
              <meta property="og:image" content="https://gemcitycleaningcrew.com/logo.png" />
              <meta property="og:locale" content="en_US" />

              {/* Twitter */}
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Gem City Cleaning Crew - Professional Cleaning Services" />
              <meta name="twitter:description" content="Professional residential and commercial cleaning services in Dayton, OH. We make life easier with reliable, thorough cleaning." />
              <meta name="twitter:image" content="https://gemcitycleaningcrew.com/logo.png" />

              {/* Contact Information */}
              <meta name="contact:phone_number" content="937-892-4157" />
              <meta name="contact:email" content="info@gemcitycleaningcrew.com" />

              {/* Geographic Information */}
              <meta name="geo.region" content="US-OH" />
              <meta name="geo.placename" content="Dayton, Ohio" />
            </Helmet>

            <Header />

            <ScrollToTop />

            <main className="main-content">
              <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/residential" element={<ResidentialPage />} />
                <Route path="/residential-house-cleaning-checklist" element={<ResidentialChecklistPage />} />
                <Route path="/recurring-cleaning-service" element={<RecurringCleaningPage />} />
                <Route path="/deep-cleaning" element={<DeepCleaningPage />} />
                <Route path="/move-in-out-cleaning" element={<MoveInOutCleaningPage />} />
                <Route path="/move-in-cleaning" element={<MoveInCleaningPage />} />
                <Route path="/post-construction-cleaning" element={<PostConstructionCleaningPage />} />
                <Route path="/move-out-cleaning" element={<MoveOutCleaningPage />} />
                <Route path="/airbnb-cleaning-service" element={<AirBnbCleaning />} />
                <Route path="/apartment-cleaning" element={<ApartmentCleaning />} />
                <Route path="/condo-cleaning" element={<CondoCleaning />} />
                <Route path="/kitchen-cleaning-services" element={<KitchenCleaningServices />} />
                <Route path="/bathroom-cleaning-services" element={<BathroomCleaningServices />} />
                <Route path="/commercial" element={<CommercialPage />} />
                <Route path="/commercial-one-time-cleaning" element={<CommercialOneTimeCleaning />} />
                <Route path="/office-cleaning" element={<OfficeCleaning />} />
                <Route path="/office-cleaning-checklist" element={<OfficeCleaningChecklist />} />
                <Route path="/retail-cleaning" element={<RetailCleaning />} />
                <Route path="/daycare-cleaning" element={<DaycareCleaning />} />
                <Route path="/apartment-building-cleaning" element={<ApartmentBuildingCleaning />} />
                <Route path="/industrial-cleaning" element={<IndustrialCleaning />} />
                <Route path="/locations" element={<LocationPage />} />
                <Route path="/locations/xenia/house-cleaning-services" element={<XeniaHouseCleaningPage />} />
                <Route path="/locations/:city/house-cleaning-services" element={<LocationPage serviceType="residential" />} />
                <Route path="/locations/:city/commercial-cleaning-services" element={<LocationPage serviceType="commercial" />} />
                <Route path="/locations/beavercreek/commercial-services" element={<BeavercreekCommercialPage />} />
                <Route path="/quote" element={<QuotePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<PostPage />} />
                <Route path="/about-us" element={<AboutPage />} />
                <Route path="/our-training-program" element={<OurTrainingProgram />} />
                <Route path="/careers" element={<HiringPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              </Suspense>
            </main>

            <Footer />
          </div>
        </ThemeProvider>
      </StaticRouter>
    </HelmetProvider>
    </CacheProvider>
  )

  const { cleanedHtml, css } = extractEmotionStyles(appHtml)

  return { appHtml: cleanedHtml, emotionCss: css, helmet: helmetContext.helmet }
}
