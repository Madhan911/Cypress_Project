/// <reference types = 'cypress'/>

const { constant } = require("lodash")

class Appointment
{
visit()
{
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
}

MakeAppointmentsubmit()

{
  const button = cy.get('[id=btn-make-appointment]')
  button.click()
}



FillUsername(value)
{
  const field = cy.get('[id=txt-username]')
  field.clear()
  field.type(value)
  return this
}

FillPassword(value)
{
  const field = cy.get("input[type=password]")
  field.clear()
  field.type(value)
  return this
}
Loginsubmit()

{
  const button = cy.get('[type=submit]')
  button.click()
}


Facility(value)
{
  const field = cy.get('[id=combo_facility]')
  field.type(value)
  return this
}

CheckBox(value)
{
  const field = cy.get('[type=checkbox]')
  field.should('be.visible').click()

  return this
}
RadioButton()

{
  const button = cy.get('[value=Medicare]')
  button.click()
}
Date(value)
{
  const field = cy.get('[id="txt_visit_date"]')
  field.type(value)
  
  return this
}


Submit()

{
  const button = cy.get('[id=btn-book-appointment]')
  button.click()
}

Verify()
{
  const field = cy.get('h2')
  field.contains('Appointment Confirmation')
  return this
}

}




export default Appointment

//23/03/2022
//btn-book-appointment