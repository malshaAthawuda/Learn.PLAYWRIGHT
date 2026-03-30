import { test } from "@playwright/test";


test("loging test demo", async ({ page }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/");

    await page.getByRole('button', { name: ' My account' }).hover();
    await page.getByRole('link', { name: 'Login' }).click();
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('malsha2003@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('malsha123');
    await page.getByRole('button', {name: 'Login'}).click()
    await page.waitForTimeout(5000)

});

//****Normally we use the const browser, context and the page *****/

// import { chromium, test } from "@playwright/test";
//     const browser = await chromium.launch({
//         headless: false
//      });
//     const context = await browser.newContext();
//     const page = await context.newPage();
    
// test("loging test demo", async () => {
//     await page.goto("https://courseweb.sliit.lk/login/index.php");
//     await page.hover("text=My account"); --Use XPath
//     await page.click("text=Login");  --Use Direct Locator
//     // await page.click("'Login'")  -- Use directly without text keyword
//     await page.fill("input[name='E-Mail Aaddress']","malshaathawuda2003@gmail.com")  // enter the data 
//     await page.fill("input[name='Password']","malsha123")// Locator and the value 
//     await page.click("input[value='Login']")
//     await page.waitForTimeout(5000) // thread out sleeping JavaS

// })


     