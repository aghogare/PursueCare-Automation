///<reference types = 'cypress'/>
import Appointment from "../../pages/appointment/appointment";
//import Patient from "../../fixtures/createPatient/createPatient1.json"
const appointment = new Appointment();
//const patient=new Patient();

describe("Sceduling appointments for the Patient", () => {
  const appointment = new Appointment();
  beforeEach(function () {
    cy.fixture("appointment/appointment.json").as("appointments");
    cy.fixture("createPatient/createPatient1.json").as("patients");
   // cy.fixture("cypress/fixtures/createPatient/createPatient1.json").as("patients");
    cy.login();
  });

 

  it("Validate deleting of recently created zoom meeting", function () {
appointment
    .clickScheduleAppointment()
      .selectAppointmentType()
      .selectCaseManager()
      .selectPatientAccess(this.appointments.patientAccess)
      .selectHost(this.appointments.host)
      .selectPatientName("Dilawar Singh")
      //.selectPatientName("Dulquerr Salmaan")
      .selectAppointmentDate()
      .setOwlTimerTime(2)    
      .setOwlTimerEndTime(15)    
      .clickONSave()
      .clickDashboard()    

    appointment.adminLogin()
    .selectRecentAppointment()
    

  })

  // it("Validate joining zoom meeting   patient joining with green light", function () {
    
  //   const fname=this.patients.firstName
  //   appointment

  //     .clickScheduleAppointment()
  //     .selectAppointmentType()
  //     .selectCaseManager()
  //     .selectPatientAccess(this.appointments.patientAccess)
  //     .selectHost(this.appointments.host)
  //     .selectPatientName("Dulquerr Salmaan")
  //     //.selectPatientName(fname)
  //     .selectAppointmentDate()
  //     .setOwlTimerTime(2)
  //     .setOwlTimerEndTime(15)
  //     .clickONSave()
  //     .clickDashboard()
  //      .joinZoomMeetingorangelight()
  //     //.clickReport()
  //     //.clickDashboard()
  // });



  it("Validate assigning zoom meeting for the given patient checking joining of patient from app turns icon grey to orange", function () {
    const fname=appointment.generateFirstName()  
    appointment

      .clickScheduleAppointment()
      .selectAppointmentType()
      .selectCaseManager()
      .selectPatientAccess(this.appointments.patientAccess)
      .selectHost(this.appointments.host)
      //.selectPatientName("Dulquerr Salmaan")
      .selectPatientName("Dilawar Singh")
      //.selectPatientName(this.patients.firstName)
      .selectAppointmentDate()
      .setOwlTimerTime(2)
      .setOwlTimerEndTime(15)
      .clickONSave()
      .clickDashboard()
      cy.wait(25000)
      appointment
      .greyToOrange()
      // .selectState()
      // .joinZoomMeeting()
  });
  it("Appointment creation for the patient", function () {
    const fname=appointment.generateFirstName()  
    appointment

      .clickScheduleAppointment()
      .selectAppointmentType()
      .selectCaseManager()
      .selectPatientAccess(this.appointments.patientAccess)
      .selectHost(this.appointments.host)
      .selectPatientName("Dulquerr Salmaan")
      //.selectPatientName("Dilawar Singh")
      .selectAppointmentDate()
      .setOwlTimerTime(2)
      .setOwlTimerEndTime(18)
      .clickONSave()
      .clickDashboard()
     // .selectState()
     // .joinZoomMeeting1()
      // .joinZoomMeetingEnd()
      // .clickReport()
      //.clickDashboard()
  })

  it.only("Validate assigning zoom meeting for the given patient checking joining of patient from mobile-app turns icon grey to orange", function () {
    appointment
    //.clickDashboard()
    //cy.wait(25000)
    
    .greyToOrange()
  })

  it.only("Validate functionality  of zoom meeting and updating status 'Patient No Show'", function () {
    const fname=appointment.generateFirstName()  
    appointment

    
      //.clickDashboard()
     // .selectState()
     // .joinZoomMeeting1()
      .joinZoomMeeting()
      .verifyZoomElementsNoShow()
      .changeStatus()
      .clickAppointmentafterMeeting()
     // .clickReport()
      //.clickDashboard()
  });

  it.only("Validating Report for meeting", function () {
    const fname=appointment.generateFirstName()  
    appointment

      .clickDashboard()
      .clickReport()
      
  });

  it.only("Validating delete functionality for meeting", function () {
    const fname=appointment.generateFirstName()  
    appointment

      .clickDashboard()
      .adminLogin()
      .selectRecentAppointment()
      
  });


  it("Validate joining zoom meeting patient for status as completed", function () {
    
    const fname=this.patients.firstName
    appointment

      .clickScheduleAppointment()
      .selectAppointmentType()
      .selectCaseManager()
      .selectPatientAccess(this.appointments.patientAccess)
      .selectHost(this.appointments.host)
      .selectPatientName("Akshay Lily Lilyyyy")
      //.selectPatientName(fname)
      .selectAppointmentDate()
      .setOwlTimerTime(2)
      .setOwlTimerEndTime(15)
      .clickONSave()
      .clickDashboard()
     // .selectState()
     // .joinZoomMeeting1()
      .joinZoomMeeting()
      .verifyZoomElements()
      .statusCompleted()
      .clickAppointmentafterMeeting()
      .clickReport()
      //.clickDashboard()
  });

  afterEach(() => {
    Cypress.session.clearAllSavedSessions();
  });
});
