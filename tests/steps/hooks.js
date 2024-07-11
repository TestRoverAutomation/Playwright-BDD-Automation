
import { chromium } from '@playwright/test';
import { createBdd } from 'playwright-bdd';


const { Before, BeforeAll, After, AfterAll } = createBdd();

let page

Before(async function ({browser}) {
  browser = await chromium.launch();
  page = await browser.newPage();
  console.log(' This is before hook')
});

After(async function () {
  await page.close();
  console.log(' This is After hook')
});



