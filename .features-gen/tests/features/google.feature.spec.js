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
});

const bddFileMeta = {
  "Navigate to goolge": {"pickleLocation":"5:5"},
};