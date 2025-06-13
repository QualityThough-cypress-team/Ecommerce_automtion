class homepage{
browseURL(){ // this method is used to browse the website the cypress   
    cy.visit("http://192.168.219.87:8080/cypress/HTML/homepage.html")
    cy.log("I am in browseURL method")
}
verifyHomepagetitle(){  // this method is used to verify the title of the website
    cy.title().should('eq','Homepage')
    cy.log("I am in verifyHomepagetitle method")
}   
verifyHomepagetext(){  // this method is used to verify the text of the website
    cy.get('h1').should('contain','Welcome to Our Website')
    cy.log("I am in verifyHomepagetext method")
}
   
verifyHomepagelink(){  // this method is used to verify the link of the website
    cy.get('#home')
    .should('be.visible')
    .and('have.text','Home')
    cy.log("I am in verifyHomepagelink method")
}
verifyAboutuslink(){// this method is used to verify the about us link of the website   
    cy.get('a[href="http://192.168.219.87:8080/cypress/HTML/cypresslogo.png"]').should('be.visible').and('have.text','About Us')
   cy.log("I am in verifyAboutuslink method")
}
verifyServiceslink(){
    cy.get('a[href="http://192.168.219.87:8080/cypress/HTML/importanttags.html"]').should('be.visible').and('have.text','Services')
}
verifyContactlink(){
}


    

}

export default homepage // this used to export all the methods exist  in the class name homepage avaiable to import 
