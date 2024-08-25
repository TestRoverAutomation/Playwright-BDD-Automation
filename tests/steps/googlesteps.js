import { createBdd } from 'playwright-bdd';


const { Before, After, Given, When, Then } = createBdd();

Given('I navigate to Google Home Page {string}', async ({ page }, arg) => {
    await page.goto(arg)
  });