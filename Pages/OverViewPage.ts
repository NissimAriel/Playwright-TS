import {test, expect, Locator, Page} from '@playwright/test';

export class OverView {
        
    page: Page;
    itemTitle: Locator;
    finishBtn: Locator;
    success: Locator;

    constructor(page: Page) {
        this.page = page;
        this.itemTitle = page.locator(".inventory_item_name");
        this.finishBtn = page.locator("#finish");
        this.success = page.locator(".complete-header");
    }

    async goFinish(){
        await this.finishBtn.click();
    }

}
