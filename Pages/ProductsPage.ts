import { test, expect, Locator, Page } from '@playwright/test';


export class Products {

    
    private itemPicked: Locator;

    constructor(protected page: Page) {
        this.page = page;
        this.itemPicked = page.locator("#item_4_title_link");


    }

    async choseItem(){
        await this.itemPicked.click();
    }

}

 