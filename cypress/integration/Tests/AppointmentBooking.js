/// <reference types = 'cypress'/>



import Appointment from "../PageObjectModel/Appointment"



describe('Appointment Booking', function()
{

    it('Booking', function()
    {
        const appointment = new Appointment()
        appointment.visit()
        appointment.MakeAppointmentsubmit()
        appointment.FillUsername("John Doe")
        appointment.FillPassword("ThisIsNotAPassword")
        appointment.Loginsubmit()
        appointment.Facility("Tokyo CURA Healthcare Center")
        appointment.CheckBox()
        appointment.RadioButton()
        appointment.Date("23/03/2022")
        appointment.Submit()
        appointment.Verify()


    })
})