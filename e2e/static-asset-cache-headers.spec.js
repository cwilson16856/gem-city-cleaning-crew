import { test, expect } from '@playwright/test'

// Regression guard for the 2026-09-13 LCP audit's caching fix: vercel.json's
// /images/(.*) rule must long-cache static assets, but must never widen to
// cover crawler-facing files that change independently of a deploy.
//
// NOTE: vercel.json's headers array is only applied by Vercel's edge
// network, not by `vite preview` (this repo's local Playwright webServer) --
// these assertions can only be verified against a real Vercel deployment,
// not this local suite. Documented here rather than silently skipped;
// verify manually post-deploy with:
//   curl -sI https://gemcitycleaningcrew.com/images/legacy/katja-rooke-77JACslA8G0-unsplash-scaled.webp | grep -i cache-control
//   curl -sI https://gemcitycleaningcrew.com/robots.txt | grep -i cache-control
test.describe('Static asset cache headers (documented, not locally testable)', () => {
  test.skip(true, 'vercel.json headers only apply on Vercel; verify manually post-deploy per the comment above')
  test('placeholder', () => {})
})

test.describe('Backend Integration', () => {
  test('no console errors across image-cache-touched pages', async ({ page }) => {
    const consoleErrors = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text())
    })

    for (const path of ['/', '/residential', '/commercial']) {
      await page.goto(path)
    }

    const relevantErrors = consoleErrors.filter((e) => !/ResizeObserver|favicon/i.test(e))
    expect(relevantErrors).toEqual([])
  })
})
