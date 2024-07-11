@skip
Feature: Verify login with different enviroment

    Feature Description

	Verify user is able to login with dev, qa, and prod

    @skip
	Scenario: Verify user is able to login with dev, qa, and prod
	 Given I navigate to home page
	 And I click on My account
	 And I enter E-Mail Address and Password
     When I click on submit button
	 Then I should verify url contains "route=account/account"