/// <reference types="cypress" />
describe("Browser Actions", () => {
  it("should visit the SauceDemo site and perform an action", () => {
    cy.visit("https://www.saucedemo.com/", { timeout: 60000 });
    cy.fixture("user").then((user) => {
      const username = user.username;
      const password = user.password;
      // Memasukkan username dan password
      cy.login(username, password)
      cy.get("input[name='login-button']").click();

      //melihat logo product
      cy.get("span.title").should("contain", "Products");

      //Mengechek fungsi dropdown dan select
      cy.get('[data-test="product-sort-container"]').select("Price (low to high)")
      cy.get('[data-test="product-sort-container"]').select("Name (A to Z)")
      cy.get('[data-test="product-sort-container"]').select("Name (A to Z)")
      cy.get('[data-test="product-sort-container"]').select("Price (high to low)")

      //Menmambahkan barang ke halaman keranjang belanja
      cy.contains('Sauce Labs Backpack').click()
      cy.get('[data-test="add-to-cart"]').click()
      //Melihat barang yang sudah dichekout
      cy.get('[data-test="shopping-cart-link"]').click()
      //Mengcheckout barang
      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="firstName"]').type('muhamad')
      cy.get('[data-test="lastName"]').type('iqbal')
      cy.get('[data-test="postalCode"]').type('082125740371')
      //Melihat barang yang sudah dicheckout
      cy.get('[data-test="continue"]').click()
      cy.get(".summary_total_label").should('have.text', 'Total: $32.39')
      //Menyelesaikan checkout
      cy.get('[data-test="finish"]').click()
    });
  });
});