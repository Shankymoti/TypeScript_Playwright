// TC failed  - passed - flaky test 
// flaky test can handle by using retries in playwright.config.ts file and we can also use screenshot, video recording and trace recording to debug the flaky test.
// we can also use trace recording to debug the flaky test and we can view trace in html report and also we can view trace in command line and also we can view trace in utility like https://trace.playwright.dev/ by uploading the trace.zip file


import { test, expect } from '@playwright/test';

test.only('flaky test', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(10000);// to intrupt the test and make it flaky test 
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
    await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');

});


