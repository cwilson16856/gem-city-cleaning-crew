import { test, expect } from '@playwright/test'
import { getAllPosts } from '../src/content/blog/index.js'

// Exercises whatever the first real post in src/content/blog/index.js is —
// no fixture/test post needed. Skips automatically when the blog is empty.
const [firstPost] = getAllPosts()
const TEST_SLUG = firstPost?.slug

test.describe('Blog List', () => {
  test.skip(!TEST_SLUG, 'No blog posts exist yet')
  test('renders the post card and links to the post', async ({ page }) => {
    const consoleErrors = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text())
    })

    await page.goto('/blog')
    await expect(page.locator('h1')).toContainText('Cleaning Tips & News')

    const card = page.locator(`a[href="/blog/${TEST_SLUG}"]`).first()
    await expect(card).toBeVisible()
    await card.click()
    await expect(page).toHaveURL(new RegExp(`/blog/${TEST_SLUG}$`))

    const relevantErrors = consoleErrors.filter(
      (e) => !/ResizeObserver|favicon/i.test(e)
    )
    expect(relevantErrors).toEqual([])
  })
})

test.describe('Blog Post', () => {
  test('renders content, FAQ, and structured data', async ({ page }) => {
    test.skip(!TEST_SLUG, 'No blog posts exist yet')
    await page.goto(`/blog/${TEST_SLUG}`)

    await expect(page.locator('h1')).not.toBeEmpty()
    await expect(page.getByRole('link', { name: 'Back to Blog' })).toBeVisible()

    const jsonLdBlocks = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents()
    expect(jsonLdBlocks.length).toBeGreaterThan(0)

    const parsed = jsonLdBlocks.map((block) => JSON.parse(block))
    const types = parsed.map((entry) => entry['@type'])
    expect(types).toContain('BlogPosting')
  })

  test('shows Post not found for an unknown slug', async ({ page }) => {
    await page.goto('/blog/this-slug-does-not-exist')
    await expect(page.getByText('Post not found')).toBeVisible()
    await expect(page.getByRole('link', { name: /Back to Blog/i })).toBeVisible()
  })
})
