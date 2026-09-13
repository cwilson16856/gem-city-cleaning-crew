// Shared @id-linked JSON-LD generators, templated from the verified-correct
// pattern already used in CommercialCleaning/CommercialOneTimeCleaning.jsx:
// LocalBusiness and Service are separate top-level blocks linked by @id
// (rather than nesting one inside the other), aggregateRating lives on
// LocalBusiness (NOT Service — Google's review-snippet rich result only
// supports LocalBusiness/Organization/Product as the parent type), and
// breadcrumb is nested inside a WebPage block rather than emitted as its
// own standalone BreadcrumbList (this codebase's commercial-page convention).

import { CITIES } from '../data/locations'

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://gemcitycleaningcrew.com'
const BUSINESS_ID = `${SITE_URL}/#business`

// Every city with a dedicated location page (src/data/locations.js) — the
// single site-wide LocalBusiness block (see App.jsx / entry-server.jsx) uses
// the full list; a page-specific Service block still passes its own narrower
// areaServedCities via generateServiceSchema below.
export const ALL_SERVICE_AREA_CITIES = Object.values(CITIES).map((c) => c.name)

// Real coordinates for the business's GBP location, visible in the site's
// own Google Maps embed (pb= param decodes to this lat/long) but previously
// never added to schema — see 2026-09-11 SEO audit, Local SEO finding #4.
const GEO = { '@type': 'GeoCoordinates', latitude: 39.76337, longitude: -84.13520 }

export const generateLocalBusinessSchema = (areaServedCities = ALL_SERVICE_AREA_CITIES) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': BUSINESS_ID,
  name: 'Gem City Cleaning Crew',
  alternateName: 'Gem City Cleaning',
  url: SITE_URL,
  image: [`${SITE_URL}/logo.png`],
  logo: `${SITE_URL}/logo.png`,
  description: 'Professional residential and commercial cleaning services in Dayton, OH. We make life easier with reliable, thorough cleaning.',
  slogan: 'We Make Life Easier',
  foundingDate: '2017',
  founder: [
    { '@type': 'Person', name: 'Chris Wilson' },
    { '@type': 'Person', name: 'Macy Wilson' }
  ],
  telephone: '937-892-4157',
  email: 'info@gemcitycleaningcrew.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dayton',
    addressRegion: 'OH',
    addressCountry: 'US'
  },
  geo: GEO,
  openingHours: ['Mo-Fr 10:00-18:00', 'Sa 10:00-14:00'],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: ['Cash', 'Credit Card', 'Check', 'PayPal', 'Venmo'],
  areaServed: areaServedCities.map((name) => ({ '@type': 'City', name, addressRegion: 'OH' })),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.6',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '90',
    reviewCount: '90'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cleaning Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Cleaning', description: 'Professional house cleaning services for homes and apartments' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Cleaning', description: 'Office and commercial building cleaning services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deep Cleaning', description: 'Thorough deep cleaning services for homes and businesses' } }
    ]
  },
  contactPoint: [
    { '@type': 'ContactPoint', telephone: '937-892-4157', contactType: 'customer service', availableLanguage: 'English' },
    { '@type': 'ContactPoint', email: 'info@gemcitycleaningcrew.com', contactType: 'customer service', availableLanguage: 'English' }
  ],
  sameAs: [
    'https://www.yelp.com/biz/gem-city-cleaning-crew-dayton',
    'https://www.facebook.com/GemCityCleaningCrew',
    'https://www.instagram.com/gemcitycleaningcrew',
    'https://www.linkedin.com/company/gem-city-cleaning-crew'
  ]
})

export const generateServiceSchema = ({ id, name, description, serviceType, areaServedCities = [], url }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': id,
  name,
  description,
  provider: { '@id': BUSINESS_ID },
  serviceType,
  areaServed: areaServedCities.map((name) => ({ '@type': 'City', name, addressRegion: 'OH' })),
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: url,
    servicePhone: '937-892-4157',
    availableLanguage: 'English'
  }
})

export const generateLocationWebPageSchema = ({ id, url, name, description, aboutId, breadcrumbs }) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': id,
  url,
  name,
  description,
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: SITE_URL, name: 'Gem City Cleaning Crew' },
  about: { '@id': aboutId },
  mainEntity: { '@id': BUSINESS_ID },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: crumb.url
    }))
  }
})

// Not for a rich-result/SERP claim -- Google retired FAQ rich results for
// all sites May 7 2026 -- but so crawlers and LLM answer engines can parse
// the Q&A pairing directly rather than inferring it from heading/paragraph
// proximity. faqs: [{ question, answer }] -- same shape as blogSchema.js's
// post.faqs; kept as a separate function here (not imported from there)
// since that file is scoped to blog content, this one to location/service
// pages, matching the existing @id-linked pattern in this file.
export const generateFAQPageSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer }
  }))
})
