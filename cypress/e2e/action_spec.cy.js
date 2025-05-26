describe("Actions in cypress", ()=>{

it("type() is to type the input in cypress",()=>{
    cy.visit('/commands/actions')// copy the url from baseURL 
    cy.get('.action-email').type('fake@email.com')
    // type() command is used to type the text into textboxes 
    cy.get('.action-email').should('have.value', 'fake@email.com')
    //have.value is used to match the value exist in the text box 
    
    // .type() with special character sequences
    cy.get('.action-email').type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
    cy.get('.action-email').type('{del}{selectall}{backspace}')
    
    // .type() with key modifiers
    cy.get('.action-email').type('{alt}{option}') //these are equivalent
    cy.get('.action-email').type('{ctrl}{control}') //these are equivalent
    cy.get('.action-email').type('{meta}{command}{cmd}') //these are equivalent
    cy.get('.action-email').type('{shift}')
    
    // Delay each keypress by 0.1 sec {delay:150}
    cy.get('.action-email').type('slow.typing@email.com', { delay: 100})
    cy.get('.action-email').should('have.value', 'slow.typing@email.com')
    
    cy.get('.action-disabled')
      // Ignore error checking prior to type
      // like whether the input is visible or disabled
      .type('disabled error checking', { force: true })
      //.type('disabled error checking') //no forcing the UI element
    cy.get('.action-disabled').should('have.value', 'disabled error checking')

})

it('focus & blur - is highlighting the current UI componet',()=>{
    cy.visit('/commands/actions')
    //cy.get('.action-focus').should('have.attr', 'style', 'color: orange;')
    cy.get('.action-focus').focus()
    // to get the focus on the current UI element 
cy.get('.action-focus').should('have.class', 'focus')
//have.class is used to assert on the class name we do have 
  .prev().should('have.attr', 'style', 'color: orange;')
  //have.attr is used to assert the attributes present 
  // in the html code for this UI element 
//blur() 
cy.get('.action-blur').type('About to blur')
cy.get('.action-blur').blur()
//blur a focused element
cy.get('.action-blur').should('have.class', 'error')
//have.class => to check class name 
  .prev().should('have.attr', 'style', 'color: red;')
  // have.attr => to check the attribute is present or not 
  
})

it('clear() - to clear the text ',()=>{
    cy.visit('/commands/actions')
    cy.get('.action-blur').type('About to blur')
    .clear()
    cy.get('.action-clear').type('Clear this text')
cy.get('.action-clear').should('have.value', 'Clear this text')
cy.get('.action-clear').clear()
cy.get('.action-clear').should('have.value', '')
//have.value is used to verify the text present in it 


})

it("submit form", ()=>{
    cy.visit('commands/actions')
    cy.get('.action-form') //locate the element which contains action-form class 

  .find('[type="text"]').type('HALFOFF')
  //find is used to locate the element wiht in the get selector 

    
cy.get('.action-form').submit() // submit a form

cy.get('.action-form')
.next().should('contain', 'Your form has been submitted!')
//click() with position 
cy.get('#action-canvas').click()

cy.get('#action-canvas').click('topLeft')
cy.get('#action-canvas').click('top')
cy.get('#action-canvas').click('topRight')
cy.get('#action-canvas').click('left')
cy.get('#action-canvas').click('right')
cy.get('#action-canvas').click('bottomLeft')
cy.get('#action-canvas').click('bottom')
cy.get('#action-canvas').click('bottomRight')


// .click() accepts an x and y coordinate
// that controls where the click occurs :)

cy.get('#action-canvas').click()
cy.get('#action-canvas').click(80, 75) // click 80px on x coord and 75px on y coord
cy.get('#action-canvas').click(170, 75)
cy.get('#action-canvas').click(80, 165)
cy.get('#action-canvas').click(100, 185)
cy.get('#action-canvas').click(125, 190)
cy.get('#action-canvas').click(150, 185)
cy.get('#action-canvas').click(170, 165)
//multiple true 
// click multiple elements by passing multiple: true
cy.get('.action-labels>.label')
//.click()
.click({ multiple: true })

// Ignore error checking prior to clicking
cy.get('.action-opacity>.btn') // disabled element 
//.click()
.click({ force: true })
})
it("dblclick(), rightclick()",()=>{
    cy.visit('commands/actions')// copy the url from baseURL
    // that hides the div and shows an input on double click
cy.get('.action-div').dblclick()
cy.get('.action-div').should('not.be.visible')
cy.get('.action-input-hidden').should('be.visible') 

cy.get('.rightclick-action-div').rightclick()
cy.get('.rightclick-action-div').should('not.be.visible')
cy.get('.rightclick-action-input-hidden').should('be.visible')

})
it("radio button  checkboxes", ()=> {
cy.visit('commands/actions')
cy.get('.radio')
cy.get('.action-radios [type="radio"]').check('radio1')
cy.get('#optionsRadios1').check()
cy.get('#optionsRadios2').check()
cy.get('.action-checkboxes [type="checkbox"]').check({force: true})
cy.get('.action-checkboxes [type="checkbox"]').uncheck({force: true})
cy.get('.action-checkboxes [type="checkbox"]').check(['checkbox1','checkbox3'])

//dropdowns- 
/*
<select class="form-control action-select">
                <option>--Select a fruit--</option>
                <option value="fr-apples">apples</option>
                <option value="fr-oranges">oranges</option>
                <option value="fr-bananas">bananas</option>
              </select>
*/
cy.get('.form-control.action-select').select('bananas')
.should('have.value','fr-bananas')
.should('contain','bananas')
cy.get('.form-control.action-select').select('fr-oranges')
.should('have.value','fr-oranges')
cy.get('.form-control.action-select').select('fr-apples')
//value
.should('have.value','fr-apples')
//multiple select 
cy.get('.action-select-multiple')
  .select(['fr-apples', 'fr-bananas'])

})

it.only('scroll behavior in cypress',()=>{
cy.visit('commands/actions')

//scrollIntoView() => it will fectch the element and make it visibble to automation tool

  cy.get('#scroll-horizontal button')
  .should('not.be.visible')
  cy.get('#scroll-horizontal button').scrollIntoView()
  cy.get('#scroll-horizontal button')
  .should('be.visible')
//vertical scrolling 
cy.get('#scroll-vertical button')
  .should('not.be.visible')

// Cypress handles the scroll direction needed
cy.get('#scroll-vertical button').scrollIntoView()
cy.get('#scroll-vertical button')
  .should('be.visible')

cy.get('#scroll-both button')
  .should('not.be.visible')


// Cypress knows to scroll to the right and down
cy.get('#scroll-both button').scrollIntoView()
cy.get('#scroll-both button')
  .should('be.visible')
//scrollTO -  you need supply how this scroll work - position, x,y coordinate etc..

cy.scrollTo('bottom')

cy.get('#scrollable-horizontal').scrollTo('right')

// or you can scroll to a specific coordinate:
// (x axis, y axis) in pixels
cy.get('#scrollable-vertical').scrollTo(250, 250)

// or you can scroll to a specific percentage
// of the (width, height) of the element
cy.get('#scrollable-both').scrollTo('75%', '25%')

// control the easing of the scroll (default is 'swing')
cy.get('#scrollable-vertical').scrollTo('center', { easing: 'linear' })

// control the duration of the scroll (in ms)
cy.get('#scrollable-both').scrollTo('center', { duration: 2000 })

})


})