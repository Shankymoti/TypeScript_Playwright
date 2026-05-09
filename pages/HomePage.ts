import { Locator, Page } from "@playwright/test";


// export class HomePage {
//     private readonly page: Page;
//     private readonly productListLocator : string;
//     private readonly addToCartButton : Locator;
//     private readonly cartLink : Locator;

//     constructor(page: Page){
//         this.page = page;

//         // CSS selector targeting the product links under product cart
//         this.productListLocator = '#tbodyid .card-block h4 a'; //div#tbodyid div.card-block h4.card-title a


//         // Add to cart button (exact match using text)

//         this.addToCartButton = this.page.locator('a:has-text("Add to cart")');

//         //cart link in the top menu
//         this.cartLink = this.page.locator('#cartur');

//     }
//         //Method to add a specific product to the cart
//         async addProductToCart(productName: string): Promise<void>{
//             const productElement = this.page.locator(this.productListLocator).all();

//         for(const product of await productElement){
//             const name = await product.textContent();
//             if(name?.trim() === productName){
//                 await product.click();
//                 break; // Exit the loop once the product is found and clicked
//             }
//         }

//         // Handle the alert that appears after clicking "Add to cart"
//         this.page.once('dialog', async dialog=>{
//             if(dialog.message().includes('added')){
//                 await dialog.accept();
//             }

//         })
//         await this.addToCartButton.click();

//         }

//         // Method to navigate to the cart page
//         async goToCart(): Promise<void>{
//             await this.cartLink.click();
//         }


// }

export class HomePage {
    private readonly page: Page;
    private readonly productList: Promise<Array<Locator>>;
    //private readonly productListLocator : string;
    private readonly addToCartButton : Locator;
    private readonly cartLink : Locator;

    constructor(page: Page){
        this.page = page;

        // CSS selector targeting the product links under product cart
        this.productList = this.page.locator('#tbodyid .card-block h4 a').all(); //div#tbodyid div.card-block h4.card-title a


        // Add to cart button (exact match using text)

        this.addToCartButton = this.page.locator('a:has-text("Add to cart")');

        //cart link in the top menu
        this.cartLink = this.page.locator('#cartur');

    }
        //Method to add a specific product to the cart
        async addProductToCart(productName: string): Promise<void>{
            const productElement = this.productList;

        for(const product of await productElement){
            const name = await product.textContent();
            if(name?.trim() === productName){
                await product.click();
                break; // Exit the loop once the product is found and clicked
            }
        }

        // Handle the alert that appears after clicking "Add to cart"
        this.page.once('dialog', async dialog=>{
            if(dialog.message().includes('added')){
                await dialog.accept();
            }

        })
        await this.addToCartButton.click();

        }

        // Method to navigate to the cart page
        async goToCart(): Promise<void>{
            await this.cartLink.click();
        }


}