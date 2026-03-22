import {test,expect} from '@playwright/test';

test.beforeEach('launching app',async({page})=>{

await page.goto("https://demowebshop.tricentis.com/")

})

test('logotest', async ({ page }) => {
    await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();
});

test('title test', async ({ page }) => {
    expect(await page.title()).toContain("Demo Web Shop1");
});

test('search test', async ({ page }) => {
    await page.locator('#small-searchterms').fill("laptop");  // fill teh text in search box
    await page.locator("input[value='Search']").click();      // click on the button
    await expect.soft(page.locator('h2 a').nth(0)).toContainText("laptop", { ignoreCase: true });
});

//npm install -D allure-playwright
// 2 add this line in playwright.config.ts file reporter: 'allure-playwright', // it will generate allure report and store it in allure-results folder and this folder will be created in root directory and npx allure serve allure-results command will open the report in browser
// 3 install allure command line tool in terminal command = npm install -g allure-commandline --save-dev
// in mac I skipped it ---configure path for allure command line tool in environment variable // in macOS and linux we can add this line in .bash_profile file export PATH=$PATH:/usr/local/bin/allure and in windows we can add this line in environment variable setx PATH "%PATH%;C:\allure-commandline\bin"
// 4 generate allure report in terminal command = npx allure generate allure-results --clean -o allure-report
// 5 open allure report in browser command = npx allure serve allure-results