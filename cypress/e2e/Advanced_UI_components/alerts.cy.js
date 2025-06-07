// how to handle alerts in cypress
describe('Handle alerts in Cypress', () => {
    it('Handles window:alert', () => { //which is having only ok button
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.contains('Click for JS Alert').click(); //idenfy the element with text click for JS alert and perform click action 
        cy.on('window:alert', (text) => {
            expect(text).to.equal('I am a JS Alert');
        });
        //You successfully clicked an alert
        cy.get("#result").should("contain","You successfully clicked an alert")


    });

    it('Handles window:confirm', () => { //contains ok and cancel buttons
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.contains('Click for JS Confirm').click(); //identify the text Click for JS cofirm and perform click action
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('I am a JS Confirm');
          // return false; // Dismiss the confirm
        });
        cy.get('#result').should('contain', 'You clicked: Ok');
    });
    it('Handles window:confirm - with cancel', () => { //contains ok and cancel buttons
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.contains('Click for JS Confirm').click(); //identify the text Click for JS cofirm and perform click action
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('I am a JS Confirm');
          return false; // Dismiss the confirm
        });
        cy.get('#result').should('contain', 'You clicked: Cancel');
    });

    xit('Handles window:prompt', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Cypress Test');
        });
        cy.contains('Click for JS Prompt').click();
        cy.get('#result').should('have.text', 'You entered: Cypress Test');
    });
});