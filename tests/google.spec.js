const {test,expect} = require('@playwright/test');

test("verify application title", async({page}) =>{
    await page.goto("http://google.com");
    const url = await page.url();

    console.log("url is",+url);

    const title = await page.title();
console.log("title is",+title);
    await expect(page).toHaveTitle("Google")
})