import { test, expect } from '@playwright/test';

test('handle popup', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Assuming the button is "Popup Windows" based on the snapshot; adjust locator if needed
    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('button:has-text("Popup Windows")').click()  // Updated locator
    ]);

    const pages = context.pages();
    console.log("Number of pages:", pages.length);
    console.log("Main page URL:", pages[0].url());
    console.log("Popup URL:", popup.url());

    // Loop through pages to find and handle the popup (adjust condition based on actual popup)
    for (const pw of pages) {
        const title = await pw.title();
        if (title.includes('Selenium') || pw.url().includes('selenium.dev')) {  // Updated condition for actual popup
            // Perform actions on the popup, e.g., click something if present
            // await pw.locator('some-selector').click();  // Add actual actions
            await pw.close();  // Close the popup
        }
    }

    // No need for waitForTimeout; use proper waits or assertions
    await page.close();
    await context.close();
});

/*


import {test,expect,Page} from "@playwright/test";

test("handle popups",async({browser})=>{

    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/")

    //Multple popups

    //page.waitForEvent('popup');
    //await page.locator("#PopUp").click();

    await Promise.all([page.waitForEvent('popup'),await page.locator("#PopUp").click()]);

    const allPopupWindows=context.pages(); // Returns array of pages
    console.log("Number of pages/windows:",allPopupWindows.length); //3

    console.log(allPopupWindows[0].url()); // returns url of main page/parent
    console.log(allPopupWindows[1].url()) //https://www.selenium.dev/
    console.log(allPopupWindows[2].url()) //https://playwright.dev/ 


    for(const pw of allPopupWindows)
    {
        const title=await pw.title();
        if(title.includes('Playwright')){
                await pw.locator('.getStarted_Sjon').click();
                await page.waitForTimeout(5000);
                //Perform any other actions....
                await pw.close(); // This will close playwrigt popup window

        }

    }

    await page.waitForTimeout(5000);
    
   
})

*/