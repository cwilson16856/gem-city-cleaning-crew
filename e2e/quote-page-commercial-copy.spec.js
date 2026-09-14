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

  // Round-4 follow-up (2026-09-14): 11 more hardcoded-residential locations
  // found in this same file, beyond what round-3 fixed above.
  test('og:image:alt and twitter:image:alt swap with serviceType', async ({ page }) => {
    await page.goto('/quote?type=commercial')
    expect(await page.locator('meta[property="og:image:alt"]').getAttribute('content')).toBe('Free commercial cleaning quote form for Dayton OH businesses')
    expect(await page.locator('meta[name="twitter:image:alt"]').getAttribute('content')).toBe('Free commercial cleaning quote form for Dayton OH')

    await page.goto('/quote')
    expect(await page.locator('meta[property="og:image:alt"]').getAttribute('content')).toBe('Professional house cleaning quote form for Dayton OH residents')
    expect(await page.locator('meta[name="twitter:image:alt"]').getAttribute('content')).toBe('Free house cleaning quote form for Dayton OH')
  })

  test('ContactPage and Service JSON-LD swap with serviceType', async ({ page }) => {
    // react-helmet-async briefly clears head-managed tags during the client
    // remount before re-inserting the page's own <script> tags -- poll past
    // that transient window instead of reading immediately after goto (the
    // same class of race this repo's lazy-third-party-loading.spec.js
    // documents at length for its own async checks).
    const readSchemas = async () => {
      const blocks = await page.locator('script[type="application/ld+json"]').allTextContents()
      return blocks.map((b) => JSON.parse(b))
    }

    await page.goto('/quote?type=commercial')
    await expect.poll(async () => (await readSchemas()).some((b) => b['@type'] === 'ContactPage'), { timeout: 5000 }).toBe(true)
    const parsed = await readSchemas()
    const contactPage = parsed.find((b) => b['@type'] === 'ContactPage')
    const service = parsed.find((b) => b['@type'] === 'Service')
    expect(contactPage.description).toContain('commercial cleaning services')
    expect(service.name).toBe('Free Commercial Cleaning Quote Service')
    expect(service.offers.name).toBe('Free Commercial Cleaning Quote')

    await page.goto('/quote')
    await expect.poll(async () => (await readSchemas()).some((b) => b['@type'] === 'Service'), { timeout: 5000 }).toBe(true)
    const parsedResidential = await readSchemas()
    const serviceResidential = parsedResidential.find((b) => b['@type'] === 'Service')
    expect(serviceResidential.name).toBe('Free House Cleaning Quote Service')
  })

  test('process step cards use commercial wording only in commercial mode', async ({ page }) => {
    await page.goto('/quote?type=commercial')
    await expect(page.getByText(/understanding your basic needs, facility size/i)).toBeVisible()
    await expect(page.getByText(/personalized commercial cleaning quote/i)).toBeVisible()

    await page.goto('/quote')
    await expect(page.getByText(/understanding your basic needs, home size/i)).toBeVisible()
    await expect(page.getByText(/personalized maid service quote/i)).toBeVisible()
  })

  test('sidebar "Why Choose" links point to commercial pages in commercial mode', async ({ page }) => {
    await page.goto('/quote?type=commercial')
    await expect(page.getByRole('link', { name: 'Flexible Scheduling' })).toHaveAttribute('href', '/commercial')
    await expect(page.getByRole('link', { name: 'Satisfaction Guaranteed' })).toHaveAttribute('href', '/commercial')

    await page.goto('/quote')
    await expect(page.getByRole('link', { name: 'Flexible Scheduling' })).toHaveAttribute('href', '/recurring-cleaning-service')
    await expect(page.getByRole('link', { name: 'Satisfaction Guaranteed' })).toHaveAttribute('href', '/residential')
  })

  test('sidebar "Our Cleaning Services" list shows commercial services in commercial mode', async ({ page }) => {
    // Scoped to the sidebar's own list container, since site-wide chrome (the
    // Footer's own "Office Cleaning" link, for example) reuses some of these
    // same service names elsewhere on the page.
    await page.goto('/quote?type=commercial')
    const servicesList = page.getByRole('heading', { name: 'Our Cleaning Services' }).locator('xpath=following-sibling::*[1]')
    await expect(servicesList.getByRole('link', { name: 'One-Time Commercial Cleaning' })).toHaveAttribute('href', '/commercial-one-time-cleaning')
    await expect(servicesList.getByRole('link', { name: 'Office Cleaning' })).toHaveAttribute('href', '/office-cleaning')
    await expect(servicesList.getByRole('link', { name: 'Retail Cleaning' })).toHaveAttribute('href', '/retail-cleaning')

    await page.goto('/quote')
    const servicesListResidential = page.getByRole('heading', { name: 'Our Cleaning Services' }).locator('xpath=following-sibling::*[1]')
    await expect(servicesListResidential.getByRole('link', { name: 'Recurring Cleaning Service' })).toHaveAttribute('href', '/recurring-cleaning-service')
    await expect(servicesListResidential.getByRole('link', { name: 'Deep Cleaning Service' })).toHaveAttribute('href', '/deep-cleaning')
  })

  test('"Customized Pricing" bullet reads facility size only in commercial mode', async ({ page }) => {
    await page.goto('/quote?type=commercial')
    await expect(page.getByText(/Rates based on your facility size/i)).toBeVisible()

    await page.goto('/quote')
    await expect(page.getByText(/Rates based on your home size/i)).toBeVisible()
  })

  test('"Cleaning Frequency" link points to /commercial (not the residential-only recurring page) in commercial mode', async ({ page }) => {
    await page.goto('/quote?type=commercial')
    await expect(page.getByRole('link', { name: 'commercial cleaning service options' })).toHaveAttribute('href', '/commercial')

    await page.goto('/quote')
    await expect(page.getByRole('link', { name: 'recurring cleaning service options' })).toHaveAttribute('href', '/recurring-cleaning-service')
  })

  test('"regular office service" link in the What\'s Included section points to /commercial, not the residential-only recurring page', async ({ page }) => {
    await page.goto('/quote?type=commercial')
    await expect(page.getByRole('link', { name: 'regular office service' })).toHaveAttribute('href', '/commercial')
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
