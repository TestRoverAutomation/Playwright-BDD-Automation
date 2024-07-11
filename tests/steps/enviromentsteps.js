import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture'; 

const { Given, When, Then } = createBdd(test);

// 1. Missing step definition for "tests\features\enviroment.feature:10:3"
Given('I navigate to home page', async ({ecomLoginPage, page}) => {
   await ecomLoginPage.navigateToUrl(process.env.URL);
   await page.pause();
   console.log(process.env.URL)
});

// 2. Missing step definition for "tests\features\enviroment.feature:12:3"
Given('I enter E-Mail Address and Password', async ({ecomLoginPage}) => {
   await ecomLoginPage.enterEmailAddress(process.env.EMAIL);
   await ecomLoginPage.enterPassword(process.env.PASSWORD)
   console.log('Email:', process.env.EMAIL);
   console.log('Password:', process.env.PASSWORD);
});