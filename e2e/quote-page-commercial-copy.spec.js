import { test, expect } from '@playwright/test'

// Added 2026-09-13 SEO audit round-2. QuotePage's hero/form already switched
// on ?type=commercial; the below-the-fold "Why Get a Quote" and "Understanding
// Costs" sections stayed hardcoded residential copy regardless, an internally
// inconsistent page for B2B visitors. Also covers the ACI citation fix.
//
// Round-3 follow-up (2026-09-13): the round-2 fix only covered those two
// sections. Everything from "Local Cleaning Service Advantages" downward
// (including the page <title>/meta tags, the "What's Included" section, 5 of
// 7 FAQ answers, and the Final CTA) still hardcoded residential wording --
// now made conditional too.

test.describe('/quote?type=commercial below-the-fold copy', () => {
  test('shows commercial-framed section headings, not residential copy', async ({ page }) => {
    await page.goto('/quote?type=commercial')
    await expect(page.getByRole('heading', { name: /Why Get a Free Commercial Cleaning Quote\?/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Understanding Commercial Cleaning Costs in Dayton/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Why Get a Free House Cleaning Quote\?/i })).toHaveCount(0)
  })

  test('plain /quote (no param) is unchanged -- residential below-the-fold copy', async ({ page }) => {
    await page.goto('/quote')
    await expect(page.getByRole('heading', { name: /Why Get a Free House Cleaning Quote\?/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Understanding House Cleaning Costs in Dayton/i })).toBeVisible()
  })

  test('page title swaps to commercial framing on ?type=commercial', async ({ page }) => {
    await page.goto('/quote?type=commercial')
    await expect(page.getByRole('heading', { name: /Why Get a Free Commercial Cleaning Quote\?/i })).toBeVisible()
    expect(await page.title()).toContain('Commercial')
  })

  test('page title stays residential on plain /quote', async ({ page }) => {
    await page.goto('/quote')
    await expect(page.getByRole('heading', { name: /Why Get a Free House Cleaning Quote\?/i })).toBeVisible()
    expect(await page.title()).not.toContain('Commercial')
    expect(await page.title()).toContain('House')
  })

  test('"Local Cleaning Service Advantages" and "What\'s Included" sections use commercial wording only in commercial mode', async ({ page }) => {
    await page.goto('/quote?type=commercial')
    await expect(page.locator('#local-advantages').getByText('commercial cleaning costs')).toBeVisible()
    await expect(page.getByText(/facility size, number of rooms or workstations/i)).toBeVisible()

    await page.goto('/quote')
    await expect(page.locator('#local-advantages').getByText('commercial cleaning costs')).toHaveCount(0)
    await expect(page.getByText(/facility size, number of rooms or workstations/i)).toHaveCount(0)
  })

  test('Final CTA reads "Dayton businesses" only in commercial mode', async ({ page }) => {
    await page.goto('/quote?type=commercial')
    await expect(page.getByText(/Dayton businesses who trust Gem City/i)).toBeVisible()

    await page.goto('/quote')
    await expect(page.getByText(/Dayton businesses who trust Gem City/i)).toHaveCount(0)
    await expect(page.getByText(/Dayton homeowners who trust Gem City/i)).toBeVisible()
  })
})

test.describe('ACI citation fix', () => {
  test('no anchor links to the bare cleaninginstitute.org homepage', async ({ page }) => {
    await page.goto('/quote')
    const aciHomepageLink = page.locator('a[href="https://www.cleaninginstitute.org/"]')
    await expect(aciHomepageLink).toHaveCount(0)
  })
})

test.describe('Backend Integration', () => {
  test('no console errors on /quote and /quote?type=commercial', async ({ page }) => {
    const consoleErrors = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text())
    })
    await page.goto('/quote')
    await page.goto('/quote?type=commercial')
    const relevantErrors = consoleErrors.filter((e) => !/ResizeObserver|favicon/i.test(e))
    expect(relevantErrors).toEqual([])
  })
})
