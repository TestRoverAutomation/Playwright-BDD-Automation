# Playwright-BDD-Automation 🚀

## Overview
Welcome to the **Playwright-BDD-Automation** repository! This is a modern, TypeScript-based testing framework engineered to demonstrate best practices combining **Playwright**, **Playwright BDD**, and the **Page Object Model (POM)** design pattern. It is intentionally documented to serve as an excellent learning resource for developers and QA engineers looking to build robust automation suites.

---

## 📖 Educational Guide for Learners

Understanding how BDD connects with Playwright is key to mastering this framework. Here is a step-by-step breakdown of how all the pieces fit together:

### 1. Behavior-Driven Development (BDD)
This framework uses Gherkin syntax (`.feature` files) to define scenarios in human-readable plain text.
- **Location**: `tests/features/*.feature`
- **Example Scenario**:
  ```gherkin
  Scenario: Verify user is able to login with valid credentials
    Given I navigate to "https://ecommerce-playground.lambdatest.io/"
    And I click on My account
    When I click on submit button
  ```

### 2. Step Definitions
Step definitions bridge the gap between English Gherkin statements and automated code. The library `playwright-bdd` maps matching text strings inside `Given`, `When`, and `Then` steps directly to TypeScript execution blocks.
- **Location**: `tests/steps/*steps.ts`

### 3. Page Object Model (POM)
To prevent step definitions from getting cluttered with selector lookups and low-level browser actions, we use the Page Object Model.
- **Location**: `tests/pages/*Obj.ts`
- Each web page has its own class encapsulating page elements (`Locator`) and behaviors (e.g. `enterEmailAddress()`).
- Centralizing selectors here means if the website UI changes, we only need to update the selector in **one place**!

### 4. Custom Fixtures
Playwright's fixture system is used to inject initialized page objects directly into steps. This keeps setup/teardown automatic and isolated between tests.
- **Location**: `tests/fixtures/fixture.ts`
- Instead of manually importing and instantiating page objects inside every step, we define them in `fixture.ts` so they are available automatically:
  ```typescript
  Given('I click on My account', async ({ ecomLoginPage }) => {
    await ecomLoginPage.clickOnMyAccount();
  });
  ```

### 5. Multi-Environment Handling
We use `dotenv` to load environment configurations seamlessly from `.env` files located in the `env` directory:
- `dev`: `env/.env.dev`
- `qa`: `env/.env.qa`
- `prod`: `env/.env.prod`
The appropriate file is loaded dynamically based on the `ENV` system variable.

---

## 🛠️ Installation

To set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/TestRoverAutomation/Playwright-BDD-Automation.git
   cd Playwright-BDD-Automation
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```

---

## 🏃 Running Tests & Scripts

This framework is configured with cross-platform scripts that run perfectly on macOS, Linux, and Windows:

| Script Name | Command | Description |
| :--- | :--- | :--- |
| `npm run clean` | `npx rimraf .features-gen` | Deletes generated BDD test files |
| `npm run bddgen` | `npx bddgen` | Compiles Cucumber `.feature` files into executable Playwright tests |
| `npm run dev-env` | Runs dev tests | Executes step definitions using the **development** environment variables |
| `npm run qa-env` | Runs QA tests | Executes step definitions using the **QA** environment variables |
| `npm run prod-env` | Runs prod tests | Executes step definitions using the **production** environment variables |
| `npm test` | Clean, generate, & run | Performs full generation and runs playwright tests |
