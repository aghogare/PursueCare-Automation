import CommonUtilities from "../../support/commonUtilities";
const utilities = new CommonUtilities();
const urls = require("../../fixtures/urls.json");
const patient = require("../../fixtures/appointment/appointment.json");
const environment = Cypress.env("url");
const baseUrl = urls[environment];

class appointment {
  tabAppointment = ":nth-child(4) > .ng-star-inserted";
  menuDashboard = ".list > :nth-child(2) > .ng-star-inserted";
  btnScheduleApptmt = ".m-b-25 > .mat-raised-button";//'.col-3 > .mdc-button > .mdc-button__label'//
  DDCategory =
    ":nth-child(1) > .col-xl-12 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix";
  DDAptType =//':nth-child(2) > .col-xl-12 > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix'
  //cy.get(':nth-child(2) > .col-xl-12 > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix')
    ":nth-child(2) > .col-xl-12 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix";
  DDProvider =
    ":nth-child(3) > .col-xl-12 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix";
  DDCaseManager =
    ":nth-child(4) > .col-xl-12 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix";
  DDPatientAccess =
    ":nth-child(5) > .col-xl-12 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix";
  DDHost =
    ":nth-child(6) > .col-xl-12 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix";
  DDPateintName =
    ":nth-child(7) > .col-xl-12 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix";
    //cy.get(':nth-child(2) > .col-xl-12 > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix')
    DDAppointmentDate =
    ":nth-child(8) > .col-xl-12 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix";
  availableTimeSlot = ":nth-child(12) > .mat-chip"; //9:45-10 am
  timeSlot230 = ":nth-child(19) > .mat-chip"; //2:30-300pm
  timeSlot300 = ":nth-child(20) > .mat-chip";
  timeslot700 = ".mat-chip-list-wrapper > :nth-child(1) > .mat-chip";
  timeslot715 = ":nth-child(2) > .mat-chip";
  timeslot730 = ":nth-child(3) > .mat-chip";
  timeslot745 = ":nth-child(4) > .mat-chip";
  timeslot930 = ":nth-child(11) > .mat-chip";
  timeslot1030 = ":nth-child(14) > .mat-chip";
  adhocStartTime =
    ":nth-child(12) > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix";
  adhocEndTime =
    ":nth-child(12) > :nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix";
  btnApptmtSave = ".example-button-row > .mat-primary";
  btnApptmtCancel = ".mat-warn";
  iconZoom = //'.col-xs-12 > .card > .tableBody > .table-responsive > .mat-table > tbody > .mat-row > .cdk-column-actions > table > [style="padding: 0px !important; border: 0px;"] > .mat-focus-indicator'
    '.col-xs-12 > .card > .tableBody > .table-responsive > .mat-table > tbody > :nth-child(1) > .cdk-column-actions > table > [style="padding: 0px !important; border: 0px;"] > .mat-focus-indicator';

  currentTime =
    ".cdk-column-starttime > .mat-sort-header-container > .mat-sort-header-content";
  bookAppointment = ".mat-dialog-actions > .mat-primary";
  meetingStartTime = 'mat-cell cdk-cell cdk-column-starttime mat-column-starttime ng-star-inserted'
  meetingEndTime = 'mat-cell cdk-cell cdk-column-endtime mat-column-starttime ng-star-inserted'
  logInButton = "button[type='submit']";

  emailField =//"#mat-input-1"
    //".col-xl-12 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex";
    ".col-xl-12 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix"; // "#mat-input-0"

  passwordField =
    //".col-xl-12col-lg-12 > .mat-form-field > .mat-form-field-wrapper"; //"#mat-input-1"
    '.col-xl-12col-lg-12 > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix'
  optionView = ":nth-child(6) > .cutome-cursor-pointer";//cy.get(':nth-child(6) > .cutome-cursor-pointer')


