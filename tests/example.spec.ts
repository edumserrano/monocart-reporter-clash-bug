import { test, expect } from '@playwright/test';

test('screenshot test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveScreenshot();
});
