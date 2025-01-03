describe('Cypress Example Site Tests', () => {
    beforeEach(() => {
        // Visit the homepage before each test
        cy.visit('https://example.cypress.io');
    });

    it('should verify the homepage title', () => {
        cy.title().should('include', 'Cypress.io');
    });

    it('should type into an input box', () => {
        cy.contains('type').click();
        cy.get('.action-email')
          .type('test@example.com')
          .should('have.value', 'test@example.com');
    });

});
