// first we have create a folder for screenshots like screenshort for this particular test file and provide path for screenshot floder  and then we can use screenshot method to capture screenshot and provide path for that particular screenshot and we can also add timestamp to make it unique and also using this we cannot have screeshort in html report but if we add screenshot in  playwright.config.ts then it will automatically capture screenshot for all test files and store in test-results folder and it will create one folder for each test file and store screenshots in that folder
// if we add screenshot in  playwright.config.ts then it will automatically capture screenshot for all test files and store in test-results folder and it will create one folder for each test file and store screenshots in that folder


import {test,expect} from '@playwright/test'

test('screenshot  demo', async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/')
    const timestamp = Date.now()
    //page screenshot
    await page.screenshot({path : 'screenshot/'+'homepage'+timestamp+'.png'})

    // full page screenshot
    await page.screenshot({path : 'screenshot/'+'fullpage'+timestamp+'.png', fullPage:true})

    // Element screenshot
    const logo = page.locator("img[alt='Tricentis Demo Web Shop']")
    logo.screenshot({path : 'screenshot/'+'Element'+timestamp+'.png'})

    await page.locator("img[alt='Tricentis Demo Web Shop']").screenshot({path : 'screenshot/'+'logo'+timestamp+'.png'})
  //  await page.locator(".product-grid home-page-product-grid").screenshot({path : 'screenshot/'+'featureProduct'+timestamp+'.png'})
    await page.waitForTimeout(3000)
})

test.only('screenshot from config', async({page})=>{
    await page.goto("https://www.demoblaze.com/index.html")
    await page.locator('#login2').click()
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123X')
    await page.getByRole('button',{name : 'Log in'}).click()
    await expect(page.getByRole('link',{name : 'Log out'})).toBeVisible()
    await expect(page.locator('#nameofuser')).toHaveText('Welcome pavanol')
})
/*
import {test,expect} from '@playwright/test'


test('screenshots demo',async ({page})=>{

await page.goto("https://demowebshop.tricentis.com/")

const timestamp=Date.now();

//page screenshot
//await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png'})

//full page screenshot
//await page.screenshot({path:'screenshots/'+'fullpage'+timestamp+'.png', fullPage:true})

//element screenshot
//const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
//logo.screenshot({path:'screenshots/'+'logo'+timestamp+'.png'})

//await page.locator("img[alt='Tricentis Demo Web Shop']").screenshot({path:'screenshots/'+'logo'+timestamp+'.png'})

await page.locator('.product-grid.home-page-product-grid').screenshot({path:'screenshots/'+'featuredproducts'+timestamp+'.png'})

})

test.only('screenshots from config',async ({page})=>{
 await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123X'); //password incorrect
  await page.getByRole('button', { name: 'Log in' }).click();
   await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');
  
})

*/