describe("Querying test suite", function() {

it("get command",function(){

//Sample test to understand cy.get()
/*
<a href="#" class="dropdown-toggle" data-toggle="dropdown"  role="button">
Commands 
<span class="caret">
</span>
</a>
*/
cy.visit("https://example.cypress.io")
cy.get('.dropdown-toggle') // locate my  commmands dropdown with classname
cy.get('[role="button"]') //locate element by attribute selector
cy.get('span') //locate element by using tagname  -span
cy.get('#navbar') //locate element by using the id - navbar
/*
<div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">Commands <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="/commands/querying">Querying</a></li>
              <li><a href="/commands/traversal">Traversal</a></li>
              <li><a href="/commands/actions">Actions</a></li>
              <li><a href="/commands/window">Window</a></li>
              <li><a href="/commands/viewport">Viewport</a></li>
              <li><a href="/commands/location">Location</a></li>
              <li><a href="/commands/navigation">Navigation</a></li>
              <li><a href="/commands/assertions">Assertions</a></li>
              <li><a href="/commands/misc">Misc</a></li>
              <li><a href="/commands/connectors">Connectors</a></li>
              <li><a href="/commands/aliasing">Aliasing</a></li>
              <li><a href="/commands/waiting">Waiting</a></li>
              <li><a href="/commands/network-requests">Network Requests</a></li>
              <li><a href="/commands/files">Files</a></li>
              <li><a href="/commands/storage">Storage</a></li>
              <li><a href="/commands/cookies">Cookies</a></li>
              <li><a href="/commands/spies-stubs-clocks">Spies, Stubs &amp; Clocks</a></li>
            </ul>
          </li>
          <li><a href="/utilities">Utilities</a></li>
          <li><a href="/cypress-api">Cypress API</a></li>
        </ul>
        <ul class="nav navbar-nav pull-right">
          <li><a href="https://github.com/cypress-io/cypress-example-kitchensink">GitHub</a></li>
        </ul>
      </div>
*/

})

it('contains', function(){
    cy.visit("https://example.cypress.io")
    cy.contains('Commands') //search for the element with text Commands
    cy.contains('Utilities')
    cy.contains('Cypress API')

})

it("within() - only do the actions/assertions with in the specified component", function(){

cy.visit('https://example.cypress.io/commands/querying')
cy.get('.form-control') // 3 results will appear
cy.get('.query-form').within(()=>{
//commands i supplied in side of within  only applicable to the elements inside of query-form class
cy.get('.form-control') // 2 elements

})

cy.get('.query-form').within(() => {
    cy.get('input:first').should('have.attr', 'placeholder', 'Email')
    cy.get('input:last').should('have.attr', 'placeholder', 'Password')
  })

  

})

it("root() - fetch root element", function(){
    cy.visit('https://example.cypress.io/commands/querying')
    
    // By default, root is the document
    cy.root().should('match', 'html')
    console.log(cy.root())

    cy.get('.query-form').within(() => { 

        cy.root().should('match', 'form')
        console.log(cy.root())
    })
    
      })

})