import DOMPurify from 'dompurify'

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://gemcitycleaningcrew.com'
const LOGO_URL = `${SITE_URL}/logo.png`
const TWITTER_HANDLE = import.meta.env.VITE_TWITTER_HANDLE || ''

// Clean HTML content for meta descriptions
export const cleanHtmlForMeta = (html, maxLength = 160) => {
  if (!html) return ''
  
  // Remove HTML tags
  const cleanText = DOMPurify.sanitize(html, { ALLOWED_TAGS: [] })
  
  // Remove extra whitespace and trim
  const trimmedText = cleanText.replace(/\s+/g, ' ').trim()
  
  // Truncate to maxLength
  if (trimmedText.length <= maxLength) return trimmedText
  
  const truncated = trimmedText.substring(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')
  
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...'
}

// Get a safe excerpt for a post, guarding against corrupted WordPress
// excerpts. Some old Elementor posts have raw CSS leaked into their stored
// excerpt field, because WordPress's server-side excerpt generation strips
// HTML tags but not the text content of <style> blocks. Falls back to
// generating from the full content, which still has real <style> markup
// that DOMPurify strips correctly (tag and contents together).
export const getSafeExcerpt = (post, maxLength = 160) => {
  const cleaned = cleanHtmlForMeta(post?.excerpt?.rendered, maxLength)
  const looksLikeCss = /^\/\*!|[.#][\w-]+\s*\{|\}\s*\.[\w-]/.test(cleaned)

  if (cleaned && !looksLikeCss) return cleaned
  return cleanHtmlForMeta(post?.content?.rendered, maxLength)
}

// Generate SEO title with site name
export const generateSEOTitle = (title, siteName = 'Gem City Cleaning Crew', separator = ' | ') => {
  if (!title) return siteName
  return `${title}${separator}${siteName}`
}

// Generate structured data for local business
export const generateLocalBusinessStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Gem City Cleaning Crew',
    'image': [
      LOGO_URL
    ],
    'logo': LOGO_URL,
    'url': 'https://gemcitycleaningcrew.com',
    'telephone': '937-892-4157',
    'email': 'info@gemcitycleaningcrew.com',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Dayton',
      'addressRegion': 'OH',
      'addressCountry': 'US'
    },
    'description': 'Professional residential and commercial cleaning services in Dayton, OH. We make life easier with reliable, thorough cleaning.',
    'slogan': 'We Make Life Easier',
    'foundingDate': '2017',
    'priceRange': '$$',
    'serviceArea': [
      {
        '@type': 'City',
        'name': 'Dayton',
        'addressRegion': 'OH'
      },
      {
        '@type': 'City', 
        'name': 'Tipp City',
        'addressRegion': 'OH'
      },
      {
        '@type': 'City',
        'name': 'Troy',
        'addressRegion': 'OH'
      },
      {
        '@type': 'City',
        'name': 'Huber Heights',
        'addressRegion': 'OH'
      }
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Cleaning Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Residential Cleaning',
            'description': 'Professional house cleaning services for homes and apartments'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Commercial Cleaning',
            'description': 'Office and commercial building cleaning services'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Deep Cleaning',
            'description': 'Thorough deep cleaning services for homes and businesses'
          }
        }
      ]
    },
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'telephone': '937-892-4157',
        'contactType': 'customer service',
        'availableLanguage': 'English'
      },
      {
        '@type': 'ContactPoint',
        'email': 'info@gemcitycleaningcrew.com',
        'contactType': 'customer service',
        'availableLanguage': 'English'
      }
    ],
    'openingHours': [
      'Mo-Fr 08:00-18:00',
      'Sa 09:00-16:00'
    ],
    'sameAs': [
      'https://gemcitycleaningcrew.com'
    ]
  }
}

// Generate breadcrumb structured data
export const generateBreadcrumbStructuredData = (breadcrumbs) => {
  if (!breadcrumbs || breadcrumbs.length === 0) return null
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  }
}

// Calculate reading time
export const calculateReadingTime = (content) => {
  if (!content) return 0
  
  const wordsPerMinute = 200
  const cleanText = DOMPurify.sanitize(content, { ALLOWED_TAGS: [] })
  const wordCount = cleanText.trim().split(/\s+/).length
  
  return Math.ceil(wordCount / wordsPerMinute)
}

// Generate canonical URL
export const generateCanonicalUrl = (path) => {
  return `${SITE_URL}${path.startsWith('/') ? path : '/' + path}`
}

// Generate social media meta tags data for a local blog post
export const generateSocialMetaData = (post) => {
  return {
    title: post?.title || '',
    description: post?.description || '',
    image: post?.coverImage ? `${SITE_URL}${post.coverImage}` : LOGO_URL,
    type: 'article',
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE
  }
}