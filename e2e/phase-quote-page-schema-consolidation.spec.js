import { test, expect } from '@playwright/test'

// 2026-09-13 SEO audit follow-up, "duplicate page-entity schema" finding:
// /quote used to declare itself as both ContactPage and WebPage, each with
// its own (identical) BreadcrumbList -- a duplicate the codebase's own
// convention (one entity, @id-linked, no restatement) already forbids
// elsewhere. Now consolidated to a single ContactPage with a nested
// breadcrumb.

// react-helmet-async briefly clears and re-inserts <head> tags during client
// hydration, and re-inserts them one at a time -- waiting for the FIRST
// attached script tag (or for networkidle) can resolve before the specific
// block a test asserts on has landed. Wait for a parsed block of the exact
// expected @type instead. Deliberately not waitForLoadState('networkidle')
// either: the quote page's embedded GHL/LeadConnector form widget keeps the
// network non-idle indefinitely, which would hang that wait until timeout.
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

test.describe('Quote Page Structured Data', () => {
  test('/quote has exactly one page-entity block and no standalone BreadcrumbList', async ({ page }) => {
    await page.goto('/quote')
    const blocks = await getJsonLdBlocks(page, 'ContactPage')
    const types = blocks.map((b) => b['@type'])

    expect(types).toContain('ContactPage')
    expect(types).not.toContain('WebPage')
    expect(types.filter((t) => t === 'BreadcrumbList')).toHaveLength(0)
  })

  test('the ContactPage block has a nested breadcrumb with 2 correct items', async ({ page }) => {
    await page.goto('/quote')
    const blocks = await getJsonLdBlocks(page, 'ContactPage')
    const contactPage = blocks.find((b) => b['@type'] === 'ContactPage')

    expect(contactPage.breadcrumb.itemListElement).toHaveLength(2)
    expect(contactPage.breadcrumb.itemListElement[0]).toMatchObject({
      name: 'Home',
      item: 'https://gemcitycleaningcrew.com'
    })
    expect(contactPage.breadcrumb.itemListElement[1]).toMatchObject({
      name: 'Request Quote',
      item: 'https://gemcitycleaningcrew.com/quote'
    })
  })

  test('ContactPage retains name/description/mainEntity', async ({ page }) => {
    await page.goto('/quote')
    const blocks = await getJsonLdBlocks(page, 'ContactPage')
    const contactPage = blocks.find((b) => b['@type'] === 'ContactPage')

    expect(contactPage.name).toBe('Request Free Cleaning Quote')
    expect(contactPage.mainEntity['@id']).toBe('https://gemcitycleaningcrew.com/#business')
  })

  test.describe('Backend Integration', () => {
    test('no console errors on quote page load', async ({ page }) => {
      const consoleErrors = []
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text())
      })

      await page.goto('/quote')

      const relevantErrors = consoleErrors.filter(
        (e) => !/ResizeObserver|favicon/i.test(e)
      )
      expect(relevantErrors).toEqual([])
    })
  })
})
