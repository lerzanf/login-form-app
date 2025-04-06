describe('Login Form Success', () => {
  it('should log in successfully and navigate to success page', () => {
    cy.visit('http://localhost:5173');

    cy.get('input[name="email"]').type('erdem.guntay@wit.com.tr');
    cy.get('input[name="password"]').type('9fxIH0GXesEwH_I');
    cy.get('input[name="terms"]').check();

    cy.get('[data-cy="submit"]').click();

    cy.url().should('include', '/success');
    cy.contains('Welcome').should('be.visible');
  });
});