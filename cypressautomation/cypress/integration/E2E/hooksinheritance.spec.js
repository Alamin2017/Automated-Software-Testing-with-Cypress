/// <reference types="cypress"/>

class BasePage{
    static loadHomePage()
    {
        cy.visit("https://codenboxautomationlab.com/")
    }
    static wait(number)
    {
        cy.wait(number)
    }
}
class HomePage extends BasePage{
    static scrollToBottom()
    {
        cy.contains("Contact Us").scrollIntoView()
    }
    static scrollToUp()
    {
        cy.contains("Home").scrollIntoView()
    } 
}
describe("Interitance between classes",function(){

  before(function(){

    HomePage.loadHomePage()
    
  })
  after(function(){

    cy.clearCookies()
    cy.clearLocalStorage()
  })

  it("Should scroll up and down ",function(){
    HomePage.scrollToBottom()
    HomePage.wait(3000)
    HomePage.scrollToUp()
    HomePage.wait(3000)
    
})
})