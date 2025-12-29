// Environment configuration
const config = {
  wordpress: {
    url: process.env.REACT_APP_WORDPRESS_URL || 'https://gemcitycleaningcrew.com',
    apiBase: process.env.REACT_APP_WP_API_BASE || '/wp-json/wp/v2',
    rankmathApiBase: process.env.REACT_APP_RANKMATH_API_BASE || '/wp-json/rankmath/v1'
  },
  
  // API endpoints
  api: {
    wordpress: null, // Will be set below
    rankmath: null   // Will be set below
  },
  
  // App settings
  app: {
    timeout: 10000,
    isDevelopment: process.env.NODE_ENV === 'development'
  }
}

// Construct full API URLs
config.api.wordpress = `${config.wordpress.url}${config.wordpress.apiBase}`
config.api.rankmath = `${config.wordpress.url}${config.wordpress.rankmathApiBase}`

// Validation function
const validateConfig = () => {
  const { wordpress } = config
  
  if (!wordpress.url) {
    console.warn('⚠️ WordPress URL not configured')
    return false
  }
  
  try {
    new URL(wordpress.url)
  } catch (error) {
    console.error('❌ Invalid WordPress URL:', wordpress.url)
    return false
  }
  
  return true
}

// Debug function for development
const debugConfig = () => {
  if (config.app.isDevelopment) {
    console.group('🔧 API Configuration')
    console.log('WordPress URL:', config.wordpress.url)
    console.log('WordPress API:', config.api.wordpress)
    console.log('RankMath API:', config.api.rankmath)
    console.log('Environment:', process.env.NODE_ENV)
    console.groupEnd()
  }
}

// Initialize
const isValid = validateConfig()
if (isValid) {
  debugConfig()
} else {
  console.error('❌ Configuration validation failed')
}

export default config 