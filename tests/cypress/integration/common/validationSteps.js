import {Then} from "cypress-cucumber-preprocessor/steps";

const {checkObjectsInMap} = require('../pop/index');

/**
 *
 */
Then(/URL of the page should (be|contain) "([^"]+)"$/, (condition, selectorValue) => {
    const elementName = checkObjectsInMap(`${selectorValue}`);

    if (condition === 'be') {
        cy.url().should('eq', `${elementName}`);
    }

    if (condition === 'contain') {
        cy.url().should('contain', `${elementName}`);
    }
});

/**
 *
 */
Then(/^I should (be|not be) able to see (.*) element$/, (condition, selectorValue) => {
    const elementName = checkObjectsInMap(`${selectorValue}`);

    if (condition === 'be') {
        cy.get(elementName).should('be.visible');
    }

    if (condition === 'not be') {
        cy.get(elementName).should('not.be.visible');
    }
});

/**
 *
 */
Then(/^Element (.*) should (not exists|exists)$/, (selectorValue,condition) => {
    const elementName = checkObjectsInMap(`${selectorValue}`);

    if (condition === 'exists') {
        cy.get(elementName).should('exist');
    }

    if (condition === 'not exists') {
        cy.get(elementName).should('not.exist');
    }
});

/**
 *
 */
Then(/^Element (.*) should (not have|have) class "([^"]+)"$/, (selectorValue,condition,classValue) => {
    const elementName = checkObjectsInMap(`${selectorValue}`);

    if (condition === 'have') {
        cy.get(elementName).should('have.css', `${classValue}`)
    }

    if (condition === 'not have') {
        cy.get(elementName).should('not.have.css', `${classValue}`)
    }
});

/**
 *
 */
Then(/^Element (.*) should (not be|be) enabled$/, (selectorValue,condition) => {
    const elementName = checkObjectsInMap(`${selectorValue}`);

    if (condition === 'be') {
        cy.get(elementName).should('be.enabled')
    }

    if (condition === 'not be') {
        cy.get(elementName).should('be.disabled')
    }
});

/**
 *
 */
Then(/^Element (.*) should (have|not have|contain|not contain) text "([^"]+)"$/, (selectorValue,condition,textValue) => {
    const elementName = checkObjectsInMap(`${selectorValue}`);

    if (condition === 'have') {
        cy.get(elementName).should('have.text', `${textValue}`)
    }

    if (condition === 'not have') {
        cy.get(elementName).should('not.have.text', `${textValue}`)
    }

    if (condition === 'contain') {
        cy.get(elementName).should('contain', `${textValue}`)
    }

    if (condition === 'not contain') {
        cy.get(elementName).should('not.contain', `${textValue}`)
    }
});

/**
 *
 */
Then(/^Element (.*) should (have|not have) value "([^"]+)"$/, (selectorValue,condition,value) => {
    const elementName = checkObjectsInMap(`${selectorValue}`);

    if (condition === 'have') {
        cy.get(elementName).should('have.value', `${value}`)
    }

    if (condition === 'not have') {
        cy.get(elementName).should('not.have.value', `${value}`)
    }
});

/**
 *
 */
Then(/^The title of the page should (be|contain) "([^"]+)"$/, (condition, textValue) => {

    if (condition === 'be') {
        cy.title().should('eq',`${textValue}`);
    }

    if (condition === 'contain') {
        cy.title().should('contain',`${textValue}`);
    }
});
