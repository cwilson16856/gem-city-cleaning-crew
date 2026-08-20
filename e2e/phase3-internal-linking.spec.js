import { test, expect } from '@playwright/test'

// The real, non-drifted city list (src/data/locations.js CITY_SLUGS) — used
// to assert nothing in the nav points at a city with no backing page.
const REAL_CITY_SLUGS = [
  'dayton', 'kettering', 'oakwood', 'centerville', 'miamisburg', 'springboro',
  'huber-heights', 'riverside', 'xenia', 'beavercreek', 'fairborn',
  'yellow-springs', 'tipp-city', 'bellbrook', 'vandalia', 'troy'
]

test.describe('Internal Linking', () => {
  test('AreasWeServe renders real links to location pages on a service page', async ({ page }) => {
    await page.goto('/residential')

    const daytonLink = page.locator('a[href="/locations/dayton/house-cleaning-services"]')
    await daytonLink.scrollIntoViewIfNeeded()
    await expect(daytonLink).toBeVisible()

    await daytonLink.click()
    await expect(page).toHaveURL('/locations/dayton/house-cleaning-services')
    await expect(page.getByText('404')).not.toBeVisible()
  })

  test('AreasWeServe leaves unmapped cities as plain, non-linked labels', async ({ page }) => {
    await page.goto('/residential')
    // Springfield has no CITY_SLUGS entry — must not render as a link.
    const springfieldLink = page.locator('a:has-text("Springfield")')
    await expect(springfieldLink).toHaveCount(0)
  })

  test('Header Locations dropdown has zero dead links (Residential submenu)', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Locations' }).click()
    await page.getByRole('menuitem', { name: 'Residential' }).click()

    const links = page.locator('a[role="menuitem"][href^="/locations/"][href$="/house-cleaning-services"]')
    const count = await links.count()
    expect(count).toBe(REAL_CITY_SLUGS.length)

    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute('href')
      const slug = href.split('/')[2]
      expect(REAL_CITY_SLUGS).toContain(slug)
    }
  })

  test('Header Locations dropdown has zero dead links (Commercial submenu)', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Locations' }).click()
    await page.getByRole('menuitem', { name: 'Commercial' }).click()

    const links = page.locator(
      'a[role="menuitem"][href^="/locations/"][href$="/commercial-cleaning-services"], a[role="menuitem"][href="/locations/beavercreek/commercial-services"]'
    )
    const count = await links.count()
    expect(count).toBe(REAL_CITY_SLUGS.length)

    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute('href')
      const slug = href === '/locations/beavercreek/commercial-services'
        ? 'beavercreek'
        : href.split('/')[2]
      expect(REAL_CITY_SLUGS).toContain(slug)
    }
  })

  test.describe('Backend Integration', () => {
    test('no console errors clicking through header + AreasWeServe links', async ({ page }) => {
      const consoleErrors = []
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text())
      })

      await page.goto('/residential')
      await page.locator('a[href="/locations/dayton/house-cleaning-services"]').click()
      await expect(page.getByText('404')).not.toBeVisible()

      await page.goto('/')
      await page.getByRole('button', { name: 'Locations' }).click()
      await page.getByRole('menuitem', { name: 'Residential' }).click()
      await page.locator('a[role="menuitem"][href="/locations/troy/house-cleaning-services"]').click()
      await expect(page.getByText('404')).not.toBeVisible()

      const relevantErrors = consoleErrors.filter(
        (e) => !/ResizeObserver|favicon/i.test(e)
      )
      expect(relevantErrors).toEqual([])
    })
  })
})
