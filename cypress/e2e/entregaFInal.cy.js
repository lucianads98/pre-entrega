/// <reference types= "cypress" />
import { HomePage } from "../support/pages/homePage.cy";

import { ProductPage } from "../support/pages/productPage.cy";

import { ShoppingCardPage } from "../support/pages/shoppingCardPage.cy";

import { CheckOut } from "../support/pages/CheckOut.cy";

describe("pre entrega", () => {
  let productData, cardData;

  const homePage = new HomePage();
  const productPage = new ProductPage();
  const shoppingCardPage = new ShoppingCardPage();
  const checkoutPage = new CheckOut();

  const username = "Luciana De Souza";
  const password = "222233!";
  const gender = "Female";
  const day = "1";
  const month = "12";
  const year = "1998";

  before('Before', () => {
    cy.fixture("productData").then(data => {
      productData = data

    });
    cy.fixture("cardData").then(data => {
      cardData = data

    });

     cy.request({
      url: 'https://pushing-it.onrender.com/api/register',
      method: 'POST',
      body: {
        username: username,
        password: password,
        gender: gender,
        day: day,
        month: month,
        year: year,
      },
    }).then(result => {
      cy.log(result);
      expect(result.status).is.eql(200);

      cy.request({
        url: 'https://pushing-it.onrender.com/api/login',
        method: 'POST',
        body: {
          username: username,
          password: password
        },
      }).then(resp => {
        cy.log(resp);
        expect(resp.status).is.eql(200);
        localStorage.setItem("user", resp.body.user.username);
        localStorage.setItem("token", resp.body.token);
      })
    })
  });


  it('Test', () => {
    cy.visit("");
    homePage.clickOnlineShop();
    productPage.clickAddToCart(productData.product1.name);
    productPage.clickAddToCart(productData.product2.name);
    productPage.clickGoShoppingCart();
    shoppingCardPage.productNameVerification(productData.product1);
    shoppingCardPage.productPriceVerification(productData.product1);
    shoppingCardPage.productNameVerification(productData.product2);
    shoppingCardPage.productPriceVerification(productData.product2);
    shoppingCardPage.clickShowTotalPrice();
    shoppingCardPage.checkTotalPrice(productData);
    shoppingCardPage.clickGoToCheckOut();
    checkoutPage.completeData(cardData.name, cardData.lastName, cardData.cardNumber); 
    cy.wait(10000);
    checkoutPage.checkTicket(cardData.name, cardData.lastName, cardData.cardNumber, productData);

      

  })

  after("resetData", () => {
    localStorage.setItem("user", "");
    localStorage.setItem("token", "");
    cy.request({
      url: `https://pushing-it.onrender.com/api/deleteuser/${username}`,
      method: 'DELETE',
    }).then(resp1 => {
      expect(resp1.status).is.eql(200);
    })

  })
})