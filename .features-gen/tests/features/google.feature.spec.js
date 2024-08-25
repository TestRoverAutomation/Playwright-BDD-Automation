/** Generated from: tests\features\google.feature */
import { test } from "playwright-bdd";

test.describe("Google Feature", () => {

  test.only("Navigate to goolge", { tag: ["@only"] }, async ({ Given, page }) => {
    await Given("I navigate to Google Home Page \"https://www.google.com/\"", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("tests\\features\\google.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
  $scenarioHookFixtures: ({ browser }, use) => use({ browser }),
});

const bddFileMeta = {
  "Navigate to goolge": {"pickleLocation":"6:5","tags":["@only"],"ownTags":["@only"]},
};