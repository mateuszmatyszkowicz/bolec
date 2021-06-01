Feature: FAQ component

  Scenario: As a user I should be able to see FAQ component
    Given I open Home Url
    Then Element FAQ should exists
    When I move to the bottom viewport of the page
    Then I should be able to see FAQ Header Content element
    And I should be able to see FAQ Header element
    And I should be able to see FAQ Sub Header element
    And I should be able to see FAQ Description element
    And I should be able to see FAQ Question Container element
    And I should be able to see FAQ Question Single Container element
    When I click on FAQ Question - element
    Then I should be able to see FAQ Question element
    And I should be able to see FAQ Question Text element
    And I should be able to see FAQ Question Toggle Icon element
    And I should be able to see FAQ Question Answer element
