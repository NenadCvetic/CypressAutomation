const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.cydeo.com/',
    video: false,
    screenshotOnRunFailure: false,
    defaultCommandTimeout: 3000,
    viewportHeight: 1000,
    viewportWidth: 1200,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
