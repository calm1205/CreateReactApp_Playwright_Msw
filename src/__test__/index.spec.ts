import { expect, test } from "./customTest";

test("visit localhost", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  expect(page.url()).toBe("http://localhost:3000/");
  await expect(page.getByText("mock coffee 1")).toBeVisible();
});
