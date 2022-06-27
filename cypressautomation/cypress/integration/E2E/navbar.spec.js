/// <reference types="cypress"/>

describe("Password Test",()=>{

    before(function(){
        cy.visit("http://zero.webappsecurity.com/index.html")
    })

    it("Should display online banking content",()=>{
        cy.get("#onlineBankingMenu").click()
        cy.url().should("include","online-banking.html")
        cy.get("h1").should("be.visible")
        cy.wait(5000)


    })

    it("Should display feedback content",()=>{

     cy.get("#feedback > div > strong").click()
     cy.url().should("include","feedback.html")
     cy.wait(5000)
     
        
    })

    it("Should fill feedback content form",()=>{

        cy.get("#name").type("Alamin")
        cy.get("#email").type("email@email.com")
        cy.get("#subject").type("computer science")
        cy.get("#comment").type("this is a goood boy")
        cy.get(".btn-signin").click()
    })


})