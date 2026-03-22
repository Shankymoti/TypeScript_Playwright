import {test, expect} from '@playwright/test'

// test data
const searchItems :  string[] = ['laptop', 'Gift card', 'smartphone', 'monitor'];
//using for-of loop
// for(const item of searchItems){
// test(`Search test ${item}`, async ({page})=>{
//     await page.goto('https://demowebshop.tricentis.com/');
//     await page.locator("input[value='Search store']").fill(item); 
//     await page.locator(".button-1.search-box-button").click();
//     await expect(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true})
// })
// }

//using forEach function
// searchItems.forEach((item)=>{
//     test(`Search test for ${item}`, async ({page})=>{
//     await page.goto('https://demowebshop.tricentis.com/');
//     await page.locator("input[value='Search store']").fill(item); 
//     await page.locator(".button-1.search-box-button").click();
//     await expect(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true})
// })
// })


test.describe("searching items",()=>{
    searchItems.forEach((item)=>{
    test(`Search test for ${item}`, async ({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator("input[value='Search store']").fill(item); 
    await page.locator(".button-1.search-box-button").click();
    await expect(page.locator('h2 a').nth(0)).toContainText(item,{ignoreCase:true})
})
})
})