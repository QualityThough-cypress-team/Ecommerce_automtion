describe('Hooks test suite', () => {
    beforeEach(() => {
        cy.log("I am in before Each hook");
        cy.fixture('example').should('exist');
        //Load the fixture file before running the tests
    });
    before(() => {
        cy.log("I am in before Each hook");
        cy.fixture('example').should('exist');
        // Load the fixture file before running the tests
    });
    after(() => {
        cy.log("I am in after all tests hook");
        // This will run after all the tests in this suite
    })
    afterEach(() => {
        cy.log("I am in after Each hook");
        // This will run after each test in this suite
    });
    it("this is my first test case", () => {
        cy.log("this is my first test case");
    });
    it("this is my second test case", () => {
        cy.log("this is my second test case");
    });
    it("this is my third test case", () => {
        cy.log("this is my third test case");
        //cy.log() is used to print the logs in the cypress test runner 
        //console.log() is used to print the logs in the browser console
    });

})
