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

// Radio Button
 test('Radio Button Action', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
   const maleRadio :Locator =  page.locator('#male')

   await expect(maleRadio).toBeVisible()
   await expect(maleRadio).toBeEnabled()
   expect(await maleRadio.isChecked()).toBe(false)

   await maleRadio.check()
   expect(await maleRadio.isChecked()).toBe(true)
   await expect(maleRadio).toBeChecked()
})

// CheckBox
test('Checkbox Action', async ({page})=>{
     await page.goto('https://testautomationpractice.blogspot.com/')

      // 1. Select specific checkbox (Sunday) using getByLabel and assert

    //   const sundayCheckbox : Locator =  page.getByLabel('Sunday')
    //   await sundayCheckbox.check()
    //   await expect(sundayCheckbox).toBeChecked()
    //   await page.waitForTimeout(3000)

      // 2. Select all checkboxes and assert each is checked
      const days : string[] = ['Sunday','Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday','Saturday']

      const checkboxes : Locator[] = days.map((index)=> page.getByLabel(index))
      expect(checkboxes.length).toBe(7)

    //   for(let checkbox of checkboxes){
    //     await checkbox.check()
    //     await expect(checkbox).toBeChecked()
    //   }


     // 4. Uncheck last 3 checkboxes and assert

    //  for(let checkbox of checkboxes.slice(-3)){
    //     await checkbox.uncheck()
    //     await expect(checkbox).not.toBeChecked()
    //  }
     

     ////5.    Toggle checkboxes: If checked, uncheck; if unchecked, check. Assert state flipped.

    //  for(let checkbox of checkboxes){
    //     if(await checkbox.isChecked()){
    //         await checkbox.uncheck()
    //         await expect(checkbox).not.toBeChecked()
    //     }else{
    //         await checkbox.check()
    //         await expect(checkbox).toBeChecked()
    //     }
    //  }
     
     // 6. Randomely select check boxes - Select checkboxes by index (1, 3, 6) and assert

    //  const index : number[] = [1,3,5]
    //  for(let i of index){
    //     await checkboxes[i].check()
    //     await expect(checkboxes[i]).toBeChecked()
    //  }

     //await page.waitForTimeout(30000)

     ////7. Select the check box based on the Label

     const weekname : string = "Friday"

     for( let label of days){
        if(label.toLocaleLowerCase() == weekname.toLocaleLowerCase()){
          const day : Locator =  page.getByLabel(label)
          await day.check()
          await expect(day).toBeChecked()
        }
     }
})