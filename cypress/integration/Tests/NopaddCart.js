/// <reference types = 'cypress' />

// describe('cart automation', function()
//   {
//     it("verify cart values", function()
//        {
//           cy.visit("https://frontend.nopcommerce.com/")
//           cy.clock()

//           cy.tick(8000)

//           cy.title().should('eq','nopCommerce demo store')

//           cy.tick(8000)

          
//           //cy.location('body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div > div.topic-block > div.topic-block-title > h2').should('eq', '/Welcome to our store') // for example 

           
//           cy.get('input[type="text"]').type("Apple MacBook Pro 13-inch")
//           cy.tick(8000)

           
//           cy.get('input[type="text"]').click().type("Apple MacBook Pro 13-inch")
//           cy.tick(8000)
           
//           cy.get("[type='submit]").click()
//           cy.tick(8000)

//           cy.get('#product_enteredQuantity_4').clear().type("3")
//           cy.tick(8000)
           
           
//           cy.get(".button-1 add-to-cart-button[type='button']").click()

//         }

//       )

//   }
// )






describe('Test Login', () => 
{
  it('Test login with good info', () => 
  {
    cy.visit("https://frontend.nopcommerce.com/")
    cy.clock()
    cy.tick(8000)
    cy.get('#small-searchterms').type("Apple MacBook Pro 13-inch").click()
    
  })
})

   