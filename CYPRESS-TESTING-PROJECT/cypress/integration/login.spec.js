/// <reference types="cypress"/>

describe("Working with Login inputs",()=>{

    it("Should load login page",()=>{
    
        cy.visit("http://zero.webappsecurity.com/login.html")
        cy.wait(3000)
        cy.clearCookies({log:true})
        cy.clearLocalStorage({log:true})
    })

    it("Should fill username",()=>{
    
        cy.get("#user_login").clear()
        cy.get("#user_login").type("some invalid name",{delay:50})
        cy.wait(3000)
    })

    it("Should fill password",()=>{
    
        cy.get("#user_password").clear()
        cy.get("#user_password").type("some invalid password",{delay:50})
        cy.wait(3000)
    })

    it("Should mark check box",()=>{
    
        cy.get('input[type="checkbox"]').click()
        cy.wait(3000)
    })

    it("Should submit login form",()=>{
    
        cy.contains("Sign in").click()
        cy.wait(3000)
    })

    it("Should display error message",()=>{
    
        cy.get(".alert-error").should("be.visible").and("contain","Login and/or password are wrong.")
        
    })




})