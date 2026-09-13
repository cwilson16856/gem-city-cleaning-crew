import { test, expect } from '@playwright/test'

// Added 2026-09-11 SEO audit follow-up, "third-party trust gap" finding:
// homepage testimonials were first-name-only with no source/date, and no
// re-clean/insurance policy existed in visible body copy anywhere on the
// site. TrustBlock (src/components/TrustBlock.jsx) fixes both, deployed on
// the 3 pages the audit's persona modeling flagged as weakest on trust.

test.describe('Trust Block', () => {
  test.describe('Homepage', () => {
    test('old unattributed testimonials are gone, new attributed ones render', async ({ page }) => {
      await page.goto('/')
      await expect(page.getByText('Dustin T.')).toHaveCount(0)
      await expect(page.getByText('Christina C.')).toHaveCount(0)
      await expect(page.getByText('Rick V.')).toHaveCount(0)

      await expect(page.getByText('Amanda T.')).toBeVisible()
      await expect(page.getByText('Anne B.')).toBeVisible()
      await expect(page.getByText('Valerie P.')).toBeVisible()
    })

    test('policy statements render as plain visible text', async ({ page }) => {
      await page.goto('/')
      await expect(page.getByText(/100% satisfaction guarantee/i)).toBeVisible()
      await expect(page.getByText(/fully licensed and insured/i)).toBeVisible()
    })

    test('See all reviews link points at the real GBP profile', async ({ page }) => {
      await page.goto('/')
      const link = page.getByRole('link', { name: /see all .* reviews on google/i })
      await expect(link).toHaveAttribute('href', 'https://www.google.com/maps?cid=7373519259471335388')
      await expect(link).toHaveAttribute('target', '_blank')
    })
  })

  test.describe('About Us', () => {
    test('renders the same guarantee/insured copy and all 3 testimonials', async ({ page }) => {
      await page.goto('/about-us')
      await expect(page.getByText(/100% satisfaction guarantee/i)).toBeVisible()
      await expect(page.getByText(/fully licensed and insured/i)).toBeVisible()
      await expect(page.getByText('Amanda T.')).toBeVisible()
      await expect(page.getByText('Anne B.')).toBeVisible()
      await expect(page.getByText('Valerie P.')).toBeVisible()
    })
  })

  test.describe('Quote Page', () => {
    test('compact variant renders exactly one testimonial', async ({ page }) => {
      await page.goto('/quote')
      await expect(page.getByText('Amanda T.')).toBeVisible()
      await expect(page.getByText('Anne B.')).toHaveCount(0)
      await expect(page.getByText('Valerie P.')).toHaveCount(0)
    })

    test('policy statements render above the quote form', async ({ page }) => {
      await page.goto('/quote')
      const policyBox = page.getByText(/100% satisfaction guarantee/i)
      await expect(policyBox).toBeVisible()

      const policyY = (await policyBox.boundingBox())?.y ?? 0
      const formY = (await page.locator('#quote-form').boundingBox())?.y ?? 0
      expect(policyY).toBeLessThan(formY)
    })
  })

  test.describe('Backend Integration', () => {
    test('no console errors across pages carrying TrustBlock', async ({ page }) => {
      const consoleErrors = []
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text())
      })

      await page.goto('/')
      await page.goto('/about-us')
      await page.goto('/quote')

      const relevantErrors = consoleErrors.filter(
        (e) => !/ResizeObserver|favicon/i.test(e)
      )
      expect(relevantErrors).toEqual([])
    })
  })
})
