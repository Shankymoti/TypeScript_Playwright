import {test, expect} from '@playwright/test'


test('scrolling to footer ',async({page})=>{
 await page.goto('https://demowebshop.tricentis.com/')

const text = await page.locator('.footer-disclaimer').innerText();
 console.log(text);
})

test('scrolling inside dropdown',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    const dropdown =  page.locator('#comboBox')
     await dropdown.click()

    const item = page.locator('#dropdown div:nth-child(100)')
     console.log("text is :",await item.innerText());
    await item.click()
    const text = await dropdown.inputValue()
    console.log(text);   
})

test.only("Scrolling inside the table", async({page})=>{
    await page.goto('https://datatables.net/examples/basic_init/scroll_xy.html')
     const name = await page.locator("table[id='example'] tbody tr:nth-child(10) td:nth-child(2)").innerText()
    console.log(name);

    const email = await page.locator("table[id='example'] tbody tr:nth-child(10) td:nth-child(9)").innerText()
    console.log(email);
    })

    
    /*
Most of the time, Playwright will automatically scroll for you before doing any actions. 
Therefore, you do not need to scroll explicitly.

*/

/*
import { test, expect } from '@playwright/test';


test('Scrolling to footer', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  //Footer element - automatically scrolled before doing any action
  const footerText:string=await page.locator('.footer-disclaimer').innerText(); //Automatic scrolling
  console.log("Footer text captured:", footerText);

});

test('Scrolling inside dropdrown', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.locator("#comboBox").click();
  const option= page.locator('#dropdown div:nth-child(100)');
  console.log("Option captured from Dropdown:", await option.innerText());
 await option.click();

});


test.only('Scrolling inside the table', async ({ page }) => {
  await page.goto('https://datatables.net/examples/basic_init/scroll_xy.html');

  const name=await page.locator('tbody tr:nth-child(10) td:nth-child(2)').innerText(); //Automatic scrolling - vertical
  console.log("Last Name from 10th Row & 2nd Column :", name); //Kelly

  const email=await page.locator('tbody tr:nth-child(10) td:nth-child(9)').innerText(); //Automatic scrolling - Horizantal
  console.log("Email from 10th Row & 9th Column :", email); //c.kelly@datatables.net

});
*/