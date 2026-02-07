import {test,expect} from '@playwright/test'


test('Single fileupload', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#singleFileInput').setInputFiles('uploads/testfile1.pdf')

    await page.locator('button:has-text("Upload Single File")').click()

    const text1 : string | null = await page.locator('#singleFileStatus').textContent()

    console.log(text1);
    expect(text1).toContain('testfile1')
    await page.waitForTimeout(3000)
})

test.only('multiple file upload', async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/')

  await page.locator('#multipleFilesInput').setInputFiles(['uploads/testfile1.pdf','uploads/Test2.txt'])
  await page.locator("#multipleFilesForm button").click()

  const text : string = await page.locator('#multipleFilesStatus').innerText()

  expect(text).toContain('testfile1')
  expect(text).toContain('Test2')
})




/*
import { test, expect } from '@playwright/test';


  test('Single file upload', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#singleFileInput').setInputFiles('uploads/Test1.txt');
    await page.locator('button:has-text("Upload Single File")').click();

    const msg = await page.locator('#singleFileStatus').textContent();
    expect(msg).toContain('Test1.txt');

    console.log('Single file upload is successful...');
    await page.waitForTimeout(5000);
    
  });

  test('Multiple file upload', async ({ page }) => {
     await page.goto('https://testautomationpractice.blogspot.com/');

     await page.locator('#multipleFilesInput').setInputFiles(['uploads/Test1.txt', 'uploads/Test2.txt']);

    await page.locator('button:has-text("Upload Multiple Files")').click();

    const msg = await page.locator('#multipleFilesStatus').textContent();
    expect(msg).toContain('Test1.txt');
    expect(msg).toContain('Test2.txt');

    console.log(' Multiple files uploaded successfully...');

    await page.waitForTimeout(5000);

  });

*/