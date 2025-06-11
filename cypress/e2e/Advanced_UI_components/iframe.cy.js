///<reference types="cypress" />
///<reference types="cypress-iframe" />

describe("Iframe", () => {
    it("Iframe", () => {
        cy.visit("http://192.168.186.87:8080/HTML/iframe.html");
        //cy.get("iframe").then((frame) => {
        //cy.iframe() is a custom command created in the cypress/support/commands.js file
      cy.get('[data-cy=test_123]').should("be.visible")// to locate the iframe for signup_login.html 
     // cy.get('#signupUsername').type('test')
       //     cy.get('#signupPassword').type('password')
    //cy.frameLoaded('[data-cy=test_123]')
      cy.iframe().find('#signupUsername').type('test')
      cy.iframe().find('#signupPassword').type('password')
      cy.iframe().find("#loginUsername").type('test')
      cy.iframe().find("#loginPassword").type('password'    )

    })

    it(" use Jquery method contains() to traceout ifrme body",()=>{
        cy.visit("http://192.168.186.87:8080/HTML/iframe.html"); //open the website which contains iframe
        cy.get('[data-cy=test_123]').should("be.visible")// to locate the iframe for signup_login.html 
        cy.get('[data-cy=test_123]').then((iframe)=>{
            //declaring a variabble to hold body of the iframe 
            //const body=iframe.contents().find('body') // this is Jquery command 
            //contents() will fetch the entire html content for that object 
            //outcome of your cy.get() into the varaible iframe with the help of then 

            const body = iframe.contents().find('body')
            //we store the body of iframe tag in the body variable 
            cy.log(body) // trying to print iframe body  with in the cypress test runner
            console.log(body) // print iframe body/signup page body in the console

            cy.wrap(body) // converting the body into cypress chainable object
            .find('#signupUsername')//locate the username  exist in the signup form with its id arrtibute value 
                .type('test')
            cy.wrap(body)
                 .find('#signupPassword') //locate the password in the signup form 

                 .type('password')
        })
    })
        it("locate the element inside of iframe by using its() method",()=>{
            cy.visit("http://192.168.186.87:8080/HTML/iframe.html");
            // visit the iframe website byusing cy.visit()
            cy.get('[data-cy=test_123]').should("be.visible")
            // iframe with attribute data-cy= test_123 is visible or not 
            // cy.its() is used to locate the property of an object 
            // 0 => index of the iframe 
            //0.contantDocument.body will gives you the body of the iframe
            //const body=iframe.contents().find('body')  is replaced with 
            //its('0.contentDocument.body')
            cy.get('[data-cy=test_123]').its('0.contentDocument.body').should("be.visible").then((body)=>{
                cy.wrap(body).find('#signupUsername').type('test')
                cy.wrap(body).find('#signupPassword').type('password')
            })


    })
    it("two iframes test", ()=>{    
        cy.visit("http://192.168.186.87:8080/HTML/iframe.html");
        cy.get('[data-cy=test_123]').should("be.visible")
        cy.get('[data-cy=test_1234]').should("be.visible")
        //1. locate the iframe with any css selector uniquely 
        //2. use its() method to get the body of iframe 
        //3. its(0.contentDocument.body)
        cy.get('[data-cy="test_123"]')
        .its('0.contentDocument.body').then((iframebody)=>{
            cy.wrap(iframebody).find('#signupUsername').type('test')
            cy.wrap(iframebody).find('#signupPassword').type('password')
        })

         cy.get('[data-cy="test_1234"]').its('0.contentDocument.body').then((iframebody)=>{
            cy.wrap(iframebody).contains('Add to Cart')
            cy.wrap(iframebody).contains('Add to Cart').click()
            cy.wrap(iframebody).find(".product-card").find('h3').should('contain','Stylish Backpack')
            
        })
    })
})
