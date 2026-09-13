import { test, expect } from '@playwright/test'

// 2026-09-13 SEO audit follow-up, "local citation completeness" finding:
// a real, confirmed-live BBB profile was missing from sameAs, and
// openingHours used the deprecated simple-string format instead of
// openingHoursSpecification.

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

test.describe('Local Business Citations', () => {
  test('LocalBusiness sameAs includes the BBB profile URL', async ({ page }) => {
    await page.goto('/')
    const localBusiness = await getLocalBusinessBlock(page)
    expect(localBusiness.sameAs).toContain(
      'https://www.bbb.org/us/oh/dayton/profile/cleaning-services/gem-city-cleaning-crew-llc-0322-55058'
    )
  })

  test('LocalBusiness uses openingHoursSpecification, not openingHours', async ({ page }) => {
    await page.goto('/')
    const localBusiness = await getLocalBusinessBlock(page)
    expect(localBusiness.openingHours).toBeUndefined()
    expect(localBusiness.openingHoursSpecification).toHaveLength(2)
    expect(localBusiness.openingHoursSpecification[0]).toMatchObject({
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '18:00'
    })
    expect(localBusiness.openingHoursSpecification[1]).toMatchObject({
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '14:00'
    })
  })

  test('homepage hero rating link still points at the real GBP profile', async ({ page }) => {
    await page.goto('/')
    const link = page.getByRole('link', { name: /see all .* reviews on google/i })
    await expect(link).toHaveAttribute('href', 'https://www.google.com/maps?cid=7373519259471335388')
  })

  test.describe('Backend Integration', () => {
    test('no console errors on homepage', async ({ page }) => {
      const consoleErrors = []
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text())
      })

      await page.goto('/')

      const relevantErrors = consoleErrors.filter(
        (e) => !/ResizeObserver|favicon/i.test(e)
      )
      expect(relevantErrors).toEqual([])
    })
  })
})
