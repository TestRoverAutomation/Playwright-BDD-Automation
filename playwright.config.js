// @ts-nocheck
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';

// const testDir = defineBddConfig({
//   importTestFrom: 'tests/fixtures/fixture.js',
//   paths: ['tests/features/***.feature'],
//   require: ['tests/steps/***steps.js']
// });

const testDir = defineBddConfig({
  features: 'tests/features/***.feature',
  steps: ['tests/steps/***steps.js', 'tests/fixtures/fixture.js', "tests/hooks/hooks.js" ]
});

dotenv.config({
  path: `./env/.env.${process.env.ENV}`
});

export default defineConfig({
  testDir,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry'
  },

  /* Configure projects for major browsers */
  projects: [
    // Setup projects for specific files
  //  { name: 'adminsetup', testDir: './', testMatch: [/auth\/.*adminauthsetup\.js$/] },
 //   { name: 'testsetup', testDir: './', testMatch: [/auth\/.*testauthsetup\.js$/] },
    { name: 'usersetup', testDir: './', testMatch: [/auth\/.*userauthsetup\.js$/] },

    // Main testing projects
    // {
    //   name: 'admin',
    //   use: { ...devices['Desktop Chrome'], storageState: 'playwright/.auth/admin.json' },
    //   dependencies: ['adminsetup'],
    // },
    // {
    //   name: 'user',
    //   grep: /@changename/,
    //   use: { ...devices['Desktop Chrome'],
    //      storageState: 'playwright/.auth/user2.json' 
    //   },
    //    dependencies: ['usersetup'],
    // },
      {
        name: 'LoginTest',
        grep: /@login/,
        use: { ...devices['Desktop Chrome'],
        // storageState: 'playwright/.auth/user.json',
      },
      },
    // {
    //   name: 'test',
    //   use: { ...devices['Desktop Chrome'], storageState: 'playwright/.auth/test.json' },
    //   dependencies: ['testsetup'],
    // },

    // Uncomment the following sections if you want to include more browser testing
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'], storageState: 'playwright/.auth/user.json' },
    //   dependencies: ['setup'],
    // },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. Uncomment if needed */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. Uncomment if needed */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
