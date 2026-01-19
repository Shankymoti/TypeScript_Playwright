import {test, expect, Locator} from '@playwright/test';

//Text Input/ Text Box/ Input Box
// Radio Buttons
//Check boxes

test('Text Input Action',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const textBox :Locator = page.locator('#name')

    expect(textBox).toBeVisible()
    expect(textBox).toBeEnabled()

    let length : string | null = await textBox.getAttribute('maxlength')//// Returns value of maxlength attribute of the element
    expect(length).toBe('15')

    await textBox.fill("Shashank")

    //console.log("text content of FirstName :", await textBox.textContent()); // returns empty

    const firstName :  string =  await textBox.inputValue();
    console.log("first name is ",firstName);
    expect(firstName).toBe('Shashank')

    await page.waitForTimeout(30000)
})