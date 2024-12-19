import CommonUtilities from "../../support/commonUtilities";
const utilities = new CommonUtilities();
const urls = require("../../fixtures/urls.json");
const patient = require("../../fixtures/createPatient/createPatient.json");
const environment = Cypress.env("url");
const baseUrl = urls[environment];

class AddPatient {
  menuPatient = ".list > :nth-child(5) > .ng-star-inserted";
  btnAddPatient =
    ":nth-child(1) > .icon-button-demo > .mat-focus-indicator > .mat-button-wrapper";
  patientEmail =
    ".register-form > :nth-child(3) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"; //'#mat-input-5'
  dropdownTimeZone =
    ":nth-child(3) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix";
  firstName =
    ":nth-child(4) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix";

  middleName =
    ":nth-child(4) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix";
  lastName =
    ":nth-child(5) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix";
  DOB =
    ":nth-child(6) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix";
  legalSex =
    ":nth-child(6) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix";
  patientPhone =
    ":nth-child(10) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix";
  btnPatientSave = ".mat-dialog-actions > .mat-primary";
  searchPatient = "#search";
  datePickerIcon = ".mat-datepicker-toggle > .mat-focus-indicator";
  startDate = "#mat-date-range-input-0"; //new Date();//".nth-child(1) > .[data-mat-col='1']>.mat-calendar-body-cell-content"
  endDate = ".mat-end-date"; //new Date();//".nth-child(4) > .[data-mat-col='2']>.mat-calendar-body-cell-content"
  dateRangePick =
    ".dropdown.m-l-10 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix";
  dateSeperator = ".mat-date-range-input-separator";
  timeZone = "#mat-option-225 > .mat-option-text";
  timeZone1 =
    ":nth-child(3) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix";
  patientState =
    ":nth-child(9) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex";
  patientZipcode =
    ":nth-child(10) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper";
  select3Dots = ':nth-child(1) > .cdk-column-actions > .cutome-position-action-panel > .header-dropdown > .pl-3 > [href="#"] > .material-icons'//'[href="#"] > .material-icons'; //':nth-child(2) > .cdk-column-actions > .cutome-position-action-panel > .header-dropdown > .pl-3 > [href="#"] > .material-icons'
 
 
  optionView = ":nth-child(6) > .cutome-cursor-pointer";//cy.get(':nth-child(6) > .cutome-cursor-pointer')
  //  ":nth-child(2) > .cdk-column-actions > .cutome-position-action-panel > .header-dropdown > .pl-3 > .dropdown-menu >:nth-child(6) > .cutome-cursor-pointer";
  optionEdit = ":nth-child(7) > .cutome-cursor-pointer"; //':nth-child(2) > .cdk-column-actions > .cutome-position-action-panel > .header-dropdown > .pl-3 > .dropdown-menu >:nth-child(7) > .cutome-cursor-pointer'
  closePatient =
    ".addContainer > :nth-child(1) > .mat-focus-indicator > .mat-button-wrapper > .mat-icon";

    patientMenu(){
      cy.wait(5000);
      cy.get(this.menuPatient).click({ force: true });

      return this;
    }

  accessPatientMenu() {
    cy.wait(5000);
    cy.get(this.menuPatient).click({ force: true });
    cy.wait(5000);
    cy.get(this.btnAddPatient).click({ force: true });

    return this;
  }

  
  viewPatient(fname) {
    utilities.log("To View Patient");
  
    cy.wait(2000);
    // Step 1: Search for the patient using their first name
    cy.get(this.searchPatient).clear().type(fname); // Search using the patient's name
    cy.wait(2000);
  
    // Step 2: Select the first matching result from the table
    cy.get('table[mat-table] tbody[role="rowgroup"]') 
      .contains(fname) // Find the first occurrence of the patient's name
      .first({force:true}) // Ensure only the first match is selected
      .click(); // Select this patient
  cy.wait(2000)
    // Step 3: View patient details
    cy.get(this.select3Dots).click();
    cy.wait(4000);
    cy.get(this.optionView).eq(0).click({ force: true });
  //  cy.get(this.optionView).click({ force: true });
    cy.wait(4000);
  
    // Step 4: Close the patient view
    cy.get(this.closePatient).click();
  
    return this;
  }
  

  patientSearch(firstName) {
    cy.wait(2000);
   // const firstName= this.enterFirstName();
    cy.wait(3000)
    cy.get(this.searchPatient).type(firstName);
    cy.wait(2000);
    cy.get(this.searchPatient).clear();
  }

  duplicatePatient(){
    cy.get(this.patientEmail).scrollIntoView({force:true})
    cy.wait(3000)    
    cy.get(this.closePatient).click()
    return this;
  }

    searchByDaterange() {
      const today = new Date();
      const formattedDate = today.toLocaleDateString('en-US'); // Formats date as MM/DD/YYYY
    
      cy.wait(3000);
    
      cy.get(this.startDate).type(formattedDate);
    
      cy.get(this.endDate).type(formattedDate).click({ force: true });
      cy.wait(2000);
      cy.get(this.dateRangePick).dblclick({ force: true });
      cy.wait(2000)
      //cy.get('.dropdown.m-l-10 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').clear();
      //cy.wait(2000)
      return this;
    }
    
  
  editPatient(fname) {
    utilities.log("Edit Patient Details.");
    cy.wait(2000);
   /// const fname=this.enterFirstName()
   // const firstName= this.generateFirstName();
    cy.get(this.searchPatient).clear().type(fname);
    cy.wait(2000);

    cy.get('table[mat-table] tbody[role="rowgroup"]') // Selector for the patient search results list
    .should('contain.text', fname) // Confirm the search results contain the patient's name
    .first({force:true}) // Pick the first result (or refine based on criteria)
    .click({force:true}); // Select the patient to edit

    cy.get(this.select3Dots).click();
    cy.wait(4000);
    cy.get(this.optionEdit).eq(0).click({force:true});
    cy.wait(2000);
    utilities.log("To Select Sex.");
    cy.get('mat-select[formcontrolname="gender"]').click();
    cy.get("mat-option").eq(0).click();
    cy.wait(3000);
   // cy.wait(3000);
    utilities.log("To select Save Button.");
    cy.get(this.btnPatientSave).scrollIntoView();
    cy.wait(2000);
    cy.get(this.btnPatientSave).click({ force: true });
    // cy.wait(3000);
    // cy.get(this.closePatient).click();
    return this;
  }

