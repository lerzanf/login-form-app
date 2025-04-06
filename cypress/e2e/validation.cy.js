describe('Form Validation Tests', () => {
  it('should display an error message if the email is invalid', () => {
    cy.visit('http://localhost:5173');

    // Geçersiz e-mail gir
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('input[name="password"]').type('Password123');
    cy.get('input[name="terms"]').check();

    // Submit butonu disabled olmalı
    cy.get('button[type="submit"]').should('be.disabled');

    // Hata mesajını kontrol et
    cy.get('input[name="email"]').parents('.form-group').find('.invalid-feedback')
      .should('be.visible')
      .and('contain', 'Please enter a valid email address');
  });

  it('should display error messages if email and password are incorrect', () => {
    cy.visit('http://localhost:5173');

    // Geçersiz email ve şifre gir
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('input[name="password"]').type('wrongpassword');
    cy.get('input[name="terms"]').check();

    // Submit butonu disabled olmalı
    cy.get('button[type="submit"]').should('be.disabled');

    // İki hata mesajı görünmeli
    cy.get('input[name="email"]').parents('.form-group').find('.invalid-feedback')
      .should('be.visible')
      .and('contain', 'Please enter a valid email address');

    cy.get('input[name="password"]').parents('.form-group').find('.invalid-feedback')
      .should('be.visible')
      .and('contain', 'Password must be at least 8 characters long, include a letter and a number');
  });
  
  it('should keep the submit button disabled if terms are not accepted', () => {
    cy.visit('http://localhost:5173');

    // Geçerli email ve şifre gir
    cy.get('input[name="email"]').type('validemail@example.com');
    cy.get('input[name="password"]').type('Password123');
    
    // Terms checkbox işaretlenmeden submit butonuna tıklanamaz
    cy.get('button[type="submit"]').should('be.disabled');
  });
});
