import {test, expect} from '@playwright/test'

test("verify URL", async ({page})=>{
await page.goto('http://www.automationpractice.pl/index.php')
let url = page.url()
console.log("URL is:", url)
await expect(page).toHaveURL(/automationpractice/)// regex - pattern matching

})