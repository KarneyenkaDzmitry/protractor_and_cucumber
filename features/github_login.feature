Feature: logit on github web site
 Scenario: Check sing in form on github
  Given I am on page "https://github.com/"
   When I click on "Sing in" reference at the top of page
   Then I see the "Sign in to GitHub" text 
   And  I see the form with "2" fields
#     And I see the field "Username or email address" and the field "Password"
 
#  Scenario: login with existing user
#   Given I am on page "https://github.com/"
#    When I click on "Sing in" reference at the top of page
#     And I login on the site with options
# |username|UserForTests|
# |password|  GitTest_1 |
#    Then I see the homepage of the user with text "UserForTests"
  