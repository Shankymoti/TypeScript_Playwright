import { Locator, Page } from "@playwright/test";

// export class CartPage {
//     private readonly page : Page;
//     private readonly productNameInCartSelector : string;

//     constructor(page : Page){
//         this.page = page;
//         // CSS selector to select all product names in the cart
//         this.productNameInCartSelector = '#tbodyid tr td:nth-child(2)';


//     }
//     // Method  to check if a specific product is present in the cart
//     async checkProductInCart(productName : string) : Promise<boolean>   {
//         const products = this.page.locator(this.productNameInCartSelector).all();
//         for(const product of await products){
//             const name = await product.textContent();
//             if(name?.trim() === productName){
//                 return true; // Product found in the cart
//             }
//         }
//         return false; // Product not found in the cart
//     }
// }

export class CartPage {
    private readonly page : Page;
   // private readonly productNameInCartSelector : string;
   private readonly productNameInCart : Promise<Array<Locator>>;

    constructor(page : Page){
        this.page = page;
        // CSS selector to select all product names in the cart
        this.productNameInCart = this.page.locator('#tbodyid tr td:nth-child(2)').all();


    }
    // Method  to check if a specific product is present in the cart
    async checkProductInCart(productName : string) : Promise<boolean>   {
        const products = this.productNameInCart


        for(const product of await products){
            const name = (await product.textContent())?.trim();
            console.log(name);
            if(name === productName){
                return true; // Product found in the cart
            }
        }
        return false; // Product not found in the cart
    }
}