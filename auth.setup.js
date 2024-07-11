import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page })=>{
    await page.goto(process.env.URL);
    await page.getByRole('button',{name:'My account'}).hover();
    await page.getByText('Login').click();
    await page.locator('#input-email').fill(process.env.EMAIL);
    await page.locator('#input-password').fill(process.env.PASSWORD);
    await page.locator("input[value='Login']").click();
    await expect(page).toHaveURL(/.*route=account\/account/); 
    

    await page.context().storageState({ path: authFile });
});