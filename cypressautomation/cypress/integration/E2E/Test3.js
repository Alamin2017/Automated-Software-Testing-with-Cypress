/// <reference types="Cypress" />
 
describe('My Third Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("http://qaclickacademy.com/practice.php")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
 
cy.get('#opentab').invoke('removeAttr','target').click()

 
})
})