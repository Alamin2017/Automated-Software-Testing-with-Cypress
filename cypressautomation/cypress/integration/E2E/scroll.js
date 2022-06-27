/// <reference types="cypress"/>

describe ('Alert test demo',()=>{

    it('Alert Test',()=>{

        cy.visit('https://codenboxautomationlab.com/')
        cy.wait(3000)
        cy.get(":nth-child(2) > button").scrollIntoView()

   
     
       



    })

});