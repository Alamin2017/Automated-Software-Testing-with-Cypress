/// <reference types="cypress"/>

describe ('Go to URL ',()=>{

    it('Launch the web app',()=>{

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el,index,$list)=>{
            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                $el.find('button').click()
            }
        })

        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())

        })

        cy.get('.cart-icon > img').click()
        cy.wait(2000)
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.wait(2000)
        cy.get(':nth-child(14)').click()
        cy.wait(2000)
        cy.get('.chkAgree').click()
        cy.wait(2000)
        cy.get('Select').select('Albania').should('have.value','Albania')
        cy.wait(2000)
        cy.get('button').click()

       
    })

});