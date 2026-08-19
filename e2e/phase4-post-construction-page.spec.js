import { test, expect } from '@playwright/test'

test.describe('Post-Construction Cleaning Page', () => {
  test('renders with the correct H1 and title', async ({ page }) => {
    await page.goto('/post-construction-cleaning')
    await expect(page).toHaveTitle(/Post-Construction Cleaning/i)
    await expect(page.locator('h1')).toContainText('Post-Construction')
  })

  test('emits LocalBusiness, Service, WebPage, and FAQPage JSON-LD', async ({ page }) => {
    await page.goto('/post-construction-cleaning')

    const blocks = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents()
    const parsed = blocks.map((b) => JSON.parse(b))
    const types = parsed.map((entry) => entry['@type'])

    expect(types).toEqual(
      expect.arrayContaining(['LocalBusiness', 'Service', 'WebPage', 'FAQPage'])
    )
  })

  test('is reachable from the header Residential dropdown', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Residential' }).click()
    const link = page.getByRole('menuitem', { name: /Post-Construction Cleaning/i })
    await expect(link).toBeVisible()
    await link.click()
    await expect(page).toHaveURL('/post-construction-cleaning')
  })

  test('is cross-linked from the Commercial One-Time Cleaning page', async ({ page }) => {
    await page.goto('/commercial-one-time-cleaning')
    const link = page.locator('a[href="/post-construction-cleaning"]')
    await expect(link).toBeVisible()
  })

  test.describe('Backend Integration', () => {
    test('no console errors', async ({ page }) => {
      const consoleErrors = []
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text())
      })

      await page.goto('/post-construction-cleaning')

      const relevantErrors = consoleErrors.filter(
        (e) => !/ResizeObserver|favicon/i.test(e)
      )
      expect(relevantErrors).toEqual([])
    })
  })
})
