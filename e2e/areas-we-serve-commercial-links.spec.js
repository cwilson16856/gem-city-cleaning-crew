import { test, expect } from '@playwright/test'

// Added 2026-09-13 SEO audit round-2. AreasWeServe's serviceType prop already
// existed (fixed intro copy in the prior round) but the location-chip Link
// itself still hardcoded /house-cleaning-services regardless of context,
// routing every commercial-page visitor into a residential location page.

const COMMERCIAL_CONTEXT_PAGES = [
  '/commercial',
  '/office-cleaning',
  '/retail-cleaning',
  '/industrial-cleaning',
  '/commercial-one-time-cleaning',
  '/apartment-building-cleaning',
  '/daycare-cleaning'
]

test.describe('AreasWeServe location chips route to the correct service type', () => {
  for (const path of COMMERCIAL_CONTEXT_PAGES) {
    test(`${path}: Dayton chip links to the commercial location page`, async ({ page }) => {
      await page.goto(path)
      const chip = page.getByRole('link', { name: 'Dayton', exact: true })
      await chip.scrollIntoViewIfNeeded()
      await expect(chip).toHaveAttribute('href', '/locations/dayton/commercial-cleaning-services')
    })
  }

  test('residential page (regression guard): Dayton chip still links to the residential location page', async ({ page }) => {
    await page.goto('/residential')
    const chip = page.getByRole('link', { name: 'Dayton', exact: true })
    await chip.scrollIntoViewIfNeeded()
    await expect(chip).toHaveAttribute('href', '/locations/dayton/house-cleaning-services')
  })

  test('a per-city commercial page (LocationPage dynamic route) also links correctly', async ({ page }) => {
    await page.goto('/locations/kettering/commercial-cleaning-services')
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Kettering/i)
    const chip = page.getByRole('link', { name: 'Dayton', exact: true })
    await chip.scrollIntoViewIfNeeded()
    await expect(chip).toHaveAttribute('href', '/locations/dayton/commercial-cleaning-services')
  })
})

test.describe('Backend Integration', () => {
  test('no console errors across all AreasWeServe call sites touched by this fix', async ({ page }) => {
    const consoleErrors = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text())
    })

    for (const path of [...COMMERCIAL_CONTEXT_PAGES, '/residential', '/locations/kettering/commercial-cleaning-services']) {
      await page.goto(path)
    }

    const relevantErrors = consoleErrors.filter((e) => !/ResizeObserver|favicon/i.test(e))
    expect(relevantErrors).toEqual([])
  })
})