  clickScheduleAppointment() {
    cy.wait(3000);
    cy.get(this.tabAppointment).click({ force: true });
    cy.wait(3000);
    cy.get(this.btnScheduleApptmt).click({ force: true });
    cy.wait(3000);
    return this;
  }

  clickDashboard() {
    cy.wait(2000);
    cy.get(this.menuDashboard).click({ force: true });
    return this;
  }

  selectCategory() {
    cy.wait(2000);
    cy.get(this.DDCategory).select(0);
    return this;
  }

  selectAppointmentType() {
    cy.wait(1000);
    cy.get(this.DDAptType).click();
    cy.get("mat-option").eq(0).click();
    return this;
  }

  selectProvider() {
    cy.wait(1000);
    cy.get(this.DDProvider).select(0);
    return this;
  }

  selectCaseManager() {
    cy.wait(1000);
    cy.get(this.DDCaseManager).click();
    cy.get("mat-option").eq(2).dblclick({ force: true });
    cy.get("body").click();
    return this;
  }

  selectPatientAccess(value) {
    cy.wait(3000);
    cy.get(this.DDPatientAccess).click({ force: true }); // Open the dropdown
    cy.get(".mat-option").contains(value).click(); // Select the option
    cy.get(this.DDPatientAccess).click({ force: true });
    cy.get("body").click();
    return this;
  }

  selectHost(value) {
    cy.wait(3000);
    cy.get(this.DDHost).click({ force: true }); // Open the dropdown
    cy.get(".mat-option").contains(value).dblclick(); // Select the option
    cy.get("body").click();
    return this;
  }

