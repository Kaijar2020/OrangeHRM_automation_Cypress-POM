import LoginPage from "./login.po"
import baseMethod from "../baseMethod"
import loginData from '../../fixtures/loginData.json'

const login = new LoginPage()
const base = new baseMethod()

describe('Login function automation of Orange HRM project',()=>{
    beforeEach('open url',()=>{
        cy.visit(Cypress.env('URL'))
        cy.title().should('eq','OrangeHRM')
        base.doWait(1000)
        base.doWait(1000)
    })

    it('Login with invalid credential',()=>{
        base.toWrite(login.loginPageLocators.userName,loginData.invalidUsername)
        base.doWait(1000)
        base.inputPassword(login.loginPageLocators.passWord,loginData.invalidPassword)
        base.doWait(1000)
        base.clickOnElement(login.loginPageLocators.Login)
        base.doWait(1000)
        base.textVerify(login.loginPageLocators.errorText,"Invalid credentials")
        base.doWait(1000)
    })

    it('Login with valid credential',()=>{
        base.toWrite(login.loginPageLocators.userName, loginData.Username)
        base.doWait(1000)
        base.toWrite(login.loginPageLocators.passWord,loginData.Password)
        base.doWait(1000)
        base.clickOnElement(login.loginPageLocators.Login)
        base.doWait(1000)
    })
})