import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("visit the website login page webappsecurity", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
});

When("the user enters a valid username and password", () => {
    cy.get("#user_login").type("username");
    cy.get("#user_password").type("password");
    cy.get('[type="submit"]').click();
});

Then("find the search button", () => {
    cy.get("#searchTerm").should("be.visible");
});
