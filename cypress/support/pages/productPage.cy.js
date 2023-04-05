export class ProductPage {
    

    clickAddToCart(productName) {
        cy.xpath(`//button[@value='${productName}']`).click();
        cy.get("#closeModal").click();
    };

    clickGoShoppingCart() {
        cy.get('#goShoppingCart').click();
        
    }
  

};