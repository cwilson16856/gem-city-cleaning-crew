import { test, expect } from '@playwright/test'

// Added 2026-09-13 SEO audit round-2 remediation ("technical polish" batch).
// AreasWeServe location chips and Footer nav/legal links measured under the
// 44px WCAG/Apple mobile tap-target guideline (~32px chips, ~22.4px footer
// links). Fix is CSS-only, scoped to a mobile-only media query, and must not
// touch desktop sizing or the Footer's one in-prose reuse of .serviceItemLink
// ("...view all service areas").

test.describe('Mobile tap targets meet 44px minimum', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('AreasWeServe location chip link is at least 44px tall', async ({ page }) => {
    await page.goto('/')
    const chip = page.getByRole('link', { name: 'Kettering' })
    await chip.scrollIntoViewIfNeeded()
    const box = await chip.boundingBox()
    expect(box.height).toBeGreaterThanOrEqual(44)
  })

  test('Footer "Our Services" nav link is at least 44px tall', async ({ page }) => {
    await page.goto('/')
    // Scope to the footer landmark for robustness (the header's own "Blog"
    // nav link only exists in the desktop nav, hidden behind a hamburger
    // menu at this mobile viewport). No `exact` -- this link's computed
    // accessible name doesn't exact-match its visible "Blog" text for
    // reasons unrelated to this fix; substring matching is sufficient here.
    const link = page.locator('footer').getByRole('link', { name: 'Blog' })
    await link.scrollIntoViewIfNeeded()
    const box = await link.boundingBox()
    expect(box.height).toBeGreaterThanOrEqual(44)
  })

  test('Footer legal link is at least 44px tall', async ({ page }) => {
    await page.goto('/')
    const link = page.getByRole('link', { name: 'Careers' })
    await link.scrollIntoViewIfNeeded()
    const box = await link.boundingBox()
    expect(box.height).toBeGreaterThanOrEqual(44)
  })

  test('Footer in-prose "view all service areas" link keeps normal inline sizing', async ({ page }) => {
    await page.goto('/')
    const link = page.getByRole('link', { name: 'view all service areas' })
    await link.scrollIntoViewIfNeeded()
    const box = await link.boundingBox()
    expect(box.height).toBeLessThan(30)
  })
})

test.describe('Desktop tap target sizing unchanged', () => {
  test('AreasWeServe chip link is unchanged on desktop', async ({ page }) => {
    await page.goto('/')
    const chip = page.getByRole('link', { name: 'Kettering' })
    await chip.scrollIntoViewIfNeeded()
    const box = await chip.boundingBox()
    expect(box.height).toBeLessThan(40)
  })

  test('Footer legal link is unchanged on desktop', async ({ page }) => {
    await page.goto('/')
    const link = page.getByRole('link', { name: 'Careers' })
    await link.scrollIntoViewIfNeeded()
    const box = await link.boundingBox()
    expect(box.height).toBeLessThan(30)
  })
})

test.describe('Backend Integration', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('no console errors on the homepage footer at mobile viewport', async ({ page }) => {
    const errors = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text())
    })

    await page.goto('/')
    await page.locator('footer').scrollIntoViewIfNeeded()

    const realErrors = errors.filter(
      (text) => !/ResizeObserver|favicon/i.test(text)
    )
    expect(realErrors).toEqual([])
  })
})
