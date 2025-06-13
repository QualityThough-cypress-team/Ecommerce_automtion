//import the homepage class from the homepage.js file
import homepage from "../Pages/homepage.js"

//const homepage=new homepage() // create a object for the homepage class
//by using this object we can call the methods inside of the class 
// we can facilitate the browerURL method to open the website with in the test
  const homepage1=new homepage()
describe('Homepage tests', () => { // test suite for homepage 
    it('Verify the homepage title', () => { // it block is nothing but first test in your test suite
        //call the methods from the homepage class
        homepage1.browseURL()
        cy.wait(3000) // this step will create a delay of 3 seconds before executing the next step
         // to visit the website in the test we need to call the browseURL method
        homepage1.verifyHomepagetitle()// this is to test title of the home page 
        // code is not available in test file - we need to import the code from class file 
        cy.wait(3000)
        homepage1.verifyHomepagetext()
        cy.wait(3000)
        homepage1.verifyHomepagelink()
        cy.wait(3000)
        homepage1.verifyAboutuslink()
        cy.wait(3000)
        homepage1.verifyServiceslink()
        cy.wait(3000)
        homepage1.verifyContactlink()
    })
})