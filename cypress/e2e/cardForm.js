describe('card form', () => {
	it('shows all error messages when form details are invalid', () => {
		cy.visit('/');
		cy.get('button')
			.contains(/confirm/i)
			.click();
		cy.contains(/can't be blank/i).should('exist');
		cy.contains(/credit card number is invalid/i).should('exist');
		cy.contains(/invalid month/i).should('exist');
		cy.contains(/invalid year/i).should('exist');
		cy.contains(/invalid cvc/i).should('exist');
	});

	it('shows thank you message when form details are valid', () => {
		cy.visit('/');
		cy.get('#card-name').type('Elon Musk');
		cy.get('#card-number').type('4111 1111 1111 1111');
		cy.get('input[name="expiryMonth"]').type('04');
		cy.get('input[name="expiryYear"]').type(new Date().getFullYear() + 2);
		cy.get('#cvc-number').type('123');
		cy.get('button')
			.contains(/confirm/i)
			.click();
		cy.contains(/thank you/i).should('exist');
		cy.contains(/We've added your card details/i).should('exist');
	});
});
