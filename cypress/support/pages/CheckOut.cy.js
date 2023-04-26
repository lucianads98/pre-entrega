export class CheckOut {
    constructor() {
        this.nameSelector = '#FirstName';
        this.lastSelector = '#lastName';
        this.cardSelector = '#cardNumber';
        this.purchase = 'Purchase';
    }
    completeData(firtsName, lastName, cardNumber) {
       cy.get(this.nameSelector).type(firtsName);
       cy.get(this.lastSelector).type(lastName);
       cy.get(this.cardSelector).type(cardNumber);
       cy.contains(this.purchase).click();
      

    
    };
    checkTicket(firtsName, lastName, cardNumber, productData) {
        let totalPrice = productData.product1.price + productData.product2.price;
        cy.get("#name", {timeout:10000}).should('exist').contains(firtsName+" "+lastName);
        cy.xpath(`//p[@id='${productData.product1.name}']`).should('have.text', productData.product1.name );
        cy.xpath(`//p[@id='${productData.product2.name}']`).should('have.text', productData.product2.name );
        cy.get("#creditCard").should('have.text', cardNumber);
        cy.get("#totalPrice").should('have.text', "You have spent $"+totalPrice);
        cy.contains("Thank you").click();


    }
};