import { test, expect, Locator, Page } from '@playwright/test';
import { Base } from './BasePage';

export class Item extends Base{

    
    private addCartBtn: Locator;
    private basket: Locator;

    constructor(protected page: Page){
        super(page);
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

