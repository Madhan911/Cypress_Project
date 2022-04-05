/// <reference types = 'cypress'/>

const { constant } = require("lodash")

class LoginPage
{
visit()
{
    cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
}

FillUsername(value)
{
  const field = cy.get('[id=Email]')
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
submit()

{
  const button = cy.get('[type=submit]')
  button.click()
}

}

export default LoginPage