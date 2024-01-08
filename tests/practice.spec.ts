// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has title and links to intro page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
  const getStarted = page.getByRole('link', { name: 'Get started' });
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');
  await getStarted.click();
  await expect(page).toHaveURL(/.*intro/);
	await page.pause()
});