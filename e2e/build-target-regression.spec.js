import { test, expect } from '@playwright/test'

// Regression guard for the 2026-09-13 LCP audit's build.target tightening
// (vite.config.js -> build.target: ['es2020']): confirms basic interactivity
// still works post-build with the more modern esbuild target.
const PAGES = ['/', '/residential', '/commercial']

test.describe('Basic interactivity post build-target change', () => {
  test('/: FAQ accordion expands and a nav link navigates', async ({ page }) => {
    await page.goto('/')
    const accordionSummary = page.locator('.MuiAccordionSummary-root').first()
    await accordionSummary.click()
    await expect(page.locator('.MuiAccordion-root.Mui-expanded').first()).toBeVisible()

    await page.locator('a[href="/residential"]').first().click()
    await expect(page).toHaveURL(/\/residential/)
  })

  test('/residential: primary CTA navigates to /quote', async ({ page }) => {
    await page.goto('/residential')
    await page.locator('a[href^="/quote"]').first().click()
    await expect(page).toHaveURL(/\/quote/)
  })

  test('/commercial: primary CTA opens the quote modal', async ({ page }) => {
    // Commercial CTAs are still onClick-modal buttons on this branch (a
    // separate, unmerged PR converts them to real /quote?type=commercial
    // links) -- asserting against that future state here would be testing
    // a different branch's change, not this one's.
    await page.goto('/commercial')
    await page.getByRole('button', { name: /get.*quote/i }).first().click()
    await expect(page.locator('form, [role="dialog"]').first()).toBeVisible()
  })
})

test.describe('Backend Integration', () => {
  test('no console errors across build-target-touched pages', async ({ page }) => {
    const consoleErrors = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text())
    })

    for (const path of PAGES) {
      await page.goto(path)
    }

    const relevantErrors = consoleErrors.filter((e) => !/ResizeObserver|favicon/i.test(e))
    expect(relevantErrors).toEqual([])
  })
})
