@changename
Feature: Change First Name and Last name 

    User is able to change the First name and Last name 
 Scenario: Verify user can update account information successfully
    Given I navigate to my account "https://ecommerce-playground.lambdatest.io/"
	And I click on My account
    When I click on Edit your account information
    And I change first name to "Pranav"
    And I change last name to "TestRover"
    And I click on Continue button
    Then I should see the success message "Success: Your account has been successfully updated."