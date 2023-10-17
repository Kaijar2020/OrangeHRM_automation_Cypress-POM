import baseMethod from "../baseMethod"
import MaintainancePage from "./maintainance.po"
import LoginPage from "../Login/login.po"
import loginData from '../../fixtures/loginData.json'


const base = new baseMethod()
const mntn = new MaintainancePage()
const login = new LoginPage()


describe('Automated Maintainance Module',()=>{

    beforeEach('open url',()=>{
        cy.visit(Cypress.env('URL'))
        base.doWait(1000)
        base.toWrite(login.loginPageLocators.userName, loginData.Username)
        base.doWait(1000)
        base.toWrite(login.loginPageLocators.passWord,loginData.Password)
        base.doWait(1000)
        base.clickOnElement(login.loginPageLocators.Login)
        base.doWait(1000)
        
    })

    it('Automate Access Records',()=>{
      base.clickOnElement(mntn.maintainancePageLocator.maintainanceMenu)  
      base.doWait(1000)
      base.inputPassword(mntn.maintainancePageLocator.accessPassword, 'admin123')
      base.doWait(1000)
      base.clickOnElement(mntn.maintainancePageLocator.confirm_btn)
      base.doWait(1000)
      base.clickOnElement(mntn.maintainancePageLocator.accessRecord)
      base.doWait(1000)
      mntn.selectBySuggestion()
      base.doWait(1000)
      base.clickOnElement(mntn.maintainancePageLocator.search_btn)
      base.doWait(1000)
      base.textVerify(mntn.maintainancePageLocator.employeeFullName, '')
      base.doWait(1000)
    })
})