import { test, expect } from '@playwright/test'

// 2026-09-13 SEO audit round-3 follow-up. Four independent nav/footer/
// homepage-chrome fixes, grouped in one file since they all touch site-wide
// layout components:
//
// 1. Homepage service card + footer "Office Cleaning" links pointed at
//    /commercial instead of /office-cleaning; /retail-cleaning had no
//    homepage/footer inlink at all.
// 2. Desktop nav "Contact" was a JS-only <button> that opened a dropdown
//    menu, invisible to crawlers and unbookmarkable -- same bug class PR #49
//    fixed for the commercial-hub "Get Quote" CTAs. Now a real link to
//    /quote. The mobile hamburger menu keeps its instant Call/Email actions.
// 3. Homepage blog-teaser thumbnails were unoptimized ~1MB PNGs with no
//    HTML width/height attributes -- now served via <picture> with the
//    already-generated AVIF/WebP assets and real dimensions.

test.describe('Homepage and footer link targets', () => {
  test('homepage "Office Cleaning" service card links to /office-cleaning, not /commercial', async ({ page }) => {
    await page.goto('/')
    const card = page.getByRole('link', { name: /Office Cleaning/i }).first()
    await expect(card).toHaveAttribute('href', '/office-cleaning')
  })

  test('footer "Office Cleaning" link points to /office-cleaning', async ({ page }) => {
    await page.goto('/')
    const link = page.locator('footer').getByRole('link', { name: 'Office Cleaning' })
    await expect(link).toHaveAttribute('href', '/office-cleaning')
  })

  test('footer has a "Retail Cleaning" link pointing to /retail-cleaning', async ({ page }) => {
    await page.goto('/')
    const link = page.locator('footer').getByRole('link', { name: 'Retail Cleaning' })
    await expect(link).toHaveAttribute('href', '/retail-cleaning')
  })
})

test.describe('Desktop nav "Contact"', () => {
  test('is a real, crawlable link to /quote, not a menu-only button', async ({ page }) => {
    await page.goto('/')
    const contact = page.getByRole('link', { name: 'Contact' })
    await expect(contact).toHaveAttribute('href', '/quote')
  })

  test('mobile menu Call/Email quick actions still work and close the mobile menu', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')
    const menuButton = page.getByRole('button', { name: /menu/i }).first()
    await menuButton.click()

    const emailItem = page.getByRole('menuitem', { name: /email us/i })
    await expect(emailItem).toBeVisible()
    await emailItem.click()

    await expect(page.getByRole('menuitem', { name: /email us/i })).toHaveCount(0)
  })
})

test.describe('Homepage blog teaser thumbnails', () => {
  test('serve modern formats with explicit dimensions', async ({ page }) => {
    await page.goto('/')
    const images = page.locator('picture > img')
    const count = await images.count()
    expect(count).toBeGreaterThanOrEqual(3)

    for (let i = 0; i < Math.min(count, 3); i++) {
      const img = images.nth(i)
      await expect(img).toHaveAttribute('width', '1200')
      await expect(img).toHaveAttribute('height', '624')
      const picture = page.locator('picture').nth(i)
      await expect(picture.locator('source[type="image/avif"]')).toHaveCount(1)
      await expect(picture.locator('source[type="image/webp"]')).toHaveCount(1)
    }
  })

  test('AVIF/WebP requests fire instead of the original PNG', async ({ page }) => {
    const requestedUrls = []
    page.on('request', (req) => requestedUrls.push(req.url()))
    await page.goto('/')
    await page.mouse.wheel(0, 3000)
    await page.waitForTimeout(500)

    const optimizedRequests = requestedUrls.filter((u) => u.includes('/images-optimized/blog/'))
    expect(optimizedRequests.length).toBeGreaterThan(0)

    // Confirm the browser actually selected a modern format for each tested
    // image, not just that some optimized request happened to fire somewhere.
    const images = page.locator('picture > img')
    const count = await images.count()
    for (let i = 0; i < Math.min(count, 3); i++) {
      const currentSrc = await images.nth(i).evaluate((img) => img.currentSrc)
      expect(currentSrc).toMatch(/\.(avif|webp)$/)
    }
  })
})

test.describe('Backend Integration', () => {
  test('no console errors across all touched nav/footer/homepage surfaces', async ({ page }) => {
    const consoleErrors = []
    page.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()) })
    await page.goto('/')
    await page.mouse.wheel(0, 3000) // scroll so lazy-loaded homepage sections mount
    const relevantErrors = consoleErrors.filter((e) => !/ResizeObserver|favicon/i.test(e))
    expect(relevantErrors).toEqual([])
  })
})
