import { test, expect, Locator, Page } from '@playwright/test';
import { Base } from './BasePage';
import { ErrorMessages } from '../Utilities/ErrorMessages';

export class Login extends Base {

    private usernameField: Locator;
    private passwordField: Locator;
    private loginBtn: Locator;
    private errorMessage: Locator;
        
    constructor(protected page: Page) {
        super(page);
        this.usernameField = page.locator("#user-name");
        this.passwordField = page.locator("#password");
        this.loginBtn = page.locator("#login-button")
        this.errorMessage = page.locator('[data-test = "error"]');
    }

    async performLogin(userName = process.env.STANDART_USER as string, 
        password = process.env.CORRECT_PASSWORD as string){
         
        await this.usernameField.fill(userName);
        await this.passwordField.fill(password);
        await this.loginBtn.click();
    }

    async validateErrorMessage(errorMessage: ErrorMessages){
        await this.validateElementText(this.errorMessage, errorMessage.valueOf());
    }
    
}

