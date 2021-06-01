Feature: Google home page

  Scenario: Google home page test
    Given I open Home Url
    Then I should be able to see Input Box element
    And I type "test text" in Input Box element
