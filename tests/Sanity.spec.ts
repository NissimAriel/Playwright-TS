// @ts-check
import { test, expect } from '@playwright/test';
import { UserDetails } from '../Utilities/UserDetails';
import { Base } from '../Pages/BasePage'
import {Products} from '../Pages/ProductsPage'
import {Item} from '../Pages/ItemPage'
import {Sum} from '../Pages/SumPage'
import {Login} from '../Pages/LoginPage'
import { Checkout } from '../Pages/ChkOutPage';
import { OverView } from '../Pages/OverViewPage';
import { Complete } from '../Pages/CompletePage';


test.describe("Tests", () => {
  
  let base: Base;
  let login: Login;
  let products: Products;
  let item: Item;
  let sum: Sum;
  let checkout: Checkout;
  let overview: OverView;
  let complete: Complete;

  test.beforeEach(async ({page}) => {
    test.step("more details in the repport", async () => {
       
       login = new Login(page);
       products = new Products(page);
       item = new Item(page);
       sum = new Sum(page);
       checkout = new Checkout(page);
       overview = new OverView(page);
       complete = new Complete(page);
      
      await page.goto(UserDetails.BASE_URL);
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
    await products.validatePageUrl(UserDetails.LOGGED_URL);
  });

  test("Full Flow", async ({ page }) => {
    
    await products.validatePageTitle('Products');
    await products.choseItem();
    await item.addItem();
    await item.goToBasket();
    await sum.validateItemTitleSum();
    await sum.goToChckOut();
    await checkout.personalDetails(
      UserDetails.FIRST_NAME,
      UserDetails.LAST_NAME,
      UserDetails.ZIP_CODE
    );
    await overview.validateItemTitle(UserDetails.ITEM_NAME);
    await overview.goFinish();
    await complete.validatSuccessMessage("Thank you for your order!");
  });
});
