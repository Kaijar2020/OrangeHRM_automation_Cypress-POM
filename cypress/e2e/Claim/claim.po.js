class ClaimPage{
    claimPageLocator ={

        claimMenu : "//ul[@class='oxd-main-menu']/li[11]/a",
        myClaims : "//a[contains(text(),'My Claims')]",
        submitClaim_btn : "//button[normalize-space()='Submit Claim']",
        Accommodationtext : "//div[contains(text(),'Travel Allowance')]",
        selectEvent : "(//div[@class='oxd-select-text-input'])[1]",
        selectCurrency : "(//div[@class='oxd-select-text-input'])[2]",
        reMarks : "//textarea[@class='oxd-textarea oxd-textarea--active oxd-textarea--resize-vertical']",
        creaTe_btn : "//button[normalize-space()='Create']",
        viewDetails : "(//button[@type='button'][normalize-space()='View Details'])[1]",
        cancel_btn : "//button[normalize-space()='Cancel']"

    }

    //Select Event Dropdown
    selectFromEventDropdown(){
        cy.xpath(this.claimPageLocator.selectEvent).click()
        cy.wait(1000)
        // cy.get(this.claimPageLocator.Accommodationtext).click()
        cy.get(':nth-child(3) > span').click()
    }

    //select currency drop down
    selectFromCurrencyDropdown(){
        cy.xpath(this.claimPageLocator.selectCurrency).click()
        cy.wait(1000)
        cy.get(':nth-child(9) > span').click()
    }

    clickViewDetails(){
        cy.xpath(this.claimPageLocator.viewDetails).click()
    }

}export default ClaimPage;