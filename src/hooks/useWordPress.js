import { useQuery, useInfiniteQuery } from 'react-query'
import wordpressApi from '../services/wordpressApi'

// Posts hooks
export const usePosts = (params = {}) => {
  return useQuery(
    ['posts', params],
    () => wordpressApi.getPosts(params),
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    }
  )
}

export const usePost = (slug) => {
  return useQuery(
    ['post', slug],
    () => wordpressApi.getPostBySlug(slug),
    {
      enabled: !!slug,
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
    }
  )
}

export const usePostById = (id) => {
  return useQuery(
    ['post', id],
    () => wordpressApi.getPostById(id),
    {
      enabled: !!id,
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
    }
  )
}

// Infinite scroll for posts
export const useInfinitePosts = (params = {}) => {
  return useInfiniteQuery(
    ['posts', 'infinite', params],
    ({ pageParam = 1 }) => wordpressApi.getPosts({ ...params, page: pageParam }),
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length === (params.per_page || 10) ? allPages.length + 1 : undefined
      },
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
    }
  )
}

// Pages hooks
export const usePages = (params = {}) => {
  return useQuery(
    ['pages', params],
    () => wordpressApi.getPages(params),
    {
      staleTime: 10 * 60 * 1000, // Pages change less frequently
      cacheTime: 20 * 60 * 1000,
    }
  )
}

export const usePage = (slug) => {
  return useQuery(
    ['page', slug],
    () => wordpressApi.getPageBySlug(slug),
    {
      enabled: !!slug,
      staleTime: 10 * 60 * 1000,
      cacheTime: 20 * 60 * 1000,
    }
  )
}

export const usePageById = (id) => {
  return useQuery(
    ['page', id],
    () => wordpressApi.getPageById(id),
    {
      enabled: !!id,
      staleTime: 10 * 60 * 1000,
      cacheTime: 20 * 60 * 1000,
    }
  )
}

// Categories hooks
export const useCategories = (params = {}) => {
  return useQuery(
    ['categories', params],
    () => wordpressApi.getCategories(params),
    {
      staleTime: 15 * 60 * 1000, // Categories change rarely
      cacheTime: 30 * 60 * 1000,
    }
  )
}

export const useCategory = (slug) => {
  return useQuery(
    ['category', slug],
    () => wordpressApi.getCategoryBySlug(slug),
    {
      enabled: !!slug,
      staleTime: 15 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
    }
  )
}

// Tags hooks
export const useTags = (params = {}) => {
  return useQuery(
    ['tags', params],
    () => wordpressApi.getTags(params),
    {
      staleTime: 15 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
    }
  )
}

// Media hooks
export const useMedia = (params = {}) => {
  return useQuery(
    ['media', params],
    () => wordpressApi.getMedia(params),
    {
      staleTime: 10 * 60 * 1000,
      cacheTime: 20 * 60 * 1000,
    }
  )
}

// Comments hooks
export const useComments = (params = {}) => {
  return useQuery(
    ['comments', params],
    () => wordpressApi.getComments(params),
    {
      staleTime: 2 * 60 * 1000, // Comments are more dynamic
      cacheTime: 5 * 60 * 1000,
    }
  )
}

// RankMath SEO hooks
export const useRankMathSEO = (postId) => {
  return useQuery(
    ['rankmath-seo', postId],
    () => wordpressApi.getRankMathSEO(postId),
    {
      enabled: !!postId,
      staleTime: 10 * 60 * 1000,
      cacheTime: 20 * 60 * 1000,
      retry: 1, // Don't retry too much if RankMath API is not available
    }
  )
}

export const useAllSEOData = () => {
  return useQuery(
    ['rankmath-seo', 'all'],
    () => wordpressApi.getAllSEOData(),
    {
      staleTime: 10 * 60 * 1000,
      cacheTime: 20 * 60 * 1000,
      retry: 1,
    }
  )
}

// Search hooks
export const useSearch = (query, params = {}) => {
  return useQuery(
    ['search', query, params],
    () => wordpressApi.search(query, params),
    {
      enabled: !!query && query.length > 2,
      staleTime: 2 * 60 * 1000,
      cacheTime: 5 * 60 * 1000,
    }
  )
}

// Custom post types hooks
export const useCustomPosts = (postType, params = {}) => {
  return useQuery(
    ['custom-posts', postType, params],
    () => wordpressApi.getCustomPosts(postType, params),
    {
      enabled: !!postType,
      staleTime: 5 * 60 * 1000,
      cacheTime: 10 * 60 * 1000,
    }
  )
}

// Site info hooks
export const useSiteInfo = () => {
  return useQuery(
    ['site-info'],
    () => wordpressApi.getSiteInfo(),
    {
      staleTime: 30 * 60 * 1000, // Site info rarely changes
      cacheTime: 60 * 60 * 1000,
    }
  )
}

// Menu hooks
export const useMenus = () => {
  return useQuery(
    ['menus'],
    () => wordpressApi.getMenus(),
    {
      staleTime: 20 * 60 * 1000,
      cacheTime: 40 * 60 * 1000,
      retry: 1,
    }
  )
}

export const useMenuItems = (menuId) => {
  return useQuery(
    ['menu-items', menuId],
    () => wordpressApi.getMenuItems(menuId),
    {
      enabled: !!menuId,
      staleTime: 20 * 60 * 1000,
      cacheTime: 40 * 60 * 1000,
      retry: 1,
    }
  )
} 