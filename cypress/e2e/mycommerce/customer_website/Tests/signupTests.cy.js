//import the signup class from the signup.js file
import signup from "../Pages/signup.js"

const signup1=new signup() // create a object for the signup class
describe('Signup tests', () => { // test suite for signup
    it('Verify the signup title', () => { //test case for signup
        signup1.browsesignupURL() // call the browsesignupURL method from the signup class
        cy.wait(3000)//wait for 3 sec
        signup1.verifySignuppagetitle() //call the verifySignuppagetitle method from the signup class
        cy.wait(3000)
        signup1.verifySignuppagetext() //call the verifySignuppagetext method from the signup class
        cy.wait(3000)
        signup1.verifySignuplink() //call the verifySignuplink method from the signup class
        cy.wait(3000)
       // signup1.verifyLoginlink() //call the verifyLoginlink method from the signup class
    })
})
