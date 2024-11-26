import { test, expect, Locator, Page } from '@playwright/test';

export class OverView {
        
    
    readonly itemTitle: Locator;
    private finishBtn: Locator;
    readonly success: Locator;

    constructor(protected page: Page) {
        this.page = page;
        this.itemTitle = page.locator(".inventory_item_name");
        this.finishBtn = page.locator("#finish");
        this.success = page.locator(".complete-header");
    }

    async goFinish(){
        await this.finishBtn.click();
    }

}
