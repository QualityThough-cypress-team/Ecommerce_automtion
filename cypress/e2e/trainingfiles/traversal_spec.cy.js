describe('Traversal commands',()=>{

it('children commmand', ()=>{
cy.visit('https://example.cypress.io/commands/traversal') //open the traversal commands page
//classname is traversal-breadcrumb breadcrumb
cy.get('.traversal-breadcrumb.breadcrumb') //locating the entire bread crum 
.children('.active') // identify the children with class name active
 //Get the children of each DOM element within a set of DOM elements.
.should('contain','Data')
// /class="badge traversal-badge"
})

it('colosest - commmand', ()=>{
    cy.visit('https://example.cypress.io/commands/traversal') //open the traversal commands page
    //classname is badge traversal-badge - child element 
    cy.get('.badge.traversal-badge') //locate the child element
    .closest('.list-group') // ancestors
    //Get the first DOM element that matches the selector 
    // (whether it be itself or one of its ancestors).


})
it('first, last ,eq ,next ,prev - to locate the specific index element', ()=>{
    cy.visit('https://example.cypress.io/commands/traversal') //open the traversal commands page
  cy.get('.traversal-list > li') // locate all li elements under the class name traversal-list
  .first() //locate the first element 
  cy.get('.traversal-list > li') // locate all li elements under the class name traversal-list
  .last() //locate the last element in the list 
  cy.get('.traversal-list > li') // locate all li elements under the class name traversal-list
 .eq(0) //indext start with zero - first element 
 cy.get('.traversal-list > li') // locate all li elements under the class name traversal-list
 .eq(1) //second element will be locate with the index 1 - second element 
 cy.get('.traversal-list > li').eq(2) //3rd element - 2 index element 

 cy.get('.traversal-list > li').eq(3) //4th element - 3 index element 
// A number indicating the index to find the element at within an
//  array of elements. A negative number counts index 
// from the end of the list.

cy.get('.traversal-list > li').eq(-1) //last element 
.prev() // last butone 
cy.get('.traversal-list > li').eq(-2)//last but one 
.next() //last


})

it('nextall, next untill, prev all, prev untill - more items locating with these commands',()=>{
    cy.visit('https://example.cypress.io/commands/traversal') //open the traversal commands page
    //class name to locate the fruits list - traversal-next-all
    cy.get('.traversal-next-all')
    //cy.contains() or cy.get().contains()
    .contains('apples')
    .nextAll() // locate all elements from bananas to end 
    .should('have.length',4) // is used to match the length of the result
   // Asserts that the target's length property is equal to the given number n.
    
   cy.get('.traversal-next-all')
   .contains('bananas')
   .prevAll()
   .should('have.length',2)

   cy.get('.foods-list')
   .contains('Vegetables')
   .prevUntil('#fruits') //until this fruits 
//Get all previous siblings of each DOM element in a set of matched DOM elements up to,
//  but not including, the element provided.
.should('have.length',3)

cy.get('.foods-list')
   .contains('Vegetables')
   .nextUntil('#nuts')
   .should('have.length',3)

   cy.get('.foods-list').contains('Nuts').prevUntil('#fruits')
   cy.get('.foods-list').contains('Fruits').nextUntil('#nuts')
   cy.get('.foods-list').contains('Nuts').siblings().first()
   cy.get('.foods-list').contains('Nuts').siblings().last().prev()

})

it('Parents',()=>{
    cy.visit('https://example.cypress.io/commands/traversal') //open the traversal commands page
    
    console.log(cy.get('.active').contains('Pants').parents())
    console.log(cy.get('.active').contains('Pants').parent())
    console.log(cy.get('.active').contains('Pants').parentsUntil('.nav.clothes-nav'))
    cy.get('.active').contains('Pants').parentsUntil('.col-xs-5')
    .eq(3)


    //active

})
})
