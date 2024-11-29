import { test, expect, Locator, Page } from '@playwright/test';
import { Base } from './BasePage';
import { UserCredentials } from '../Utilities/UserCredentials';
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

    async performLogin(userName: string = UserCredentials.STANDART_USER, password: string = UserCredentials.CORRECT_PASSWORD){
        await this.usernameField.fill(userName);
        await this.passwordField.fill(password);
        await this.loginBtn.click();
    }

    async validateErrorMessage(errorMessage: ErrorMessages){
        await this.validateElementText(this.errorMessage, errorMessage.valueOf());
    }
    
}

