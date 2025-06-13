describe('navigations commands',()=>{
    it("navigation go()",()=>{
cy.visit('https://example.cypress.io')
cy.get('.dropdown-toggle').click()
cy.contains('Querying').click()
cy.get('.dropdown-toggle').click()
cy.contains('Traversal').click()
cy.get('.dropdown-toggle').click()
cy.contains('Navigation').click()
cy.go('back') // go back to the previous url
//Navigate back or forward to the previous 
// or next URL in the browser's history.
cy.go('forward') // go forward to the next url
cy.go(-1)// go to previous url 
cy.go(1)
console.log(cy.reload())// with cache reload the page 
cy.getAllCookies()

console.log(cy.reload(true))
cy.getAllCookies()






})

})