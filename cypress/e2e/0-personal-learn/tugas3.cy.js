/// <reference types="cypress" />
describe("working with inputs", () => {
    it("Visit the website", () => {
        cy.visit("http://zero.webappsecurity.com/index.html");
        cy.url().should("include", "index.html");
    });

    it("should fill username", () => {
        cy.visit("http://zero.webappsecurity.com/login.html");
        cy.get("#user_login").clear();
        cy.get("#user_login").type("username");
    });

    it("should fill password", () => {
        cy.visit("http://zero.webappsecurity.com/login.html");
        cy.get('input[name="user_password"]').clear();
        cy.get('input[name="user_password"]').type("password");
    });

    it("should try to login", () => {
        cy.visit("http://zero.webappsecurity.com/login.html");
        cy.fixture("user").then((user) => {
            const username = user.username;
            const password = user.password;

            cy.login(username, password)

            cy.get("input[name='submit']").click();
            cy.get('a').contains("Pay Bills").click()

            cy.pay()
            cy.get("input[value='Pay']").click();
        });
    });
});