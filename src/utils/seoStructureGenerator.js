// SEO Structure Generator for React Migration
import { generateArticleStructuredData, generateLocalBusinessStructuredData } from './seo'

class SEOStructureGenerator {
  constructor(extractedData) {
    this.data = extractedData
    this.seoStructure = {
      routes: {},
      schemas: {},
      metaTags: {},
      redirects: [],
      sitemapEntries: [],
      recommendations: []
    }
  }

  // Generate complete SEO structure for React app
  generateStructure() {
    console.log('🔧 Generating SEO structure for React migration...')
    
    this.generateRoutes()
    this.generateSchemas()
    this.generateMetaTags()
    this.generateRedirects()
    this.generateSitemap()
    this.generateRecommendations()
    
    return this.seoStructure
  }

  // Generate React Router routes with SEO data
  generateRoutes() {
    const routes = {}
    
    // Pages
    this.data.pages?.forEach(page => {
      const routePath = page.slug === 'home' ? '/' : `/${page.slug}`
      
      routes[routePath] = {
        component: 'PageView',
        slug: page.slug,
        seo: {
          title: page.seo?.data?.title || page.title,
          description: page.seo?.data?.description || page.excerpt?.substring(0, 160),
          keywords: page.seo?.data?.keywords || '',
          canonical: page.url,
          ogImage: page.featuredImage?.source_url || null
        },
        content: {
          title: page.title,
          content: page.content,
          excerpt: page.excerpt,
          featuredImage: page.featuredImage
        },
        schema: this.generatePageSchema(page)
      }
    })
    
    // Posts
    this.data.posts?.forEach(post => {
      const routePath = `/blog/${post.slug}`
      
      routes[routePath] = {
        component: 'PostPage',
        slug: post.slug,
        seo: {
          title: post.seo?.data?.title || post.title,
          description: post.seo?.data?.description || post.excerpt?.substring(0, 160),
          keywords: post.seo?.data?.keywords || '',
          canonical: post.url,
          ogImage: post.featuredImage?.source_url || null
        },
        content: {
          title: post.title,
          content: post.content,
          excerpt: post.excerpt,
          featuredImage: post.featuredImage,
          author: post.author,
          date: post.created,
          modified: post.modified
        },
        schema: this.generatePostSchema(post)
      }
    })
    
    this.seoStructure.routes = routes
  }

  // Generate structured data schemas
  generateSchemas() {
    const schemas = {
      global: {
        LocalBusiness: generateLocalBusinessStructuredData(),
        BreadcrumbList: this.generateBreadcrumbSchema()
      },
      pages: {},
      posts: {}
    }
    
    // Page-specific schemas
    this.data.pages?.forEach(page => {
      schemas.pages[page.slug] = this.generatePageSchema(page)
    })
    
    // Post-specific schemas
    this.data.posts?.forEach(post => {
      schemas.posts[post.slug] = this.generatePostSchema(post)
    })
    
    this.seoStructure.schemas = schemas
  }

