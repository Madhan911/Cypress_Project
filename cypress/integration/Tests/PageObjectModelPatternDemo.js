/// <reference types = 'cypress'/>

import LoginPage from "../PageObjectModel/LoginPage"





describe('log in page', function()
{

    it('pageobject model', function()
    {
        const login = new LoginPage()
        login.visit()
        login.FillUsername('admin@yourstore.com')
        login.FillPassword('admin')
        login.submit()
        cy.title().should('eq','Dashboard / nopCommerce administration')


    })
})