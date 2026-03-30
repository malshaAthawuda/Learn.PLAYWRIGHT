import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('button', { name: ' My account' }).hover();
  //await page.hover("//a[@data-toogle='dropdown']//sapn[contains(.,'My account')]");
  await page.getByRole('link', { name: 'Login' }).click();
  //await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('givemelognotes@gmail.com');
  //await page.getByRole('textbox', { name: 'Password' }).click();
  //await page.locator('[placeholder ="E-Mail Address"]').press('Tab'); ---i can use this as well
  await page.getByPlaceholder("E-Mail Address").press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Kasun123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
  await page.getByRole('link', { name: ' Edit your account' }).click();
  //await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Kasun2');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: ' My account' }).hover();
  //await page.hover("//a[@data-toogle='dropdown']//sapn[contains(.,'My account')]");
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
  
});

//increase timeout
test('very slow test', async ({ page }) => {
  test.setTimeout(120000);
  // ...
});



