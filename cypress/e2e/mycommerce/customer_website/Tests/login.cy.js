//import login class from login.js file
import login from "../Pages/login.js"
//./ current folder 
// ../ parent folder 
const login1=new login() // create a object for the login class
describe('Login tests', () => { // test suite for login
    it('Verify the login title', () => { //test case for login
        login1.browseloginURL() // call the browseloginURL method from the login class
        cy.wait(3000)//wait for 3 sec
        login1.verifyLoginpagetitle() //call the verifyLoginpagetitle method from the login class
        cy.wait(3000)
        login1.verifyLoginpagetext() //call the verifyLoginpagetext method from the login class
        cy.wait(3000)
        login1.verifyLoginlink() //call the verifyLoginlink method from the login class
        cy.wait(3000)
    })
})
