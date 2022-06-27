/// <reference types="cypress"/>

describe ('reload page',()=>{

    it('page reload test',()=>{

        cy.visit('https://www.freshworks.com/')
        cy.contains('Customers').click()
        cy.reload()
        cy.contains('Customers').should('be.visible')
       



    })

});