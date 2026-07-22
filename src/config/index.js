// Utility functions
export const isValidUrl = (url) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export const isProduction = () => import.meta.env.PROD
export const isDevelopment = () => import.meta.env.DEV
