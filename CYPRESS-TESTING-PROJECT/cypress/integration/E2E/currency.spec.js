/// <reference types="cypress"/>

describe('Currency Excahnge Test', () => {
	before(function() {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.wait(3000)
		cy.get('#signin_button').click()
		cy.wait(3000)
		cy.fixture('user').then(user => {
			const username = user.id
			const password = user.pwd
			cy.login(username, password)
		})
	})

	it('should fill conversion form', () => {
		cy.wait(3000)
		cy.get('#pay_bills_tab').click()
		cy.wait(3000)
		cy.contains('Purchase Foreign Currency').click()
		cy.wait(3000)
		cy.get('#pc_currency').select('GBP')
		cy.wait(3000)
		cy.get('#pc_amount').type('2000')
		cy.wait(3000)
		cy.get('#pc_inDollars_true').click()
		cy.wait(3000)
		cy.get('#pc_calculate_costs').click()
		cy.wait(3000)
	})

	it('should disply conversion ammount', () => {
		cy.wait(3000)
		cy.get('#pc_conversion_amount').should(
			'contain',
			'1180.50 pound (GBP) = 2000.00 U.S. dollar (USD)'
		)
	})
})
