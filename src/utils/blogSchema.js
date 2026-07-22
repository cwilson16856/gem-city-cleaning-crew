// JSON-LD generators specific to the self-hosted blog.
// Kept separate from utils/seo.js, which stays the generic/site-wide utility file.

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://gemcitycleaningcrew.com'
const LOGO_URL = `${SITE_URL}/logo.png`

const PUBLISHER = {
  '@type': 'Organization',
  name: 'Gem City Cleaning Crew',
  logo: {
    '@type': 'ImageObject',
    url: LOGO_URL
  }
}

export const generateBlogPostingStructuredData = (post, url) => {
  if (!post) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author || 'Gem City Cleaning Crew'
    },
    publisher: PUBLISHER,
    image: post.coverImage ? `${SITE_URL}${post.coverImage}` : LOGO_URL,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  }
}

export const generateFAQPageStructuredData = (faqs) => {
  if (!faqs || faqs.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export const generateHowToStructuredData = (post) => {
  if (!post?.howToSteps || post.howToSteps.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: post.howToTitle || post.title,
    step: post.howToSteps.map((step) => ({
      '@type': 'HowToStep',
      name: step.name,
      text: step.text
    }))
  }
}
