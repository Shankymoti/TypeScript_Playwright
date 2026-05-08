import {Page, Locator} from '@playwright/test';

class LoginPage {
    // define variables - private and readonly

    private readonly page: Page;
    private readonly loginLink : Locator
    private readonly userNameInput : Locator
    private readonly passwordInput : Locator
    private readonly loginButton : Locator

    

    //constructor

    constructor(page: Page) {
        this.page = page;
        this.loginLink = this.page.locator('#login2');
        this.userNameInput = this.page.locator('#loginusername')
        this.passwordInput = this.page.locator('#loginpassword')
        this.loginButton = this.page.locator("[onclick='logIn()']");
    }

    //actions methods

    async clickLoginLink(): Promise<void> // we can also return the type of the method as void because it is not returning anything
    {
        await this.loginLink.click();
        await this.page.waitForTimeout(20000);
    }

    async enterIserName(username : string) : Promise<void>
    {
        await this.userNameInput.clear()
        await this.userNameInput.fill(username)
    }

    async enterPassword(password :string): Promise<void>
    {
        await this.passwordInput.clear()
        await this.passwordInput.fill(password)
    }

    async clickLoginButton(): Promise<void>
    {
        await this.loginButton.click();
    }

    // or we can also create a method to perform all the actions in one method
    async performLogin(username : string, password : string)
    {
        await this.clickLoginLink();
        await this.enterIserName(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}


// POC follows encapsulation concept means wrapping the data and methods in a single class, variable or property is private and can only be accessed within the class and can't be access out the class. for the reason we made everythings as private and locators are fixed, they won't change every time so they are readonly readonly and methods are public and can be accessed outside the class.

// constructor is used to initialize the variables and it is called when we create an object of the class and it is used to set the initial values of the variables and it is also used to perform any setup that is required before the test execution.
// while creating the constructor we need to pass the page fixture as a parameter because we need to perform the actions on the page and we need to initialize the locators in the constructor because locators are fixed and they won't change every time so we can initialize them in the constructor and we can use them in the methods. and we can also create separate methods for each action and we can call those methods in the test case. it is up to us how we want to design our page object model. but it is always better to create separate methods for each action because it will be more readable and maintainable. and if we want to change the locator or the action then we can change it in one place and it will reflect in all the test cases where we are using that method.
// we can also create a method to perform all the actions in one method and we can also create separate methods for each action and we can call those methods in the test case. it is up to us how we want to design our page object model. but it is always better to create separate methods for each action because it will be more readable and maintainable. and if we want to change the locator or the action then we can change it in one place and it will reflect in all the test cases where we are using that method.