const { test, expect } = require("@playwright/test", "@TimeOut");

test("validate login in Hellwege ", async ({ page }) => {
  // Navigate to URL
  await page.goto("https://dev.hellwege.com/");

  //Click on login button
  await page.getByRole("link", { name: "" }).click();
  await page.getByRole("link", { name: "Sign in" }).click();

  // clickon emial field
  await page.getByLabel("E-Mail");
  await page.getByRole("link" , {name:"shettiarachchi+HW@bs-international.nl "}).click();
  await page.getByLabel("")

  await expect(
    page.getByRole("button", { name: "Search", exact: true })
  ).toBeEnabled();
  await page.getByRole("button", { name: "Search", exact: true }).click();

  await page.waitForTimeout(5000);
  //Click on the paylist
  await page.getByRole("link", { name: "Cypress by Testers Talk☑️" }).click();
  await page.waitForTimeout(5000);

  //validate title
  await expect(page).toHaveTitle(
    "Cypress Tutorial Full Course 2023 | Learn Cypress in 5 Hrs - YouTube"
  );
});
