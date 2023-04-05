/// <reference types= "cypress" />

import { RegisterPage } from "../support/pages/registerPage.cy";

import { LoginPage } from "../support/pages/loginPage.cy";

import { HomePage } from "../support/pages/homePage.cy";

import { ProductPage } from "../support/pages/productPage.cy";

import { ShoppingCardPage } from "../support/pages/shoppingCardPage.cy";

describe("pre entrega", () => {
  let setdata, productData;

  
  const registerPage = new RegisterPage();
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  const productPage = new ProductPage();
  const shoppingCardPage = new ShoppingCardPage();

  before('Before',() => {
    cy.fixture("setdata").then(data => {
      setdata = data

    });
    cy.fixture("productData").then(data => {
      productData = data

    });
  });

  
  beforeEach("Login", () => {
    cy.visit('');
    registerPage.dblClickStartSession();
    loginPage.login(setdata.loginData.user , setdata.loginData.password);
    
  })
  
  
  it ('Test', () => {
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





  })

  

})