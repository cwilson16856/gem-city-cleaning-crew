import { test, expect } from '@playwright/test'

// Added 2026-09-12 SEO audit follow-up, "B2B visitors land on a
// residential-framed quote page" finding. The audit's own premise ("every
// CTA on /commercial routes to /quote") didn't match reality -- /commercial
// itself already opened the QuoteForm modal pre-set to Commercial. The real
// gap was 3 other commercial pages (Office/Retail/Industrial Cleaning, plus
// the Office Cleaning Checklist page found via widen-the-search) still
// linking straight to the residential-framed /quote page. This spec covers
// both the modal conversion and the new ?type=commercial support on /quote
// itself.
//
// Reversed 2026-09-13 SEO audit round 2, "B2B hub CTAs invisible to
// crawlers/unbookmarkable" finding: the modal chosen above broke
// crawlability (no href, no bookmarkable URL, back-button doesn't return to
// the commercial page). /quote?type=commercial now carries the full correct
// commercial framing end-to-end, including the below-the-fold copy fixed in
// the same PR as this test update, so the modal's safety-net purpose is no
// longer needed -- every CTA is now a real, crawlable Link.

const COMMERCIAL_PAGES = [
  { path: '/commercial', name: 'Commercial' },
  { path: '/office-cleaning', name: 'Office Cleaning' },
  { path: '/retail-cleaning', name: 'Retail Cleaning' },
  { path: '/industrial-cleaning', name: 'Industrial Cleaning' }
]

test.describe('Commercial page quote CTAs are real, crawlable links to /quote?type=commercial', () => {
  for (const { path, name } of COMMERCIAL_PAGES) {
    test(`${name} CTA is a real link, not a modal trigger`, async ({ page }) => {
      await page.goto(path)

      const cta = page.getByRole('link', { name: /free.*(quote|estimate)/i }).first()
      await cta.scrollIntoViewIfNeeded()
      await expect(cta).toHaveAttribute('href', '/quote?type=commercial')

      await cta.click()
      await expect(page).toHaveURL(/\/quote\?type=commercial/)
      await expect(page.getByRole('dialog')).toHaveCount(0)
    })
  }
})

test.describe('/quote?type=commercial', () => {
  test('lands on a commercially-framed H1 with Commercial pre-selected', async ({ page }) => {
    await page.goto('/quote?type=commercial')

    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      /Get Your FREE Commercial Cleaning Quote Today/i
    )

    const commercialToggle = page.getByRole('button', { name: 'Commercial Cleaning' })
    await expect(commercialToggle).toHaveClass(/MuiButton-contained/)
  })

  test('plain /quote (no param) is unchanged -- residential framing, Residential pre-selected', async ({ page }) => {
    await page.goto('/quote')

    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      /Get Your FREE House Cleaning Quote Today/i
    )

    const residentialToggle = page.getByRole('button', { name: 'Residential Cleaning' })
    await expect(residentialToggle).toHaveClass(/MuiButton-contained/)
  })
})

test.describe('Backend Integration', () => {
  test('no console errors across the fixed commercial pages and /quote', async ({ page }) => {
    const consoleErrors = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text())
    })

    for (const { path } of COMMERCIAL_PAGES) {
      await page.goto(path)
    }
    await page.goto('/office-cleaning-checklist')
    await page.goto('/quote')
    await page.goto('/quote?type=commercial')

    const relevantErrors = consoleErrors.filter(
      (e) => !/ResizeObserver|favicon/i.test(e)
    )
    expect(relevantErrors).toEqual([])
  })
})
