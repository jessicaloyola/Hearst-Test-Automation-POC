import { Header } from "../page-objects/frontend/global/Headers";

const header = new Header()

describe('Header Testing for PoC', () => {

    it('Header Validation', async () => {
        
        cy.visit('/')

        cy.log('Signin')
        header.getsignInButton().should('be.visible')
        cy.log('Subscribe')
        header.getSubscribebutton().should('be.visible')
        cy.log('Favorite Things')
        header.getfavoriteThings().should('be.visible')
        cy.log('Wellness')
        header.getWellnessLink().should('be.visible')
        cy.log('Books')
        header.getBooksLink().should('be.visible')
        cy.log('Delights')
        header.getDelightsLinks().should('be.visible')
        cy.log('Intention')
        header.getIntentionLink().should('be.visible')
        cy.log('Logo')
        header.getOprahLogo().should('be.visible')
        cy.log('Burger Menu')
        header.getBurgerMenu().should('be.visible')
        })
})