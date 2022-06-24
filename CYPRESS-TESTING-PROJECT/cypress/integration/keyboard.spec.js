/// <reference types="cypress"/>

describe("Working with Login inputs",()=>{

    it("Should load login page",()=>{
    
        cy.visit("http://zero.webappsecurity.com/")
        cy.wait(3000)
        cy.get("#searchTerm").type("Just some text{enter}")
        cy.wait(3000)
    })

})