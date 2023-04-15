import { expect, test } from "./customTest";
import { coffeeMock2, coffeeMockError } from "../__mock__/coffee.mock";

const path = "http://localhost:3000/";

test.describe("mockテスト", () => {
  test.beforeEach(async ({ page }) => await page.goto(path));

  test("URLが正しいこと", async ({ page }) => {
    expect(page.url()).toBe(path);
  });

  test("既存mockのレスポンスが正しいこと", async ({ page }) => {
    page.on("console", (msg) => console.log(msg));
    await expect(page.getByText("mock_coffee: 1")).toBeVisible();
  });

  test("mockの上書きができていること", async ({ page, worker }) => {
    // mock1 → mock2に上書き
    await worker.use(coffeeMock2);
    await expect(page.getByText("mock_coffee: 2")).toBeVisible();
  });

  test("errorの場合はerrorと表示できていること", async ({ page, worker }) => {
    await worker.use(coffeeMockError);
    await expect(page.getByText("Internal Server Error")).toBeVisible();
  });
});
