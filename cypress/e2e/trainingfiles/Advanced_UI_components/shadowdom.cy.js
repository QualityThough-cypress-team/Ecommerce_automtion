// in this test file I would like to automate the shadow dom objects by using  cypress
//adding the shadow  som at suite level 

describe("automate shadow doms",()=>{
    it("My first test with shadowdom",()=>{
        cy.visit("https://watir.com/examples/shadow_dom.html")
        cy.get('#shadow_host')
       //.shadow() //allowing cypress to enter into shadow root.
        //.contains("some text") //finding the some text inside of the shadow dom
        .find("#shadow_content") // find is used to get the elements provided as input 
        .find(".info")
        .should('be.visible')
        .should("contain","some text")
        //cypress by default not  capapble to identify the UI elements present inside of the shadow dom
        // to do so we do have 
        
        cy.get('#shadow_host')
        //.shadow()
        .find('#nested_shadow_host')  //shadow root 
        //.shadow()
        .find("#nested_shadow_content") //shadow root
        .should("be.visible")
        .and("contain",'nested text')
        //nested_shadow_host
        cy.get('a')
    })
    // if you pass the argument includeShadowDom:true for any test case all shadowroots openeed for that case

     it("My first test with shadowdom",()=>{
        cy.visit("https://watir.com/examples/shadow_dom.html")
        cy.get('#shadow_host')
       //.shadow() //allowing cypress to enter into shadow root.
        //.contains("some text") //finding the some text inside of the shadow dom
        .find("#shadow_content") // find is used to get the elements provided as input 
        .find(".info")
        .should('be.visible')
        .should("contain","some text")
        //cypress by default not  capapble to identify the UI elements present inside of the shadow dom
        // to do so we do have 
        
        cy.get('#shadow_host')
        //.shadow()
        .find('#nested_shadow_host')  //shadow root 
      //  .shadow()
        .find("#nested_shadow_content") //shadow root
        .should("be.visible")
        .and("contain",'nested text')
        //nested_shadow_host
        cy.get('a')
    })
})