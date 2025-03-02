import { test, expect, Locator, Page } from '@playwright/test';
import { ErrorMessages } from '../Utilities/ErrorMessages';
import { UserDetails } from '../Utilities/UserDetails';
import { Login } from '../Pages/LoginPage';

test.describe("Tests", () => {      // Check out parmeterized in docs.
    
    let login: Login;
    
    test.beforeEach(async ({ page }) => {
      
       test.step("more details in the repport", async () => {
        login = new Login(page);
        await page.goto(UserDetails.BASE_URL);
        
      });
    });
  
    test.afterEach(async ({ page }, testInfo) => {
      await page.waitForTimeout(500);
      await page.screenshot({
        path: `screenshots/${testInfo.title}_${testInfo.status}.jpg`,
      });
      await page.close();
    });

    test("Login with locked_out_user", async ({ page }) => {
        await login.performLogin(process.env.LOCKED_OUT_USER, process.env.CORRECT_PASSWORD);
        await login.validateErrorMessage(ErrorMessages.LOGIN_WITH_LOCKED_USER);
    });

    test("Login with incorrect username", async ({ page }) => {
        await login.performLogin(process.env.INCORRECT_USERNAME, process.env.CORRECT_PASSWORD);
        await login.validateErrorMessage(ErrorMessages.LOGIN_WITH_INCORRECT_CREDENTIALS);
    });

    test("Login with incorrect password", async ({ page }) => {
        await login.performLogin(process.env.STANDART_USER, process.env.INCORRECT_PASWORD);
        await login.validateErrorMessage(ErrorMessages.LOGIN_WITH_INCORRECT_CREDENTIALS);
    });


});