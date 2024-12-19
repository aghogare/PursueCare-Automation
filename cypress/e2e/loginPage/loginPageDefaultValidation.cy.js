import LoginPageDefualtValidation from "../../pages/loginPage/loginPageDefaultValidation"
const urls = require("../../fixtures/urls.json");
const environment = Cypress.env('url') || 'dev';
const loginPageValidation = new LoginPageDefualtValidation()

describe('Default Validations of Login page', () => {
    before(()=>{cy.visit("https://pcareqaproviderportal.azurewebsites.net/authentication/signin")} 
    
)
    
    beforeEach(() => {
       // cy.visit(urls[environment]);
       
        cy.fixture('loginPage/loginPageDefaultValidation.json').as('loginPageValidations')
        cy.fixture("credentials.json").as("credentials")
    })

    it.skip('Verify the title of the Login Page', function () {
        loginPageValidation.verifyLoginPageTitle(this.loginPageValidations.loginPageTitle);
    })

    it('Verify the Web Elements are present on login page.', function () {
        loginPageValidation.verifyLoginPageWebElements()
    })

    it.only('Verify the error message when Both Email and Password fields are blank.', function () {
        loginPageValidation.verifyErroMsgEmailPasswordBlank()
    })

    it.only('Verify the error message when invalid email is entered', function(){
        loginPageValidation.verifyErrorMsgInvalidEmail(this.loginPageValidations.invalidEmail, this.loginPageValidations.validPassword)
   
    })

    it.only('Verify the error message when invalid password is entered', function(){
        loginPageValidation.verifyErrorMsgInvalidPassword(this.loginPageValidations.validEmail, this.loginPageValidations.invalidPassword)
        Cypress.session.clearAllSavedSessions();
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
        // loginPageValidation.verifyLogin(
        //   this.credentials.email,
        //   this.credentials.key
        // );

        loginPageValidation.verifyLogin(this.loginPageValidations.validEmail,this.loginPageValidations.validPassword)
      })
    afterEach(() => {
        Cypress.session.clearAllSavedSessions();
      });
  
 })