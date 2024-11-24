import {test, expect, Locator, Page} from '@playwright/test';

export class Checkout{

    page: Page;
    firstName: Locator;
    lastName: Locator;
    zip: Locator;
    contBtn: Locator;

    constructor(page: Page) {

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

