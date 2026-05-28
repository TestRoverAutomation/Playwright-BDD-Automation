import { test as base } from 'playwright-bdd';
import { EcomLoginPage } from '../pages/ecomLoginObj';
import { EcomChangePage } from '../pages/ecom_changeNameObj';

type MyFixtures = {
  ecomLoginPage: EcomLoginPage;
  ecomChangePage: EcomChangePage;
};

export const test = base.extend<MyFixtures>({
    ecomLoginPage: async ({ page }, use) => {
        await use(new EcomLoginPage(page));
    },
    ecomChangePage: async ({ page }, use) => {
        await use(new EcomChangePage(page));
    }
});
