/// <reference types="cypress" />
describe('Login / Logout Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
    })
    it('Should try to login with invalid data and dissplay error massage', () => {
        cy.get('#signin_button').click()
        cy.get('h3').contains('Log in to ZeroBank')
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name = "submit"]').click()
        cy.get('.alert', { timeout: 5000 }).should('have.class', 'alert-error');

    })

    it('Should login to application with valid data and logout', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
            cy.get('input[name = "submit"]').click()

            cy.get('h2').should('contain.text', 'Cash Accounts')
            cy.get('a.dropdown-toggle', { timeout: 4000 }).contains('username').click()
            cy.get('#logout_link').contains('Logout').click()
            cy.get('li#onlineBankingMenu').should('be.visible')

        })
    })

})


