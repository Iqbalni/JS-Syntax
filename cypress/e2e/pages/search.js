import SearchPage from './search.page';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("visit the website login page webappsecurity", () => {
    SearchPage.visit();
});

When("the user enters a valid username and password", () => {
   SearchPage.fillUsername();
   SearchPage.fillPassword();
   SearchPage.SIGN_IN();
});

Then("find the search button", () => {
 SearchPage.SEARCHFEATURE()
});
