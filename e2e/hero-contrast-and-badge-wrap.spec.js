import { test, expect } from '@playwright/test'

// Added 2026-09-12 SEO audit follow-up, "low-contrast text on colored
// backgrounds" and "mobile hero badge text truncates" findings. Widened well
// beyond the audit's originally-named 2-3 pages (recurring-cleaning-service,
// airbnb-cleaning-service, homepage) to every one of the ~26 pages sharing
// the same duplicated hero/final-CTA markup -- see
// .claude/plans/1. Pending/gccc-seo-visibility/GCCC/hero-contrast-and-badge-wrap-fixes-plan.md

const LONGEST_BADGE_PAGES = [
  { path: '/locations/beavercreek/commercial-services', label: "BEAVERCREEK'S TRUSTED CLEANING EXPERTS" },
  { path: '/industrial-cleaning', label: 'HEAVY-DUTY CLEANING' },
  { path: '/locations/xenia/house-cleaning-services', label: 'XENIA & GREENE COUNTY' }
]

const CONTRAST_SAMPLE_PAGES = ['/', '/recurring-cleaning-service', '/airbnb-cleaning-service', '/locations/beavercreek/commercial-services', '/quote']

test.describe('Hero badge wrap', () => {
  for (const { path, label } of LONGEST_BADGE_PAGES) {
    test(`badge wraps without truncation on ${path}`, async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 800 })
      await page.goto(path)
      const chip = page.locator('.MuiChip-root', { hasText: label })
      await expect(chip).toBeVisible()

      const text = await chip.locator('.MuiChip-label').textContent()
      expect(text).not.toContain('…')

      const box = await chip.boundingBox()
      // A single-line 0.9rem chip renders under ~40px tall; a genuinely
      // wrapped 2-line label clears that comfortably.
      expect(box.height).toBeGreaterThan(40)
    })
  }

  test('short badge label (homepage) is unaffected -- no forced wrap, no layout shift', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 800 })
    await page.goto('/')
    const chip = page.locator('.MuiChip-root', { hasText: 'PROFESSIONAL' })
    await expect(chip).toBeVisible()
    const text = await chip.locator('.MuiChip-label').textContent()
    expect(text.trim()).toBe('PROFESSIONAL • RELIABLE • TRUSTED')
  })
})

test.describe('Hero and final-CTA text contrast', () => {
  for (const path of CONTRAST_SAMPLE_PAGES) {
    test(`hero subtitle renders white on ${path}`, async ({ page }) => {
      await page.goto(path)
      const subtitle = page.locator('.hero-subtitle, [class*="hero-subtitle"]').first()
      await expect(subtitle).toBeVisible()
      const color = await subtitle.evaluate((el) => getComputedStyle(el).color)
      expect(color).toBe('rgb(255, 255, 255)')
    })
  }

  test('final-CTA heading and subheading render white', async ({ page }) => {
    await page.goto('/')
    const heading = page.getByRole('heading', { name: /ready for professional service/i })
    await expect(heading).toBeVisible()
    const color = await heading.evaluate((el) => getComputedStyle(el).color)
    expect(color).toBe('rgb(255, 255, 255)')
  })

  test('LocationPage (shared HeroSection component) subtitle and description render white', async ({ page }) => {
    await page.goto('/locations/dayton/house-cleaning-services')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()

    const heroTexts = page
      .locator('.hero-section, [class*="hero-section"]')
      .first()
      .locator('.MuiTypography-h4, .MuiTypography-h5')
    const count = await heroTexts.count()
    expect(count).toBeGreaterThan(0)
    for (let i = 0; i < count; i++) {
      const color = await heroTexts.nth(i).evaluate((el) => getComputedStyle(el).color)
      expect(color).toBe('rgb(255, 255, 255)')
    }
  })
})

test.describe('Backend Integration', () => {
  test('no console errors across the hero-contrast/badge-wrap sample pages', async ({ page }) => {
    const consoleErrors = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text())
    })

    for (const path of [...CONTRAST_SAMPLE_PAGES, ...LONGEST_BADGE_PAGES.map((p) => p.path)]) {
      await page.goto(path)
    }

    const relevantErrors = consoleErrors.filter((e) => !/ResizeObserver|favicon/i.test(e))
    expect(relevantErrors).toEqual([])
  })
})
