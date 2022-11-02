import { Footer } from "../page-objects/frontend/global/Footer";

const footer = new Footer()

describe('Footer Testing for PoC', () => {


    it('Footer Validation', () => {
        cy.visit('/')
        footer.getDoNotSellMyinfoButton().should('be.visible')
    })
})