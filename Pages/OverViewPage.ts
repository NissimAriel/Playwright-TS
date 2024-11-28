import { test, expect, Locator, Page } from '@playwright/test';
import { Base } from './BasePage';

export class OverView extends Base {
        
    
    private itemTitle: Locator;
    private finishBtn: Locator;
    

    constructor(protected page: Page) {
        super(page);
        this.page = page;
        this.itemTitle = page.locator(".inventory_item_name");
        this.finishBtn = page.locator("#finish");
        
    }


    async validateItemTitle(title: string){
        //await expect(this.itemTitle).toContainText(title);
        await this.validateElementText(this.itemTitle, title)
    }    

    async goFinish(){
        await this.finishBtn.click();
    }

}
