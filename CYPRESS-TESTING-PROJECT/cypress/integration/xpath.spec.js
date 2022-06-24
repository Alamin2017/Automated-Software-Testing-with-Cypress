/// <reference types="cypress"/>

describe("Working with Login inputs",()=>{

    it("Should load login page",()=>{
    
        cy.visit("http://zero.webappsecurity.com/login.html")
        cy.wait(3000)
        cy.xpath("//a[normalize-space()='Forgot your password ?']").click()
        cy.wait(3000)
        cy.go('back')
        cy.wait(3000)
        cy.xpath("//i[@id='credentials']").click()
        cy.wait(3000)
        cy.xpath("//div[@class='tooltip-inner']").should("be.visible")


      
    })
})