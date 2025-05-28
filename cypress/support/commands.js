<reference types="cypress"/>

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
// -- This is a parent command --
Cypress.Commands.add('myCommand', () => { 
cy.get('#scroll-vertical button').scrollIntoView()
cy.get('#scroll-vertical button')
cy.get('#scroll-vertical button').scrollIntoView()
cy.get('#scroll-vertical button')
cy.get('#scroll-vertical button').scrollIntoView()
cy.get('#scroll-vertical button')

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