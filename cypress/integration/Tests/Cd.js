
/// <reference types = 'cypress'/>

describe('check box and dropdown', function()
{
    it('check', function()
        {

           
         
        cy.visit('http://demo.automationtesting.in/Register.html')

       
        cy.get('#checkbox1').check().should('be.checked').should('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').should('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').should('have.value','Hockey')

        // cy.get('checkbox1').uncheck().should('not.be.checked')
        // cy.get('checkbox2').uncheck().should('not.be.checked')
        // cy.get('checkbox3').uncheck().should('not.be.checked')


          cy.get('input[type=checkbox]').check(['Cricket','Hockey'])





    }
    
    )
    it('drop down', function()
    {
         
         cy.get('#Skills').select('Android')
         
    }
    
    )
        
    it('multy drop down', function()
    {
         
         cy.get('#msdd').click()
         cy.get('.ui-corner-all').contains('Arabic').click()
         cy.get('.ui-corner-all').contains('Bulgarian').click()


         
    }
    
    )
        
    it('select country drop down', function()
    {
         
         cy.get('[role=combobox]').click({force : true})
         cy.get('.select2-search__field').type('ind').click()
         cy.get('.select2-search__field').type('{enter}')

    }
    
    )
}



)