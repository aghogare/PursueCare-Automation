import LoginPageDefualtValidation from "../../pages/loginPage/loginPageDefaultValidation"
const urls = require("../../fixtures/urls.json");
const environment = Cypress.env('url') || 'dev';
const loginPageValidation = new LoginPageDefualtValidation()

describe('Default Validations of Login page', () => {
    beforeEach(() => {
       // cy.visit(urls[environment]);
        cy.visit("https://pcareqaproviderportal.azurewebsites.net/authentication/signin")
        cy.fixture('loginPage/loginPageDefaultValidation.json').as('loginPageValidations')
        cy.fixture("credentials.json").as("credentials")
    })

    it.skip('Verify the title of the Login Page', function () {
        loginPageValidation.verifyLoginPageTitle(this.loginPageValidations.loginPageTitle);
    })

    it.only('Verify the Web Elements are present on login page.', function () {
        loginPageValidation.verifyLoginPageWebElements()
    })

    it.only('Verify the error message when Both Email and Password is invalid.', function () {
        loginPageValidation.verifyErroMsgEmailPasswordBlank()
    })

    it('Verify the error message when invalid email is entered', function(){
        loginPageValidation.verifyErrorMsgInvalidEmail(this.loginPageValidations.invalidEmail, this.loginPageValidations.validPassword)
    })

    it('Verify the error message when invalid password is entered', function(){
        loginPageValidation.verifyErrorMsgInvalidPassword(this.loginPageValidations.validEmail, this.loginPageValidations.invalidPassword)
    })



    it('Verify user navigates to Forgot Password page successfully.', function(){
        loginPageValidation.verifyForgotPaswordPage() 
    })

    it('Verify the webelements are present on Forgot Password page.', function(){
        loginPageValidation.verifyElementOnForgotPasswordPage()
    })

    it('Verify Default radio button selection on Forgot Password page.',function(){
        loginPageValidation.verifyRadioDefaultChecked()
    })

    it.only("Verify the Login with valid Credentials.", function () {
        loginPageValidation.verifyLogin(
          this.credentials.email,
          this.credentials.key
        );
      })
    afterEach(() => {
        Cypress.session.clearAllSavedSessions();
      });
  
 })