/// <reference types="cypress"/>

const { it } = require("mocha")

describe('Test Amazon  ', () => {
    it('Open the URL and verify some component', () => {

      cy.visit("https://www.amazon.com/")
      cy.wait(2000)
      cy.get("#nav-logo-sprites").should("be.visible")
      cy.wait(2000)
      cy.get("#nav-global-location-popover-link").should("be.visible")
      cy.get(".icp-nav-link-inner").should("be.visible")
      cy.get(".nav-cart-icon").should("be.visible")
      cy.get("#twotabsearchtextbox").should("be.visible")
    })
    it('Click on Login buttton',()=>{
      cy.get("#nav-link-accountList").should("be.visible").click()
      cy.wait(2000)
    })
    it('Create your Amazon account',()=>{
      cy.get("#createAccountSubmit").should("be.visible").click()
      cy.wait(2000)
  })
    it('Create account with valid data',()=>{

      cy.get("#ap_customer_name").type("Al-Amin")
      cy.get("#ap_email").type("alamincse12@gmail.com")
      cy.get("#ap_password").type("@alamin12")
      cy.get("#ap_password_check").type("@alamin12")
      cy.get("#continue").should("be.visible").click()
    })

})
