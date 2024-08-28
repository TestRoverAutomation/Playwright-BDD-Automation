import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';

const { Before, After, Given, When, Then } = createBdd(test);

 Given('I navigate to my account {string}', async ({page}, url) => {
   const cookies = require('../../playwright/.auth/user2.json');
   const cookiesArray = cookies.cookies;
   await page.context().addCookies(cookiesArray);
   await page.goto(url);
 });
// 1. Missing step definition for "tests\features\ecomic_changeName.feature:13:5"
When('I click on Edit your account information', async ({page, ecomChangePage}) => {
   await ecomChangePage.clickOnEditMyAccount();
});

// 2. Missing step definition for "tests\features\ecomic_changeName.feature:14:5"
When('I change first name to {string}', async ({ecomChangePage}, firstnm) => {
   await ecomChangePage.editFirstName(firstnm);
});

// 3. Missing step definition for "tests\features\ecomic_changeName.feature:15:5"
When('I change last name to {string}', async ({ ecomChangePage }, lastnm) => {
    await ecomChangePage.editLastName(lastnm);
});

// 4. Missing step definition for "tests\features\ecomic_changeName.feature:16:5"
When('I click on Continue button', async ({ecomChangePage}) => {
   await ecomChangePage.clickOnContinue();
});

// 5. Missing step definition for "tests\features\ecomic_changeName.feature:17:5"
Then('I should see the success message {string}', async ({ecomChangePage }, message) => {
  await expect(ecomChangePage.sucess_Message).toContainText(new RegExp(message));
});

