import {test, expect} from '@playwright/test';
import fs from 'fs'



test('Download Text file and verify it exists',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html')
await page.locator('#inputText').fill('welcome')
await page.locator('#generateTxt').click()

const [ download ] = await Promise.all([
    page.waitForEvent('download'), // Wait for download to start
    page.locator('#txtDownloadLink').click()  // Clicking on teh 'Downloaf text file' link
  ]);

const downloadPath = "downloads/testfile.txt"

download.saveAs(downloadPath)

const fileExists = fs.existsSync(downloadPath)
expect(fileExists).toBeTruthy()


if(fileExists){
    fs.unlinkSync(downloadPath)
}


})


test.only('Download Pdf file and verify it exists',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")

await page.locator('#inputText').fill('Welcome')
await page.locator('#generatePdf').click()


const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('#pdfDownloadLink').click()
]);

const filePath = "downloads/test.pdf"
download.saveAs(filePath)
const fileExists = fs.existsSync(filePath)

if(fileExists){
    fs.unlinkSync(filePath)
}

})

/*

import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Download Text file and verify it exists', async ({ page}) => {
  // Navigate to the download page
  await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');

  //Text file
  await page.locator('#inputText').fill("welcome"); // Filling text in the input box
  await page.locator('#generateTxt').click();  // Clicking on the 'Generate and Download text file' button
   
  // Start waiting for the download before clicking
  const [ download ] = await Promise.all([
    page.waitForEvent('download'), // Wait for download to start
    page.locator('#txtDownloadLink').click()  // Clicking on teh 'Downloaf text file' link
  ]);
// [ download ] is used to capture the download event and store the download object in the variable 'download'. This allows us to interact with the downloaded file, such as saving it to a specific location or checking its properties.
// here [] is used to destructure the array returned by Promise.all, which contains the download event. By using [ download ], we can directly access the download object without needing to reference it as an array element.

  // Save the file to a custom path
  const downloadPath = 'downloads/testfile.txt';
  await download.saveAs(downloadPath);

  // Check if file exists using Node's fs module
  const fileExists = fs.existsSync(downloadPath); //checks if the file exists.
  expect(fileExists).toBeTruthy();

  // Clean up downloaded files
  if (fileExists) {
    fs.unlinkSync(downloadPath);
  }
    
});


test('Download Pdf file and verify it exists', async ({ page}) => {
  // Navigate to the download page
  await page.goto('https://testautomationpractice.blogspot.com/p/download-files_25.html');

  //Text file
  await page.locator('#inputText').fill("welcome"); // Filling text in the input box
  await page.locator('#generatePdf').click();  // Clicking on the 'Generate and Download pdf file' button
   
  // Start waiting for the download before clicking
  const [ download ] = await Promise.all([
    page.waitForEvent('download'), // Wait for download to start
    page.locator('#pdfDownloadLink').click()  // Clicking on the 'Download pdf file' link
  ]);

  // Save the file to a custom path
  const downloadPath = 'downloads/testfile.pdf';
  await download.saveAs(downloadPath);

  // Check if file exists using Node's fs module
  const fileExists = fs.existsSync(downloadPath); //checks if the file exists.
  expect(fileExists).toBeTruthy();

  // Clean up downloaded files
  if (fileExists) {
    fs.unlinkSync(downloadPath);
  }
   
});

*/