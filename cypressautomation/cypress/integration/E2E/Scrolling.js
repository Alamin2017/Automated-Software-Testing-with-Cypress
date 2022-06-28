/// <reference types="cypress"/>

describe ('Scrolling ',()=>{

    it('scrolling test',()=>{

        cy.visit('https://www.google.com/')
        cy.get(".gLFyf").should("be.enabled").type("Selenium").type('{enter}')
        cy.url().should("contain","Selenium")
        cy.scrollTo("bottom")
        cy.get("[style='display:block;margin-left:53px']").click()

    
    })

});