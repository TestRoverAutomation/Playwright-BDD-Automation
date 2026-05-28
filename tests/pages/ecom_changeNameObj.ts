import { Page, Locator } from '@playwright/test';

/**
 * EcomChangePage Page Object Model (POM) Class
 * 
 * Manages UI components and workflows for updating account profile information
 * on the e-commerce store platform.
 */
export class EcomChangePage {
    readonly page: Page;
    readonly editAccount: Locator;
    readonly FirstName_box: Locator;
    readonly LastName_box: Locator;
    readonly continue_btn: Locator;
    readonly sucess_Message: Locator;

    /**
     * Initializes elements specific to profile updates.
     * Demonstrates different locator strategies: getByRole, getByPlaceholder, and custom CSS.
     */
    constructor(page: Page) {
      this.page = page;
      this.editAccount = page.getByRole('link', {name: 'Edit your account information'}); 
      this.FirstName_box = page.getByPlaceholder('First Name');
      this.LastName_box = page.getByPlaceholder('Last Name');
      this.continue_btn =  page.locator("input[value='Continue']");
      this.sucess_Message = page.getByText("Success: Your account has been successfully updated.");
    }
  
    /**
     * Clicks on 'Edit your account information' link.
     */
    async clickOnEditMyAccount() {
      await this.editAccount.click();
    }
  
    /**
     * Updates the First Name input field.
     * @param firstName The new first name string.
     */
    async editFirstName(firstName: string) {
      await this.FirstName_box.fill(firstName);
    }
  
    /**
     * Updates the Last Name input field.
     * @param lastName The new last name string.
     */
    async editLastName(lastName: string) {
      await this.LastName_box.fill(lastName);
    }
  
    /**
     * Clicks the 'Continue' button to save profile modifications.
     */
    async clickOnContinue() {
      await this.continue_btn.click();
    }
}