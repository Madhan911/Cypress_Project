/// <reference types = 'cypress'/>

const { func } = require("assert-plus")

describe('farward and backward', function()
{
    it('farward and backward', function()
    {
        cy.visit('https://www.google.com/')
        //cy.title().should('eq',"Facebook – log in or sign up")

        cy.get('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.RNmpXc').click()
        //cy.title().should('eq',"Forgotten Password | Can't Log In | Facebook")

        cy.go('back')
        // cy.title().should('eq','nopCommerce demo store')

        cy.go('forward')
        // cy.title().should('eq','nopCommerce demo store')

        cy.reload()

        
        
        
    }
    
    )

}
)