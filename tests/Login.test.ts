import { test } from "@playwright/test";


test("loging test demo", async ({ page }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/");

    await page.getByRole('button', { name: ' My account' }).hover();
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('malsha2003@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('malsha123');
    await page.getByRole('button', {name: 'Login'}).click()
    await page.waitForTimeout(5000)

    // await page.goto("https://ecommerce-playground.lambdatest.io/");
    // await page.hover("text=My account");
    // await page.click("text=Login");or await page.click("'Login'")
    //await page.fill("input[name='E-Mail Aaddress']","malshaathawuda2003@gmail.com")
    //await page.fill("input[name='Password']","malsha123")
    //await page.click("input[value='Login']")
});


     