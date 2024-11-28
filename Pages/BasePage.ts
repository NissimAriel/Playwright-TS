import { test, expect, Locator, Page } from '@playwright/test';

export abstract class Base {

    constructor(protected page: Page){

    }

    async validatePageUrl(url: string) {
        await test.step(`Validate that correct value of URL is ${url}`, async () => {
            await expect(this.page).toHaveURL(url);
        })
    }

    async validateElementText(element: Locator, expectedText: string){
        await test.step(`Validate correct text element is ${expectedText}`, async () => {
            await expect(element).toContainText(expectedText);
        }
            
    )};
}