  selectPatientName(lastName) {
    cy.log(`Selected Patient Name: ${lastName}`);
    cy.get(this.DDPateintName).click({ force: true });
    cy.get("mat-option").contains(lastName).dblclick({ force: true });

    return this;
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
      "Richard",
      "Charles",
      "Mary",
      "Patricia",
      "Jennifer",
      "Linda",
      "Elizabeth",
      "Barbara",
      "Susan",
      "Jessica",
    ];
    const firstName = getRandomElement(firstNames);
    const fName = `${firstName}`;
    return fName;
  }
  selectAppointmentDate() {
    const today = new Date();
    const todayDate = String(today.getDate()); // Get today's date as a string
    cy.wait(3000);
    //cy.get(this.DDAppointmentDate).type("27/11/2024");
    cy.get(".mat-form-field-suffix > .mat-icon").click({ force: true }); //calender icon
    cy.wait(1000);

    cy.get(".owl-dt-calendar-cell-today") // Select the element for today
      .should("contain", todayDate) // Validate the content matches today's date
      .click({ force: true });

    //cy.get(':nth-child(4) > .owl-dt-day-4 > .owl-dt-calendar-cell-content').dblclick({force:true})//date 27/11
    return this;
  }
  clickTimeSlot() {
    cy.wait(2000);
    //cy.get(this.availableTimeSlot).click({force:true})
    cy.get(this.timeSlot300).click({ force: true });
    return this;
  }
  startZoomMeeting() {
    cy.wait(2000);
    cy.get(this.iconZoom).click({ force: true });
    return this;
  }

  setSlotStartTime() {
    const now = new Date();

    // Add 10 minutes to the current time
    now.setMinutes(now.getMinutes() + 10);

    // Convert to 12-hour format with AM/PM
    const hours24 = now.getHours();
    const minutes = now.getMinutes();
    const period = hours24 >= 12 ? "PM" : "AM";
    const hours12 = hours24 % 12 || 12; // Convert 0 to 12 for 12-hour clock
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const newTime = `${hours12}:${formattedMinutes} ${period}`;

    // Log the calculated new time
    cy.log(`Setting time 10 minutes later: ${newTime}`);

    // Type the calculated time into the input field
    cy.wait(2000);
    cy.get(this.adhocStartTime).type(newTime, { force: true });
    return this;
  }

  enterStartTime() {
    cy.wait(2000);
    cy.get(this.adhocStartTime).type("12:30 PM");
    return this;
  }
  enterEndTime() {
    cy.wait(2000);
    cy.get(this.adhocEndTime).type("01:00 PM");
    return this;
  }

  setOwlTimerTime(offsetMinutes = 10) {
    const now = new Date();

    // Add the offset to the current time
    now.setMinutes(now.getMinutes() + offsetMinutes);

    // Convert to 12-hour format
    const hours24 = now.getHours();
    const minutes = now.getMinutes();
    const period = hours24 >= 12 ? "PM" : "AM";
    const hours12 = hours24 % 12 || 12; // Convert 0 to 12 for 12-hour clock
    const formattedMinutes = minutes.toString().padStart(2, "0");

    // Store the start time in an instance variable
    this.startTime = `${hours12}:${formattedMinutes} ${period}`;
    cy.log(`Start Time Set: ${this.startTime}`);

    // Open the time picker
    cy.get('input[formcontrolname="slotStartTime"]').click({ force: true });
    cy.wait(2000);

    // Set the hour
    cy.get(":nth-child(1) > .owl-dt-timer-content > .owl-dt-timer-input")
      .clear()
      .type(hours12.toString(), { force: true });

    // Set the minutes
    cy.get(":nth-child(2) > .owl-dt-timer-content > .owl-dt-timer-input")
      .clear()
      .type(formattedMinutes, { force: true });

    // Confirm AM/PM selection if needed
    cy.get(".owl-dt-control-button-content")
      .contains(period)
      .click({ force: true });

    // Confirm the selection
    cy.get(
      ".owl-dt-timer-hour12 > .owl-dt-control-button > .owl-dt-control-button-content"
    ).dblclick({ force: true });

    // Verify the value in the input field
    const expectedTime = `${hours12}:${formattedMinutes} ${period}`;
    cy.log(`Expected Time: ${expectedTime}`);

    cy.get('input[formcontrolname="slotStartTime"]').type(expectedTime, {
      force: true,
    });
    cy.get(":nth-child(2) > .owl-dt-control-content").click({ force: true });
    return this;
  }

  setOwlTimerEndTime(offsetMinutes = 10) {
    const now = new Date();

    // Add the offset to the current time
    now.setMinutes(now.getMinutes() + offsetMinutes);

    // Convert to 12-hour format
    const hours24 = now.getHours();
    const minutes = now.getMinutes();
    const period = hours24 >= 12 ? "PM" : "AM";
    const hours12 = hours24 % 12 || 12; // Convert 0 to 12 for 12-hour clock
    const formattedMinutes = minutes.toString().padStart(2, "0");
    cy.wait(3000);
    // Open the time picker

    cy.get("#mat-input-5").dblclick({ force: true });
    cy.wait(3000);

    // Set the hour

    cy.get(":nth-child(1) > .owl-dt-timer-content > .owl-dt-timer-input")
      .clear()
      .type(hours12.toString(), { force: true });

    cy.wait(4000);
    // Set the minutes
    cy.get(":nth-child(2) > .owl-dt-timer-content > .owl-dt-timer-input").type(
      formattedMinutes,
      { force: true }
    );

    // Confirm AM/PM selection if needed
    cy.get(".owl-dt-control-button-content")
      .contains(period)
      .click({ force: true });

    // Confirm the selection
    cy.get(
      ".owl-dt-timer-hour12 > .owl-dt-control-button > .owl-dt-control-button-content"
    ).click({ force: true });

    // Verify the value in the input field
    const expectedTime = `${hours12}:${formattedMinutes} ${period}`;
    cy.log(`Expected Time: ${expectedTime}`);

    cy.get('input[formcontrolname="slotEndTime"]').type(expectedTime, {
      force: true,
    });
    cy.get(":nth-child(2) > .owl-dt-control-content").click({ force: true });
    return this;
  }

  clickONSave() {
    cy.wait(2000);
    cy.get(this.btnApptmtSave).scrollIntoView().click({ force: true });
    return this;
  }

  selectState() {
    cy.get(
      ".col-10 > .header-buttons-left > .dropdow > .mypayload-filters"
    ).select("CA", { force: true });
    cy.wait(2000);
    return this;
  }

  currentTimeZone() { }

  joinZoomMeetingEnd() {
    const todayDate = new Date().getDate();

    let originalUrl; // Variable to store the original URL

    // Save the original URL and stub the redirection
    cy.url().then((url) => {
      originalUrl = url; // Save the current URL
    });

    cy.window().then((win) => {
      cy.stub(win, "open").callsFake((url) => {
        win.location.href = url; // Redirect to the URL in the same window
      });
    });


    cy.wait(10000);
    // cy.get('tbody > :nth-child(1) > .cdk-column-name')

    //cy.get('mat-tooltip-trigger material-icons custom-icon-font cutom-cursor-default isInWR-Grey meOffline ng-star-inserted').invoke('show')
    cy.get(':nth-child(1) > .cdk-column-name > .mat-tooltip-trigger').realHover('mouse')
    cy.get(this.iconZoom).click();
    cy.wait(3000);
    this.verifyZoomElements();
    //  cy.visit(originalUrl);
    cy.wait(4000);
    return this

  }
  clickReport() {
    cy.get(':nth-child(8) > .menu-toggle').click({ force: true })
    cy.wait(2000)
    cy.get(':nth-child(8) > .ml-menu.ng-star-inserted > :nth-child(1) > .client-menu-font').click({ force: true })
    // cy.get(':nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').select(2,{force:true})
    cy.get('.cdk-column-appointmentstatus > .mat-sort-header-container > .mat-sort-header-arrow').click({ force: true })

    return this;
  }


  joinZoomMeeting() {
    const todayDate = new Date().getDate();

    let originalUrl; // Variable to store the original URL

    // Save the original URL and stub the redirection
    cy.url().then((url) => {
      originalUrl = url; // Save the current URL
    });

    cy.window().then((win) => {
      cy.stub(win, "open").callsFake((url) => {
        win.location.href = url; // Redirect to the URL in the same window
      });
    });
    // cy.get(".cdk-column-starttime > .mat-sort-header-container").dblclick({
    //   force: true,
    // });

    cy.wait(3000);
    cy.get(this.iconZoom).click();
    cy.wait(3000);

    return this;
  }

  joinZoomMeetingorangelight() {
    const todayDate = new Date().getDate();

    let originalUrl; // Variable to store the original URL

    // Save the original URL and stub the redirection
    cy.url().then((url) => {
      originalUrl = url; // Save the current URL
    });

    cy.window().then((win) => {
      cy.stub(win, "open").callsFake((url) => {
        win.location.href = url; // Redirect to the URL in the same window
      });
    });
    cy.get(".cdk-column-starttime > .mat-sort-header-container").dblclick({
      force: true,
    });

    cy.wait(70000);
   // cy.get(this.iconZoom).click();
    cy.wait(3000);

    return this;
  }

  statusCompleted() {
    ////status
    cy.get('select[formcontrolname="status"]').select("Completed Successfully")//index =0
    cy.get('button[type="submit"].btn.btn-primary')
      .should("not.be.disabled") // Verify button is enabled
      .click();
    cy.wait(4000);
    cy.go("back");
    return this;
  }

  changeStatus(index) {

    ////status
    cy.get('select[formcontrolname="status"]').select("Patient No Show");//Patient No Show index-1
    cy.get('button[type="submit"].btn.btn-primary')
      .should("not.be.disabled") // Verify button is enabled
      .click();
    cy.wait(4000);
    cy.go("back");

    return this;
  }

  deleteAppointment() {
    cy.get('button.mat-mini-fab.mat-warn.mat-button-base mat-icon').contains('delete').click({ force: true });
   cy.wait(2000);
   cy.get('button.mat-raised-button.mat-primary').contains('Delete').click({ force: true });
    cy.wait(2000);
    return this;
  }

  adminLogin() {
    cy.wait(3000);
    utilities.log(" Login to Admin.");
    cy.get('.rounded-circle').click();//provider
    cy.wait(2000);
    cy.get('.user_dw_menu > :nth-child(3) > a').click();//logout
    cy.wait(2000);
    cy.get(this.emailField).type("adminpcare@pursuecare.com");
    cy.get(this.passwordField).type("Akshay@123");
    cy.get(this.logInButton).click();
    return this;
  }


  selectRecentAppointment() {
    
    cy.wait(5000);
    cy.get(':nth-child(4) > .menu-toggle').click({ force: true });
    cy.wait(3000);
  
    cy.get(':nth-child(4) > .ml-menu.ng-star-inserted > :nth-child(2) > .client-menu-font').click({ force: true });//appointment
    cy.wait(4000);
    
    cy.get('.search-text').click({ force: true });
    cy.get('#input-search-text').type("Dilawar Singh").click({ force: true });
    cy.get('.all-items > .ng-star-inserted').click({ force: true });
    cy.wait(4000);
    cy.get("body").click();
    cy.wait(2000);



    //Select the most recent one

    cy.get('.pill.pill-Confirmed_by_Staff .pill-name.text-truncate')
  .contains('Dilawar S.')
  .parents('.pill')
  .last({ force: true })
  .click({force:true})


  cy.wait(2000);
  cy.get('button[mat-mini-fab][color="warn"].mat-mini-fab.mat-warn').scrollIntoView()
  .click({force:true})
  cy.wait(2000);

  cy.get('button.mat-raised-button.mat-primary .mat-button-wrapper').contains('Delete')
  .click({force:true})
  cy.wait(2000);
  

    return this;


  }
  clickAppointmentafterMeeting() {
    cy.wait(2000);
    cy.get(".list > :nth-child(4) > .ng-star-inserted").click({ force: true });
    cy.wait(4000);

   
    return this;
  }

  verifyZoomElements() {
    cy.wait(6000);
    // Example selectors; adjust based on the actual structure of the Zoom page
    cy.get(
      "button[mat-raised-button][mat-dialog-close].mdc-button.mat-mdc-raised-button.mat-primary"
    ).click();

    //enable audio
    cy.wait(2000);
    // Verify audio element

    cy.get('button[aria-label="Mute"]').click();
    cy.wait(20000);
    cy.get('button[aria-label="Start Video"]').click();
    cy.wait(40000);
    cy.get('button[aria-label="Stop Video"]').click();
    cy.wait(3000);

    // //share
    cy.get('button[aria-label="Start Share"]').click({ force: true });
    cy.wait(40000);
    cy.get('button[aria-label="Stop Share"]').click({ force: true });
    // // Verify username
    cy.get('button[aria-label="Users"]').click();

    cy.wait(20000);
    // cy.get("header.msger-header.ng-star-inserted > button.header-btn").click();

    cy.get("button").contains("Close").click({ force: true });
    // cy.wait(2000);

    ///End button
    cy.wait(2000);
    cy.get('button[aria-label="End"]').click({ force: true });
    cy.wait(20000);
    // cy.get('button.mat-mdc-menu-item[role="menuitem"][aria-disabled="false"]')
    //   .contains("Leave")
    //cy.get(':nth-child(1) > .mat-mdc-menu-item-text')
    //   .click({ force: true }); //leave option
    cy.get(":nth-child(2) > .mat-mdc-menu-item-text")
      .should("contain.text", "End")
      .click({ force: true });

    cy.wait(4000);



    return this;
  }

  verifyZoomElementsNoShow() {
    cy.wait(6000);
    // Example selectors; adjust based on the actual structure of the Zoom page
    cy.get(
      "button[mat-raised-button][mat-dialog-close].mdc-button.mat-mdc-raised-button.mat-primary"
    ).click();

    //enable audio
    cy.wait(2000);
    // Verify audio element

    cy.get('button[aria-label="Mute"]').click();
    cy.wait(5000);
    cy.get('button[aria-label="Start Video"]').click();
    cy.wait(5000);
    cy.get('button[aria-label="Stop Video"]').click();
    cy.wait(3000);

    // //share
    cy.get('button[aria-label="Start Share"]').click({ force: true });
    cy.wait(4000);
    cy.get('button[aria-label="Stop Share"]').click({ force: true });
    // // Verify username
    cy.get('button[aria-label="Users"]').click();

    cy.wait(4000);
    // cy.get("header.msger-header.ng-star-inserted > button.header-btn").click();

    cy.get("button").contains("Close").click({ force: true });
    // cy.wait(2000);

    ///End button
    cy.wait(2000);
    cy.get('button[aria-label="End"]').click({ force: true });
    cy.wait(2000);
    // cy.get('button.mat-mdc-menu-item[role="menuitem"][aria-disabled="false"]')
    //   .contains("Leave")
    //cy.get(':nth-child(1) > .mat-mdc-menu-item-text')
    //   .click({ force: true }); //leave option
    cy.get(":nth-child(2) > .mat-mdc-menu-item-text")
      .should("contain.text", "End")
      .click({ force: true });

    cy.wait(4000);



    return this;
  }

  joinZoomMeeting1() {
    const todayDate = new Date().getDate();

    //   const now = new Date();

    //   // Add the offset to the current time
    //   now.setMinutes(now.getMinutes());

    //   // Convert to 12-hour format
    //   const hours24 = now.getHours();
    //   const minutes = now.getMinutes();
    //   const period = hours24 >= 12 ? "PM" : "AM";
    //   const hours12 = hours24 % 12 || 12; // Convert 0 to 12 for 12-hour clock
    //   const formattedMinutes = minutes.toString().padStart(2, "0");
    //   cy.wait(3000);
    //   // Open the time picker

    //   // Verify the value in the input field
    //   const expectedTime = `${hours12}:${formattedMinutes} ${period}`;
    //   cy.log(`Expected Time: ${expectedTime}`);

    //   cy.wait(3000);
    // cy.log(`Attempting to select time: ${expectedTime}`)
    let originalUrl; // Variable to store the original URL

    // Save the original URL and stub the redirection
    cy.url().then((url) => {
      originalUrl = url; // Save the current URL
    });

    cy.window().then((win) => {
      cy.stub(win, "open").callsFake((url) => {
        win.location.href = url; // Redirect to the URL in the same window
      });
    });
    //cy.get(this.currentTime).contains(expectedTime,{force:true}).click({force:true})
    // cy.get(this.currentTime).last({force:true})
    //cy.wait(3000);

    // cy.get(".cdk-column-starttime > .mat-sort-header-container").dblclick({
    //   force: true,
    // });
    cy.wait(10000);
    // cy.get('tbody > :nth-child(1) > .cdk-column-name')

    //cy.get('mat-tooltip-trigger material-icons custom-icon-font cutom-cursor-default isInWR-Grey meOffline ng-star-inserted').invoke('show')
    cy.get(':nth-child(1) > .cdk-column-name > .mat-tooltip-trigger').realHover('mouse')
    // cy.get(':nth-child(8) > [data-layer="Content"]').realHover('mouse')
    //
    // .should('have.attr', 'mattooltip', 'Appointment').realHover()
    // console.log(cy.get(('i.mat-tooltip-trigger')))

    // cy.get(':nth-child(1) > .cdk-column-name > .mat-tooltip-trigger').scrollIntoView({
    //   force: true,
    // });
    cy.wait(6000);
    // cy.get(':nth-child(1) > .cdk-column-name > .mat-tooltip-trigger').invoke(
    //   "trigger",
    //   "mouseover"
    // );

    cy.get(this.iconZoom).click();
    cy.wait(3000);
    this.verifyZoomElementsLeave();
    cy.wait(4000);
    //  cy.visit(originalUrl);

    //    cy.wait(2000);
    //   //cy.get(".list > :nth-child(4) > .ng-star-inserted").click({ force: true });
    //   cy.wait(4000);

    // // Select the most recent one
    // cy.get(
    //   "full-calendar .fc-day-grid-event.fc-h-event.fc-event-pills .pill.pill-completed .pill-content .pill-bottom > button.pill-button"
    // )
    //   .last({ force: true })
    //   .scrollIntoView({ force: true })
    //   // .should('be.visible') // Ensure it's visible
    //   .click({ force: true }); // Perform the click
    // cy.wait(4000);
    // cy.get(
    //   'mat-radio-group[formcontrolname="appointmentstatus"] mat-radio-button'
    // )

    //   .contains("Confirmed by Staff") // Replace with the visible text for the button
    //   .click({ force: true }); // Click the radio button
    // cy.wait(4000);
    // cy.get(this.btnApptmtSave).scrollIntoView().click({ force: true });
    // cy.wait(2000);
    //  cy.get(this.menuDashboard).click({ force: true });
    // cy.wait(2000);
    // // cy.get(
    // //   'td[role="gridcell"].mat-cell.cdk-cell.cdk-column-appointmentstatus.mat-column-appointmentstatus'
    // // ).should("be.visible");
    // cy.get('.cdk-column-appointmentstatus > .mat-sort-header-container > .mat-sort-header-content').scrollIntoView({force:true})
    // cy.wait(2000);
    return this;
  }

  verifyZoomElementsLeave() {
    cy.wait(8000);
    // Example selectors; adjust based on the actual structure of the Zoom page
    cy.get(
      "button[mat-raised-button][mat-dialog-close].mdc-button.mat-mdc-raised-button.mat-primary"
    ).click();

    //enable audio
    cy.wait(4000);
    // Verify audio element

    cy.get('button[aria-label="Mute"]').click();
    cy.wait(4000);
    cy.get('button[aria-label="Start Video"]').click();
    cy.wait(40000);
    cy.get('button[aria-label="Stop Video"]').click();
    cy.wait(3000);

    // //share
    cy.get('button[aria-label="Start Share"]').click({ force: true });
    cy.wait(40000);
    cy.get('button[aria-label="Stop Share"]').click({ force: true });
    // // Verify username
    cy.get('button[aria-label="Users"]').click();

    cy.wait(20000);
    // cy.get("header.msger-header.ng-star-inserted > button.header-btn").click();

    cy.get("button").contains("Close").click({ force: true });
    // cy.wait(2000);

    ///End button
    cy.wait(2000);
    cy.get('button[aria-label="End"]').click({ force: true });
    cy.wait(10000);

    cy.get(":nth-child(1) > .mat-mdc-menu-item-text")
      .should("contain.text", "Leave")
      .click({ force: true }); //leave option
    // cy.get(":nth-child(2) > .mat-mdc-menu-item-text")
    //   .should("contain.text", "End")
    //   .click({ force: true });

    // cy.wait(4000);

    // ////status
    // cy.get('select[formcontrolname="status"]').select("Completed Successfully");
    // cy.get('button[type="submit"].btn.btn-primary')
    //   .should("not.be.disabled") // Verify button is enabled
    //   .click();
    cy.wait(4000);
    //  cy.go("back");

    cy.url().then((url) => {
      if (
        !url.includes(
          " https://pcareqaproviderportal.azurewebsites.net/provider/dashboard"
        )
      ) {
        // Replace with your app's domain or URL pattern
        // Redirect to your application's main page if not already there
        cy.visit(
          " https://pcareqaproviderportal.azurewebsites.net/provider/dashboard"
        ); // Replace with your application's URL
      }
    });

    return this;
  }
}
export default appointment;
