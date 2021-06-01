import {When} from "cypress-cucumber-preprocessor/steps";

const {checkObjectsInMap} = require('../pop/index');
const {checkConstsInMap} = require('../common/consts/index');

/**
 *
 */
When(/^I (double click|click) on (.*) (first element|last element|element)$/, (condition, selectorValue, selectedOption) => {
    const elementName = checkObjectsInMap(`${selectorValue}`);

    if (selectedOption === 'last element' && condition === 'click') {
        cy.get(elementName).last().click();
    } else if (selectedOption === 'last element' && condition === 'double click') {
        cy.get(elementName).last().dblclick();
    }

    if (selectedOption === 'first element' && condition === 'click') {
        cy.get(elementName).first().click();
    } else if (selectedOption === 'first element' && condition === 'double click') {
        cy.get(elementName).first().dblclick();
    }

    if (selectedOption === 'element' && condition === 'click') {
        cy.get(elementName).click();
    } else if (selectedOption === 'element' && condition === 'double click') {
        cy.get(elementName).dblclick();
    }
});

/**
 *
 */
When(/^I right click on (.*) (first element|last element|element)$/, (selectorValue, selectedOption) => {
    const elementName = checkObjectsInMap(`${selectorValue}`);

    if (selectedOption === 'last element') {
        cy.get(elementName).last().rightclick();
    }

    if (selectedOption === 'first element') {
        cy.get(elementName).first().rightclick();
    }

    if (selectedOption === 'element') {
        cy.get(elementName).rightclick();
    }
});

/**
 *
 */
When(/^I type "([^"]+)" in (.*) element$/, (textValue, selectorValue) => {
    const elementName = checkObjectsInMap(`${selectorValue}`);

    cy.get(elementName).type(textValue);
});

/**
 *
 */
When(/^I open (.*)$/, (selectorValue) => {
    const elementName = checkObjectsInMap(`${selectorValue}`);

    cy.visit(elementName);
});

/**
 *
 */
When(/^I press (.+) on keyboard in (.*) element$/, (selectorValue, keyboardKeyValue) => {
    const elementName = checkObjectsInMap(`${selectorValue}`);
    const keyboardKey = checkConstsInMap(`${keyboardKeyValue}`);

    cy.get(elementName).type(`${keyboardKey}`);
});

/**
 *
 */
When(/I scroll to (.*)$/, (selectorValue) => {
    const elementName = checkObjectsInMap(`${selectorValue}`);

    cy.get(elementName).scrollTo('center');
});

/**
 *
 */
When('I delete state of the browser', () => {

    cy.clearCookies();
    cy.clearLocalStorage();
});

/**
 *
 */
When(/I delete (.+) cookie$/, (cookieValue) => {

    cy.clearCookie(`${cookieValue}`);
});

/**
 *
 */
When(/I (uncheck|check) (.*) (first element|last element|element)$/, (condition, selectorValue, selectedOption ) => {
    const elementName = checkObjectsInMap(`${selectorValue}`);

    if (selectedOption === 'first element' && condition === 'check') {
        cy.get(elementName).first().check();
    } else if (selectedOption === 'first element' && condition === 'uncheck') {
        cy.get(elementName).first().uncheck();
    }

    if (selectedOption === 'last element' && condition === 'check') {
        cy.get(elementName).last().check();
    } else if (selectedOption === 'last element' && condition === 'uncheck') {
        cy.get(elementName).last().uncheck();
    }

    if (selectedOption === 'element' && condition === 'check') {
        cy.get(elementName).check();
    } else if (selectedOption === 'element' && condition === 'uncheck') {
        cy.get(elementName).uncheck();
    }
});

/**
 *
 */
When(/I clear text in (.+) element$/, (selectorValue) => {
    const elementName = checkObjectsInMap(`${selectorValue}`);

    cy.get(elementName).clear();
});

/**
 *
 */
When(/I go (back|forward)$/, (selectedOption) => {

    if (selectedOption === 'back') {
        cy.go('back');
    }

    if (selectedOption === 'forward') {
        cy.go('forward');
    }
});

/**
 *
 */
When(/I reload the page$/, () => {

    cy.reload();
});

/**
 *
 */
When(/I scroll into view of (.*)$/, (selectorValue) => {
    const elementName = checkObjectsInMap(`${selectorValue}`);

    cy.scrollIntoView(elementName);
});

/**
 *
 */
When(/I select (.*) option in (.*) list$/, (selectedOption, selectorValue) => {
    const elementName = checkObjectsInMap(`${selectorValue}`);

    cy.get(elementName).select(selectedOption);
});

/**
 *
 */
When(/I wait (\d*\.?\d+) ms$/, (value) => {

    cy.wait(value);
});
