import { test, expect, Locator, Page } from '@playwright/test';
import { UserDetails } from '../Utilities/UserDetails';
import { ErrorMessages } from '../Utilities/ErrorMessages';
//import { BasePage } from '../Pages/BasePage'
import { Login } from '../Pages/LoginPage';
import { Products } from '../Pages/ProductsPage';
import { TIMEOUT } from 'dns';

test.describe("Tests", () => {
    
    let login: Login;
    let products: Products;
    
    test.beforeEach(async ({ page }) => {
      
       test.step("more details in the repport", async () => {
        login = new Login(page);
        products = new Products(page);
        await page.goto(UserDetails.BASE_URL);
        
      });
    });
  
    test.afterEach(async ({ page }, testInfo) => {
      await page.waitForTimeout(500);
      await page.screenshot({
        path: `screenshots/${testInfo.title}_${testInfo.status}.jpg`,
      });
    });

    test("Login with standard_user", async ({ page }) => {
        await login.performLogin(UserDetails.STANDART_USER, UserDetails.CORRECT_PASSWORD);
        await products.validateLoggedUrl(UserDetails.LOGGED_URL);
    });

    test("Login with problem_user", async ({ page }) => {
        await login.performLogin(UserDetails.PROBLEM_USER, UserDetails.CORRECT_PASSWORD);
        await products.validateLoggedUrl(UserDetails.LOGGED_URL);
    });

    test("Login with performance_glitch_user", async ({ page }) => {
        await login.performLogin(UserDetails.PERFORMANCE_GLITCH_USER, UserDetails.CORRECT_PASSWORD);
        await products.validateLoggedUrl(UserDetails.LOGGED_URL);
    });


});