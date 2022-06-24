/// <reference types="cypress"/>

describe("Screenshots",()=>{

    it("Should load login page",()=>{
    
        cy.visit("http://zero.webappsecurity.com/login.html")
        cy.wait(3000)
        cy.screenshot({capture:'fullPage'})
    
    })

   

})