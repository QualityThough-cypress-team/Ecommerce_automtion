//i want to create test which hits all the  major pages exist in the project or not 
import homepage from "../Pages/homepage";
import products from "../Pages/products";
import login from "../Pages/login";
import signup from "../Pages/signup";

const homepage1=new homepage()
const products1=new products()
const login1=new login()
const signup1=new signup()

describe('Smoke test', () => {
    it('Verify the homepage title', () => {
        homepage1.browseURL()
        cy.wait(3000)
        homepage1.verifyHomepagetitle()
        cy.wait(3000)
        products1.browseproductsURL()
        products1.verifyproductstitle()
        cy.wait(3000)
        login1.browseloginURL()
        login1.verifyLoginpagetitle()
        cy.wait(3000)
        signup1.browsesignupURL()
        signup1.verifySignuppagetitle()
    })
})  
