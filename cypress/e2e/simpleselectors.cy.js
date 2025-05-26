describe('Simple selectors',function(){

    //1. Tag name selector  => tagname
    //2. ID selector  => #id
    //3. Class name selector => .classname
    //4. Attribute selector  => [attributename="value"]
it('Locate the element by using tagname selector',function(){
    cy.visit("https://example.cypress.io")
    //syntax to locate the element with in the cyprees =>
    // cy.get('selector')
    //cy.get('a') //243
    cy.get('h1')
    cy.get('p')
    cy.get('div')
    cy.get('nav')
    cy.get('li')
    cy.get('ul')
   

})
it('Locate the element by using ID selector',function(){
    cy.visit("https://example.cypress.io")
    cy.get('#utilities')
    cy.get('#navbar')
    
})

it('Locate the element by using classname selector',function(){
    cy.visit("https://example.cypress.io")
    cy.get('.dropdown') //locate the element by using classname selector
    cy.get('.dropdown-toggle')//locate the same element by using another class name selector
    cy.get('.container')
})

it('Locate the element by using attribute selectors  selector',function(){
    cy.visit("https://example.cypress.io")
    cy.get('[src="assets/js/vendor/jquery-1.12.0.min.cbb11b58.js"]')
    cy.get('[data-toggle="dropdown"]')
    cy.get('[href="/cypress-api"]').eq(0)
})

})
