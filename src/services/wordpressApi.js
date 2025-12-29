import axios from 'axios'
import config from '../config'

class WordPressAPI {
  constructor() {
    this.api = axios.create({
      baseURL: config.api.wordpress,
      timeout: config.app.timeout,
    })

    this.rankmathApi = axios.create({
      baseURL: config.api.rankmath,
      timeout: config.app.timeout,
    })

    // Add request interceptor for authentication if needed
    this.api.interceptors.request.use((config) => {
      // Add authentication headers here if needed
      // config.headers.Authorization = `Bearer ${token}`
      return config
    })

    // Add response interceptor for debugging
    this.api.interceptors.response.use(
      (response) => {
        console.log(`✅ WordPress API: ${response.config.method?.toUpperCase()} ${response.config.url}`)
        return response
      },
      (error) => {
        console.error(`❌ WordPress API Error: ${error.config?.method?.toUpperCase()} ${error.config?.url}`, error.message)
        return Promise.reject(error)
      }
    )

    this.rankmathApi.interceptors.response.use(
      (response) => {
        console.log(`✅ RankMath API: ${response.config.method?.toUpperCase()} ${response.config.url}`)
        return response
      },
      (error) => {
        console.warn(`⚠️ RankMath API: ${error.config?.method?.toUpperCase()} ${error.config?.url}`, error.message)
        return Promise.reject(error)
      }
    )
  }

  // Posts
  async getPosts(params = {}) {
    const response = await this.api.get('/posts', { params })
    return response.data
  }

  async getPostBySlug(slug) {
    const response = await this.api.get('/posts', { 
      params: { slug, _embed: true } 
    })
    return response.data[0] || null
  }

  async getPostById(id) {
    const response = await this.api.get(`/posts/${id}`, { 
      params: { _embed: true } 
    })
    return response.data
  }

  // Pages
  async getPages(params = {}) {
    const response = await this.api.get('/pages', { params })
    return response.data
  }

  async getPageBySlug(slug) {
    const response = await this.api.get('/pages', { 
      params: { slug, _embed: true } 
    })
    return response.data[0] || null
  }

  async getPageById(id) {
    const response = await this.api.get(`/pages/${id}`, { 
      params: { _embed: true } 
    })
    return response.data
  }

  // Categories
  async getCategories(params = {}) {
    const response = await this.api.get('/categories', { params })
    return response.data
  }

  async getCategoryBySlug(slug) {
    const response = await this.api.get('/categories', { 
      params: { slug } 
    })
    return response.data[0] || null
  }

  // Tags
  async getTags(params = {}) {
    const response = await this.api.get('/tags', { params })
    return response.data
  }

  // Media
  async getMedia(params = {}) {
    const response = await this.api.get('/media', { params })
    return response.data
  }

  // Comments
  async getComments(params = {}) {
    const response = await this.api.get('/comments', { params })
    return response.data
  }

  // RankMath SEO Data
  async getRankMathSEO(postId) {
    try {
      const response = await this.rankmathApi.get(`/posts/${postId}/seo`)
      return response.data
    } catch (error) {
      console.warn('RankMath API not available:', error.message)
      return null
    }
  }

  // Get SEO data for all posts
  async getAllSEOData() {
    try {
      const response = await this.rankmathApi.get('/seo-data')
      return response.data
    } catch (error) {
      console.warn('RankMath SEO data not available:', error.message)
      return []
    }
  }

  // Search
  async search(query, params = {}) {
    const response = await this.api.get('/search', { 
      params: { search: query, ...params } 
    })
    return response.data
  }

  // Custom post types (if you have any)
  async getCustomPosts(postType, params = {}) {
    const response = await this.api.get(`/${postType}`, { params })
    return response.data
  }

  // Site information
  async getSiteInfo() {
    try {
      const response = await axios.get(`${config.wordpress.url}/wp-json/`)
      return response.data
    } catch (error) {
      console.error('Failed to fetch site info:', error)
      return null
    }
  }

  // Menu items (if using REST API Menus plugin)
  async getMenus() {
    try {
      const response = await axios.get(`${config.wordpress.url}/wp-json/wp-api-menus/v2/menus`)
      return response.data
    } catch (error) {
      console.warn('Menu API not available:', error.message)
      return []
    }
  }

  async getMenuItems(menuId) {
    try {
      const response = await axios.get(`${config.wordpress.url}/wp-json/wp-api-menus/v2/menus/${menuId}`)
      return response.data
    } catch (error) {
      console.warn('Menu items not available:', error.message)
      return []
    }
  }

  // Debug method to check configuration
  getConfiguration() {
    return {
      wordpressUrl: config.wordpress.url,
      wpApiBase: config.wordpress.apiBase,
      rankmathApiBase: config.wordpress.rankmathApiBase,
      fullWpApiUrl: config.api.wordpress,
      fullRankmathApiUrl: config.api.rankmath,
      timeout: config.app.timeout,
      isDevelopment: config.app.isDevelopment
    }
  }
}

export default new WordPressAPI() 