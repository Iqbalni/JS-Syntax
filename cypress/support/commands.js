// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get("#user_login").clear();
    cy.get("#user_login").type(username);

    cy.get('input[name="user_password"]').clear();
    cy.get('input[name="user_password"]').type(password);
})

Cypress.Commands.add('pay', () => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.get('#sp_payee').select("apple")
    cy.get('#sp_account').select("Loan")
    cy.get('input[name="amount"]').type('500');
    cy.get('input[name="date"]').type('2024-11-18');
    cy.get('input[name="description"]').type('Muhamad Iqbal', { force: true });
})