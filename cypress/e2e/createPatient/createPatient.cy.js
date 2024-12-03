///<reference types = 'cypress'/>
import AddPatient from "../../pages/createPatient/createPatient";
const addPatient = new AddPatient();

describe("Add Patient", () => {
  beforeEach(function () {
    cy.fixture("createPatient/createPatient.json").as("addPatient");
    cy.login();
  });

  it("Validate addition and search patient", function () {
    addPatient

      .accessPatientMenu()
      .enterEmail(this.addPatient.patientEmail)
      .selectTimeZone()

      .enterFirstName1(this.addPatient.firstName);
    addPatient
      .enterMiddleName1(this.addPatient.middleName)
      .enterLastName1(this.addPatient.lastName)
      .enterDOB(this.addPatient.DOB)
      .selectSex()
      .selectState()
      .enterZipCode(this.addPatient.zipCode)
      .enterPhoneNumber(this.addPatient.patientPhone)
      .clickOnSaveButton()
      .patientSearch();
    addPatient.searchByDaterange();
  });

  it("Validate created patient(viewPatient) and edit Patient.", function () {
    addPatient
      .accessPatientMenu()
      .enterEmail(this.addPatient.patientEmail)
      .selectTimeZone()

      .enterFirstName1(this.addPatient.firstName);
    addPatient
      .enterMiddleName1(this.addPatient.middleName)
      .enterLastName1(this.addPatient.lastName)
      .enterDOB(this.addPatient.DOB)
      .selectSex()
      .selectState()
      .enterZipCode(this.addPatient.zipCode)
      .enterPhoneNumber(this.addPatient.patientPhone)
      .clickOnSaveButton()
      .viewPatient()
      .editPatient();
  });

  afterEach(() => {
    Cypress.session.clearAllSavedSessions();
  });
});
