import baseMethod from "../baseMethod"
import ClaimPage from "./claim.po"
import LoginPage from "../Login/login.po"
import loginData from "../../fixtures/loginData.json"

const base = new baseMethod()
const claim = new ClaimPage()
const login = new LoginPage()

describe('Claim option Automation',()=>{
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

    it('Submit Claim',()=>{
       base.clickOnElement(claim.claimPageLocator.claimMenu) 
       base.doWait(1000)
       base.clickOnElement(claim.claimPageLocator.myClaims)
       base.doWait(1000)
       base.clickOnElement(claim.claimPageLocator.submitClaim_btn)
       base.doWait(1000)
       claim.selectFromEventDropdown()
       base.doWait(1000)
       claim.selectFromCurrencyDropdown()
       base.doWait(1000)
       base.toWrite(claim.claimPageLocator.reMarks, loginData.claimRemark)
       base.doWait(1000)
       base.clickOnElement(claim.claimPageLocator.creaTe_btn)
       base.doWait(1000)

    })

    it('Delete claims',()=>{
       base.clickOnElement(claim.claimPageLocator.claimMenu) 
       base.clickOnElement(claim.claimPageLocator.myClaims)
       base.doWait(1000)
       claim.clickViewDetails()
       base.doWait(1000)
       base.clickOnElement(claim.claimPageLocator.cancel_btn)
       base.doWait(1000)

    })
})