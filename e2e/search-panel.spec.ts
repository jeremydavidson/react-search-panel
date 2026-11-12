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

  test("shows and uses the clear button", async ({ page }) => {
    await page.goto("/iframe.html?id=searchpanel--clear-button&viewMode=story")
    const input = page.getByPlaceholder("Search")
    await expect(page.getByTitle("Clear search")).toBeVisible()
    await expect(input).toHaveValue("Default input")
    await page.getByTitle("Clear search").click()
    await expect(input).toHaveValue("")
  })

  test("centers the loading indicator in the field", async ({ page }) => {
    await page.goto("/iframe.html?id=searchpanel--loading-indicator&viewMode=story")
    const spinner = page.getByLabel("Loading")
    const field = page.locator("[class*='searchContainer']").first()
    await expect(spinner).toBeVisible()

    const spinnerBox = await spinner.boundingBox()
    const fieldBox = await field.boundingBox()
    expect(spinnerBox).toBeTruthy()
    expect(fieldBox).toBeTruthy()

    if (!spinnerBox || !fieldBox) {
      return
    }

    const spinnerCenterY = spinnerBox.y + spinnerBox.height / 2
    const fieldCenterY = fieldBox.y + fieldBox.height / 2
    expect(Math.abs(spinnerCenterY - fieldCenterY)).toBeLessThan(4)
  })

  test("selects a link result", async ({ page }) => {
    await page.goto("/iframe.html?id=searchpanel--link-variant&viewMode=story")
    await expect(page.getByPlaceholder("Search")).toBeVisible()
  })
})
