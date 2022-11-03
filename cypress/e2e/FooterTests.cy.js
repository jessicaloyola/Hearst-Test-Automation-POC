import { Footer } from "../page-objects/frontend/global/Footer";

const footer = new Footer()

describe('Footer Testing for PoC', () => {


    it('Footer Validation', () => {
        cy.visit('/life/food/a34978134/patti-labelle-stuffing-recipe/')
        footer.getDoNotSellMyinfoButton().should('be.visible')
        footer.getBeingGreen().should('be.visible')
        footer.getCaliforniaPrivacyNotice().should('be.visible')
        footer.getContactUs().should('be.visible')
        footer.getFacebook().should('be.visible')
        footer.getGiveAGift().should('be.visible')
        footer.getHearstLogoBotton().should('be.visible')
        footer.getInstagram().should('be.visible')
        footer.getInterestBasedAds().should('be.visible')
        footer.getNewsletter().should('be.visible')
        footer.getOprahCopyRight().should('be.visible')
        footer.getPinteres().should('be.visible')
        footer.getPressRoom().should('be.visible')
        footer.getPrivacyNotice().should('be.visible')
        footer.getTermsOfUse().should('be.visible')
        footer.getTwiiter().should('be.visible')
    })
})