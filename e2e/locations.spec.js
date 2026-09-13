import { test, expect } from '@playwright/test'

test.describe('Location Pages', () => {
  test('renders unique content for two different cities', async ({ page }) => {
    await page.goto('/locations/dayton/house-cleaning-services')
    // Same client-render-timing note as the FAQPage schema test below --
    // wait for route-specific content before reading it, not immediately
    // after goto().
    await expect(page.locator('h1')).toContainText('Dayton', { timeout: 10_000 })
    const daytonH1 = await page.locator('h1').textContent()

    await page.goto('/locations/xenia/house-cleaning-services')
    await expect(page.locator('h1')).toContainText('Xenia', { timeout: 10_000 })
    const xeniaH1 = await page.locator('h1').textContent()

    expect(daytonH1).not.toEqual(xeniaH1)
  })

  test('emits valid @id-linked JSON-LD schema', async ({ page }) => {
    await page.goto('/locations/dayton/house-cleaning-services')
    // See the FAQPage schema test below for why this wait is needed -- this
    // test was flaky for the same reason (read schema before the client-side
    // route-correcting remount finished) before this fix.
    await expect(page.getByRole('heading', { name: /Dayton House Cleaning FAQ/i, level: 2 })).toBeVisible()

    const blocks = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents()
    const parsed = blocks.map((b) => JSON.parse(b))
    const types = parsed.map((entry) => entry['@type'])

    expect(types).toEqual(expect.arrayContaining(['LocalBusiness', 'Service', 'WebPage']))
  })

  test('serves the dedicated Xenia residential page with FAQPage schema', async ({ page }) => {
    await page.goto('/locations/xenia/house-cleaning-services')

    await expect(page.locator('h1')).toContainText('House Cleaning Services in Xenia, OH')
    // Xenia-specific copy that the generic data-driven page never rendered
    await expect(page.getByRole('heading', { name: /Hard Water/i, level: 2 })).toBeVisible()
    await expect(page.getByText('Wright Cycle Estates').first()).toBeVisible()

    const blocks = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents()
    const types = blocks.map((b) => JSON.parse(b)['@type'])
    expect(types).toEqual(expect.arrayContaining(['LocalBusiness', 'Service', 'WebPage', 'FAQPage']))
  })

  test('serves the dedicated Beavercreek commercial page at the standard URL pattern', async ({ page }) => {
    // The old URL's 301 (vercel.json) is a platform-level redirect `vite
    // preview` never executes -- it can only be verified against the real
    // production/preview deployment (see this PR's description), not here.
    await page.goto('/locations/beavercreek/commercial-cleaning-services')
    await expect(page).toHaveURL(/\/locations\/beavercreek\/commercial-cleaning-services$/)
    await expect(page.locator('h1')).toContainText('Beavercreek', { timeout: 10_000 })
  })

  test('shows 404 for an unmapped city slug', async ({ page }) => {
    await page.goto('/locations/springfield/house-cleaning-services')
    await expect(page.getByText('404')).toBeVisible()
    await expect(page.getByText('Page Not Found')).toBeVisible()
  })

  test('generic /locations index is unaffected', async ({ page }) => {
    await page.goto('/locations')
    await expect(page.locator('h1')).toContainText('Service Locations')
  })

  // Added 2026-09-11 (SEO audit follow-up): the FAQ block used to be
  // LOCATION_FAQ[serviceType] -- fully shared, city-blind -- and was the
  // largest single contributor to a 46-80% textual-similarity finding across
  // the 32 location pages. It's now content.faqs, unique per city/service
  // type. These four tests guard that fix.
  test('renders unique FAQ content across residential city pages', async ({ page }) => {
    await page.goto('/locations/dayton/house-cleaning-services')
    const daytonFaq = await page.getByRole('heading', { name: /Dayton House Cleaning FAQ/i, level: 2 }).locator('..').textContent()

    await page.goto('/locations/kettering/house-cleaning-services')
    const ketteringFaq = await page.getByRole('heading', { name: /Kettering House Cleaning FAQ/i, level: 2 }).locator('..').textContent()

    expect(daytonFaq).not.toEqual(ketteringFaq)
  })

  test('renders unique FAQ content across commercial city pages', async ({ page }) => {
    await page.goto('/locations/fairborn/commercial-cleaning-services')
    const fairbornFaq = await page.getByRole('heading', { name: /Fairborn Commercial Cleaning FAQ/i, level: 2 }).locator('..').textContent()

    await page.goto('/locations/troy/commercial-cleaning-services')
    const troyFaq = await page.getByRole('heading', { name: /Troy Commercial Cleaning FAQ/i, level: 2 }).locator('..').textContent()

    expect(fairbornFaq).not.toEqual(troyFaq)
  })

  test('FAQPage schema matches visible FAQ content exactly', async ({ page }) => {
    await page.goto('/locations/oakwood/house-cleaning-services')
    // Non-home routes render via createRoot (full client remount), not
    // hydrateRoot -- see src/main.jsx. In local `vite preview`, the initial
    // static response for a nested route is briefly the homepage's prerendered
    // HTML until the client-side router corrects it, so read schema/DOM only
    // after a route-specific element is actually visible, not immediately
    // after goto() resolves (production is served per-URL correctly by
    // Vercel; this is a local-preview-only timing wrinkle).
    await expect(page.getByRole('heading', { name: /Oakwood House Cleaning FAQ/i, level: 2 })).toBeVisible()

    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents()
    const faqSchema = blocks.map((b) => JSON.parse(b)).find((b) => b['@type'] === 'FAQPage')

    expect(faqSchema).toBeTruthy()
    expect(faqSchema.mainEntity.length).toBe(5)
    for (const item of faqSchema.mainEntity) {
      await expect(page.getByText(item.name)).toBeVisible()
      await expect(page.getByText(item.acceptedAnswer.text)).toBeVisible()
    }
  })

  test('WHATS_INCLUDED and HOW_IT_WORKS remain shared across cities (regression guard)', async ({ page }) => {
    await page.goto('/locations/dayton/house-cleaning-services')
    await expect(page.getByText('Kitchens — countertops, appliance exteriors, sinks, and cabinet fronts')).toBeVisible()
    await expect(page.getByRole('heading', { name: /get your free quote/i, level: 6 })).toBeVisible()

    await page.goto('/locations/kettering/house-cleaning-services')
    await expect(page.getByText('Kitchens — countertops, appliance exteriors, sinks, and cabinet fronts')).toBeVisible()
    await expect(page.getByRole('heading', { name: /get your free quote/i, level: 6 })).toBeVisible()
  })

  // Added for the 2026-09 location-page content-depth expansion.
  test('renders a table of contents and a neighborhoods section on generic city pages', async ({ page }) => {
    await page.goto('/locations/huber-heights/house-cleaning-services')
    await expect(page.getByText('Table of Contents')).toBeVisible()
    await expect(page.getByRole('heading', { name: /Huber Heights Neighborhoods We Serve/i })).toBeVisible()
  })

  test('renders home-eras (residential) or business-districts (commercial) sections', async ({ page }) => {
    await page.goto('/locations/troy/house-cleaning-services')
    await expect(page.getByRole('heading', { name: /Built for Troy's Homes/i })).toBeVisible()

    await page.goto('/locations/troy/commercial-cleaning-services')
    await expect(page.getByRole('heading', { name: /Built for Troy's Businesses/i })).toBeVisible()
  })

  test('intro now includes a fourth (trust/credentials) paragraph', async ({ page }) => {
    await page.goto('/locations/kettering/house-cleaning-services')
    await expect(page.getByText(/most populous suburb in the Dayton area/i)).toBeVisible()
    await expect(page.getByText(/completed three months of training and passed a Checkr background check/i)).toBeVisible()
  })

  test('renders seasonal hooks section and expanded FAQ (5 items)', async ({ page }) => {
    await page.goto('/locations/vandalia/house-cleaning-services')
    await expect(page.getByRole('heading', { name: /Cleaning Around the Vandalia Calendar/i })).toBeVisible()

    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents()
    const faqSchema = blocks.map((b) => JSON.parse(b)).find((b) => b['@type'] === 'FAQPage')
    expect(faqSchema.mainEntity.length).toBe(5)
  })

  // Cities with no genuine named neighborhoods (thin-material allowance,
  // depth-expansion plan Section 5.0.2) omit the neighborhoods section and
  // its TOC entry entirely rather than padding with invented names.
  test('thin-material cities omit the neighborhoods section without breaking the TOC', async ({ page }) => {
    await page.goto('/locations/bellbrook/house-cleaning-services')
    await expect(page.getByText('Table of Contents')).toBeVisible()
    await expect(page.getByRole('heading', { name: /Bellbrook Neighborhoods We Serve/i })).toHaveCount(0)
    await expect(page.getByRole('link', { name: /Bellbrook Neighborhoods We Serve/i })).toHaveCount(0)
    await expect(page.getByRole('heading', { name: /Built for Bellbrook's Homes/i })).toBeVisible()
  })

  test.describe('Backend Integration', () => {
    test('no console errors across a sample of city pages', async ({ page }) => {
      const consoleErrors = []
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text())
      })

      await page.goto('/locations/dayton/house-cleaning-services')
      await page.goto('/locations/xenia/commercial-cleaning-services')
      await page.goto('/locations/yellow-springs/house-cleaning-services')
      await page.goto('/locations/oakwood/commercial-cleaning-services')
      await page.goto('/locations/huber-heights/commercial-cleaning-services')

      const relevantErrors = consoleErrors.filter(
        (e) => !/ResizeObserver|favicon/i.test(e)
      )
      expect(relevantErrors).toEqual([])
    })
  })
})
