import { test, expect } from '@playwright/test'

// Added 2026-09-14 SEO audit round-4. Covers Group B (fabricated "hundreds of
// X businesses/families" claims removed from 3 pages, with no invented
// replacement numbers), Group H (move-in/out ImageGallery schema URLs made
// absolute via generateCanonicalUrl, matching this repo's established
// pattern for every other schema URL), and the Group E/F blog content edits
// (freshness date bump + unsourced "60-90 days" claim removed).

test.describe('Fabricated "hundreds of" claims removed', () => {
  test('Beavercreek commercial page has no fabricated business count', async ({ page }) => {
    await page.goto('/locations/beavercreek/commercial-cleaning-services')
    await expect(page.getByText(/hundreds of/i)).toHaveCount(0)
    await expect(page.getByText(/support Beavercreek businesses from The Greene to Pentagon Boulevard/i)).toBeVisible()
  })

  test('/commercial has no fabricated business count', async ({ page }) => {
    await page.goto('/commercial')
    await expect(page.getByText(/hundreds of/i)).toHaveCount(0)
    await expect(page.getByText(/help Dayton businesses maintain clean, professional environments/i)).toBeVisible()
  })

  test('/recurring-cleaning-service has no fabricated family count', async ({ page }) => {
    await page.goto('/recurring-cleaning-service')
    await expect(page.getByText(/hundreds of/i)).toHaveCount(0)
    await expect(page.getByText(/Join the Dayton families who trust our 4\.6-star rated team/i)).toBeVisible()
  })
})

test.describe('/move-in-out-cleaning ImageGallery schema', () => {
  test('all image URLs are absolute, not relative', async ({ page }) => {
    // react-helmet-async briefly clears head-managed tags during the client
    // remount before re-inserting them -- poll past that transient window
    // instead of reading immediately after goto.
    const readGallery = async () => {
      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents()
      const parsed = blocks.map((b) => JSON.parse(b))
      return parsed.find((b) => b['@type'] === 'ImageGallery')
    }

    await page.goto('/move-in-out-cleaning')
    await expect.poll(async () => !!(await readGallery()), { timeout: 5000 }).toBe(true)
    const gallery = await readGallery()
    expect(gallery.image.length).toBeGreaterThan(0)
    for (const img of gallery.image) {
      expect(img.url).toMatch(/^https:\/\//)
      expect(img.contentUrl).toMatch(/^https:\/\//)
    }
  })
})

test.describe('Pre-listing deep clean blog post content refresh', () => {
  const path = '/blog/pre-listing-deep-clean-checklist-dayton'

  test('shows the updated H2 heading and freshness date, and drops the unsourced 60-90 days claim', async ({ page }) => {
    await page.goto(path)
    await expect(page.getByRole('heading', { name: /Why Rising Prices Make This Matter More/i })).toBeVisible()
    await expect(page.getByText(/Last Updated: September 14, 2026/i)).toBeVisible()
    await expect(page.getByText(/60-90 days/i)).toHaveCount(0)
  })
})

test.describe('Backend Integration', () => {
  test('no console errors across all round-4-touched pages', async ({ page }) => {
    const consoleErrors = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text())
    })
    for (const path of [
      '/locations/beavercreek/commercial-cleaning-services',
      '/commercial',
      '/recurring-cleaning-service',
      '/move-in-out-cleaning',
      '/blog/pre-listing-deep-clean-checklist-dayton',
    ]) {
      await page.goto(path)
    }
    const relevantErrors = consoleErrors.filter((e) => !/ResizeObserver|favicon/i.test(e))
    expect(relevantErrors).toEqual([])
  })
})
