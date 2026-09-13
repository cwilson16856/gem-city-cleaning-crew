import { test, expect } from '@playwright/test'
import { getAllPosts } from '../src/content/blog/index.js'

// 2026-09-13 SEO audit follow-up, "self-serving review schema on blog"
// finding: aggregateRating was emitted on every blog page via the site-wide
// LocalBusiness injection. Blog posts are editorial content, not the
// reviewed entity, so Google's structured-data guidelines disallow it there.

const [firstPost] = getAllPosts()
const TEST_SLUG = firstPost?.slug

// react-helmet-async briefly clears and re-inserts <head> tags during client
// hydration, and re-inserts them one at a time -- waiting for the first
// attached script tag can resolve before the LocalBusiness block
// specifically has landed. Wait for a parsed LocalBusiness block instead.
const getLocalBusinessBlock = async (page) => {
  await page.waitForFunction(() => {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]')
    return Array.from(scripts).some((s) => {
      try { return JSON.parse(s.textContent)['@type'] === 'LocalBusiness' } catch { return false }
    })
  })
  const raw = await page.locator('script[type="application/ld+json"]').allTextContents()
  const blocks = raw.map((text) => JSON.parse(text))
  return blocks.find((b) => b['@type'] === 'LocalBusiness')
}

test.describe('Blog Structured Data', () => {
  test('/blog index LocalBusiness has no aggregateRating', async ({ page }) => {
    await page.goto('/blog')
    const localBusiness = await getLocalBusinessBlock(page)
    expect(localBusiness).toBeTruthy()
    expect(localBusiness.aggregateRating).toBeUndefined()
  })

  test.skip(!TEST_SLUG, 'No blog posts exist yet')
  test('a real blog post has no aggregateRating', async ({ page }) => {
    await page.goto(`/blog/${TEST_SLUG}`)
    const localBusiness = await getLocalBusinessBlock(page)
    expect(localBusiness).toBeTruthy()
    expect(localBusiness.aggregateRating).toBeUndefined()
  })

  test('homepage LocalBusiness still has aggregateRating', async ({ page }) => {
    await page.goto('/')
    const localBusiness = await getLocalBusinessBlock(page)
    expect(localBusiness).toBeTruthy()
    expect(localBusiness.aggregateRating).toMatchObject({ ratingValue: '4.6', reviewCount: '91' })
  })

  test.describe('Backend Integration', () => {
    test('no console errors on /blog and a blog post', async ({ page }) => {
      const consoleErrors = []
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text())
      })

      await page.goto('/blog')
      if (TEST_SLUG) {
        await page.goto(`/blog/${TEST_SLUG}`)
      }

      const relevantErrors = consoleErrors.filter(
        (e) => !/ResizeObserver|favicon/i.test(e)
      )
      expect(relevantErrors).toEqual([])
    })
  })
})
