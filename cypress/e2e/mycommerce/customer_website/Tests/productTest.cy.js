//import the products class from the products.js file
import products from "../Pages/products.js"
const products1=new products() // create a object for the products class
describe('Products tests', () => { // test suite for products
    it('Verify the products title', () => { //test case for product 
        products1.browseproductsURL() // call the browseproductsURL method from the products class
        cy.wait(3000)//wait for 3 sec
        products1.verifyproductstitle() //call the verifyproductstitle method from the products class
        cy.wait(3000)
        products1.verifyproductstext() //call the verifyproductstext method from the products class
        cy.wait(3000)
        products1.verifyproductlink()//call the verifyproductlink method from the products class
    })
})