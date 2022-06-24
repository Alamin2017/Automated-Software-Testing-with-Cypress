/// <reference types="cypress"/>

describe("Login with Fixtures Data",()=>{

    it("Should try to login",()=>{
    
        cy.visit("http://zero.webappsecurity.com/login.html")
        cy.fixture("user").then(user=>{
            const username=user.id
            const password=user.pwd

            cy.get("#user_login").type(username)
            cy.wait(3000)
            cy.get("#user_password").type(password)
            cy.wait(3000)
            cy.contains("Sign in").click()

        })
    })
})
