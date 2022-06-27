/// <reference types="cypress"/>

describe ('Go to URL ',()=>{

    it('Launch the web app',()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
   
      cy.get("#autocomplete").type("Arg");
   
      cy.get('.ui-menu-item').each(($el, index, $list) => {
       
         if($el.text() ==="Argentina"){
          
            $el.click();
         }
      })
    
   
    })

});