const { cyan } = require("colorette")
const { iteratee } = require("lodash")

describe('MyFirstSuite', function()
{
    it('verifything the title of the page', function()
    {
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
        cy.title().should('eq','Why Cypress? | Cypress Documentation')



    }
    
    
    
    
    
    )
}






)
