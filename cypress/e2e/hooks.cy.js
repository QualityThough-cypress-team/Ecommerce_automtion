describe('Fixtures', () => {
    beforeEach(() => {
        cy.fixture('example').should('exist');
        // Load the fixture file before running the tests
    });
    it("this is my first test case", () => {
        cy.log("this is my first test case");
    });
    it("this is my second test case", () => {
        cy.log("this is my second test case");
    });
    it("this is my third test case", () => {
        cy.log("this is my third test case");
    });
})
