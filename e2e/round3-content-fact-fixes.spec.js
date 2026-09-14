import { test, expect } from '@playwright/test'

// 2026-09-13 SEO audit round-3 follow-up. Two independent, previously-flagged
// content-accuracy findings covered in one file since both are pure
// live-page-copy regression checks:
//
// 1. The pre-listing blog post's stale "38 days on market" stat (removed
//    from the post body in round 2, but never regenerated into llms.txt) and
//    the unattributed "1-10% higher" staging-premium claim (now attributed
//    to the real "29% of sellers' agents" NAR figure).
// 2. Two imprecise location-page facts: Riverside's Air Force museum claim
//    (largest MILITARY aviation museum, not aviation museum outright) and
//    Yellow Springs' Glen Helen acreage (1,000+ acres total, not "700-plus
//    acres of old-growth").

test.describe('Pre-listing blog post fact accuracy', () => {
  test('no longer claims a flat 38-day average or an unattributed 1-10% staging premium', async ({ page }) => {
    await page.goto('/blog/pre-listing-deep-clean-checklist-dayton')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    const bodyText = await page.locator('main').innerText()
    expect(bodyText).not.toMatch(/38[\s-]day/i)
    expect(bodyText).toContain("29% of sellers' agents")
  })
})

test.describe('llms.txt reflects the corrected blog description', () => {
  test('no stale stat or em dash', async ({ page }) => {
    const res = await page.request.get('/llms.txt')
    expect(res.ok()).toBe(true)
    const text = await res.text()
    expect(text).not.toMatch(/38 days on market/i)
    expect(text).not.toContain('—')
    expect(text).toContain("Dayton's fast-moving seller's market")
  })
})

test.describe('Location page fact precision', () => {
  test('Riverside location page correctly scopes the Air Force museum claim', async ({ page }) => {
    await page.goto('/locations/riverside/house-cleaning-services')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    const bodyText = await page.locator('main').innerText()
    expect(bodyText).toContain('largest military aviation museum')
    expect(bodyText).not.toContain('largest aviation museum in the world')
  })

  test('Yellow Springs location page states the correct Glen Helen acreage', async ({ page }) => {
    await page.goto('/locations/yellow-springs/house-cleaning-services')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    const bodyText = await page.locator('main').innerText()
    expect(bodyText).toContain('1,000-plus-acre Glen Helen')
    expect(bodyText).not.toContain('700-plus acres of old-growth')
  })
})
