// @ts-check
import {test, expect} from '@playwright/test';
import {Utils} from '../Utilities/Utils';
import {POMmanager} from '../Pages/POMnanager'

test.describe("Tests", () => {
  test.beforeEach(async ({ page }) => {
    test.step("more details in the repport", async () => {
      const pommanager = new POMmanager(page);
      const login = pommanager.getLogin();
      await page.goto(Utils.User_Details.BaseUrl);
      await login.performLogin(
        Utils.User_Details.Username,
        Utils.User_Details.Password
      );
    });
  });

  test.afterEach(async ({ page }, testInfo) => {
    await page.waitForTimeout(500);
    await page.screenshot({
      path: `screenshots/${testInfo.title}_${testInfo.status}.jpg`,
    });
  });

  test("Validate Login Test", async ({ page }) => {
    await page.waitForURL(Utils.User_Details.LoggedUrl);
    expect(page).toHaveURL(Utils.User_Details.LoggedUrl);
  });

  test("Full Flow", async ({ page }) => {
    const pommanager = new POMmanager(page);
    const inven = pommanager.getInvenv();
    const item = pommanager.getItem();
    const sum = pommanager.getSum();
    const checkout = pommanager.getCheckOut();
    const overview = pommanager.getOverView();
    await inven.choseItem();
    await item.addItem();
    await item.goToBasket();
    await expect(sum.itemTitle).toContainText(Utils.Item_Name);
    await sum.goToChckOut();
    await checkout.personalDetails(
      Utils.User_Details.First_Name,
      Utils.User_Details.Last_Name,
      Utils.User_Details.Zip_Code
    );
    await expect(overview.itemTitle).toContainText(Utils.Item_Name);
    await overview.goFinish();
    await expect(overview.success).toContainText("Thank you for your order!");
  });
});
