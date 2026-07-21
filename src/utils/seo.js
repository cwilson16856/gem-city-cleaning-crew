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

// Extract featured image from WordPress post
export const getFeaturedImage = (post) => {
  if (!post) return null
  
  // Check if _embedded data is available
  if (post._embedded && post._embedded['wp:featuredmedia']) {
    const media = post._embedded['wp:featuredmedia'][0]
    return {
      url: media.source_url,
      alt: media.alt_text || post.title?.rendered || '',
      caption: media.caption?.rendered || '',
      sizes: media.media_details?.sizes || {}
    }
  }
  
  // Fallback for featured_media ID
  if (post.featured_media) {
    return {
      id: post.featured_media,
      url: null, // Would need separate API call
      alt: post.title?.rendered || ''
    }
  }
  
  return null
}

// Generate structured data for articles
export const generateArticleStructuredData = (post, seoData = null) => {
  if (!post) return null
  
  const baseData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title?.rendered || '',
    description: getSafeExcerpt(post),
    datePublished: post.date,
    dateModified: post.modified,
    author: {
      '@type': 'Person',
      name: post._embedded?.author?.[0]?.name || 'Gem City Cleaning Crew'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Gem City Cleaning Crew',
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL
      }
    }
  }
  
  // Add featured image if available
  const featuredImage = getFeaturedImage(post)
  if (featuredImage?.url) {
    baseData.image = {
      '@type': 'ImageObject',
      url: featuredImage.url,
      caption: featuredImage.caption
    }
  }
  
  // Add RankMath SEO data if available
  if (seoData) {
    if (seoData.title) baseData.headline = seoData.title
    if (seoData.description) baseData.description = seoData.description
  }
  
  return baseData
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

// Extract keywords from RankMath or content
export const extractKeywords = (post, seoData = null) => {
  const keywords = []
  
  // From RankMath SEO data
  if (seoData?.focus_keywords) {
    keywords.push(...seoData.focus_keywords.split(',').map(k => k.trim()))
  }
  
  // From categories
  if (post._embedded?.['wp:term']) {
    const categories = post._embedded['wp:term'].find(terms => 
      terms.some(term => term.taxonomy === 'category')
    )
    if (categories) {
      keywords.push(...categories.map(cat => cat.name))
    }
    
    // From tags
    const tags = post._embedded['wp:term'].find(terms => 
      terms.some(term => term.taxonomy === 'post_tag')
    )
    if (tags) {
      keywords.push(...tags.map(tag => tag.name))
    }
  }
  
  return [...new Set(keywords)] // Remove duplicates
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

// Generate social media meta tags data
export const generateSocialMetaData = (post, seoData = null, featuredImage = null) => {
  const title = seoData?.title || post.title?.rendered || ''
  const description = seoData?.description || getSafeExcerpt(post)
  const image = featuredImage?.url || LOGO_URL

  return {
    title,
    description,
    image,
    type: 'article',
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE
  }
}