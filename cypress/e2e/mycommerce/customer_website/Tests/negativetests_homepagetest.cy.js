import homepage from "../Pages/homepage.js"
const homepage1=new homepage()
describe('Negative tests for homepage', () => {
    it('Verify the homepage title', () => {
        homepage1.browseURL()
        cy.wait(3000)
        homepage1.verifyHomepagetitle()
        cy.wait(3000)
        homepage1.verifyHomepagetext()
        cy.wait(3000)
        homepage1.verifyHomepagelink()
    })
})