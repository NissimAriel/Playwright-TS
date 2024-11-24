import {test, expect, Locator, Page} from '@playwright/test';
export class Login {

    page: Page;
    usernameField: Locator;
    passwordField: Locator;
    loginBtn: Locator;
        
    constructor(page: Page) {
        this.page = page;
        this.usernameField = page.locator("#user-name");
        this.passwordField = page.locator("#password");
        this.loginBtn = page.locator("#login-button")
    }

    async performLogin(userName: string, password: string){
        await this.usernameField.fill(userName);
        await this.passwordField.fill(password);
        await this.loginBtn.click();
    }
    
}

