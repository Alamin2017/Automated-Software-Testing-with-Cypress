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

    it("Should scroll up and down ",function(){

        HomePage.loadHomePage()
        HomePage.scrollToBottom()
        HomePage.wait(3000)
        HomePage.scrollToUp()
        HomePage.wait(3000)
        
    })

})