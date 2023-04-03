import { expect, test } from "@playwright/test";

test("visit localhost", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.url()).toBe("http://localhost:3000/");
});
