const { cyan } = require("colorette")



describe('custom commands', function()
{
    it('login page', function()
    {
        cy.login('admin@yourstore.com','admin');
        cy.title().should('eq','Dashboard / nopCommerce administration')
    })
})

