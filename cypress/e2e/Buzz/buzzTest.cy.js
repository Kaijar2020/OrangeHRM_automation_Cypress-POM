import baseMethod from "../baseMethod"
import BuzzPage from "./buzz.po"
import loginData from '../../fixtures/loginData.json'


const base = new baseMethod()
const buzz = new BuzzPage()

describe('Buzz Module Automation',()=>{

    beforeEach('open url',()=>{
        cy.visit(Cypress.env('URL'))
        base.doWait(1000) 
        cy.login(loginData.Username,loginData.Password)
        base.doWait(1000)    
    })

    it('Create Post',()=>{
     base.clickOnElement(buzz.buzzPageLocator.buzzMenu)
     base.doWait(1000)
     base.toWrite(buzz.buzzPageLocator.textareaStatus, loginData.Status) 
     base.doWait(1000) 
     buzz.clickPost()
     base.doWait(1000) 
     buzz.toastMessageDisplay()
     base.doWait(1000) 
    })

    it.skip('Share Photo',()=>{
        base.clickOnElement(buzz.buzzPageLocator.buzzMenu)
        base.doWait(1000)
        base.clickOnElement(buzz.buzzPageLocator.share_photos)
        base.doWait(1000)
        buzz.sharePhoto() //issue on the select file function
        base.doWait(1000)
        cy.get('.oxd-form-actions > .oxd-button').click({force:true})
        buzz.toastMessageDisplay()
        base.doWait(1000)
    })


    it('React and Comment to the Post',()=>{
        base.clickOnElement(buzz.buzzPageLocator.buzzMenu)
        base.doWait(1000)
        buzz.reactHeart()
        base.doWait(1000)
        buzz.commentPost(loginData.comment)
        base.doWait(1000)
        buzz.toastMessageDisplay()
        base.doWait(1000)
    })
})