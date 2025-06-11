///<reference types="cypress" />

// how to handle alerts in cypress
describe('Handle alerts in Cypress', () => {
    it('Handles window:alert', () => { //which is having only ok button
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.contains('Click for JS Alert').click(); //idenfy the element with text click for JS alert and perform click action 
        cy.on('window:alert', (message) => {
            //cy.on() is  used to capture the alert and do some actions on the alert

            expect(message).to.equal('I am a JS Alert');
            // the message should be equal to I am a JS Alert
            //cy.on() will capture that message and stored in the string variable message
            // this message content should be equal to I am a JS Alert
            //expect is used to verify the condition
            //cypress will use mocha and chai frame works 

        });
        //You successfully clicked an alert
        cy.get("#result").should("contain","You successfully clicked an alert")

    });

    it('Handles window:confirm', () => { //contains ok and cancel buttons
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.contains('Click for JS Confirm').click(); //identify the text Click for JS cofirm and perform click action
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('I am a JS Confirm');
            //be default return value considered as true => always it clicks on ok button 

        });
        cy.get('#result').should('contain', 'You clicked: Ok');
    });
    it('Handles window:confirm - with cancel', () => { //contains ok and cancel buttons
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.contains('Click for JS Confirm').click(); //identify the text Click for JS cofirm and perform click action
        cy.on('window:confirm', (text) => {
            expect(text).to.equal('I am a JS Confirm');
          return false; // Dismiss the confirm alert by clicking on cancel 
          //return true; // Accept the confirm alert by clicking on ok
          //by default return true is considered
        });
        cy.get('#result').should('contain', 'You clicked: Cancel');
    });

    it.only('Handles window:prompt', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        //cy.window() is used to capture the currently active widnow 
        // and store that window object in a varaible 
        // feed this window object to the stub and call the window object method - prompt 
        // and then add returns either null => cancel 
        // supply the text to simulate - ok 
        
        cy.window().then((win) => { //win means you can capture the prompt window 
            cy.stub(win, 'prompt').returns(null);
            //cy.stub() is used to handle the current window object's method prompt 
            //returns('Cypress Test') => whatever you want to send to the prompt box you can send it
        });
        cy.contains('Click for JS Prompt').click();
        cy.get('#result').should('have.text', 'You entered: null');
    });
});