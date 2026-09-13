import { test, expect } from '@playwright/test'

// 2026-09-13 SEO audit follow-up, "missing breadcrumb schema" finding:
// 9 residential service pages plus the /locations index had no BreadcrumbList
// schema at all. Fixed by reusing generateLocationWebPageSchema(), the same
// helper 30+ other pages (LocationPage.jsx templates, CommercialPage.jsx,
// etc.) already use correctly.

// react-helmet-async briefly clears and re-inserts <head> tags during client
// hydration, and re-inserts them one at a time -- waiting for the first
// attached script tag can resolve before the WebPage block specifically has
// landed. Wait for a parsed block of the exact expected @type instead.
const getJsonLdBlocks = async (page, expectedType) => {
  await page.waitForFunction((type) => {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]')
    return Array.from(scripts).some((s) => {
      try { return JSON.parse(s.textContent)['@type'] === type } catch { return false }
    })
  }, expectedType)
  const raw = await page.locator('script[type="application/ld+json"]').allTextContents()
  return raw.map((text) => JSON.parse(text))
}

const CASES = [
  { path: '/residential', crumbLength: 2, lastName: 'Residential', lastUrl: 'https://gemcitycleaningcrew.com/residential' },
  { path: '/deep-cleaning', crumbLength: 3, lastName: 'Deep Cleaning', lastUrl: 'https://gemcitycleaningcrew.com/deep-cleaning' },
  { path: '/move-in-cleaning', crumbLength: 3, lastName: 'Move-In Cleaning', lastUrl: 'https://gemcitycleaningcrew.com/move-in-cleaning' },
  { path: '/move-out-cleaning', crumbLength: 3, lastName: 'Move-Out Cleaning', lastUrl: 'https://gemcitycleaningcrew.com/move-out-cleaning' },
  { path: '/airbnb-cleaning-service', crumbLength: 3, lastName: 'Airbnb Cleaning Service', lastUrl: 'https://gemcitycleaningcrew.com/airbnb-cleaning-service' },
  { path: '/apartment-cleaning', crumbLength: 3, lastName: 'Apartment Cleaning', lastUrl: 'https://gemcitycleaningcrew.com/apartment-cleaning' },
  { path: '/condo-cleaning', crumbLength: 3, lastName: 'Condo Cleaning', lastUrl: 'https://gemcitycleaningcrew.com/condo-cleaning' },
  { path: '/kitchen-cleaning-services', crumbLength: 3, lastName: 'Kitchen Cleaning Services', lastUrl: 'https://gemcitycleaningcrew.com/kitchen-cleaning-services' },
  { path: '/bathroom-cleaning-services', crumbLength: 3, lastName: 'Bathroom Cleaning Services', lastUrl: 'https://gemcitycleaningcrew.com/bathroom-cleaning-services' },
  { path: '/locations', crumbLength: 2, lastName: 'Locations', lastUrl: 'https://gemcitycleaningcrew.com/locations' }
]

test.describe('Service Page Breadcrumb Schema', () => {
  for (const { path, crumbLength, lastName, lastUrl } of CASES) {
    test(`${path} has exactly one WebPage block with a correct breadcrumb`, async ({ page }) => {
      await page.goto(path)
      const blocks = await getJsonLdBlocks(page, 'WebPage')
      const webPages = blocks.filter((b) => b['@type'] === 'WebPage')

      expect(webPages).toHaveLength(1)
      const [webPage] = webPages
      const items = webPage.breadcrumb.itemListElement

      expect(items).toHaveLength(crumbLength)
      expect(items[0]).toMatchObject({ name: 'Home', item: 'https://gemcitycleaningcrew.com' })
      expect(items[items.length - 1]).toMatchObject({ name: lastName, item: lastUrl })
    })
  }

  test.describe('Backend Integration', () => {
    test('no console errors across all 10 pages', async ({ page }) => {
      const consoleErrors = []
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text())
      })

      for (const { path } of CASES) {
        await page.goto(path)
      }

      const relevantErrors = consoleErrors.filter(
        (e) => !/ResizeObserver|favicon/i.test(e)
      )
      expect(relevantErrors).toEqual([])
    })
  })
})
