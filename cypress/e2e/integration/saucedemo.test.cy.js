/// <reference types="cypress" />
describe("My First Test", () => {

    beforeEach("Visit website saucedemo", () => {
        cy.visit("https://www.saucedemo.com/", { timeout: 60000 });
        cy.get('.login_logo').should('be.visible').and('contain.text', 'Swag Labs')
    });
    it('should fill username', () => {
        cy.get('input[data-test="username').should('be.visible').and("have.attr", "placeholder", "Username")
    })
    it('should fill password', () => {
        cy.get('input[data-test="password"]').should('be.visible').and("have.attr", "placeholder", "Password")
    })
    it('Should try to login with invalid data and display error message', () => {
        cy.get('input[data-test="username').type('invalid username')
        cy.get('input[data-test="password').type('invalid password')
        cy.get('input[data-test="login-button"]').click()
        cy.get('h3').contains('Epic sadface: Username and password do not match any user in this service')
        cy.get('.error-button').click()
    })
    it('Should try to login with valid data', () => {
        cy.fixture("user").then((user) => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
            cy.get('input[data-test="login-button"]').click()
            cy.get("span.title").should("contain", "Products");
        })
    })
    it('melihat fungsi icon burger dan menutupnya', () => {
        cy.fixture("user").then((user) => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
            cy.get('input[data-test="login-button"]').click()
            cy.get('#react-burger-menu-btn').click()
            cy.get('#react-burger-cross-btn').click()
        })
    });
    it('View all content', () => {
        cy.fixture("user").then((user) => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
            cy.get('input[data-test="login-button"]').click()

            cy.get('.inventory_item_name').contains('Sauce Labs Backpack').click()
            cy.get('#back-to-products').click()

            cy.get('.inventory_item_name').contains('Sauce Labs Bike Light').click()
            cy.get('#back-to-products').click()

            cy.get('.inventory_item_name').contains('Sauce Labs Bolt T-Shirt').click()
            cy.get('#back-to-products').click()

            cy.get('.inventory_item_name').contains('Sauce Labs Fleece Jacket').click()
            cy.get('#back-to-products').click()

            cy.get('.inventory_item_name').contains('Sauce Labs Onesie').click()
            cy.get('#back-to-products').click()

            cy.get('.inventory_item_name').contains('Test.allTheThings() T-Shirt (Red)').click()
            cy.get('#back-to-products').click()

        })
    });
    it('check the dropdown and select functions', () => {
        cy.fixture("user").then((user) => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
            cy.get('input[data-test="login-button"]').click()
            cy.get('.product_sort_container')
            cy.get('[data-test="product-sort-container"]').select("Price (low to high)")
            cy.get('[data-test="product-sort-container"]').select("Name (A to Z)")
            cy.get('[data-test="product-sort-container"]').select("Name (A to Z)")
            cy.get('[data-test="product-sort-container"]').select("Price (high to low)")
        })
    });
    it('check add to cart and remove', () => {
        cy.fixture("user").then((user) => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
            cy.get('input[data-test="login-button"]').click()
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
            cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
            cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
            cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
            cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
            cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()

            cy.get('[data-test="remove-sauce-labs-backpack"]').click()
            cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
            cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
            cy.get('[data-test="remove-sauce-labs-fleece-jacket"]').click()
            cy.get('[data-test="remove-sauce-labs-onesie"]').click()
            cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()
        })
    });
    it('Procces Checkout one of the items', () => {
        cy.fixture("user").then((user) => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
            cy.get('input[data-test="login-button"]').click()
            cy.contains('Sauce Labs Backpack').click()
            cy.get('[data-test="add-to-cart"]').click()

            cy.get('[data-test="shopping-cart-link"]').click()

            cy.get('[data-test="checkout"]').click()
            cy.get('[data-test="firstName"]').type('muhamad')
            cy.get('[data-test="lastName"]').type('iqbal')
            cy.get('[data-test="postalCode"]').type('082125740371')

            cy.get('[data-test="continue"]').click()
            cy.get(".summary_total_label").should('have.text', 'Total: $32.39')

            cy.get('[data-test="finish"]').click()
        })
    });
    it('Logout', () => {
        cy.fixture("user").then((user) => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
            cy.get('input[data-test="login-button"]').click()
            cy.get('#react-burger-menu-btn').click()
            cy.get('[data-test="logout-sidebar-link"]').click()
        })
    });
});
