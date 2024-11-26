import { test, expect, Locator, Page } from '@playwright/test';
export class Sum {

    private checkout: Locator;
    readonly itemTitleSum: Locator;

    constructor(protected page: Page){
        this.page = page;
        this.checkout = page.locator("#checkout")
        this.itemTitleSum = page.locator(".inventory_item_name");
    }

    async goToChckOut(){
        await this.checkout.click();
    }
}

