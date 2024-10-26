import { test, expect, Page } from '@playwright/test'

test.describe('Search Tests', () => {
  test('Should search, load and display results', async ({
    page,
  }: {
    page: Page
  }) => {
    await page.goto('http://localhost:3000/')

    await page.click('.SearchBar-button')

    await expect(page.locator('div[role="status"]')).toBeVisible()

    await expect(page.locator('.Result > h2')).toBeVisible
  })
})
