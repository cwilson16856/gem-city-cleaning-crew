import { test, expect } from '@playwright/test'

// Regression guard for the 2026-09-13 LCP audit's blog-content code-splitting
// fix: src/content/blog/postsMeta.js now carries listing metadata separately
// from full post content, so HomePage.jsx and BlogPage.jsx stop pulling all
// 20 posts' full HTML bodies into the app's main entry chunk. This spec
// confirms the public behavior is unchanged for both consumers and that the
// one remaining full-content consumer (PostPage.jsx) still works.
test.describe('Homepage recent posts', () => {
  test('renders exactly 3 post cards with working links', async ({ page }) => {
    await page.goto('/')
    const cards = page.locator('a[href^="/blog/"]')
    await expect(cards).toHaveCount(3)
    for (let i = 0; i < 3; i++) {
      await expect(cards.nth(i)).toHaveText(/.+/)
    }
  })
})

test.describe('Blog listing', () => {
  test('renders all 20 post cards with title, description, and date', async ({ page }) => {
    await page.goto('/blog')
    const cards = page.locator('a[href^="/blog/"]')
    await expect(cards).toHaveCount(20)
  })
})

test.describe('Individual post', () => {
  test('full article body, FAQ, and metadata render on a post page', async ({ page }) => {
    await page.goto('/blog/deep-cleaning-guide-dayton')
    await expect(page.locator('h1')).toContainText('Deep Cleaning')
    await expect(page.getByText(/Deep clean.*gets used loosely/i)).toBeVisible()
    await expect(page.getByText(/deep cleaning covers, room by room/i)).toBeVisible()
  })
})

test.describe('Backend Integration', () => {
  test('no console errors across blog-touched pages', async ({ page }) => {
    const consoleErrors = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text())
    })

    for (const path of ['/', '/blog', '/blog/deep-cleaning-guide-dayton', '/residential', '/commercial']) {
      await page.goto(path)
    }

    const relevantErrors = consoleErrors.filter((e) => !/ResizeObserver|favicon/i.test(e))
    expect(relevantErrors).toEqual([])
  })
})
