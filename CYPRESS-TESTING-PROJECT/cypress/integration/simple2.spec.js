/// <reference types="cypress"/>
describe("Browser actions",()=>{
    it("Should load books website",()=>{
        cy.visit("https://books.toscrape.com/index.html")
        cy.url().should('include',"index.html")
        cy.log("Before Reload")
        cy.reload()
        cy.log("After reload")
    })
    
    it("Should load on Travel category",()=>{
        cy.get('a').contains("Travel").click()
        cy.get("h1").contains("Travel")
        cy.get("div[class='col-sm-8 col-md-9'] li").its("length").should("eq",11)
    })
    it("Should click on poetry category",()=>{
        cy.get('a').contains("Poetry").click()
        
    })

    it("Should click on olio book details and verify price tage",()=>{
        cy.get('a').contains("Olio").click()
        cy.get(".price_color").contains("£23.88")

        
    })
})