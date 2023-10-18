class BuzzPage{

    buzzPageLocator = {

        buzzMenu : "//ul[@class='oxd-main-menu']/li[12]/a",
        textareaStatus : "//textarea[@class='oxd-buzz-post-input']",
        submit_btn : "//button[@type='submit']",
        //share_photos : "(//button[@class='oxd-glass-button'])[1]",
        share_photos : "//button[contains(text(),' Share Photos')]",
        dropPhoto : "//div[@class='oxd-file-div oxd-file-div--active']",
        share_videos : "(//button[@class='oxd-glass-button'])[2]",
        reactLove : "orangehrm-like-animation",
        comment : "(//button[@class='oxd-icon-button'])[3]",
        comment_box : "//input[@placeholder='Write your comment...']",
        threeDot_btn : "(//button[@class='oxd-icon-button'])[2]",
        deletePost : "//ul[@class='oxd-dropdown-menu']//li[1]",
        yesDelete : "//button[normalize-space()='Yes, Delete']",
        successToast : "#oxd-toaster_1"

    }

    toastMessageDisplay(){
        cy.get(this.buzzPageLocator.successToast).should('be.exist')
    }

    clickPost(){
        cy.get('.oxd-buzz-post-slot > .oxd-button').click() 
    }
    reactHeart(){
        cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-buzz-post-footer > .orangehrm-buzz-post-actions > div').click()
    }
    commentPost(text){
        cy.xpath(this.buzzPageLocator.comment).click()
        cy.xpath(this.buzzPageLocator.comment_box).type(text).type('{enter}')
    }
    sharePhoto(){
        cy.xpath(this.buzzPageLocator.dropPhoto).attachFile('download (4).jpeg', {action: 'drag-n-drop'})
        
        //cy.xpath("(//button[contains(text(),' Share ')])[1]").click({force:true}
        cy.xpath("//div[@class='oxd-form-actions orangehrm-buzz-post-modal-actions']//button[1]").click()
    }

}export default BuzzPage;   