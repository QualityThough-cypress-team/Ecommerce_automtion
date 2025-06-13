//in this file I want to create all selectors and verifications for products page in this file 
class products{
    browseproductsURL(){ // this method is used to browse the website the cypress   
        cy.visit("http://192.168.219.87:8080/pages/products.html")
        cy.log("I am in browseURL method")
    }
    verifyproductstitle(){  // this method is used to verify the title of the website
        cy.title().should('contain','Products')
        cy.log("I am in verifyproductstitle method")
    }
    verifyproductstext(){  // this method is used to verify the text of the website
        cy.get('h2').should('contain','All Products')
        cy.log("I am in verifyproductstext method")
    }
    verifyproductlink(){  // this method is used to verify the product link of the website
        //.get('a[href="http://192.168.219.87:8080/cypress/HTML/products.html"]').should('be.visible').and('have.text','Products')
        cy.log("I am in verifyproductlink method")
        cy.url().should('eq','http://192.168.219.87:8080/pages/products.html')
    }
}

export default products // this is used to export all the methods exist  in the class name products avaiable to import 