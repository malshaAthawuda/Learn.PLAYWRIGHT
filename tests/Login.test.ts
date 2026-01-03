import { test } from "@playwright/test";


test("loging test demo", async ({ page }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
    await page.click("text=Login");
});


