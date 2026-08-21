import { test, expect } from '@playwright/test'

// Regression guard for a real, live bug: the final "get-quote" CTA section
// (shared by these 5 pages) sets color: 'white' on its outer Box, but MUI's
// Typography applies its own theme-driven color via a CSS class, which beats
// inherited color regardless of the parent's style — so the heading/subtitle
// rendered in the theme's near-black default against the bright pink
// gradient, unreadable in production. Fix was adding explicit color: 'white'
// to each Typography directly, not just the container.
const PAGES_WITH_GET_QUOTE_CTA = [
  '/move-in-cleaning',
  '/move-out-cleaning',
  '/move-in-out-cleaning',
  '/deep-cleaning',
  '/post-construction-cleaning',
]

test.describe('Final CTA text contrast', () => {
  for (const path of PAGES_WITH_GET_QUOTE_CTA) {
    test(`${path}: get-quote CTA heading and subtitle are white`, async ({ page }) => {
      await page.goto(path)
      const cta = page.locator('#get-quote')
      await expect(cta.locator('h2').first()).toHaveCSS('color', 'rgb(255, 255, 255)')
      await expect(cta.locator('h6').first()).toHaveCSS('color', 'rgb(255, 255, 255)')
    })
  }

  test.describe('Backend Integration', () => {
    test('no console errors across all 5 CTA pages', async ({ page }) => {
      const consoleErrors = []
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text())
      })

      for (const path of PAGES_WITH_GET_QUOTE_CTA) {
        await page.goto(path)
      }

      const relevantErrors = consoleErrors.filter(
        (e) => !/ResizeObserver|favicon/i.test(e)
      )
      expect(relevantErrors).toEqual([])
    })
  })
})
