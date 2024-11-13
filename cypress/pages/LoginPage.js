const loginPage = {
    elements: {
      getUserName: () => cy.get("input[placeholder='Email']"),
      getPassword: () => cy.get("input[placeholder='Password']"),
      getLoginButton: () => cy.get("button[type='submit']")
    },
  
    launchUrl: (baseUrl) => {
      cy.log("Launching an application URL");
      cy.visit(baseUrl);
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