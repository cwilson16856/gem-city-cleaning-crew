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

const COMMERCIAL_PAGES = [
  { path: '/office-cleaning', name: 'Office Cleaning' },
  { path: '/retail-cleaning', name: 'Retail Cleaning' },
  { path: '/industrial-cleaning', name: 'Industrial Cleaning' }
]

test.describe('Commercial page quote CTAs open a modal defaulting to Commercial', () => {
  for (const { path, name } of COMMERCIAL_PAGES) {
    test(`${name} CTA opens the QuoteForm modal in-page, pre-set to Commercial`, async ({ page }) => {
      await page.goto(path)

      const ctaButton = page.getByRole('button', { name: /free.*(quote|estimate)/i }).first()
      await ctaButton.scrollIntoViewIfNeeded()
      await ctaButton.click()

      const dialog = page.getByRole('dialog')
      await expect(dialog).toBeVisible()

      // URL must not have navigated away to /quote -- this is an in-page modal
      expect(page.url()).toContain(path)

      const commercialOption = dialog.getByRole('button', { name: 'Commercial Cleaning' })
      await expect(commercialOption).toBeVisible()
      await expect(commercialOption).toHaveClass(/MuiButton-contained/)

      const residentialOption = dialog.getByRole('button', { name: 'Residential Cleaning' })
      await expect(residentialOption).toHaveClass(/MuiButton-outlined/)
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
