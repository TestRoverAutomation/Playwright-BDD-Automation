/** Generated from: tests\features\google.feature */
import { test } from "playwright-bdd";

test.describe("Google Feature", () => {

  test("Navigate to goolge", async ({ Given, page }) => {
    await Given("I navigate to Google Home Page \"https://www.google.com/\"", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\features\\google.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
  $scenarioHookFixtures: ({ page }, use) => use({ page }),
  $workerHookFixtures: [({ browser }, use) => use({ browser }), { scope: "worker" }],
});

const bddFileMeta = {
  "Navigate to goolge": {"pickleLocation":"5:5"},
};