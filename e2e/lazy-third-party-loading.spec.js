import { test, expect } from '@playwright/test'

// Added 2026-09-11 SEO audit follow-up, "mobile LCP still Poor" finding:
// the Maps embed (src/components/AreasWeServe.jsx via LazyMapEmbed.jsx) was
// always-mounted, and GTM/Pixel (index.html) only deferred to window.load,
// with no idle-time scheduling on top. This spec verifies both are now
// genuinely deferred without breaking functionality, and that the one
// hydrated route ("/") still hydrates cleanly with LazyMapEmbed in its tree.

test.describe('Lazy Maps embed', () => {
  test('does not fetch the Maps embed until scrolled into view (homepage)', async ({ page }) => {
    let mapRequestFired = false
    page.on('request', (req) => {
      if (req.url().includes('google.com/maps/embed')) mapRequestFired = true
    })

    await page.goto('/')
    await page.waitForTimeout(300)
    expect(mapRequestFired).toBe(false)

    await page.locator('[class*="mapContainer"]').scrollIntoViewIfNeeded()
    await page.waitForRequest((req) => req.url().includes('google.com/maps/embed'), { timeout: 5000 })
    await expect(page.locator('[class*="mapContainer"] iframe')).toBeVisible()
  })

  test('does not fetch the Maps embed until scrolled into view (/locations)', async ({ page }) => {
    let mapRequestFired = false
    page.on('request', (req) => {
      if (req.url().includes('google.com/maps/embed')) mapRequestFired = true
    })

    await page.goto('/locations')
    await page.waitForTimeout(300)
    expect(mapRequestFired).toBe(false)

    await page.locator('[class*="mapContainer"]').scrollIntoViewIfNeeded()
    await page.waitForRequest((req) => req.url().includes('google.com/maps/embed'), { timeout: 5000 })
    await expect(page.locator('[class*="mapContainer"] iframe')).toBeVisible()
  })
})

test.describe('Idle-deferred GTM/Pixel', () => {
  test('gtag.js and fbevents.js never fire before window.load, but do eventually load', async ({ page }) => {
    // Both requests fire from the same _loadDeferredTrackingScripts() idle
    // callback. The deterministic, environment-independent invariant this
    // change must preserve is "never before load" (unchanged from before
    // this fix -- both are still gated behind the same load listener /
    // already-complete check, with requestIdleCallback layered on top).
    // Asserting an exact "not within Nms" window is NOT reliable here: in a
    // sparse test page the main thread can go idle almost immediately after
    // load, which is correct requestIdleCallback behavior, not a bug -- a
    // tight early-window assertion would just be testing browser scheduling
    // nondeterminism, not this code change.
    let loadFired = false
    let gtagFiredBeforeLoad = false
    let fbFiredBeforeLoad = false
    let gtagFired = false
    let fbFired = false

    page.on('request', (req) => {
      const url = req.url()
      const isGtag = url.includes('googletagmanager.com/gtag/js')
      const isFb = url.includes('connect.facebook.net/en_US/fbevents.js')
      if (isGtag) {
        gtagFired = true
        if (!loadFired) gtagFiredBeforeLoad = true
      }
      if (isFb) {
        fbFired = true
        if (!loadFired) fbFiredBeforeLoad = true
      }
    })

    await page.goto('/', { waitUntil: 'load' })
    loadFired = true
    expect(gtagFiredBeforeLoad).toBe(false)
    expect(fbFiredBeforeLoad).toBe(false)

    await expect.poll(() => gtagFired, { timeout: 10000 }).toBe(true)
    await expect.poll(() => fbFired, { timeout: 10000 }).toBe(true)
  })
})

test.describe('Backend Integration', () => {
  test('no console errors (including hydration mismatch) across pages with the lazy Maps embed', async ({ page }) => {
    const consoleErrors = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text())
    })

    for (const path of ['/', '/locations', '/residential', '/locations/dayton/house-cleaning-services']) {
      await page.goto(path)
      await page.mouse.wheel(0, 3000) // scroll so the lazy Maps embed actually mounts
      await page.waitForTimeout(200)
    }

    const relevantErrors = consoleErrors.filter(
      (e) => !/ResizeObserver|favicon/i.test(e)
    )
    expect(relevantErrors).toEqual([])
    // The specific hydration-mismatch signature src/main.jsx documents --
    // "/" is the one hydrated route, and AreasWeServe/LazyMapEmbed render
    // there, so this is the exact invariant this change could have broken.
    expect(consoleErrors.some((e) => /Minified React error #418|#425/.test(e))).toBe(false)
  })
})
