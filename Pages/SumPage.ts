import {test, expect, Locator, Page} from '@playwright/test';
export class Sum {

    page: Page;
    checkout: Locator;
    itemTitle: Locator;

    constructor(page: Page){
        this.page = page;
        this.checkout = page.locator("#checkout")
        this.itemTitle = page.locator(".inventory_item_name");
    }

    async goToChckOut(){
        await this.checkout.click();
    }
}

