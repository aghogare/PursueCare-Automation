// import LoginPage from '../pages/LoginPage'
// const loginPage = new LoginPage();

const loginPage = require('../pages/LoginPage')
const credentials = require('../fixtures/credentials.json');
const urls = require('../fixtures/urls.json');

Cypress.Commands.add('login', () => {
  cy.session('login', () => {
    const environment = Cypress.env('url'); 
    const { email, password } = credentials[environment]|| { email: 'nani99@pursuecare.com', password: 'Akshay@123' };
    const baseUrl = urls[environment]
    loginPage.launchUrl(baseUrl);
    loginPage.enterEmail(email);
    loginPage.enterPassword(password);
    loginPage.clickLoginButton();
          
 });
});
//  cy.session(
//   [userName, key],
//   () => {
//     loginPage
//       .launchURL()
//       .enterEmail(userName)
//       .enterPassword(key)
//       .clickLoginButton();
//   },
//   {
//     cacheAcrossSpecs: true,
//   }
// );
// });

Cypress.Commands.add('clearSession', () => {
  cy.clearAllLocalStorage();
  cy.clearCookies();
});



// Cypress.Commands.add("login", (userName, key) => {
//   cy.session(
//     [userName, key],
//     () => {
//       loginPage
//         .launchURL()
//         .enterEmail(userName)
//         .enterPassword(key)
//         .clickLoginButton();
//     },
//     {
//       cacheAcrossSpecs: true,
//     }
//   );
// });

// Cypress.Commands.add("clearSession", () => {
//   cy.clearAllLocalStorage();
//   cy.clearCookies();
// });

// Cypress.Commands.add('killLoader', () => {
 
//   cy.get('.p-5').then(loader => {
//     if (Cypress.dom.isVisible(loader)) {
     
//       cy.get('.p-5').should('not.be.visible', { timeout: 4000 }); 
//     }
//   });
// });