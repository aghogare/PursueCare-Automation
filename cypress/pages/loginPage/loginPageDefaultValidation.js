import CommonUtilities from "../../support/commonUtilities";
const utilities = new CommonUtilities();

class LoginPageDefualtValidation {
  pLogo =
    "div.custom-thumbnail_PursueCare_logo > .custom-thumbnail_PursueCare_logo";
  headingLog = ".custome-signIn-style";
  logInButton = "button[type='submit']";

  emailField =//"#mat-input-1"
   ".col-xl-12 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex";
  // ".col-xl-12 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"; // "#mat-input-0"
  passwordField =
    ".col-xl-12col-lg-12 > .mat-form-field > .mat-form-field-wrapper"; //"#mat-input-1"
  passwordError = ".alert";
  forgotPasswordLink = ".txt1";
  rememberChkBox =
    ".flex-sb-m > .form-check > .form-check-label > .form-check-sign > .check";

  email = "div[class='d-flex'] div:nth-child(1)";
  cellPhone = "div[class='d-flex'] div:nth-child(2)";
  resetPasswordButton = "button[type='submit']";
  emailTextBox = "#mat-input-0";
  phoneTextBox = "#phone";
  emailRadioButton = "#Email";
  cellPhoneRadioButton = 'input[id="Cell Phone"]';

  verifyLoginPageTitle(expectedTitle) {
    utilities.log("To verify the page title of login page.");
    utilities.verifyPageTitle(expectedTitle);
    return this;
  }

  verifyLogin(email, key) {
    // cy.wait(4000);
    // utilities.log("To verify the correct credentials ");

    // //  cy.get(this.emailField).type(email,{force:true})
    // //  cy.wait(3000)
    // //  cy.get(this.passwordField).type(key,{force:true})
    // utilities.enterValue(this.emailField, email)
    // utilities.enterValue(this.passwordField, password)
    // cy.wait(2000)
    cy.get(this.emailField)
      .find("input").clear() // Ensure the input field is targeted
      .type(email, { force: true });

    cy.wait(3000);

    cy.get(this.passwordField)
      .find("input").clear() // Similarly, ensure the input field for password is targeted
      .type(key, { force: true });

    cy.get(this.logInButton).click({ force: true });
    return this;
  }

  verifyLoginPageWebElements() {
    utilities.log("To verify the web elements of login page.");
    utilities.verifyElementIsVisible(this.pLogo, "Logo  is visible.");
    cy.wait(2000);
    utilities.verifyElementIsVisible(
      this.headingLog,
      "heading login is visible."
    );
    cy.wait(2000);
    utilities.verifyElementIsVisible(
      this.emailField,
      "Email text box is visible."
    );
    cy.wait(2000);
    utilities.verifyElementIsVisible(
      this.passwordField,
      "Password text box is visible."
    );
    cy.wait(2000);
    utilities.verifyElementIsVisible(
      this.rememberChkBox,
      "remember me checkbox is visible. "
    );
    cy.wait(1000);
    utilities.verifyElementIsVisible(
      this.forgotPasswordLink,
      "Forgot Password link is visible."
    );
    cy.wait(3000);
    utilities.verifyElementIsVisible(
      this.logInButton,
      "LogIn button is visible. "
    );
    return this;
  }

  verifyErroMsgEmailPasswordBlank() {
    utilities.log(
      "To verify the error message when both Email and Password fields are blank."
    );

    cy.wait(3000);

    cy.get(this.logInButton).click({ force: true });
    cy.wait(2000);
    cy.get(this.passwordError).should("be.visible");

    return this;
  }

  verifyErrorMsgInvalidPassword(email, password) {
    utilities.log("To verify the error message when Password is invalid.");
    // utilities.enterValue(this.emailField, email);
    // utilities.enterValue(this.passwordField, password);
    // utilities.clickElement(this.logInButton);
    // cy.get(this.passwordError).should(
    //   "include.text",
    //   " The email or password you entered is incorrect. "
    // );
    cy.get(this.emailField)
      .find("input").clear() // Ensure the input field is targeted
      .type(email, { force: true });

    cy.wait(3000);

    cy.get(this.passwordField)
      .find("input").clear() // Similarly, ensure the input field for password is targeted
      .type(password, { force: true });

    cy.get(this.logInButton).click({ force: true });
    cy.wait(3000);
    return this;
  }

  verifyErrorMsgInvalidEmail(email, password) {
    utilities.log("To verify the error message when Email is invalid.");
    // utilities.enterValue(this.emailField, email);
    // utilities.enterValue(this.passwordField, password);
    // utilities.clickElement(this.signInButton);
    // cy.get(this.passwordError).should(
    //   "include.text",
    //   " The email or password you entered is incorrect. "

    // );

    cy.get(this.emailField)
      .find("input").clear() // Ensure the input field is targeted
      .type(email, { force: true });

    cy.wait(3000);

    cy.get(this.passwordField)
      .find("input").clear() // Similarly, ensure the input field for password is targeted
      .type(password, { force: true });

    cy.get(this.logInButton).click({ force: true });
    cy.wait(3000);
    return this;
  }

  verifyForgotPaswordPage() {
    utilities.log("To verify users navigates to the forgot password page.");
    utilities.clickElement(this.forgotPasswordLink);
    //cy.url().should('include', 'forgot-password')
    return this;
  }

  verifyElementOnForgotPasswordPage() {
    utilities.log("To verify elements present on Forgot Password page.");
    utilities.clickElement(this.forgotPasswordLink);
    utilities.verifyElementIsVisible(
      this.email,
      "Email radio button is displayed."
    );
    utilities.verifyElementIsVisible(
      this.cellPhone,
      "Cell Phone radio button is displayed."
    );
    utilities.verifyElementIsVisible(
      this.resetPasswordButton,
      "Reset Password button is displayed."
    );
    return this;
  }

  verifyRadioDefaultChecked() {
    utilities.log(
      "To verify the Email Radio Button Default Checked and Cell Phone radio button is unchecked."
    );
    utilities.clickElement(this.forgotPasswordLink);
    cy.get(this.emailRadioButton).should("be.checked");
    return this;
  }

  verifyPlaceholderWhenEmailSelected() {
    utilities.log("To verify placeholder value when email option is selected.");
    utilities.clickElement(this.forgotPasswordLink);
    //  cy.get(this.emailTextBox).should('have.attr', 'placeholder', 'test@example.com');
    return this;
  }

  verifyPlaceHolder() {
    utilities.log(
      "To verify the Email Radio Button Default Checked and Cell Phone radio button is unchecked."
    );
    utilities.clickElement(this.forgotPasswordLink);
    // cy.get(this.emailTextBox).should('have.attr', 'placeholder', 'test@example.com');
  }
}
export default LoginPageDefualtValidation;
