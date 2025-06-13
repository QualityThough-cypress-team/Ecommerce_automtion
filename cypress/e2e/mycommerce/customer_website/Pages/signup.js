//I want to create all selectors and verifications for signup page in this file 
class signup{
    browsesignupURL(){ // this method is used to browse the website the cypress   
        cy.visit("http://192.168.219.87:8080/cypress/HTML/signup_login.html")
        cy.log("I am in browseURL method")
    }
    verifySignuppagetitle(){  // this method is used to verify the title of the website
        cy.title().should('eq','Signup and Login')
        cy.log("I am in verifySignuppagetitle method")
    }
    verifySignuppagetext(){  // this method is used to verify the text of the website
        cy.get('h1').should('contain','Signup')
        cy.log("I am in verifySignuppagetext method")
    }
    verifySignuplink(){  // this method is used to verify the signup link of the website
             // cy.url().should('be.visible').and('have.text','Signup')
                cy.log("I am in verifySignuplink method")
    }
    verifyLoginlink(){  // this method is used to verify the login link of the website
            cy.url().should('be.visible').and('have.text','Login')
            cy.log("I am in verifyLoginlink method")
    }
}

export default signup 
// this is used to export all the methods exist  in the class name signup avaiable to import 