// Single source of truth for every route that has a matching <Route> in
// src/App.jsx — consumed by both scripts/generate-sitemap-and-llms.js (needs
// changefreq/priority) and scripts/prerender.js (just needs the path). Keeping
// one list means adding a page here automatically gets it into the sitemap
// AND the prerender pass, instead of two hand-maintained lists drifting apart.

import { CITY_SLUGS } from '../src/data/locations.js'

// Single source of truth for the production origin — used anywhere a script
// needs to build an absolute URL (sitemap, llms.txt, prerendered markdown).
export const SITE_URL = 'https://gemcitycleaningcrew.com'

// Static, non-dynamic routes (matches src/App.jsx's <Route> list). Excludes
// blog (generated from post data) and location pages (generated below from
// CITY_SLUGS) since those are dynamic.
export const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/residential', changefreq: 'monthly', priority: '0.9' },
  { path: '/residential-house-cleaning-checklist', changefreq: 'monthly', priority: '0.7' },
  { path: '/recurring-cleaning-service', changefreq: 'monthly', priority: '0.9' },
  { path: '/deep-cleaning', changefreq: 'monthly', priority: '0.9' },
  { path: '/move-in-out-cleaning', changefreq: 'monthly', priority: '0.8' },
  { path: '/move-in-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/post-construction-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/move-out-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/airbnb-cleaning-service', changefreq: 'monthly', priority: '0.7' },
  { path: '/apartment-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/condo-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/kitchen-cleaning-services', changefreq: 'monthly', priority: '0.6' },
  { path: '/bathroom-cleaning-services', changefreq: 'monthly', priority: '0.6' },
  { path: '/commercial', changefreq: 'monthly', priority: '0.9' },
  { path: '/commercial-one-time-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/office-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/office-cleaning-checklist', changefreq: 'monthly', priority: '0.6' },
  { path: '/retail-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/school-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/apartment-building-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/industrial-cleaning', changefreq: 'monthly', priority: '0.7' },
  { path: '/locations', changefreq: 'monthly', priority: '0.8' },
  { path: '/quote', changefreq: 'monthly', priority: '0.8' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/about-us', changefreq: 'monthly', priority: '0.6' },
  // noindex pages (see robots meta in their own components) — still real,
  // linkable pages a crawler can land on, so still worth a real prerendered
  // shell rather than the empty CSR one, just not in the sitemap.
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3', sitemap: false },
  { path: '/terms-of-service', changefreq: 'yearly', priority: '0.3', sitemap: false },
]

// City slugs with dedicated location pages — sourced from src/data/locations.js,
// the single source of truth (also used by LocationPage.jsx itself).
// Beavercreek's commercial page has a special dedicated route.
export const LOCATION_ROUTES = []
for (const city of CITY_SLUGS) {
  LOCATION_ROUTES.push({ path: `/locations/${city}/house-cleaning-services`, changefreq: 'monthly', priority: '0.6' })
  LOCATION_ROUTES.push({
    path: city === 'beavercreek'
      ? '/locations/beavercreek/commercial-services'
      : `/locations/${city}/commercial-cleaning-services`,
    changefreq: 'monthly',
    priority: '0.6',
  })
}

// Routes that belong in the sitemap (excludes noindex pages like /privacy-policy).
export const SITEMAP_ROUTES = [...STATIC_ROUTES, ...LOCATION_ROUTES].filter((r) => r.sitemap !== false)

// Every route prerender.js needs to snapshot (includes noindex pages — they
// still deserve a real prerendered shell, just aren't in the sitemap).
export const ALL_PRERENDER_ROUTES = [...STATIC_ROUTES, ...LOCATION_ROUTES]
