///<reference types = 'cypress'/>
import Appointment from "../../pages/appointment/appointment";
const appointment = new Appointment();

describe("Add Patient", () => {
  beforeEach(function () {
    cy.fixture("appointment/appointment.json").as("appointment");
    cy.login();
  });

  it("Validate scheduling appointment for patient", function () {
    appointment
      .clickScheduleAppointment()

      .selectAppointmentType()
      .selectCaseManager()
      .selectPatientAccess(this.appointment.patientAccess)
      .selectHost(this.appointment.host)
      .selectPatientName(this.appointment.lastName)
      .selectAppointmentDate()
      .setOwlTimerTime(2)
      // .clickTimeSlot()s

      .setOwlTimerEndTime(15)
      .clickONSave()
      .clickDashboard()
      .joinZoomMeeting()
      //.clickDashboard()
  });

  it("Validate assigning zoom meeting for the given patient", function () {
    appointment
      .clickScheduleAppointment()

      .selectAppointmentType()
      .selectCaseManager()
      .selectPatientAccess(this.appointment.patientAccess)
      .selectHost(this.appointment.host)
      .selectPatientName(this.appointment.lastName)
      .selectAppointmentDate()
      //.clickTimeSlot()
      // .enterStartTime()
      //.enterEndTime()
      .setSlotStartTime(1, 34)
      .setSlotEndTime(2, 0)
      .clickONSave();
  });

  afterEach(() => {
    Cypress.session.clearAllSavedSessions();
  });
});
