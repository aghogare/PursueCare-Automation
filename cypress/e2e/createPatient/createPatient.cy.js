///<reference types = 'cypress'/>
import AddPatient from "../../pages/createPatient/createPatient";
const addPatient = new AddPatient();
import LoginPageDefualtValidation from "../../pages/loginPage/loginPageDefaultValidation"
const urls = require("../../fixtures/urls.json");
const environment = Cypress.env('url') || 'dev';
const loginPageValidation = new LoginPageDefualtValidation()

describe("Create New Patient and test functionalities of created Patient", () => {

  // before(function()  {
  //   cy.login();});
  beforeEach(function () {

    cy.fixture("createPatient/createPatient.json").as("addPatients");
    cy.fixture("createPatient/createPatient1.json").as("patients");
    cy.login()
  });


  it("Validate adding new patient  and search patient (by Name and Date range)", function () {
 
 //const fname=addPatient.generateFirstName()  
 const fname=this.patients.firstName
    addPatient
      
      .accessPatientMenu()
     // .enterEmail(this.addPatient.patientEmail)
     .enterEmailID()
      addPatient.selectTimeZone()
     // .enterFirstName();

    //.enterFirstName1(this.addPatient.firstName)
    addPatient.enterMiddleName()
    // .enterMiddleName1(this.addPatient.middleName)
   // addPatient
     // .enterLastName()
      // .enterLastName1(this.addPatient.lastName)
     addPatient
      .enterDOB(this.addPatients.DOB)
      .selectSex()
      .selectState()
      .enterZipCode(this.addPatients.zipCode)
      .enterPhoneNumber(this.addPatients.patientPhone)
      .clickOnSaveButton()
      .patientSearch()
   addPatient.searchByDaterange();
  });


  it("Validate viewPatient and edit Patient.", function () {
  //  const fname=addPatient.generateFirstName()  
    const fname=this.patients.firstName
    addPatient.patientMenu().editPatient().viewPatient();
  });


  it("Validate deletePatient.", function () {
    const email=this.patients.email
     const fname=this.patients.firstName
     const lname=this.patients.lastName
   
    addPatient.useRecentlyStoredDetailsAndDelete()
  });

  // it.skip("Validate Duplicate patient creation", function () {
  //   addPatient
  //     .accessPatientMenu()
  //     .enterEmail(this.addPatients.patientEmail)
  //     .selectTimeZone()

  //     .enterFirstName1(this.addPatients.firstName);
  //   addPatient
  //     .enterMiddleName1(this.addPatients.middleName)
  //     .enterLastName1(this.addPatients.lastName)
  //     .enterDOB(this.addPatients.DOB)
  //     .selectSex()
  //     .selectState()
  //     .enterZipCode(this.addPatients.zipCode)
  //     .enterPhoneNumber(this.addPatients.patientPhone)
  //     .clickOnSaveButton()
  //     .duplicatePatient();
  // });

  afterEach(() => {
    Cypress.session.clearAllSavedSessions();
  });
});
