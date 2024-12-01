import { test, expect, Locator, Page } from '@playwright/test';
import { Base } from './BasePage';
import { UserDetails } from '../Utilities/UserDetails';

export class Sum extends Base {

    private checkout: Locator;
    private itemTitleSum: Locator;

    constructor(protected page: Page){
        super(page);
        this.page = page;
        this.checkout = page.locator("#checkout")
        this.itemTitleSum = page.locator(".inventory_item_name");
    }

    async validateItemTitleSum(){ 
        await this.validateElementText(this.itemTitleSum, UserDetails.ITEM_NAME);
    }

    async goToChckOut(){
        await this.checkout.click();
    }
}

