/// <reference types="cypress" />


describe('First Test', () => {
    before('', () => {
      cy.visit('http://localhost:1667/#/');
    });
    
    it('Sign in for user', () => {
      cy.get(':nth-child(2) > .nav-link').click();
      cy.get(':nth-child(1) > .form-control').type('test96@ukr.net');
      cy.get(':nth-child(2) > .form-control').type('Qwerty!123');
      cy.get('.btn').click();
      cy.get('.navbar').contains('Qwerty123!').should('exist');
    });
  });