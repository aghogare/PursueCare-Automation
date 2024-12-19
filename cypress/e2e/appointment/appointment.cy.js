///<reference types = 'cypress'/>
import Appointment from "../../pages/appointment/appointment";
//import Patient from "../../fixtures/createPatient/createPatient1.json"
const appointment = new Appointment();
//const patient=new Patient();

describe("Sceduling appointments for the Patient", () => {
  beforeEach(function () {
    cy.fixture("appointment/appointment.json").as("appointments");
    cy.fixture("createPatient/createPatient1.json").as("patients");
   // cy.fixture("cypress/fixtures/createPatient/createPatient1.json").as("patients");
    cy.login();
  });

  it("Appointment creation for the patient", function () {
    const fname=appointment.generateFirstName()  
    appointment

      .clickScheduleAppointment()
      .selectAppointmentType()
      .selectCaseManager()
      .selectPatientAccess(this.appointments.patientAccess)
      .selectHost(this.appointments.host)
      .selectPatientName("Dulquerrrrrr Salmaannn")

      .selectAppointmentDate()
      .setOwlTimerTime(2)
      .setOwlTimerEndTime(15)
      .clickONSave()
      .clickDashboard()
     // .selectState()
     // .joinZoomMeeting1()
      // .joinZoomMeetingEnd()
      // .clickReport()
      //.clickDashboard()
  })

  it("Validate joining zoom meeting and updating status", function () {
    const fname=appointment.generateFirstName()  
    appointment

      
      //.clickDashboard()
     // .selectState()
     // .joinZoomMeeting1()
      .joinZoomMeeting()
      .verifyZoomElements()
      .changeStatus(3)
      .clickAppointmentafterMeeting()
     // .clickReport()
      //.clickDashboard()
  });

  it("Validating Report for meeting", function () {
    const fname=appointment.generateFirstName()  
    appointment

     
      .clickReport()
      
  });

  it.only("Validate joining zoom meeting  for dynamically created patient", function () {
    
    const fname=this.patients.firstName
    appointment

      .clickScheduleAppointment()
      .selectAppointmentType()
      .selectCaseManager()
      .selectPatientAccess(this.appointments.patientAccess)
      .selectHost(this.appointments.host)
      //.selectPatientName("Dulquerrrrrr Salmaannn")
      .selectPatientName(fname)
      .selectAppointmentDate()
      .setOwlTimerTime(2)
      .setOwlTimerEndTime(15)
      .clickONSave()
      .clickDashboard()
     // .selectState()
     // .joinZoomMeeting1()
      .joinZoomMeeting()
      .verifyZoomElements()
      .changeStatus()
      .clickAppointmentafterMeeting()
      .clickReport()
      //.clickDashboard()
  });

  it("Validate assigning zoom meeting for the given patient", function () {
    const fname=appointment.generateFirstName()  
    appointment

      .clickScheduleAppointment()

      .selectAppointmentType()
      .selectCaseManager()
      .selectPatientAccess(this.appointments.patientAccess)
      .selectHost(this.appointments.host)
     // .selectPatientName("Dulquerrrrrr Salmaannn")
      .selectPatientName(this.patients.firstName)
      .selectAppointmentDate()
      .setOwlTimerTime(2)
      // .clickTimeSlot()s

      .setOwlTimerEndTime(15)
      .clickONSave()
      .clickDashboard()
      .selectState()
      .joinZoomMeeting()
  });

  afterEach(() => {
    Cypress.session.clearAllSavedSessions();
  });
});
