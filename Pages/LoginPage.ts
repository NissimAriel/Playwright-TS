import { test, expect, Locator, Page } from '@playwright/test';
import { Utils } from '../Utilities/Utils';

export class Login {

    //page: Page;
    private usernameField: Locator;
    private passwordField: Locator;
    private loginBtn: Locator;
        
    constructor(protected page: Page) {
        //this.page = page;
        this.usernameField = page.locator("#user-name");
        this.passwordField = page.locator("#password");
        this.loginBtn = page.locator("#login-button")
    }

    async performLogin(userName: string = Utils.STANDART_USERNAME, password: string = Utils.CORRECT_PASSWORD){
        await this.usernameField.fill(userName);
        await this.passwordField.fill(password);
        await this.loginBtn.click();
    }
    
}

