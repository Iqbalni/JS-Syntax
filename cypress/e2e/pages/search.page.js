const URL = "http://zero.webappsecurity.com/login.html";
const USERNAME = '#user_login';
const PASSWORD = '#user_password';
const SIGN_IN = '[type="submit"]';
const SEARCHFEATURE = '#searchTerm'

class SearchPage {
    static visit() {
        cy.visit(URL)
    }

    static fillUsername(username) {
        cy.get(USERNAME).type('username')
    }
    static fillPassword(password) {
        cy.get(PASSWORD).type('password')
    }

    static SIGN_IN() {
        cy.get(SIGN_IN).click()
    }
    static SEARCHFEATURE() {
        cy.get(SEARCHFEATURE).click()
    }
}
 
export default SearchPage;