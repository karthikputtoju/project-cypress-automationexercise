describe('View and Proceed to Cart Checkout', () => {
  beforeEach(() => {
    cy.fixture('user').then((user) => {
      cy.visit('Base URL'); // Replace with the actual base URL
      cy.url().should('include', 'automationexercise.com'); // Verify the URL
      cy.contains('Signup / Login').click();
      cy.get('[data-qa="login-email"]').type(user.email);
      cy.get('[data-qa="login-password"]').type(user.password);
      cy.get('[data-qa="login-button"]').click();

      cy.contains(`Logged in as ${user.name}`).should('be.visible');
    });
  });

  it('Test scenario - should add to cart selected a saree from the cart page', () => {
    cy.visit('Base URL'); // Replace with the actual base URL
    cy.url().should('include', 'automationexercise.com'); // Verify the URL
    cy.contains('Products').click();
    cy.get('.product-image-wrapper').eq(2).click(); // Click on the third saree (index 2)
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a > .badge').click(); // Click on the 'Sarees' category
    cy.get(':nth-child(5) > .product-image-wrapper').click(); // Click on the first saree in the list
    cy.get('.panel-body > ul > :nth-child(3) > a').click(); // Click on the 'Sarees' category
    cy.contains('Women - Saree Products').should('be.visible'); // Verify the 'Sarees' category is displayed
    cy.get('.product-image-wrapper').eq(2).click(); // Click on the third saree (index 2)
    cy.contains('Beautiful Peacock Blue Cotton Linen Saree').should('be.visible'); 
    cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get(':nth-child(5) > .btn').click(); // Click on the 'Add to Cart' button for the selected saree
    cy.get('.modal-content').should('be.visible'); // Verify the modal content is displayed
    cy.get('.modal-footer > .btn').click(); // Click on the 'Continue Shopping' button in the modal
  
    cy.contains('Cart').click(); // Click on the 'Cart' link in the navigation bar
    cy.contains('Beautiful Peacock Blue Cotton Linen Saree').should('be.visible'); 
    cy.get('.cart_description > h4').should('be.visible'); // Verify the cart description is visible
    cy.get('.cart_total_price').should('contain', '5000'); 

    cy.get('.cart_quantity_delete').click(); // Click on the 'Remove' button for the selected saree
  });
});
  