describe('Smoke test suite  ', () => { // Function() // () => arrow function
  //collection of test cases 
  // in cypress test suites represents describe()
  //{} scope 
  //spec means your test 

  it('Verify the homepage heading',function(){

 cy.visit('https://example.cypress.io')
 cy.get('h1').should('contain','Kitchen Sink1')

  })
  
  it.skip('Verifying the Querying Option in the commands dropdown ', () => {
    //it() test case 
/*
1. Open the website https://example.cypress.io 
2. Click on Commands dropdown and select or click on Querying option 

*/
    cy.visit('https://example.cypress.io') 
    //cy.visit() is used to open the URL in the cypress 
    cy.get('.dropdown-toggle') //spy icon  => playground  => test runner 
    .click() // click() is used to perfrom mouse click action on the selected element 
    cy.get('.dropdown-menu > :nth-child(1) > a') // spy icon captured the location of querying dropdown option 
    .click()
    // cy.get() is used to locate the element or select the element based on the selector you provided
    //assertions  => verification statement 
    cy.url() // fetch the current URL 
    .should('contain', 'https://example.cypress.io/commands/querying')
    cy.get('h1').should('contain', 'Querying')
//only to  locate the element in the web page 
    //h1 is html tag  => do we need to understand at least basics of HTML
    //.dropdown-toggle is CSS selector  => do we need to understand at least basics of CSS 

  })
  it('Verifying the Traversal Option in the commands dropdown',function(){
cy.visit('https://example.cypress.io')
//locate the commands dropdown 
cy.get('.dropdown-toggle').click()
//click on the traversal option in the commands list
cy.get('.dropdown-menu > :nth-child(2) > a').click()
// verify the URL and heading 
//to verify URL 
cy.url() //fetch the URL 
.should('contain','https://example.cypress.io/commands/traversal')
cy.get('h1').should('contain','Traversal')
  })

  it('Verifying the Actions Option in the commands dropdown',function(){
    cy.visit('https://example.cypress.io')
    //locate the commands dropdown 
    cy.get('.dropdown-toggle').click()
    //click on the actions option in the commands list
    cy.get('.dropdown-menu > :nth-child(3) > a').click()
    // verify the URL and heading 
    //to verify URL 
    cy.url() //fetch the URL 
    .should('contain','https://example.cypress.io/commands/actions')
    cy.get('h1').should('contain','Actions')
      })

      it('Verifying the Window Option in the commands dropdown',function(){
        cy.visit('https://example.cypress.io')
        //locate the commands dropdown 
        cy.get('.dropdown-toggle').click()
        //click on the actions option in the commands list
        cy.get('.dropdown-menu > :nth-child(4) > a').click()
        // verify the URL and heading 
        //to verify URL 
        cy.url() //fetch the URL 
        .should('contain','https://example.cypress.io/commands/window')
        cy.get('h1').should('contain','Window')
          })


})