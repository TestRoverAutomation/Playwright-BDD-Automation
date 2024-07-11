/** Generated from: tests\features\ecomic_changeName.feature */
import { test } from "../../../tests/fixtures/fixture.js";

test.describe("Change First Name and Last name", () => {

  test("Verify user can update account information successfully", async ({ Given, page, And, ecomLoginPage, When, ecomChangePage, Then }) => {
    await Given("I navigate to my account \"https://ecommerce-playground.lambdatest.io/\"", null, { page });
    await And("I click on My account", null, { ecomLoginPage });
    await When("I click on Edit your account information", null, { page, ecomChangePage });
    await And("I change first name to \"Pranav\"", null, { ecomChangePage });
    await And("I change last name to \"TestRover\"", null, { ecomChangePage });
    await And("I click on Continue button", null, { ecomChangePage });
    await Then("I should see the success message \"Success: Your account has been successfully updated.\"", null, { ecomChangePage });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("tests\\features\\ecomic_changeName.feature"),
});

const testMetaMap = {
  "Verify user can update account information successfully": {"pickleLocation":"4:2"},
};