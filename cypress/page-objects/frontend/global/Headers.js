export class Header {
    
    constructor() {
        // Locators goes here

        this.signinButton = "//span[contains(text(),'sign in')]"
        this.subscribeButton = "//body/div[@id='__next']/div[1]/nav[1]/div[1]/a[3]"
        this.favoriteThingsLink = "//a[normalize-space()='Favorite Things']"
        this.wellnessLink = "//a[normalize-space()='Wellness']"
        this.booksLink = "//a[normalize-space()='Books']"
        this.delightsLink = "//a[normalize-space()='Wellness']"
        this.intentionLink = "//a[normalize-space()='Intention']"
        this.oprahDailyLogo = "//body/div[@id='__next']/div[1]/nav[1]/div[1]/a[2]"
        this.burgerMenuIcon = "//a[@aria-label='Sidepanel Button']"
    }

    // Methods goes here
    
    getsignInButton() {
        return cy.xpath(this.signinButton)
    }

    getSubscribebutton() {
        return cy.xpath(this.subscribeButton)
    }

    getfavoriteThings() {
        return cy.xpath(this.favoriteThingsLink)
    }

    getWellnessLink() {
        return cy.xpath(this.wellnessLink)
    }

    getBooksLink() {
        return cy.xpath(this.booksLink)
    }

    getDelightsLinks() {
        return cy.xpath(this.delightsLink)
    }

    getIntentionLink() {
        return cy.xpath(this.intentionLink)
    }

    getOprahLogo() {
        return cy.xpath(this.oprahDailyLogo)
    }

    getBurgerMenu() {
        return cy.xpath(this.burgerMenuIcon)
    }
}