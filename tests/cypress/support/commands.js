import 'cypress-file-upload';

/**
 *
 */
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

/**
 *
 */
Cypress.Commands.add('typeWithDefault', (selector, value, defaultValue) => {
    if (value === "") {
        cy.get(selector).type(defaultValue);
    } else {
        cy.get(selector).type(value);
    }
});

/**
 *
 */
Cypress.Commands.add('setResolution', size => {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
    } else {
        cy.viewport(size)
    }
});

