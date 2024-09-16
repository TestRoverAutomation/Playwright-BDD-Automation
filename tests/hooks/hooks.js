import { chromium, firefox } from '@playwright/test';
import { createBdd } from 'playwright-bdd';


const { Before, After, BeforeAll, AfterAll,  } = createBdd();

Before(async({page})=>{
   await page.goto('https://ecommerce-playground.lambdatest.io/')
});

After(async()=>{
    console.log("This is a After.")
});

BeforeAll(async({browser})=>{
    const page = firefox.launch();
});

AfterAll(async()=>{
    console.log("This is a AfterAll.")
});