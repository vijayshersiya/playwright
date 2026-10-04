const {test,expect} = require('@playwright/test');
test("Check valid login", async({page})=>{

// await page.goto("https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https://mail.google.com/mail&ec=GAlAFw&hl=en&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1074801089:1791106370434264")

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await  page.waitForTimeout(5000)

await page.getByPlaceholder("Username").first().fill("Admin")
 await  page.waitForTimeout(3000)
await page.getByPlaceholder("Password").fill("admin123")

 await  page.waitForTimeout(3000)

 await page.locator("//button[@type='submit']").first().click();
 await  page.waitForTimeout(3000)

// await page.locator("input[type='password']").first().fill("admin123");
// await  page.waitForTimeout(3000)
// await page.locator("//button[@type='submit']").first().click();


// await page.getByPlaceholder("password").fill("vijay")
// await page.locator("input[type='text']").first().fill("Vijayshersiya141997");

// await  page.waitForTimeout(5000)

// Strict mode violation bypass karne ke liye .first() lagayein
// await page.locator("//button[@type='button']").first().click();

// await  page.waitForTimeout(5000)

// await page.goto("https://accounts.google.com/v3/signin/challenge/pwd?TL=ADG-GRRtcT6xpNeeHT4G3mztXeBjE6jTuUZAbFy4yoXCT1dMxyM8JA34WAZweUle&authuser=0&checkConnection=youtube%3A553&checkedDomains=youtube&cid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail&dsh=S1074801089%3A1791106370434264&ec=GAlAFw&flowEntry=AddSession&flowName=GlifWebSignIn&hl=en&pstMsg=1&service=mail")
// await  page.waitForTimeout(5000)

// await page.locator("input[type='password']").first().fill("Vijay@123");

//  await  page.waitForTimeout(5000)

// await page.locator("input[type='checkbox']").first().click();

//  await  page.waitForTimeout(5000)
})