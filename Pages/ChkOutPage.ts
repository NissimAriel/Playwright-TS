import { test, expect, Locator, Page } from '@playwright/test';

export class Checkout {

    private firstName: Locator;
    private lastName: Locator;
    private zip: Locator;
    private contBtn: Locator;

    constructor(protected page: Page) {

        this.page = page;
        this.firstName = page.locator("#first-name");
        this.lastName = page.locator("#last-name")
        this.zip = page.locator("#postal-code")
        this.contBtn = page.locator("#continue")
    }

    async personalDetails(first: string, last: string, zip: string){
        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.zip.fill(zip)
        await this.contBtn.click();
    }

}

