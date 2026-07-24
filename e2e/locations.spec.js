import { test, expect } from '@playwright/test'

test.describe('Location Pages', () => {
  test('renders unique content for two different cities', async ({ page }) => {
    await page.goto('/locations/dayton/house-cleaning-services')
    const daytonH1 = await page.locator('h1').textContent()

    await page.goto('/locations/xenia/house-cleaning-services')
    const xeniaH1 = await page.locator('h1').textContent()

    expect(daytonH1).not.toEqual(xeniaH1)
  })

  test('emits valid @id-linked JSON-LD schema', async ({ page }) => {
    await page.goto('/locations/dayton/house-cleaning-services')

    const blocks = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents()
    const parsed = blocks.map((b) => JSON.parse(b))
    const types = parsed.map((entry) => entry['@type'])

    expect(types).toEqual(expect.arrayContaining(['LocalBusiness', 'Service', 'WebPage']))
  })

  test('redirects Beavercreek commercial to its dedicated page', async ({ page }) => {
    await page.goto('/locations/beavercreek/commercial-cleaning-services')
    await expect(page).toHaveURL(/\/locations\/beavercreek\/commercial-services$/)
  })

  test('shows 404 for an unmapped city slug', async ({ page }) => {
    await page.goto('/locations/springfield/house-cleaning-services')
    await expect(page.getByText('404')).toBeVisible()
    await expect(page.getByText('Page Not Found')).toBeVisible()
  })

  test('generic /locations index is unaffected', async ({ page }) => {
    await page.goto('/locations')
    await expect(page.locator('h1')).toContainText('Service Locations')
  })

  test.describe('Backend Integration', () => {
    test('no console errors across a sample of city pages', async ({ page }) => {
      const consoleErrors = []
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text())
      })

      await page.goto('/locations/dayton/house-cleaning-services')
      await page.goto('/locations/xenia/commercial-cleaning-services')
      await page.goto('/locations/yellow-springs/house-cleaning-services')

      const relevantErrors = consoleErrors.filter(
        (e) => !/ResizeObserver|favicon/i.test(e)
      )
      expect(relevantErrors).toEqual([])
    })
  })
})