  // Generate page-specific schema
  generatePageSchema(page) {
    const schemas = []
    
    // Service pages get Service schema
    if (page.slug.includes('service') || page.slug.includes('cleaning')) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': page.title,
        'description': page.excerpt || page.title,
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'Gem City Cleaning Crew',
          'url': 'https://gemcitycleaningcrew.com'
        },
        'serviceType': 'Cleaning Service',
        'areaServed': {
          '@type': 'City',
          'name': 'Tipp City',
          'addressRegion': 'OH'
        }
      })
    }
    
    // Contact page gets ContactPoint schema
    if (page.slug.includes('contact')) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'name': page.title,
        'description': page.excerpt || 'Contact Gem City Cleaning Crew',
        'mainEntity': {
          '@type': 'LocalBusiness',
          'name': 'Gem City Cleaning Crew'
        }
      })
    }
    
    // About page gets AboutPage schema
    if (page.slug.includes('about')) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        'name': page.title,
        'description': page.excerpt || 'About Gem City Cleaning Crew'
      })
    }
    
    return schemas
  }

  // Generate post-specific schema
  generatePostSchema(post) {
    return [generateArticleStructuredData({
      title: post.title,
      description: post.excerpt,
      author: post.author?.name || 'Gem City Cleaning Crew',
      datePublished: post.created,
      dateModified: post.modified,
      image: post.featuredImage?.source_url,
      url: `https://gemcitycleaningcrew.com/blog/${post.slug}`
    })]
  }

  // Generate breadcrumb schema
  generateBreadcrumbSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://gemcitycleaningcrew.com'
        }
      ]
    }
  }

  // Generate meta tags for each route
  generateMetaTags() {
    const metaTags = {}
    
    Object.entries(this.seoStructure.routes).forEach(([path, route]) => {
      metaTags[path] = {
        title: route.seo.title,
        description: route.seo.description,
        keywords: route.seo.keywords,
        canonical: route.seo.canonical,
        
        // Open Graph
        'og:title': route.seo.title,
        'og:description': route.seo.description,
        'og:type': path.startsWith('/blog/') ? 'article' : 'website',
        'og:url': `https://gemcitycleaningcrew.com${path}`,
        'og:image': route.seo.ogImage,
        'og:site_name': 'Gem City Cleaning Crew',
        
        // Twitter
        'twitter:card': 'summary_large_image',
        'twitter:title': route.seo.title,
        'twitter:description': route.seo.description,
        'twitter:image': route.seo.ogImage,
        
        // Additional meta
        'author': route.content.author?.name || 'Gem City Cleaning Crew',
        'robots': 'index, follow'
      }
      
      // Article-specific meta
      if (path.startsWith('/blog/')) {
        metaTags[path]['article:published_time'] = route.content.date
        metaTags[path]['article:modified_time'] = route.content.modified
        metaTags[path]['article:author'] = route.content.author?.name || 'Gem City Cleaning Crew'
      }
    })
    
    this.seoStructure.metaTags = metaTags
  }

  // Generate redirect rules
  generateRedirects() {
    const redirects = []
    
    // Check for URL structure changes
    this.data.pages?.forEach(page => {
      const oldUrl = new URL(page.url).pathname
      const newUrl = page.slug === 'home' ? '/' : `/${page.slug}`
      
      if (oldUrl !== newUrl) {
        redirects.push({
          from: oldUrl,
          to: newUrl,
          type: '301',
          reason: 'URL structure change'
        })
      }
    })
    
    this.data.posts?.forEach(post => {
      const oldUrl = new URL(post.url).pathname
      const newUrl = `/blog/${post.slug}`
      
      if (oldUrl !== newUrl) {
        redirects.push({
          from: oldUrl,
          to: newUrl,
          type: '301',
          reason: 'Blog URL structure change'
        })
      }
    })
    
    this.seoStructure.redirects = redirects
  }

  // Generate sitemap entries
  generateSitemap() {
    const sitemapEntries = []
    
    Object.entries(this.seoStructure.routes).forEach(([path, route]) => {
      sitemapEntries.push({
        url: `https://gemcitycleaningcrew.com${path}`,
        lastmod: route.content.modified || route.content.date || new Date().toISOString(),
        changefreq: path.startsWith('/blog/') ? 'monthly' : 'weekly',
        priority: path === '/' ? '1.0' : 
                 path.includes('service') ? '0.9' : 
                 path.includes('contact') ? '0.8' : '0.7'
      })
    })
    
    this.seoStructure.sitemapEntries = sitemapEntries
  }

  // Generate SEO recommendations
  generateRecommendations() {
    const recommendations = []
    
    // Check for missing meta descriptions
    let missingDescriptions = 0
    Object.values(this.seoStructure.metaTags).forEach(meta => {
      if (!meta.description || meta.description.length < 120) {
        missingDescriptions++
      }
    })
    
    if (missingDescriptions > 0) {
      recommendations.push({
        type: 'warning',
        category: 'Meta Descriptions',
        message: `${missingDescriptions} pages have missing or short meta descriptions`,
        action: 'Add compelling meta descriptions (120-160 characters)'
      })
    }
    
    // Check for missing featured images
    let missingImages = 0
    Object.values(this.seoStructure.routes).forEach(route => {
      if (!route.seo.ogImage) {
        missingImages++
      }
    })
    
    if (missingImages > 0) {
      recommendations.push({
        type: 'info',
        category: 'Images',
        message: `${missingImages} pages missing featured images`,
        action: 'Add featured images for better social sharing'
      })
    }
    
    // Check for redirect needs
    if (this.seoStructure.redirects.length > 0) {
      recommendations.push({
        type: 'critical',
        category: 'Redirects',
        message: `${this.seoStructure.redirects.length} redirects needed`,
        action: 'Implement 301 redirects to preserve SEO rankings'
      })
    }
    
    // Performance recommendations
    recommendations.push({
      type: 'success',
      category: 'Performance',
      message: 'React app will improve site speed',
      action: 'Monitor Core Web Vitals after migration'
    })
    
    this.seoStructure.recommendations = recommendations
  }

  // Export structure as React Router config
  exportRouterConfig() {
    const routerConfig = Object.entries(this.seoStructure.routes).map(([path, route]) => {
      return {
        path,
        element: `<${route.component} slug="${route.slug}" />`,
        seo: route.seo,
        schema: route.schema
      }
    })
    
    return routerConfig
  }

  // Export as JSON
  exportToJSON() {
    return JSON.stringify(this.seoStructure, null, 2)
  }
}

export default SEOStructureGenerator 