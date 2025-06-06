const { defineConfig } = require("cypress");

module.exports = defineConfig({
   projectId: "g3qq4o",
  e2e: {

    //baseUrl:'https://example.cypress.io',
    //experimentalStudio:true, 
    //supportFile:
    // this command is used to enabled the studio command in the test runner 
    //there is a torch icon exist for your test suite and test case when you mouseover on the test case or test suite

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
