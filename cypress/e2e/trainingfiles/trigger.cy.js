describe("trigger and invoke", () => {
    it("trigger and invoke", () => {
        cy.visit("https://example.cypress.io/commands/actions");
        // To interact with a range input (slider)
// we need to set its value & trigger the
// event to signal it changed

// Here, we invoke jQuery's val() method to set
// the value and trigger the 'change' event
cy.get('.trigger-input-range')
  .invoke('val', 25)
cy.get('.trigger-input-range')
  .trigger('change')
cy.get('.trigger-input-range')
  .get('input[type=range]').siblings('p')
  .should('have.text', '25')
    });
})