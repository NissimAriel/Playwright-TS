// @ts-check
import {test, expect} from '@playwright/test';
import {Utils} from '../Utilities/Utils';
import {BasePage} from '../Pages/BasePage'

test.describe("Tests", () => {
  test.beforeEach(async ({ page }) => {
    test.step("more details in the repport", async () => {
      const base = new BasePage(page);
      const login = base.getLogin();
      await page.goto(Utils.BASE_URL);
      await login.performLogin();
    });
  });

  test.afterEach(async ({ page }, testInfo) => {
    await page.waitForTimeout(500);
    await page.screenshot({
      path: `screenshots/${testInfo.title}_${testInfo.status}.jpg`,
    });
  });

  test("Validate Login Test", async ({ page }) => {
    await page.waitForURL(Utils.LOGGED_URL);
    expect(page).toHaveURL(Utils.LOGGED_URL);
  });

  test("Full Flow", async ({ page }) => {
    const base = new BasePage(page);
    const inven = base.getInvenv();
    const item = base.getItem();
    const sum = base.getSum();
    const checkout = base.getCheckOut();
    const overview = base.getOverView();
    await inven.choseItem();
    await item.addItem();
    await item.goToBasket();
    await expect(sum.itemTitle).toContainText(Utils.ITEM_NAME);
    await sum.goToChckOut();
    await checkout.personalDetails(
      Utils.FIRST_NAME,
      Utils.LAST_NAME,
      Utils.ZIP_CODE
    );
    await expect(overview.itemTitle).toContainText(Utils.ITEM_NAME);
    await overview.goFinish();
    await expect(overview.success).toContainText("Thank you for your order!");
  });
});
