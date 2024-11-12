/// <reference types="cypress" />
describe("working with checkbox", () => {
  it("Enable CheckBox", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.get('[type="checkbox"]').not("[disabled]").check();
    cy.get("a").contains("Forgot your password ?").click();
  });
});
