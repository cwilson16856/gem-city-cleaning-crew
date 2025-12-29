export { default as config } from './config'
export { default } from './config'

// Re-export specific config sections for convenience
import config from './config'

export const wordpressConfig = config.wordpress
export const apiConfig = config.api
export const appConfig = config.app

// Utility functions
export const isValidUrl = (url) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export const buildApiUrl = (endpoint, baseUrl = config.api.wordpress) => {
  return `${baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`
}

export const isProduction = () => process.env.NODE_ENV === 'production'
export const isDevelopment = () => process.env.NODE_ENV === 'development' 