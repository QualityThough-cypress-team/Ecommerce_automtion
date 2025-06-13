//create loginclass to store all selectors and methods  for the login page
class login{
    browseloginURL(){ // this method is used to browse the website the cypress   
        cy.visit("http://192.168.219.87:8080/cypress/HTML/signup_login.html")
        cy.log("I am in browseURL method")
    }
    verifyLoginpagetitle(){  // this method is used to verify the title of the website          
        cy.title().should('eq','Signup and Login')
        cy.log("I am in verifyLoginpagetitle method")
    }
    verifyLoginpagetext(){  // this method is used to verify the text of the website
        cy.get('h1').should('contain','Login')
        cy.log("I am in verifyLoginpagetext method")
    }
    verifyLoginlink(){  // this method is used to verify the login link of the website
        cy.get('a[href="http://192.168.219.87:8080/cypress/HTML/signup_login.html"]').should('be.visible').and('have.text','Login')
        cy.log("I am in verifyLoginlink method")
    }
}

export default login // this is used to export all the methods exist  in the class name login avaiable to import    
