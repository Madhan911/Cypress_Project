/// <reference types = 'cypress'/>

const { func } = require("assert-plus")

describe('radio and visible', function()
{
    it('radio and visible check', function()
    {
        cy.visit('https://demo.guru99.com/test/newtours/index.php')
        cy.url().should('include','demo.guru99')
        cy.get('[type="text"]').should('be.visible').should('be.enabled').clear().type('madhanmohan750@gmail.com')
        cy.get('[type="password"]').should('be.visible').should('be.enabled').clear().type('Nani@8080')
        cy.get('[type="submit"]').click()
        cy.get('body > div:nth-child(5) > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(1) > td > h3').contains('Login Successfully')

        cy.get('body > div:nth-child(5) > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click()
        cy.get('[value="roundtrip"]').should('be.visible').should('be.checked').click()
        //cy.get('[type="radio"]').should('be.visible').should('not.be.checked').click()
        cy.get('[type="image"]').click()

    }
    
    )

}



)