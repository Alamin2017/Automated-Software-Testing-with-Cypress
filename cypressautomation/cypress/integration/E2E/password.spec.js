/// <reference types="cypress"/>

describe("Password Test",()=>{

    before(function(){
        cy.visit("http://zero.webappsecurity.com/index.html")
    })

    it("Should click in sign in button",()=>{
        cy.get("#signin_button").click()

    })

    it("Should click in forgotten password",()=>{

        cy.get(".offset3 > a").click()
     
        
    })

    it("Should fill email form",()=>{
        
        cy.get("#user_email").type("test.email@gmail.com")
        
    })

    it("Should click on submit button",()=>{
        cy.get(".btn").click()
    })

   

})