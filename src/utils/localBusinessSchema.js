// Shared @id-linked JSON-LD generators, templated from the verified-correct
// pattern already used in CommercialCleaning/CommercialOneTimeCleaning.jsx:
// LocalBusiness and Service are separate top-level blocks linked by @id
// (rather than nesting one inside the other), aggregateRating lives on
// LocalBusiness (NOT Service — Google's review-snippet rich result only
// supports LocalBusiness/Organization/Product as the parent type), and
// breadcrumb is nested inside a WebPage block rather than emitted as its
// own standalone BreadcrumbList (this codebase's commercial-page convention).

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://gemcitycleaningcrew.com'
const BUSINESS_ID = `${SITE_URL}/#business`

export const generateLocalBusinessSchema = (areaServedCities = []) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': BUSINESS_ID,
  name: 'Gem City Cleaning Crew',
  alternateName: 'Gem City Cleaning',
  telephone: '937-892-4157',
  email: 'info@gemcitycleaningcrew.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dayton',
    addressRegion: 'OH',
    addressCountry: 'US'
  },
  openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-17:00', 'Su 10:00-16:00'],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: ['Cash', 'Credit Card', 'Check', 'PayPal', 'Venmo'],
  areaServed: areaServedCities.map((name) => ({ '@type': 'City', name, addressRegion: 'OH' })),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '85',
    reviewCount: '85'
  },
  sameAs: [
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
