import { test, expect } from '@playwright/test'

// 2026-09-13 SEO audit round-3 follow-up, "fake AirBnb testimonials" finding:
// AirBnbCleaning.jsx had 3 unsourced, no-platform/no-date names (Sarah M.,
// Mike R., Jennifer L.) presented as real host reviews. Replaced with the
// same real, GBP-sourced VERIFIED_REVIEWS used on RecurringCleaningPage.jsx.

test.describe('AirBnb page testimonial sourcing', () => {
  test('shows real, dated, sourced reviews, not the old fabricated names', async ({ page }) => {
    await page.goto('/airbnb-cleaning-service')

    for (const fabricated of ['Sarah M.', 'Mike R.', 'Jennifer L.', 'Downtown Dayton Condo', 'Kettering Area Rentals', 'Oakwood Victorian']) {
      await expect(page.getByText(fabricated)).toHaveCount(0)
    }

    await expect(page.getByText('Amanda T.')).toBeVisible()
    await expect(page.getByText('Anne B.')).toBeVisible()
    await expect(page.getByText('Valerie P.')).toBeVisible()

    const byline = await page.getByText(/Google review, \w+ \d{4}/).first().textContent()
    expect(byline).toMatch(/Google review, \w+ \d{4}/)
  })

  test.describe('Backend Integration', () => {
    test('no console errors on /airbnb-cleaning-service', async ({ page }) => {
      const consoleErrors = []
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text())
      })
      await page.goto('/airbnb-cleaning-service')
      const relevantErrors = consoleErrors.filter((e) => !/ResizeObserver|favicon/i.test(e))
      expect(relevantErrors).toEqual([])
    })
  })
})
