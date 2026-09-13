import { test, expect } from '@playwright/test'

// Regression guard for the 2026-09-13 LCP audit's image-optimization fix:
// hero images converted from baseline JPEG to WebP, and the unsized-images
// Lighthouse failure fixed by adding real HTML width/height attributes.
const HERO_PAGES = [
  { path: '/', imageUrlPattern: /katja-rooke.*\.webp/ },
  { path: '/residential', imageUrlPattern: /clay-elliot.*\.webp/ },
  { path: '/commercial', imageUrlPattern: /benjamin-child.*\.webp/ },
]

const ALL_TOUCHED_PAGES = [
  '/', '/residential', '/commercial', '/kitchen-cleaning-services', '/bathroom-cleaning-services',
  '/recurring-cleaning', '/office-cleaning', '/retail-cleaning', '/daycare-cleaning',
  '/apartment-building-cleaning', '/locations/beavercreek/commercial-cleaning-services',
  '/locations/xenia/house-cleaning-services',
]

test.describe('Hero image format', () => {
  for (const { path, imageUrlPattern } of HERO_PAGES) {
    test(`${path}: hero image is served as WebP`, async ({ page }) => {
      const responsePromise = page.waitForResponse((res) => imageUrlPattern.test(res.url()))
      await page.goto(path)
      const response = await responsePromise
      expect(response.headers()['content-type']).toBe('image/webp')
    })
  }
})

test.describe('unsized-images fix (CSS aspect-ratio)', () => {
  // MUI's Box swallows top-level width/height props into its style system
  // rather than forwarding them as real HTML attributes (confirmed by
  // direct testing -- they never reach the DOM), so the fix for the two
  // genuinely responsive-height images (width: '100%', height: 'auto') is
  // an explicit CSS aspect-ratio matching the image's real dimensions,
  // which Lighthouse's unsized-images audit also accepts. The other 25
  // Box component="img" sites flagged by the original audit already have
  // both dimensions fully fixed via sx (e.g. width: 80, height: 80, or
  // width: '100%', height: 300) and don't actually trigger this audit --
  // no attribute or aspect-ratio addition was needed there.
  test('/residential: excellence-section image has a matching aspect-ratio', async ({ page }) => {
    await page.goto('/residential')
    const excellenceImage = page.locator('img[alt*="clean home interior"]')
    await expect(excellenceImage).toHaveCSS('aspect-ratio', '1200 / 797')
  })

  test('/commercial: excellence-section image has a matching aspect-ratio', async ({ page }) => {
    await page.goto('/commercial')
    const excellenceImage = page.locator('img[alt*="commercial window cleaning"]')
    await expect(excellenceImage).toHaveCSS('aspect-ratio', '1200 / 675')
  })
})

test.describe('Backend Integration', () => {
  test('no console errors across all image-touched pages', async ({ page }) => {
    const consoleErrors = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text())
    })

    for (const path of ALL_TOUCHED_PAGES) {
      await page.goto(path)
    }

    const relevantErrors = consoleErrors.filter((e) => !/ResizeObserver|favicon/i.test(e))
    expect(relevantErrors).toEqual([])
  })
})
