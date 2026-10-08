const {test, expect } =  require('@playwright/test');
test ("Verify error message", async ({page}) =>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").first().fill("Admin")
 await  page.waitForTimeout(3000)
 await page.getByPlaceholder("Password").fill("vijay123")

 await  page.waitForTimeout(3000)

 await page.locator("//button[@type='submit']").first().click();
 await  page.waitForTimeout(3000)

 const alertText = await page.locator(".oxd-alert-content-text").textContent();

  expect(alertText.includes("Invalid")).toBeTruthy()
  expect (alertText === "Invalid credentials").toBeTruthy()

 

})