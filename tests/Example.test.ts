import { test, expect } from '@playwright/test';

test('test2', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');

  await expect(page.getByRole('button', { name: ' My account' })).toBeVisible();

  await page.locator('#entry_218384').getByRole('link', { name: 'SHOP NOW' }).click();
  await page.locator('#entry_218384').getByRole('link', { name: 'SHOP NOW' }).click();
  await page.locator('#entry_218384').getByRole('link', { name: 'SHOP NOW' }).click();
  await page.getByRole('link', { name: 'Lumix S Series From Panasonic' }).click();
  
  await expect(page.locator('#widget-navbar-217834')).toContainText('Special2');
});