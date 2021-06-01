Feature: Features Component

  Scenario: As a user I should be able to see Features component
    Given I open Home Url
    Then Element Features should exists
    When I move to the center viewport of the page
    Then I should be able to see Features element
    And I should be able to see Features Header element
    And I should be able to see Features Sub Header element
    And I should be able to see Features Description element
    And I should be able to see Features Card element
    And I should be able to see Features Card Image Container element
    And I should be able to see Features Card Image element
    And I should be able to see Features Card Text Container element
    And I should be able to see Features Card Text Title element
    And I should be able to see Features Card Text Description element
    And I should be able to see Additional Features Text Content element
