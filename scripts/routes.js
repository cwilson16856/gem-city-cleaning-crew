// Single source of truth for every route that has a matching <Route> in
// src/App.jsx — consumed by both scripts/generate-sitemap-and-llms.js (needs
// sourceFile/sourceFiles for lastmod) and scripts/prerender.js (just needs
// the path). Keeping one list means adding a page here automatically gets it
// into the sitemap AND the prerender pass, instead of two hand-maintained
// lists drifting apart.

import { CITY_SLUGS } from '../src/data/locations.js'

// Single source of truth for the production origin — used anywhere a script
// needs to build an absolute URL (sitemap, llms.txt, prerendered markdown).
export const SITE_URL = 'https://gemcitycleaningcrew.com'

// Static, non-dynamic routes (matches src/App.jsx's <Route> list). Excludes
// blog (generated from post data) and location pages (generated below from
// CITY_SLUGS) since those are dynamic.
//
// sourceFile: the real page-component file App.jsx lazy-imports for this
// path — used only to compute the sitemap's <lastmod> from that file's real
// last-commit date (see generate-sitemap-and-llms.js's getLastModDate).
// Ignored by prerender.js. changefreq/priority were removed sitewide (Google
// has ignored both for years) rather than replaced 1:1 with this field.
export const STATIC_ROUTES = [
  { path: '/', sourceFile: 'src/pages/HomePage.jsx' },
  { path: '/residential', sourceFile: 'src/pages/ResidentialCleaning/ResidentialPage.jsx' },
  { path: '/residential-house-cleaning-checklist', sourceFile: 'src/pages/ResidentialCleaning/ResidentialChecklistPage.jsx' },
  { path: '/recurring-cleaning-service', sourceFile: 'src/pages/ResidentialCleaning/RecurringCleaningPage.jsx' },
  { path: '/deep-cleaning', sourceFile: 'src/pages/ResidentialCleaning/DeepCleaningPage.jsx' },
  { path: '/move-in-out-cleaning', sourceFile: 'src/pages/ResidentialCleaning/MoveInOutCleaningPage.jsx' },
  { path: '/move-in-cleaning', sourceFile: 'src/pages/ResidentialCleaning/MoveInCleaning.jsx' },
  { path: '/post-construction-cleaning', sourceFile: 'src/pages/ResidentialCleaning/PostConstructionCleaning.jsx' },
  { path: '/move-out-cleaning', sourceFile: 'src/pages/ResidentialCleaning/MoveOutCleaning.jsx' },
  { path: '/airbnb-cleaning-service', sourceFile: 'src/pages/ResidentialCleaning/AirBnbCleaning.jsx' },
  { path: '/apartment-cleaning', sourceFile: 'src/pages/ResidentialCleaning/ApartmentCleaning.jsx' },
  { path: '/condo-cleaning', sourceFile: 'src/pages/ResidentialCleaning/CondoCleaning.jsx' },
  { path: '/kitchen-cleaning-services', sourceFile: 'src/pages/ResidentialCleaning/KitchenCleaningServices.jsx' },
  { path: '/bathroom-cleaning-services', sourceFile: 'src/pages/ResidentialCleaning/BathroomCleaningServices.jsx' },
  { path: '/commercial', sourceFile: 'src/pages/CommercialCleaning/CommercialPage.jsx' },
  { path: '/commercial-one-time-cleaning', sourceFile: 'src/pages/CommercialCleaning/CommercialOneTimeCleaning.jsx' },
  { path: '/office-cleaning', sourceFile: 'src/pages/CommercialCleaning/OfficeCleaning.jsx' },
  { path: '/office-cleaning-checklist', sourceFile: 'src/pages/CommercialCleaning/OfficeCleaningChecklist.jsx' },
  { path: '/retail-cleaning', sourceFile: 'src/pages/CommercialCleaning/RetailCleaning.jsx' },
  { path: '/daycare-cleaning', sourceFile: 'src/pages/CommercialCleaning/EducationCenterCleaning.jsx' },
  { path: '/apartment-building-cleaning', sourceFile: 'src/pages/CommercialCleaning/ApartmentBuildingCleaning.jsx' },
  { path: '/industrial-cleaning', sourceFile: 'src/pages/CommercialCleaning/IndustrialCleaning.jsx' },
  { path: '/locations', sourceFile: 'src/pages/LocationPage.jsx' },
  { path: '/quote', sourceFile: 'src/pages/QuotePage.jsx' },
  { path: '/blog', sourceFile: 'src/pages/BlogPage.jsx' },
  { path: '/about-us', sourceFile: 'src/pages/AboutPage.jsx' },
  { path: '/our-training-program', sourceFile: 'src/pages/OurTrainingProgram.jsx' },
  { path: '/careers', sourceFile: 'src/pages/HiringPage.jsx' },
  // noindex pages (see robots meta in their own components) — still real,
  // linkable pages a crawler can land on, so still worth a real prerendered
  // shell rather than the empty CSR one, just not in the sitemap.
  { path: '/privacy-policy', sourceFile: 'src/pages/PrivacyPolicy.jsx', sitemap: false },
  { path: '/terms-of-service', sourceFile: 'src/pages/TermsOfService.jsx', sitemap: false },
]

// City slugs with dedicated location pages — sourced from src/data/locations.js,
// the single source of truth (also used by LocationPage.jsx itself). Every
// city's URL follows the same pattern, including Beavercreek's commercial page
// (which renders a dedicated component, BeavercreekCommercialPage, but at the
// same generic URL shape as every other city).
//
// sourceFiles: every city's content is driven by locations.js itself, plus a
// dedicated page file for the two cities with a bespoke component instead of
// the shared CityServicePage template (Xenia residential, Beavercreek
// commercial) — both contribute real, git-tracked content to their route.
export const LOCATION_ROUTES = []
for (const city of CITY_SLUGS) {
  const residentialSourceFiles =
    city === 'xenia'
      ? ['src/data/locations.js', 'src/pages/Locations/Xenia/HouseCleaning/XeniaHouseCleaningPage.jsx']
      : ['src/data/locations.js']
  const commercialSourceFiles =
    city === 'beavercreek'
      ? ['src/data/locations.js', 'src/pages/Locations/Beavercreek/CommercialCleaning/BeavercreekCommercialPage.jsx']
      : ['src/data/locations.js']

  LOCATION_ROUTES.push({ path: `/locations/${city}/house-cleaning-services`, sourceFiles: residentialSourceFiles })
  LOCATION_ROUTES.push({ path: `/locations/${city}/commercial-cleaning-services`, sourceFiles: commercialSourceFiles })
}

// Routes that belong in the sitemap (excludes noindex pages like /privacy-policy).
export const SITEMAP_ROUTES = [...STATIC_ROUTES, ...LOCATION_ROUTES].filter((r) => r.sitemap !== false)

// Every route prerender.js needs to snapshot (includes noindex pages — they
// still deserve a real prerendered shell, just aren't in the sitemap).
export const ALL_PRERENDER_ROUTES = [...STATIC_ROUTES, ...LOCATION_ROUTES]
