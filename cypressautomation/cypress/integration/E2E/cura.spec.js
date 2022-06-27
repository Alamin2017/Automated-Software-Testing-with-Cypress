/// <reference types="cypress"/>

describe('Cura Make Appointment', function() {

    it("Visit the URL",function(){

        cy.visit('https://katalon-demo-cura.herokuapp.com/')
        cy.wait(2000)

    });

    it("Click the Appointment and Login ",function(){

        cy.get("#btn-make-appointment").click()
        cy.wait(2000)
        cy.get('#txt-username').type('John Doe')
        cy.wait(2000)
        cy.get('#txt-password').type('ThisIsNotAPassword')
        cy.wait(2000)
        cy.get('#btn-login').click()
        cy.wait(2000)

    });

    it("Make the Appointment ",function(){

        cy.get("#combo_facility").select('Hongkong CURA Healthcare Center')
        cy.wait(2000)
        cy.get('#chk_hospotal_readmission').click()
        cy.wait(2000)
        cy.get("#radio_program_medicaid").click()
        cy.wait(2000)
        cy.get("#txt_visit_date").type('30/03/2022')
        cy.get("#txt_comment").click({force:true})
        cy.wait(2000)
        cy.get("#txt_comment").type("Pramod Dutta will be available at 30/03/2022")
        cy.get("#btn-book-appointment").click()

    });
    it("Verify Appointment",function(){

        cy.get("h2").contains("Appointment Confirmation")
        cy.get("#comment").contains("Pramod Dutta will be available at 30/03/2022")


    });

 
  });