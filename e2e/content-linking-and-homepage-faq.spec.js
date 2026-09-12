import { test, expect } from '@playwright/test'

// Added 2026-09-11 SEO audit follow-up, "no internal linking between blog
// and service pages" + "thin homepage" findings: the 5 core service pages
// had zero links to any blog post, the 3 pillar posts had zero inbound
// links, and the homepage had no WebSite entity or FAQ content despite
// subpages referencing a #website @id that was never defined anywhere.

test.describe('Service page to blog linking', () => {
  const pairs = [
    { page: '/move-out-cleaning', slug: 'move-out-transitions-guide-dayton' },
    { page: '/deep-cleaning', slug: 'deep-cleaning-guide-dayton' },
    { page: '/commercial', slug: 'how-to-keep-office-clean-between-cleanings-dayton' },
    { page: '/residential', slug: 'what-to-expect-recurring-cleaning-service-dayton' },
    { page: '/quote', slug: 'hiring-cleaning-service-guide-dayton' }
  ]

  for (const { page: pagePath, slug } of pairs) {
    test(`${pagePath} links to /blog/${slug}`, async ({ page }) => {
      await page.goto(pagePath)
      const link = page.locator(`a[href="/blog/${slug}"]`)
      await expect(link).toBeVisible()
      await link.click()
      await expect(page).toHaveURL(new RegExp(`/blog/${slug}$`))
      await expect(page.locator('h1')).toBeVisible()
    })
  }
})

test.describe('Homepage FAQ', () => {
  test('FAQ section renders with the expected Q&A pairs', async ({ page }) => {
    await page.goto('/')
    const faqSection = page.locator('#faq')
    await expect(faqSection.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeVisible()

    const pairs = [
      ['Do you require contracts?', /never required contracts/i],
      ['Are your cleaners background-checked and insured?', /Checkr background check/i],
      ['What areas do you serve?', /Dayton and the surrounding Miami Valley/i],
      ['How do I get a free quote?', /free, no-obligation quote/i],
      ['Do you bring your own cleaning supplies?', /professional-grade supplies/i],
      ['How long has Gem City Cleaning Crew been in business?', /Since 2017/i]
    ]

    for (const [question, answerPattern] of pairs) {
      await expect(faqSection.getByText(question, { exact: true })).toBeVisible()
      await expect(faqSection.getByText(answerPattern)).toBeVisible()
    }
  })
})

test.describe('Homepage WebSite schema', () => {
  test('a WebSite JSON-LD node with the canonical #website @id is present', async ({ page }) => {
    await page.goto('/')
    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents()
    const websiteNode = schemas
      .map((s) => JSON.parse(s))
      .find((s) => s['@type'] === 'WebSite')

    expect(websiteNode).toBeTruthy()
    expect(websiteNode['@id']).toBe('https://gemcitycleaningcrew.com/#website')
  })

  test('the homepage FAQ has FAQPage JSON-LD for crawlers', async ({ page }) => {
    await page.goto('/')
    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents()
    const faqNode = schemas
      .map((s) => JSON.parse(s))
      .find((s) => s['@type'] === 'FAQPage')

    expect(faqNode).toBeTruthy()
    expect(faqNode.mainEntity.length).toBeGreaterThanOrEqual(4)
  })
})

test.describe('Backend Integration', () => {
  test('no console errors across the linked pages and homepage', async ({ page }) => {
    const consoleErrors = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text())
    })

    for (const path of ['/', '/move-out-cleaning', '/deep-cleaning', '/commercial', '/residential', '/quote']) {
      await page.goto(path)
      await expect(page.locator('h1')).toBeVisible()
    }

    const relevantErrors = consoleErrors.filter(
      (e) => !/ResizeObserver|favicon/i.test(e)
    )
    expect(relevantErrors).toEqual([])
  })
})
