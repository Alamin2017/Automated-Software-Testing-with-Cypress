/// <reference types="cypress"/>

describe("Browser actions",()=>{
    it("Should load current url",()=>{
        cy.visit("http://example.com/",{timeout: 10000})
        
    })
    it("Should wait 3 second",()=>{
        cy.wait(3000)
    })
    it("Should check current url",()=>{
        cy.url().should("include","example.com")
    })
    it("Should wait 3 second",()=>{
        cy.wait(3000)
    })
    it("Should check for current element on the page",()=>{
        cy.get("h1").should("be.visible")
    })
})