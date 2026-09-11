// This module runs both in the browser (client bundle) and in Node (SSR
// prerender + build scripts) — stripTags picks the right sanitizer for
// whichever environment it's actually called in. See sanitizeHtml.js for why
// (plain dompurify needs a real `window`, and isomorphic-dompurify's jsdom
// dependency doesn't work on the Node version this build environment uses).
import { stripTags } from './sanitizeHtml'

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://gemcitycleaningcrew.com'
const LOGO_URL = `${SITE_URL}/logo.png`
const TWITTER_HANDLE = import.meta.env.VITE_TWITTER_HANDLE || ''

// Clean HTML content for meta descriptions
export const cleanHtmlForMeta = (html, maxLength = 160) => {
  if (!html) return ''
  
  // Remove HTML tags
  const cleanText = stripTags(html)
  
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

// NOTE: the site-wide LocalBusiness generator used to live here as
// generateLocalBusinessStructuredData(). It's now generateLocalBusinessSchema()
// in ./localBusinessSchema.js (the @id-linked, single-source-of-truth
// version used by App.jsx / entry-server.jsx) — this duplicate was deleted
// 2026-09-11 as part of the SEO audit's Critical schema-consolidation fix.

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
  const cleanText = stripTags(content)
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