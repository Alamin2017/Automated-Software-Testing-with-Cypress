/// <reference types="cypress"/>

describe("Write data from JSON File",()=>{

    it("Should write data into json",()=>{
        cy.writeFile('log.json',{name:'Make',age: 25})
    })
    it("Should read data into json",()=>{
        cy.readFile('log.json').its('age').should('eq', 25)
    })
})
