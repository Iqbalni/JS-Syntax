/// <reference types="cypress" />


describe('Navbar test', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('should display online banking', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('.span6').should('be.visible')

    })

    it('should display feedback content', () => {
        cy.contains('strong', 'Feedback').should('be.visible').click();
        cy.url().should('include', 'feedback.html')
    })

    it('should display homepage content', () => {
        cy.contains('.container', 'Zero Bank').should('be.visible').click()
        cy.url().should('include', 'index.html')
    })

})