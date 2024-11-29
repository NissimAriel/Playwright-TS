import { test, expect, Locator, Page } from '@playwright/test';
import { UserCredentials } from '../Utilities/UserCredentials';
import { ErrorMessages } from '../Utilities/ErrorMessages';
import { UserDetails } from '../Utilities/UserDetails';
import { Login } from '../Pages/LoginPage';

test.describe("Tests", () => {
    
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
    });

    test("Login with locked_out_user", async ({ page }) => {
        await login.performLogin(UserCredentials.LOCKED_OUT_USER, UserCredentials.CORRECT_PASSWORD);
        await login.validateErrorMessage(ErrorMessages.LOGIN_WITH_LOCKED_USER);
    });

    test("Login with incorrect username", async ({ page }) => {
        await login.performLogin(UserCredentials.INCORRECT_USERNAME, UserCredentials.CORRECT_PASSWORD);
        await login.validateErrorMessage(ErrorMessages.LOGIN_WITH_INCORRECT_CREDENTIALS);
    });

    test("Login with incorrect password", async ({ page }) => {
        await login.performLogin(UserCredentials.STANDART_USER, UserCredentials.INCORRECT_PASWORD);
        await login.validateErrorMessage(ErrorMessages.LOGIN_WITH_INCORRECT_CREDENTIALS);
    });


});