/// <reference types = 'cypress'/>

const { func } = require("assert-plus")

describe('radio and visible', function()
{
    it('radio and visible check', function()
    {
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#HTML9 > div.widget-content > button').click()
        cy.on('window:confirm', (str) =>
        {

            expect(str).to.equal('Press a button!')
        }
        
        
        )
        
        
        
        
    }
    
    )

}
)