describe("Invoke", () => {
    it("Invoke text", () => {
        cy.visit("http://192.168.219.87:8080/cypress/HTML/homepage.html");
        // we are in local server page in the cypress opened browser 
       // cy.get("body > header:nth-child(6) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)")
      cy.get("#home") // locate the home link using its id
            .invoke("text") // to get the text of the home link
            .should("equal", "Home"); // verifying the text of the home link
            cy.get("#home").click() // to click on the home page link 
            //cy.url().should("contain", "google.com"); //verifying the URL after clicking the Home link
            cy.contains("Gmail").click() // to click on the Gmail link with in the google.com
            cy.url().should("contain", "mail.google.com"); // verifying the URL after clicking the Gmail link
        });
        //Timed out retrying after 4000ms: expected 'http://192.168.219.87:8080/cypress/HTML/homepage.html'
        //  to include 'google.com' // I suppose to be laded on new link not the old link 
        // new link is in the new tab so we need to handle the new tab
        // cypress is not able to hadle the new tab by default 
        // that is the reason we are getting this error
        //to fix this issue we need to change the target=blank attribute in the html code 
        //target=blank is used to open the link in the new tab, as cypress is not able to 
        //open the new tab by default we need to change the target attribute to _self
        //remove attribute target="_blank" from the link in the html code
        // in cypress we need to handle the new tab by using invoke command
        // invoke(removeAttr, 'target') // this will remove the target attribute from the link
 //add a new test case to verify the invoke command
    it("Invoke attribute", () => {
        cy.visit("http://192.168.219.87:8080/cypress/HTML/homepage.html")
     
        cy.get("#home") // locate the home link using its id
            .invoke("removeAttr", "target") // to remove the target attribute from the home link
            .click() // to click on the home page link 
            cy.url().should("eq", "http://192.168.219.87:8080/cypress/HTML/ecommerce.html"); // verifying the URL after clicking the Home link
            cy.get(".logo").should("be.visible")
             // verifying the logo is visible on the page
             cy.get(".logo")
            .invoke("text")
            .should('eq',"ShopEase") // to get the src attribute of the logo
            //what are the functions we can invoke in cypress
            cy.get(".logo")
            .invoke("attr", "src") // to get the src attribute of the logo
            .should("include", "logo.png") // verifying the src attribute of the logo
            cy.get(".logo")
            .invoke("attr", "alt") // to get the alt attribute of the logo      
            .should("include", "ShopEase Logo") // verifying the alt attribute of the logo
            cy.get(".logo")
            .invoke("css", "width") // to get the width of the logo
            .should("eq", "150px") // verifying the width of the logo
            cy.get(".logo")
            .invoke("css", "height") // to get the height of the logo   
            .should("eq", "50px") // verifying the height of the logo
            cy.get(".logo")
            .invoke("css", "background-color") // to get the background color of the logo   
            .should("eq", "rgb(255, 255, 255)") // verifying the background color of the logo
            cy.get(".logo")
            .invoke("css", "border") // to get the border of the logo   
            .should("eq", "1px solid rgb(0, 0, 0)") // verifying the border of the logo
            cy.get(".logo")
            .invoke("css", "border-radius") // to get the border radius of the logo 
            .should("eq", "5px") // verifying the border radius of the logo
            cy.get(".logo")
            .invoke("css", "box-shadow") // to get the box shadow of the logo
            .should("eq", "0px 2px 5px rgba(0, 0, 0, 0.1)") // verifying the box shadow of the logo
            cy.get(".logo")
            .invoke("css", "transition") // to get the transition of the logo
            .should("eq", "all 0.3s ease-in-out") // verifying the transition of the logo
            cy.get(".logo").invoke("css", "cursor") // to get the cursor of the logo
            .should("eq", "pointer") // verifying the cursor of the logo
            cy.get(".logo")
            .invoke("css", "display") // to get the display of the logo 
            .should("eq", "inline-block") // verifying the display of the logo
            cy.get(".logo")
            .invoke("css", "position") // to get the position of the logo   
            .should("eq", "relative") // verifying the position of the logo
            cy.get(".logo") 
            .invoke("css", "z-index") // to get the z-index of the logo
            .should("eq", "1000") // verifying the z-index of the logo
            
})
})

    