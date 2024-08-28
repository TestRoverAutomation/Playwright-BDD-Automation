@login
Feature: Verify login

    Feature Description

	Verify user is able to login with valid and invalid credentials

	Scenario: Verify user is able to login with valid credentials
	 Given I navigate to "https://ecommerce-playground.lambdatest.io/"
	 And I click on My account
	 And I enter E-Mail Address "pranav@testroverautomation.com"
	 And I enter password "Test1234"
     When I click on submit button
	 Then I should verify url contains "route=account/account"

	Scenario Outline: Verify user is not able login with following credentails 
	 Given I navigate to "https://ecommerce-playground.lambdatest.io/"
	 And I click on My account
	 And I enter E-Mail Address "<emailaddress>"
	 And I enter password "<password>"
     When I click on submit button
	 Then I should verify user is not able to login and url contains "route=account/login"
	Examples:
		| emailaddress		| password 	 	| 
		| xzy@gmail.com 	  |	 TesMeTest     |
		| srk@testroverautomation.com | Jawan123 |
		| testerrgreat@123.com | Tesrxzy123 |
		| srk_jawan@test.com | great123 |
		| SalmanDabang@gmail.com | test 123 |