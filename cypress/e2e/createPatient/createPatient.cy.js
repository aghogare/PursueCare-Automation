///<reference types = 'cypress'/>
import AddPatient from "../../pages/createPatient/createPatient";
const addPatient = new AddPatient();

describe("Create New Patient and test functionalities of created Patient", () => {
  beforeEach(function () {
    cy.fixture("createPatient/createPatient.json").as("addPatients");
    cy.login();
  });


  it("Validate adding new patient  and search patient (by Name and Date range)", function () {
 
 const fname=addPatient.generateFirstName()  
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
      .patientSearch(fname)
   addPatient.searchByDaterange();
  });


  it("Validate viewPatient and edit Patient.", function () {
    const fname=addPatient.generateFirstName()  
    addPatient.patientMenu().viewPatient(fname).editPatient(fname);
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
