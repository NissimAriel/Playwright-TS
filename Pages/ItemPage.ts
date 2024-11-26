import { test, expect, Locator, Page } from '@playwright/test';

export class Item {

    
    private addCartBtn: Locator;
    private basket: Locator;

    constructor(protected page: Page){
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

