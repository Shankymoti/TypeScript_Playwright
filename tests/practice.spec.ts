import {test,expect} from '@playwright/test'

test('Amazon search', async ({ page, context }) => {

    await page.goto('https://www.amazon.in/')
   await page.locator('#twotabsearchtextbox').fill('Samsung')
   await page.locator('#twotabsearchtextbox').click()
   // await page.locator('#twotabsearchtextbox').press('ArrowDown')
   await page.locator('.autocomplete-results-container').first().click()

   //await page.locator("[data-cy='title-recipe'] > a > h2 > span").click()
   const firstproduct = page.locator("[data-cy='title-recipe'] > a > h2 > span")

   const [childPage] = await Promise.all([context.waitForEvent('page'), firstproduct.first().click()]);

    await childPage.waitForLoadState();






})


test.skip('Amazon search1', async ({ page, context }) => {

    await page.goto('https://www.amazon.in/');

    await page.locator('#twotabsearchtextbox').fill('Samsung');

    // Optional: wait for suggestions and click first suggestion
    await page.waitForSelector('.autocomplete-results-container');
    await page.locator('.autocomplete-results-container div').first().click();

    // Click first product and handle new tab
    const [childPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('h2 a').first().click()
    ]);

    await childPage.waitForLoadState();

});