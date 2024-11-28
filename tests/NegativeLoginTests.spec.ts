import { test, expect, Locator, Page } from '@playwright/test';
import { UserDetails } from '../Utilities/UserDetails';
import { ErrorMessages } from '../Utilities/ErrorMessages';
//import { BasePage } from '../Pages/BasePage'
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
        await login.performLogin(UserDetails.LOCKED_OUT_USER, UserDetails.CORRECT_PASSWORD);
        await login.validateErrorMessage(ErrorMessages.LOGIN_WITH_LOCKED_USER);
    });

    test("Login with incorrect username", async ({ page }) => {
        await login.performLogin(UserDetails.INCORRECT_USERNAME, UserDetails.CORRECT_PASSWORD);
        await login.validateErrorMessage(ErrorMessages.LOGIN_WITH_INCORRECT_CREDENTIALS);
    });

    test("Login with incorrect password", async ({ page }) => {
        await login.performLogin(UserDetails.STANDART_USER, UserDetails.INCORRECT_PASWORD);
        await login.validateErrorMessage(ErrorMessages.LOGIN_WITH_INCORRECT_CREDENTIALS);
    });


});