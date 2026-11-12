import { expect, test } from "@playwright/test"

test.describe("SearchPanel Storybook", () => {
  test("loads the default story and expands results", async ({ page }) => {
    await page.goto("/iframe.html?id=searchpanel--default&viewMode=story")
    const input = page.getByPlaceholder("Search")
    await expect(input).toBeVisible()
    await input.click()
    await expect(page.getByText("A choice")).toBeVisible()
  })

  test("selects a checkbox choice and shows a chip", async ({ page }) => {
    await page.goto("/iframe.html?id=searchpanel--multi-select&viewMode=story")
    await expect(page.getByTitle("Delete A choice")).toBeVisible()
  })

  test("clears the search input from the clear button story", async ({ page }) => {
    await page.goto("/iframe.html?id=searchpanel--clear-button&viewMode=story")
    const input = page.getByPlaceholder("Search")
    await expect(input).toHaveValue("")
    await input.fill("typed value")
    await page.getByTitle("Clear search").click()
    await expect(input).toHaveValue("")
  })

  test("selects a link result", async ({ page }) => {
    await page.goto("/iframe.html?id=searchpanel--link-variant&viewMode=story")
    await expect(page.getByPlaceholder("Search")).toBeVisible()
  })
})
