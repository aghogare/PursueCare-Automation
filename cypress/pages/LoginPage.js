import CommonUtilities from "../support/commonUtilities";

const utils = new CommonUtilities();
// class LoginPage {
//   Login_Page_Default_Validations;

//   emailID = '#mat-input-0'//"input[name='email']";
//   password = '#mat-input-1'
//   signInButton = "button[type='submit']"//'.container-login100-form-btn > .mat-focus-indicator'

  // launchUrl(baseUrl) {
  //  cy.visit(baseUrl)
  //  // cy.visit(Cypress.env(baseUrl));
  //   return this;
  // }
  // enterEmail(email) {
  //   cy.log("Entering Username : " + email);
  //   utils.enterValue(this.emailID, email);
  //   return this;
  // }
  // enterPassword(password) {
  //   cy.log("Entering password");
  //   utils.enterValue(this.password, password);
  //   return this;
  // }
  // clickLoginButton() {
  //   cy.log("Clicking continue button ...");
  //  // utils.clickElement(this.signInButton);
  //   cy.get(this.signInButton).click({force:true})
    
  //   return this;
  // }
  const loginPage = {
    elements: {
      getUserName: () => cy.get("#mat-input-0"),
      getPassword: () => cy.get("#mat-input-1"),
      getLoginButton: () => cy.get("button[type='submit']")
    },
  launchUrl: (baseUrl) => {
    cy.log("Launching an application URL");
    cy.visit(Cypress.env("baseUrl"));
   // cy.visit(baseUrl);
    return this;
  },

  enterEmail: (email) => {
    cy.log("Entering Username : " + email);
    loginPage.elements.getUserName().type(email, { force: true });
    return this;
  },

  enterPassword: (password) => {
    cy.log("Entering password");
    loginPage.elements.getPassword().type(password);
    return this;
  },

  clickLoginButton: () => {
    cy.log("Clicking continue button ...");
    loginPage.elements.getLoginButton().click();
    return this;
  }
};
module.exports = loginPage;  
//export default LoginPage;
