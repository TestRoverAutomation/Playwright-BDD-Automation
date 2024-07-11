import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';

const { Before, Given, When, Then } = createBdd(test);

// 1. Missing step definition for "ecomlogin.feature:8:3"
Given('I navigate to {string}', async ({ ecomLoginPage, page }, url) => {
  await ecomLoginPage.navigateToUrl(url);
});

// 2. Missing step definition for "ecomlogin.feature:9:3"
Given('I click on My account', async ({ ecomLoginPage }) => {
  await ecomLoginPage.clickOnMyAccount();
});
// 3. Missing step definition for "ecomlogin.feature:10:3"
Given('I enter E-Mail Address {string}', async ({ ecomLoginPage }, emailAddress ) => {
   await ecomLoginPage.enterEmailAddress(emailAddress);
});

// 4. Missing step definition for "ecomlogin.feature:11:3"
Given('I enter password {string}', async ({ ecomLoginPage }, password) => {
  await ecomLoginPage.enterPassword(password);
  
});

// 5. Missing step definition for "ecomlogin.feature:12:6"
When('I click on submit button', async ({ecomLoginPage}) => {
    await ecomLoginPage.clickOnSubmit();
  });

// 5. Missing step definition for "ecomlogin.feature:12:3"
Then('I should verify url contains {string}', async ({page}, logged_url) => {
    await expect(page).toHaveURL(new RegExp(logged_url))
});


// 1. Missing step definition for "tests\ecomlogin.feature:21:3"
Then('I should verify user is not able to login and url contains {string}', async ({page}, login_url) => {
  await expect(page).toHaveURL(new RegExp(login_url));
});
