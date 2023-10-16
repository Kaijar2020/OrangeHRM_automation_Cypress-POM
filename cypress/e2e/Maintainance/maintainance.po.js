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
        candidateRecord : "//a[normalize-space()='Candidate Records']"

    }

    selectBySuggestion(){
        cy.xpath(this.maintainancePageLocator.employeeName).type('Virat').type('{enter}')
        
    }
}export default MaintainancePage;