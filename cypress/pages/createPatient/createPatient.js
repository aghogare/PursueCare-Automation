import CommonUtilities from "../../support/commonUtilities"
const utilities = new CommonUtilities;
const urls = require("../../fixtures/urls.json")
const patient = require("../../fixtures/createPatient/createPateint.json")
const environment = Cypress.env('url');
const baseUrl = urls[environment];

class AddPatient {
menuPatient='.list > :nth-child(5) > .ng-star-inserted'
btnAddPatient=':nth-child(1) > .icon-button-demo > .mat-focus-indicator > .mat-button-wrapper'
patientEmail='.register-form > :nth-child(3) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'//'#mat-input-5'
selectTimeZone=':nth-child(3) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
firstName=':nth-child(4) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
lastName=':nth-child(5) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
legalSex=':nth-child(6) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
patientPhone=':nth-child(10) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
btnPatientSave='.mat-dialog-actions > .mat-primary'
searchPatient='#search'
datePickerIcon='.mat-datepicker-toggle > .mat-focus-indicator'
dateRangePick='.mat-calendar-period-button > .mat-button-wrapper'
timeZone='#mat-option-225 > .mat-option-text'


createPatient(){

    utilities.clickElement(this.menuPatient, 6000);
    utilities.clickElement(this.btnAddPatient, 7000);
    // utilities.selectDropDownValue(this.patientDD("prefix"), "Mr.");
    // utilities.log("To Enter Patients First Name");
    // utilities.enterValue(this.patient("firstName"), firstName);
    // utilities.enterValue(this.patient("middleName"), "Jack");
    // utilities.enterValue(this.patient("lastName"), lastName);   
    return this;
}
}
export default AddPatient;
