import {test,expect} from '@playwright/test'


test('Handle authentication popup',async({page})=>{
    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth")

    await expect( page.locator('.example p')).toContainText("Congratulations! You must have the proper credentials.")

})

test.only('Handle auth', async({browser})=>{
  const context = await  browser.newContext({httpCredentials:{username:'admin', password:'admin'}})
   const page =  await context.newPage();

   await page.goto('https://the-internet.herokuapp.com/basic_auth')

   await page.waitForLoadState()
    await expect(page.locator('text=Congratulations')).toBeVisible();

})

/*
import {test,expect,Page} from "@playwright/test";

test("authenticated popup",async({browser})=>{

    const context=await browser.newContext({httpCredentials:{username:'admin', password:'admin'}});


    const page=await context.newPage();


    // https://the-internet.herokuapp.com/basic_auth'
    // http://username:password@the-internet.herokuapp.com/basic_auth


    
    //Approach 1: directly pass login along with url
    //await page.goto('https://the-internet.herokuapp.com/basic_auth');
    /*await page.goto('http://admin:admin@the-internet.herokuapp.com/basic_auth');

    await page.waitForLoadState(); // wait ofr page loaded completely
    
    await expect(page.locator('text=Congratulations')).toBeVisible();

    await page.waitForTimeout(5000);
  */

    
    //Approach 2: pass the login along with browser context
  /*  await page.goto('https://the-internet.herokuapp.com/basic_auth');
 
    await page.waitForLoadState(); // wait ofr page loaded completely
    
    await expect(page.locator('text=Congratulations')).toBeVisible();

    await page.waitForTimeout(5000);
    
   
})

*/

