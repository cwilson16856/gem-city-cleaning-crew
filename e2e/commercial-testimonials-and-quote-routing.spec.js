import { test, expect } from '@playwright/test'

// Added 2026-09-13 SEO audit round-2 remediation. Covers:
// 1. Six fabricated-looking B2B testimonials (identical wording under
//    different names, one naming a real property) removed from
//    CommercialPage/OfficeCleaning/RetailCleaning/BeavercreekCommercialPage
//    and replaced with the real, sourced TrustBlock reviews.
// 2. The remaining commercial quote-routing gaps: OfficeCleaningChecklist's
//    3 leftover ?service= CTAs now open the same modal pattern the rest of
//    the site uses; LocationPage's commercial hero (HeroSection is
//    link-only, so it can't open a modal) and ApartmentBuildingCleaning's
//    hero now link to /quote?type=commercial instead of the residential
//    default.
// 3. The homepage FAQ, converted from a static card grid to the sitewide
//    Accordion pattern for consistency.

const FABRICATED_NAMES = ['Sarah M.', 'Michael T.', 'Jennifer R.', 'Lisa K.', 'Mark R.', 'Michael R., Property Manager']

const TRUSTBLOCK_PAGES = [
  { path: '/commercial', name: 'Commercial' },
  { path: '/office-cleaning', name: 'Office Cleaning' },
  { path: '/retail-cleaning', name: 'Retail Cleaning' },
  { path: '/locations/beavercreek/commercial-cleaning-services', name: 'Beavercreek Commercial' }
]

test.describe('Fabricated testimonials removed, TrustBlock renders instead', () => {
  for (const { path, name } of TRUSTBLOCK_PAGES) {
    test(`${name} shows real TrustBlock reviews, no fabricated names`, async ({ page }) => {
      await page.goto(path)

      // A real TrustBlock review name must be visible before asserting
      // absence of fabricated ones -- confirms the section actually rendered
      // rather than the page just being empty/broken.
      await expect(page.getByText('Amanda T.')).toBeVisible()

      for (const fabricatedName of FABRICATED_NAMES) {
        await expect(page.getByText(fabricatedName)).toHaveCount(0)
      }
    })
  }
})

test.describe('Office Cleaning Checklist quote CTAs', () => {
  // Reversed 2026-09-13 SEO audit round 2: the modal these CTAs used to open
  // (see the comment on commercial-quote-routing.spec.js) had no href, so it
  // was invisible to crawlers and unbookmarkable. All 5 quote CTAs on this
  // page are now real links to /quote?type=commercial.
  test('all 5 quote CTAs are real links to /quote?type=commercial, not modal triggers', async ({ page }) => {
    await page.goto('/office-cleaning-checklist')

    for (const label of [
      'Get Professional Office Cleaning',
      'Get Office Cleaning Quote',
      'Get Recurring Quote',
      'Get Construction Cleanup Quote',
      'Get Free Office Cleaning Quote'
    ]) {
      const cta = page.getByRole('link', { name: label })
      await cta.scrollIntoViewIfNeeded()
      await expect(cta).toHaveAttribute('href', '/quote?type=commercial')
    }
  })
})

test.describe('Location page and apartment-building hero CTAs (link-only HeroSection)', () => {
  // Beavercreek's commercial page routes to the dedicated BeavercreekCommercialPage.jsx
  // (renamed URL fix, PR #41), not the generic LocationPage.jsx/CityServicePage
  // template this fix touches -- Dayton is a real city still on that template.
  test('Dayton commercial location page hero links to /quote?type=commercial', async ({ page }) => {
    await page.goto('/locations/dayton/commercial-cleaning-services')
    // Local vite-preview transiently serves a different route's prerendered
    // HTML for nested paths before client-side routing corrects it -- wait
    // for the real heading before reading the hero link (not a prod issue).
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Dayton/i)
    const heroCta = page.getByRole('link', { name: 'Get Your Free Quote' }).first()
    await expect(heroCta).toHaveAttribute('href', '/quote?type=commercial')
  })

  test('Dayton residential location page hero still links to plain /quote', async ({ page }) => {
    await page.goto('/locations/dayton/house-cleaning-services')
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Dayton/i)
    const heroCta = page.getByRole('link', { name: 'Get Your Free Quote' }).first()
    await expect(heroCta).toHaveAttribute('href', '/quote')
  })

  test('Apartment Building Cleaning hero links to /quote?type=commercial', async ({ page }) => {
    await page.goto('/apartment-building-cleaning')
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    const heroCta = page.getByRole('link', { name: 'Get Your Free Quote' }).first()
    await expect(heroCta).toHaveAttribute('href', '/quote?type=commercial')
  })
})

test.describe('Homepage FAQ accordion', () => {
  test('FAQ items expand and collapse on click', async ({ page }) => {
    await page.goto('/')
    const faqSection = page.locator('#faq')
    await faqSection.scrollIntoViewIfNeeded()

    const firstQuestion = faqSection.getByRole('button').first()
    // AccordionSummary's aria-controls and id share one string (matching the
    // sitewide convention this section was converted to), so MUI's own
    // region element resolves to the same DOM id -- assert on the button's
    // aria-expanded state and the region's accessible name instead of a raw
    // id locator, which would be ambiguous between the two.
    const questionText = await firstQuestion.textContent()
    const details = faqSection.getByRole('region', { name: questionText })

    await expect(firstQuestion).toHaveAttribute('aria-expanded', 'false')

    await firstQuestion.click()
    await expect(firstQuestion).toHaveAttribute('aria-expanded', 'true')
    await expect(details).toBeVisible()

    await firstQuestion.click()
    await expect(firstQuestion).toHaveAttribute('aria-expanded', 'false')
  })
})

test.describe('Backend Integration', () => {
  test('no console errors across all touched pages', async ({ page }) => {
    const consoleErrors = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text())
    })

    for (const { path } of TRUSTBLOCK_PAGES) {
      await page.goto(path)
    }
    await page.goto('/office-cleaning-checklist')
    await page.goto('/locations/beavercreek/house-cleaning-services')
    await page.goto('/apartment-building-cleaning')
    await page.goto('/')
    await page.goto('/residential')

    const relevantErrors = consoleErrors.filter(
      (e) => !/ResizeObserver|favicon/i.test(e)
    )
    expect(relevantErrors).toEqual([])
  })
})
