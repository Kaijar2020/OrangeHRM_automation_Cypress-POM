import baseMethod from "../baseMethod"
import MaintainancePage from "./maintainance.po"

const base = new baseMethod()
const mntn = new MaintainancePage()


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
      doWait(1000)
      base.clickOnElement(mntn.maintainancePageLocator.accessRecord)
      doWait(1000)
    })
})