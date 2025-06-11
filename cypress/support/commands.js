///<reference types="cypress"/>

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
//create a code to 

// -- This is a parent command --
require('cypress-iframe');
Cypress.Commands.add('myButton', (location) => {
 cy.get(location).click()

})
Cypress.Commands.add('login', (username,pwd) => { 
    cy.get('#loginUsername').type(username)
        cy.get('#loginPassword').type(pwd)
 })
Cypress.Commands.add('signup', (username,password) => {
     cy.get('#signupUsername').type(username)
        cy.get('#signupPassword').type(password)
       
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
///Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
   //   })