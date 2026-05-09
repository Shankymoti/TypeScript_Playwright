import {test, expect} from '@playwright/test';

import { LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage'
import {CartPage} from '../pages/CartPage';


test("User can login and add a product to the cart", async ({page}) => {

    await page.goto("https://www.demoblaze.com/index.html")
    //Login Page
    const loginPage = new LoginPage(page)

    await loginPage.clickLoginLink();
    await loginPage.enterIserName("pavanol")
    await loginPage.enterPassword("test@123")
    await loginPage.clickLoginButton();

   //await loginPage.performLogin("pavanol", "test@123");

    //Home Page
    const homePage = new HomePage(page);
   await homePage.addProductToCart('Samsung galaxy s6');
    await page.waitForTimeout(5000);
   await homePage.goToCart(); 
   await page.waitForTimeout(5000);

    //Cart Page
    const cartPage = new CartPage(page);
    const isProductInCart = await cartPage.checkProductInCart('Samsung galaxy s6');
    
  //  expect(isProductInCart).toBeTruthy();
    expect(isProductInCart).toBe(true);

     

})