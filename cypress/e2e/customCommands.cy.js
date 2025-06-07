//how to read the custom commands in the cypress 
//cy.commandName() => without arguments 
//cy.commanName1('email')
//cy.commandname2("email","pwd")
//we need to write the custom commands in support folder >> commands.js 

//cy.myCommand()

//this is a version control system 
// updated the changes in the local machine #1 
// this is change is updated to the server  -  v1//commit #1

// new change on top of v1  
// update the change to the server  - v2 //commit #2  

//whenever you update to the server  - v3 //commit#3

describe("Custom Commands", () => {
    it("Custom Command", () => {
        cy.visit("cypress/HTML/signup_login.html");
      cy.signup('muuser','mypassword') // using the custom command to signup
        //the above steps open browser with signup page
        //fillup the username and password fields 
        //click on signup button 
        //Automation code to perfrom login 

       cy.login('muuser','mypassword') // using the custom command to login


 //[type="submit"] locate two elements with type submit
 //
 
        // locate the username fiedl for login and type the username
//locate the password field for login and type the password
//locate the login button and click on it

    })

    it("custom commands in second test", () => {
        cy.visit("cypress/HTML/signup_login.html");
        cy.signup('tester','testpassword') // using the custom command to signup
              cy.myButton('form[id="signupForm"] [type="submit"]')
        cy.login('mytest','yourpassword') // using the custom command to login
        cy.myButton('form[id="loginForm"] [type="submit"]') // using the custom command to click on the submit button
})

it("custom commands and fixture", function(){
    cy.visit("cypress/HTML/signup_login.html");
    //http://192.168.80.87:8080/cypress/HTML/signup_login.html
    cy.fixture('signup.json').then((data) => {
        cy.signup(data.username, data.password); 
        cy.myButton('form[id="signupForm"] [type="submit"]')
        cy.login(data.username, data.password);
        cy.myButton('form[id="loginForm"] [type="submit"]')

    });
})

})
