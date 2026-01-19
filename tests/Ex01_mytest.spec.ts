import {test, expect} from '@playwright/test';


// fixture - -- A global varible -- like page, browser

test("Verify title", async ({page})=>{
   await page.goto("http://www.automationpractice.pl/index.php")
   const title  :  string= await page.title()
   console.log("title: ", title);
   await  expect(page).toHaveTitle("My Shop");
})