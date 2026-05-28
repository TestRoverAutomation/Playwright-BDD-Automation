import { Page, Locator, expect } from '@playwright/test';

/**
 * EcomLoginPage Page Object Model (POM) Class
 * 
 * Page Object Model is a design pattern that creates an object repository for web UI elements.
 * Each web page has a corresponding Page Class that holds its locators and action methods.
 * This keeps test steps clean, reusable, and easy to maintain when the UI changes.
 */
export class EcomLoginPage {
  // Page object represents the Playwright browser page instance
  readonly page: Page;
  
  // Locators are defined as read-only properties to keep them centralized and typed
  readonly my_account_Btn: Locator;
  readonly email_box: Locator;
  readonly password_box: Locator;
  readonly submit_btn: Locator;

  /**
   * The constructor initializes the Playwright page and locates the UI elements.
   * Playwright uses lazy locator evaluation, meaning the element is only searched
   * when an action (like click or fill) is performed on it.
   */
  constructor(page: Page) {
    this.page = page;
    this.my_account_Btn = page.getByRole('button', { name: 'My account' });
    this.email_box = page.getByPlaceholder('E-Mail Address');
    this.password_box = page.getByPlaceholder('Password');
    this.submit_btn = page.locator("input[value='Login']");
  }

  /**
   * Navigates directly to the specified URL.
   * @param url The absolute URL path to navigate to.
   */
  async navigateToUrl(url: string) {
    await this.page.goto(url);
  }

  /**
   * Clicks on the 'My Account' button.
   */
  async clickOnMyAccount() {
    await this.my_account_Btn.click();
  }

  /**
   * Fills in the email address in the E-Mail placeholder box.
   * @param emailAddress The email string to enter.
   */
  async enterEmailAddress(emailAddress: string) {
    await this.email_box.fill(emailAddress);
  }

  /**
   * Fills in the password in the Password placeholder box.
   * @param password The password string to enter.
   */
  async enterPassword(password: string) {
    await this.password_box.fill(password);
  }

  /**
   * Clicks on the 'Login' submit button.
   */
  async clickOnSubmit() {
    await this.submit_btn.click();
  }

  /**
   * Asserts that the current browser URL matches the expected logged-in account page URL.
   * @param logged_url RegEx/substring expected in the URL after successful login.
   */
  async verifyUserLandOnAccountPage(logged_url: string) {
    await expect(this.page).toHaveURL(new RegExp(logged_url));
  }

  /**
   * Asserts that the current browser URL matches the expected login error page URL.
   * @param login_url RegEx/substring expected in the URL after a failed login.
   */
  async verifyUserIsNotAbleToLogin(login_url: string){
    await expect(this.page).toHaveURL(new RegExp(login_url));
  }
}
