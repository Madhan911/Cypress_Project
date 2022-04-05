/// <reference types = 'cypress'/>

const { should } = require("chai")
const { contains } = require("cypress/types/jquery")



describe('Write and reading a file', function()
{
    it('writing a file', function()
    {
        cy.writeFile('sample.txt','this is madhan\n')
        cy.writeFile('sample.txt','i am from hyderabad',{flag:'a+'})

    }
    
    )
    it('Reading  a file', function()
    {
        cy.readFile('sample.txt').should('exist').and('contains','this is madhan')

        //read json file
    //     cy.fixture('example').then((profile)=>{
    //         expect(profile.name).to.eq('madhanmohan')
    
    // })

    })

    it('writing a jsonfile', function()
    {
        cy.writeFile('cypress\\fixtures\\example.json',{
                name: "madhanmohan",
                city: "hyderabad"
               })
    

    }
    
    )

      
}



)

