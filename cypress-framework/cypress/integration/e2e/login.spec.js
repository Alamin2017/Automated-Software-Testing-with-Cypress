import {url,login_username,login_password} from '../../../config'
import Navbar from '../../page-objects/components/Navbar'
import LoginPage from '../../page-objects/pages/LoginPage'
import BasePage from '../../page-objects/BasePage'

describe('Login Failed Test', function() {
  before(function () {
    cy.visit(url)
    Navbar.clickSignIn()
  })

  it('should try to login with invalid credentials', function () {
    LoginPage.login('invalid username', 'invalid password')
  })

  it('should display error message', function () {
    LoginPage.displayErrorMessage()
  })
})
describe('Login Success Test', function() {
    before(function () {
      cy.visit(url)
      Navbar.clickSignIn()
    })
  
    it('should login into application', function () {
      LoginPage.login('username', 'password')
      BasePage.pause(5000)
      
    })
    

    it('should logout into application', function () {
      Navbar.logout()
    })
})