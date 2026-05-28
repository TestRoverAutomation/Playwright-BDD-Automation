import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';

// We bind our hooks to our custom test fixture so they have access to custom page objects if needed.
const { Before, After, BeforeAll, AfterAll } = createBdd(test);

/**
 * BeforeAll Hook
 * Runs once before all tests in the suite start executing.
 * Perfect for global setup, initializing database connections, or setting up test data.
 */
BeforeAll(async () => {
    console.log("🚀 Starting Playwright BDD Test Suite Execution...");
});

/**
 * Tagged Before Hook
 * Runs before each scenario that is tagged with `@login` or `@ecom`.
 * This avoids globally overriding scenarios that navigate to other sites (like Google).
 */
Before({ tags: '@login or @ecom' }, async ({ page }) => {
    console.log("🧹 Before Scenario Setup: Navigating to the E-commerce home page...");
    await page.goto('https://ecommerce-playground.lambdatest.io/');
});

/**
 * After Hook
 * Runs after each individual scenario finishes execution, regardless of success or failure.
 * Excellent for taking screenshots on failure, cleaning up test-specific states, or logging.
 */
After(async () => {
    console.log("✅ After Scenario Teardown: Scenario execution completed.");
});

/**
 * AfterAll Hook
 * Runs once after all tests in the entire suite have finished executing.
 * Used for generating final custom reports, closing connections, or notifying teams.
 */
AfterAll(async () => {
    console.log("🏁 Playwright BDD Test Suite Execution Finished!");
});