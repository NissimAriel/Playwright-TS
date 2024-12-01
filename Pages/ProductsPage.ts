import { test, expect, Locator, Page } from '@playwright/test';
import { UserDetails } from '../Utilities/UserDetails'
import { Base } from './BasePage';


export class Products extends Base {

    private productsPageTitle: Locator;
    private itemPicked: Locator;

    constructor(protected page: Page) {
        super(page);
        this.page = page;
        this.itemPicked = page.locator("#item_4_title_link");
        this.productsPageTitle = page.locator('[class = "title"]');
    }

    async validateLoggedUrl(url: string){
        // await this.page.waitForURL(UserCredentials.LOGGED_URL);
        // await expect(this.page).toHaveURL(url);
        await this.validatePageUrl(UserDetails.LOGGED_URL);
    }

    async validatePageTitle(title: string){
        //await expect(this.productsPageTitle).toContainText(title);
        await this.validateElementText(this.productsPageTitle, title);
    }

    async choseItem(){
        await this.itemPicked.click();
    }

}

 