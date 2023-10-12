class baseMethod{

    toWrite(locator, text){
        cy.xpath(locator).type(text)
    }
    inputPassword(locator,password){
        cy.xpath(locator).type(password)
    }
    clickOnLoginButton(locator){
        cy.xpath(locator).click()
    }

    //to get text from element and verify with actual text
    textVerify(locator,expectedtext){   
        cy.get(locator).then( (x)=>{

            let actualText = x.text()
            cy.log(actualText)
            assert.equal(actualText,expectedtext)  
            //assert.notEqual(actualText,expectedtext)  
        } )
    }

    doWait(time){
        cy.wait(time) 
    }


}export default baseMethod;