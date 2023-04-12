export class ShoppingCardPage{
    

    productNameVerification(product) {
        cy.xpath(`//p[@name='${product.name}']`).should('have.text', product.name );
        
    };

    productPriceVerification(product) {
        cy.xpath(`//p[@name='${product.name}']`).parent('div').find(`p[name='${product.price}']`).should('have.text', `\$${product.price}`);
        
    };
    clickShowTotalPrice() {
        cy.xpath("//button[text()='Show total price']").click();
        
    } 
    checkTotalPrice(productData) {
        let totalPrice = productData.product1.price + productData.product2.price;
        cy.get('#price').contains(`${totalPrice}`).should('have.text', totalPrice);
    }
  

};      