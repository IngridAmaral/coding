import test, { expect } from "@playwright/test";

test.describe("Roadmap", async () => {
  test("Test flow from initial path to roadmap", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "devices" }).click();

    await page.locator('svg[aria-label="Roadmap"] >> nth=0').click();

    await expect(page.getByText("Roadmap")).toBeVisible();
  });
});
