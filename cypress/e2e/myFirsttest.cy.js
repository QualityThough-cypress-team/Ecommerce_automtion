
describe('My first test suite', function(){
    // all your suite reside here 
    it('first test case',function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://example.cypress.io');
        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(2) > a').click();
        cy.get('h1').should('be.visible');
        cy.get('h1').should('have.text', 'Traversal');
        /* ==== End Cypress Studio ==== */
    })
    it('second test case',function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://example.cypress.io');
        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(1) > a').click();
        cy.get('h1').should('be.visible');
        cy.get('h1').should('have.text', 'Querying');
        /* ==== End Cypress Studio ==== */
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('verify home apge heading', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://example.cypress.io');
        cy.get('h1').should('have.text', 'Kitchen Sink');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('verify actions options in commands dropdown', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://example.cypress.io');
        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(3) > a').click();
        cy.get('h1').should('have.text', 'Actions');
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('recrod and play', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://example.cypress.io');
        cy.get('.dropdown-toggle').click();
        cy.get('.dropdown-menu > :nth-child(4) > a').click();
        cy.get('h1').should('have.text', 'Window');
        cy.get(':nth-child(1) > h4 > a').should('have.text', 'cy.window()');
        cy.get('.row > :nth-child(1)').should('have.text', '\n          cy.window()\n          To get the global window object, use the cy.window() command.\n          cy.window().should(\'have.property\', \'top\')\n        ');
        cy.get(':nth-child(1) > h4 > a').should('be.visible');
        /* ==== End Cypress Studio ==== */
    });
})
// name of the test suite 
// , 
//function() {} 
//{ ............}