  enterEmail(emailID) {
    utilities.log("To enter Personal email.");
    cy.get(this.patientEmail).scrollIntoView().type(emailID);
    cy.wait(2000);
    return this;
  }

  enterFirstName() {
    utilities.log("To Enter Patients First Name");
    const firstName = this.generateFirstName();
    // utilities.enterValue(this.firstName, firstName);
    cy.get(this.firstName).type(firstName);
   cy.writeFile('cypress/fixtures/createPatient/createPatient1.json', { firstName });

    cy.wait(2000);
    return firstName;
  }

  enterMiddleName() {
    utilities.log("To Enter Patients Middle Name");
    const middleName = this.generateFirstName();
    cy.get(this.middleName).type(middleName);
    cy.wait(3000);
    return middleName;
  }

  enterLastName() {
    utilities.log("To Enter Patients Last Name");
    const lastName = this.generateLastName();
    cy.get(this.lastName).type(lastName);

    cy.readFile('cypress/fixtures/createPatient/createPatient1.json').then((data) => {
      data.lastName = lastName; // Add the last name to the existing data
      cy.writeFile('cypress/fixtures/createPatient/createPatient1.json', data); // Write the updated data back to the file
    });
    cy.wait(3000);
    return lastName;
  }

  enterFirstName1(firstName) {
    utilities.log("To Enter Patients First Name");
    //const firstName = this.generateFirstName();

    cy.get(this.firstName).type(firstName);
    cy.wait(2000);
    return firstName;
  }

  enterMiddleName1(middleName) {
    utilities.log("To Enter Patients Middle Name");
    //const firstName = this.generateFirstName();
    cy.get(this.middleName).type(middleName);

    cy.wait(3000);
    return this;
  }
  enterLastName1(lastName) {
    utilities.log("To Enter Patients Last Name");
    //const lastName = this.generateLastName();
    cy.get(this.lastName).type(lastName);
    cy.wait(3000);
    return this;
  }

  generateFirstName() {
    const getRandomElement = (array) =>
      array[Math.floor(Math.random() * array.length)];
    const firstNames = [
      "John",
      "Michael",
      "David",
      "James",
      "Robert",
      "William",
 
     
      "Patricia",
      
      "Elizabeth",
      "Barbara",
      "Susan",
      "Jessica",
    ];
    const firstName = getRandomElement(firstNames);
    const fName = `${firstName}`;
    return fName;
  }

  generateEmailID(firstName, lastName) {
    const domains = ["example.com", "testmail.com", "mydomain.org"]; // List of possible domains
    const domain = domains[Math.floor(Math.random() * domains.length)]; // Randomly select a domain
    // Combine the first name and last name to create a more descriptive email ID
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}Automation@${domain}`;
  }
  
  enterEmailID() {
    utilities.log("To Enter Patient's Email ID");
    const firstName = this.enterFirstName(); 
    const lastName=this.enterLastName()
    const emailID = this.generateEmailID(firstName,lastName);
    cy.get(this.patientEmail).type(emailID); 
    cy.wait(2000);
    return emailID; 
  }

  generateLastName() {
    const getRandomElement = (array) =>
      array[Math.floor(Math.random() * array.length)];
    const lastNames = [
      "Smith",
      "Johnson",
      "Williams",
      "Jones",
      "Brown",
      "Davis",
      "Miller",
      "Wilson",
    ];
    const lastName = getRandomElement(lastNames);
    const lName = `${lastName}`;
    return lName;
  }

  enterDOB(dob) {
    utilities.log("To Enter patient DOB.");
    cy.get("#mat-input-10").type("12/09/2023");

    cy.wait(3000);
    return this;
  }

  selectSex() {
    utilities.log("To Select Sex.");

    cy.get('mat-select[formcontrolname="gender"]').click();
    cy.get("mat-option").eq(1).click();

    cy.wait(3000);
    return this;
  }

  selectState() {
    utilities.log("To Select Sex.");

    cy.get(this.patientState).click();
    cy.get("mat-option").eq(4).click();

    cy.wait(3000);
    return this;
  }

  selectTimeZone() {
    utilities.log("To Select Timezone.");

    cy.get('mat-select[formcontrolname="timezoneid"]').click();
    cy.get("mat-option").eq(2).click(); // Select the first option

    cy.wait(3000);
    return this;
  }

  enterPhoneNumber(phoneNumber) {
    utilities.log("To enter Phone Number");

    cy.get(this.patientPhone).scrollIntoView().type(phoneNumber);

    return this;
  }

  enterZipCode(zipcode) {
    utilities.log("To enter Phone Number");
    cy.get(this.patientZipcode).scrollIntoView().type(zipcode);
    return this;
  }

  clickOnSaveButton() {
    cy.wait(3000);
    utilities.log("To select Save Button.");
    cy.get(this.btnPatientSave).scrollIntoView();
    cy.wait(2000);
    cy.get(this.btnPatientSave).click({ force: true });
    cy.wait(3000);
    return this;
  }
}
export default AddPatient;
