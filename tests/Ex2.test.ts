import { test, expect } from '@playwright/test';

test('test01', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await expect(page.getByRole('button', { name: ' My account' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Search For Products' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Minimum Price' }).click();
  await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Minimum Price' }).fill('122');
  await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Maximum Price' }).click();
  await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Maximum Price' }).fill('2000');
  await expect(page.locator('#entry_212469')).toContainText('$134.00');
  await expect(page.locator('#mz-product-grid-image-30-212469')).toBeVisible();
  await page.waitForTimeout(4000)
  
  // await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Minimum Price' }).fill('122');
  // await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Maximum Price' }).click();
  // await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Maximum Price' }).fill('2500');
  // await page.waitForTimeout(4000)
  // await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Minimum Price' }).click();
  // await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Minimum Price' }).fill('0');
  // await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Maximum Price' }).click();
  // await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Maximum Price' }).fill('2000');
  // await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Maximum Price' }).press('Enter');
  // await page.waitForTimeout(3000)
  await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Minimum Price' }).click();
  await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Minimum Price' }).fill('-122');
  await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Maximum Price' }).click();
  await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Maximum Price' }).fill('0');
  await page.waitForTimeout(4000)
  // await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Minimum Price' }).click();
  // await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Minimum Price' }).fill('-122');
  // await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Maximum Price' }).click();
  // await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Maximum Price' }).fill('2000');

});

test('test02', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await expect(page.getByRole('button', { name: ' My account' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Search For Products' }).click();
  await page.getByRole('button', { name: 'Search' }).click();

  await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Minimum Price' }).click();
  await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Minimum Price' }).fill('100');
  await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Maximum Price' }).click();
  await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Maximum Price' }).fill('2000');
  await page.waitForTimeout(4000)
});

test('test03', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await expect(page.getByRole('button', { name: ' My account' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Search For Products' }).click();
  await page.getByRole('button', { name: 'Search' }).click();

  await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Minimum Price' }).click();
  await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Minimum Price' }).fill('100');
  await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Maximum Price' }).click();
  await page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Maximum Price' }).fill('2000');
  await page.waitForTimeout(4000)
});
