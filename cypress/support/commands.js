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
    cy.get('input[data-test="username"]').type(username)
    cy.get('input[data-test="password"]').type(password)
})

Cypress.Commands.add('loginViaAPI', (
    userEmail = Cypress.env('userEmail'),
    password = Cypress.env('password')
) => {
    cy.request('POST', 'https://practice.expandtesting.com/notes/api/users/login', {
       email: 'iqbal12@gmail.com',
       password: 'iqbal12'
    
    }).then((response) => {
        expect(response.body.success).to.eq(true);
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Login successful')
        
        expect(response.body.data.id).to.eq('675f69036c525f0152465989')
        expect(response.body.data.name).to.eq('iqbal')
        expect(response.body.data.email).to.eq('iqbal12@gmail.com')
    });
});


