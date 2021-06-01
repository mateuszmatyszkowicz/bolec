const cucumber = require('cypress-cucumber-preprocessor').default;


/**
 *
 * @param on
 * @param config
 */
module.exports = (on, config) => {
    on('file:preprocessor', cucumber())
};


