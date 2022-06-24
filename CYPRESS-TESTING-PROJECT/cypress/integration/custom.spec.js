/// <reference types="cypress"/>

describe("Working with Custom command",()=>{

    it("Should login to application using custom cypress command",()=>{
    
        cy.visit("http://zero.webappsecurity.com/login.html")
        cy.login("username","password")
    })
})
