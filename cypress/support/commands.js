const loginPage = require('../pages/LoginPage');
const credentials = require('../fixtures/credentials.json');
const urls = require('../fixtures/urls.json');

Cypress.Commands.add('login', () => {
  cy.session('login', () => {
    const environment = Cypress.env('url'); 
    const { email, password } = credentials[environment];
    const baseUrl = urls[environment];
    loginPage.launchUrl(baseUrl);
    loginPage.enterEmail(email);
    loginPage.enterPassword(password);
    loginPage.clickLoginButton();
  });
});

Cypress.Commands.add('clearSession', () => {
  cy.clearAllLocalStorage();
  cy.clearCookies();
});

 