/* annotations
-----------------
only
skip
fail
fixme
slow
*/
// annotations are used to control the execution of test cases, we can use annotations to run specific test cases, skip test cases, mark test cases as expected to fail, and mark test cases as slow.
// annotation is also applied to the test.describe block, if we apply annotation to the test.describe block, then it will be applied to all the test cases inside that block.


import {test, expect} from '@playwright/test';


//only
test('Test 1', async({page})=>{
    await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
})

// skip
test.skip('Test 2..', async({page})=>{
    await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
})

test('Test 3..', async({page, browserName})=>{
    test.skip(browserName==='chromium', 'this test skipped if browser is firfox')
    await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
})


test.fail('Test 4..', async({page})=>{
    await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
})


test.fixme('Test 5..', async({page})=>{
    await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
})


test('Test 6..', async({page})=>{
    test.slow()
    await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
})

/*

import { test, expect } from '@playwright/test';



//only
test('test1', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});


//skip
test.skip('test2', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});


//skip -based on teh condition
test('test3', async ({ page,browserName}) => {
  test.skip(browserName==='firefox','this test skipped if browser is firfox');
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});

//fail
test.fail('test4', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});


//fixme
test.fixme('test5', async ({ page }) => {
  await page.goto('https://www.google.com/');
  //No assertion
});


//slow
test('test6', async ({ page }) => {
  test.slow();  // triple the default timeout ( default : 30 secs, after tripling: 90 secs)
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle('Google');
});
*/



