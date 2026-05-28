import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user2.json';

setup('authenticate', async ({ page })=>{
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    await page.getByRole('button',{name:'My account'}).hover();
    await page.getByText('Login').click();
    await page.locator('#input-email').fill('dev-enviroment@testroverautomation.com');
    await page.locator('#input-password').fill('DevEnv1234');
    await page.locator("input[value='Login']").click();
    await expect(page).toHaveURL(/.*route=account\/account/); 
    

    await page.context().storageState({ path: authFile });
});