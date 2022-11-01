export class Footer {

    constructor() {
        // Locators goes here

        this.doNotSellMyInformationButton = "(//a[@title='Do Not Sell My Personal Information'][normalize-space()='Do Not Sell My Personal Information'])[2]"
        this.hearstLogoBottom             = "//img[@title='Hearst Lifestyle and Design Group']"
        this.privacyNotice                = "//a[normalize-space()='Privacy Notice/Notice at Collection']"
        this.californiaPrivacyNotice      = "//a[normalize-space()='Your California Privacy Rights']"
        this.interestBasedAds             = "//a[normalize-space()='Interest-Based Ads']"
        this.termsOfUse                   = "//a[normalize-space()='Terms of Use']"
        this.siteMap                      = "//a[normalize-space()='Site Map']"
        this.oprahCopyRight               = "/html[1]/body[1]/div[1]/div[1]/footer[1]/div[1]/p[3]"
        this.newsletter                   = "a[href='/newsletter']"
        this.pressRoom                    = "//a[normalize-space()='Press Room']"
        this.giveAGift                    = "//a[normalize-space()='Give a Gift']"
        this.beingGreen                   = "//a[normalize-space()='Being Green']"
        this.contactUs                    = "//a[normalize-space()='Contact Us']"
        this.customerService              = "//a[normalize-space()='Customer Service']"
        this.twitter                      = "//a[@aria-label='twitter']"
        this.facebook                     = "//a[@aria-label='facebook']"
        this.instagram                    = "//a[@aria-label='instagram']"
        this.pinterest                    = "//a[@aria-label='pinterest']"
    }

        // Methods go here
    getTwiiter() {
        return cy.xpath(this.twitter)
    }

    getFacebook() {
        return cy.xpath(this.facebook)
    }

    getInstagram() {
        return cy.xpath(this.instagram)
    }

    getPinteres() {
        return cy.xpath(this.pinterest)
    }
    
    getCustomerService() {
        return cy.xpath(this.customerService)
    }

    getPressRoom() {
        return cy.xpath(this.pressRoom)
    }

    getGiveAGift() {
        return cy.xpath(this.giveAGift)
    }

    getBeingGreen() {
        return cy.xpath(this.beingGreen)
    }

    getContactUs() {
        return cy.xpath(this.contactUs)
    }

    getDoNotSellMyinfoButton() {
        return cy.xpath(this.doNotSellMyInformationButton)
    }

    getHearstLogoBotton() {
        return cy.xpath(this.hearstLogoBottom)
    }

    getPrivacyNotice() {
        return cy.xpath(this.privacyNotice)
    }

    getCaliforniaPrivacyNotice() {
        return cy.xpath(this.californiaPrivacyNotice)
    }

    getInterestBasedAds() {
        return cy.xpath(this.interestBasedAds)
    }

    getTermsOfUse() {
        return cy.xpath(this.termsOfUse)
    }

    getOprahCopyRight() {
        return cy.xpath(this.oprahCopyRight)
    }

    getNewsletter() {
        return cy.get(this.newsletter)
    }

    scrollDownToTheBottom() {
        return cy.get('.sidebar').scrollTo('bottom')
    }
}