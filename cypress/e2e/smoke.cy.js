/// <reference types="Cypress" />

describe('app', () => {
	it('loads the app and card form', () => {
		cy.visit('/');
		cy.get('#card-name').should('exist');
		cy.get('#card-number').should('exist');
		cy.get('input[name="expiryMonth"]').should('exist');
		cy.get('input[name="expiryYear"]').should('exist');
		cy.get('#cvc-number').should('exist');
		cy.get('button').contains(/confirm/i);
	});
});
