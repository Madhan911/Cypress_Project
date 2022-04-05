


describe('Fixture', function()
{

    before(function()
    {
     cy.fixture('example').then(function(data){

        this.data = data


     })


    })
    it('using fixture', function()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.get("input[name=Email]").clear().type(this.data.email)
        cy.get("input[type=password]").clear().type(this.data.password)
        cy.get("button[type=submit]").click()

    })
})