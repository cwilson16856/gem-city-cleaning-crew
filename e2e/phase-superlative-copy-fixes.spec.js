import { test, expect } from '@playwright/test'

// Added 2026-09-13 SEO audit follow-up, "unsubstantiated superlatives" finding:
// "Best Recurring House Cleaning Service in Dayton" / "#1 Rated" appeared with
// no citation backing them. Replaced with "4.6-Star Rated", grounded in the
// real, already-published GBP rating (localBusinessSchema.js's aggregateRating).

test.describe('Superlative Copy Fixes', () => {
  test('Recurring Cleaning page has no unsubstantiated superlative claims', async ({ page }) => {
    await page.goto('/recurring-cleaning-service')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('4.6-Star Rated')
    await expect(page.getByRole('heading', { level: 1 })).not.toContainText('Best')
  })

  test('AirBnb Cleaning page has no unsubstantiated superlative claims', async ({ page }) => {
    await page.goto('/airbnb-cleaning-service')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('4.6-Star Rated')
    await expect(page.getByRole('heading', { level: 1 })).not.toContainText('Best')
  })

  test.describe('Backend Integration', () => {
    test('no console errors on either page after the copy change', async ({ page }) => {
      const consoleErrors = []
      page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()) })
      await page.goto('/recurring-cleaning-service')
      await page.goto('/airbnb-cleaning-service')
      const relevantErrors = consoleErrors.filter((e) => !/ResizeObserver|favicon/i.test(e))
      expect(relevantErrors).toEqual([])
    })
  })
})
