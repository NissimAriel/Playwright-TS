import {test, expect, Locator, Page} from '@playwright/test';

export class Item {

    page: Page;
    addCartBtn: Locator;
    basket: Locator;

    constructor(page: Page){
        this.page = page;
        this.addCartBtn = page.locator(".btn.btn_primary.btn_small.btn_inventory");
        this.basket = page.locator(".shopping_cart_link");
    }

    async addItem(){
        await this.addCartBtn.click();
    }

    async goToBasket(){
        await this.basket.click();
    }


}

