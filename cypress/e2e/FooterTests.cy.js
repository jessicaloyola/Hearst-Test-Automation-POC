import { Footer } from "../page-objects/frontend/global/Footer";

const footer = new Footer()

describe('Footer Testing for PoC', () => {

    it('Footer Validation Oprah', async () => {
        
        cy.visit('/')

        cy.log('Do Not Sell My info')
        footer.getDoNotSellMyinfoButton().should('be.visible')
        cy.log('Being Green')
        footer.getBeingGreen().should('be.visible')
        cy.log('California Rights')
        footer.getCaliforniaPrivacyNotice().should('be.visible')
        cy.log('Contact Us')
        footer.getContactUs().should('be.visible')
        cy.log('Facebook')
        footer.getFacebook().should('be.visible')
        cy.log('Give a gift')
        footer.getGiveAGift().should('be.visible')
        cy.log('Logo')
        footer.getHearstLogoBotton().should('be.visible')
        cy.log('Instagram')
        footer.getInstagram().should('be.visible')
        cy.log('Based Ads')
        footer.getInterestBasedAds().should('be.visible')
        cy.log('NewsLetter')
        footer.getNewsletter().should('be.visible')
        cy.log('Copy Right')
        footer.getOprahCopyRight().should('be.visible')
        cy.log('Pinterest')
        footer.getPinteres().should('be.visible')
        cy.log('Press Room')
        footer.getPressRoom().should('be.visible')
        cy.log('Privacy Notice')
        footer.getPrivacyNotice().should('be.visible')
        cy.log('Terms of Use')
        footer.getTermsOfUse().should('be.visible')
        cy.log('Twitter')
        footer.getTwiiter().should('be.visible')
    })
})