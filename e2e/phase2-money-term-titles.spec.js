import { test, expect } from '@playwright/test'

test.describe('Money-Term Title/H1 Mapping', () => {
  test('homepage targets "house cleaning dayton ohio"', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/House Cleaning Dayton Ohio/i)
    await expect(page.locator('h1')).toContainText(/House Cleaning/i)
  })

  test('/residential targets "house cleaning services dayton ohio"', async ({ page }) => {
    await page.goto('/residential')
    await expect(page).toHaveTitle(/House Cleaning Services Dayton Ohio/i)
    await expect(page.locator('h1')).toContainText(/House Cleaning Services/i)
  })

  test('homepage and /residential do not share an identical title or H1', async ({ page }) => {
    await page.goto('/')
    const homeTitle = await page.title()
    const homeH1 = await page.locator('h1').textContent()

    await page.goto('/residential')
    const residentialTitle = await page.title()
    const residentialH1 = await page.locator('h1').textContent()

    expect(homeTitle).not.toEqual(residentialTitle)
    expect(homeH1).not.toEqual(residentialH1)
  })

  test.describe('Backend Integration', () => {
    test('no console errors on either page', async ({ page }) => {
      const consoleErrors = []
      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text())
      })

      await page.goto('/')
      await page.goto('/residential')

      const relevantErrors = consoleErrors.filter(
        (e) => !/ResizeObserver|favicon/i.test(e)
      )
      expect(relevantErrors).toEqual([])
    })
  })
})
