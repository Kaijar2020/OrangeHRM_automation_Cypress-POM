class MaintainancePage{

    maintainancePageLocator={
        maintainanceMenu : "//ul[@class='oxd-main-menu']/li[10]/a",
        accessRecord : "//li[@class='oxd-topbar-body-nav-tab']",
        employeeName : "//input[@placeholder='Type for hints...']",
        search_btn : "//button[@type='submit']",
        actualText : "//button[@type='submit']",    //Virat
        purgeAll : "//button[normalize-space()='Purge All']",
        noCancel_btn : "//button[normalize-space()='No, Cancel']",
        purgeRecord : "//span[@class='oxd-topbar-body-nav-tab-item']",
        candidateRecord : "//a[normalize-space()='Candidate Records']",
        accessPassword : "//input[@name='password']",
        confirm_btn : "//button[normalize-space()='Confirm']",
        employeeFullName : ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input",
        suggestionXpath : "//div[@role='option']"

    }

    selectBySuggestion(){

        // If no select tag use in the Dropdown.Then Use this way by searching and suggestion value.
        cy.xpath(this.maintainancePageLocator.employeeName).type('Virat').type('{enter}')
        cy.xpath(this.maintainancePageLocator.suggestionXpath).should('have.text', 'Virat  Kohli').click()
    }

}export default MaintainancePage; 