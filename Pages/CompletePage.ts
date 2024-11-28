import { test, expect, Locator, Page } from '@playwright/test';
import { Base } from './BasePage';

export class Complete extends Base {


    private successMessage: Locator; 

    constructor(protected page: Page) {
        super(page);
        this.page = page;
        this.successMessage = page.locator(".complete-header");
    }

    async validatSuccessMessage(message: string){
        //await expect(this.successMessage).toContainText(message);
        await this.validateElementText(this.successMessage, message);
    }
}