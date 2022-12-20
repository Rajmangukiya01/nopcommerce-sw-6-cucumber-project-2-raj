$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "ComputerPage Test",
  "description": "As a user I can arrange products and add in to shopping cart successfully",
  "id": "computerpage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6416518499,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User can add product to shopping cart successfully",
  "description": "",
  "id": "computerpage-test;user-can-add-product-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on computer",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on desktop",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select sort by position Name: A to Z",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "CLick on Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the Text Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can Select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I can Select ram \"8GB [+$60.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I can Select HDD radio \"400 GB [+$100.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can Select OS radio \"Vista Premium [+$60.00]\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I can Select check box \"Total Commander\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify the price \"$1,475.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I can Click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify the Message \"The product has been added to your shopping cart\" on Top green Bar",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I can close the bar clicking on close button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I can MouseHover on Shopping cart and Click on GO TO CART button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I can Verify the message \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I can change the Qty to \"2\" and Click on Update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Verify the Total \"$2,950.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I can click on checkbox I agree with the terms of service",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I can click on checkout",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Verify the Text \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I can click on checkout as a guest tab",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I can fill all mandatory field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I can click on next day air radio button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Select credit card radio button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click on the continue",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I can select master card",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I can fill all mandatory field for payment",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Verify payment method is \"Credit Card\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Verify shipping method is \"Next Day Air\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I can click on confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I can Verify text \"Thank you\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Verify the message \"Your order has been successfully processed!\"",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Click on the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Verify text \"Welcome to our store\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 435854700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputer()"
});
formatter.result({
  "duration": 992761600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktop()"
});
formatter.result({
  "duration": 402423900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSelectSortByPositionNameAToZ()"
});
formatter.result({
  "duration": 161085301,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnAddToCart()"
});
formatter.result({
  "duration": 5073448100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.verifyTheTextBuildYourOwnComputer()"
});
formatter.result({
  "duration": 1178489601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 24
    }
  ],
  "location": "ComputerSteps.iCanSelectProcessor(String)"
});
formatter.result({
  "duration": 205491800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.iCanSelectRam(String)"
});
formatter.result({
  "duration": 195346099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 24
    }
  ],
  "location": "ComputerSteps.iCanSelectHDDRadio(String)"
});
formatter.result({
  "duration": 111246599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 23
    }
  ],
  "location": "ComputerSteps.iCanSelectOSRadio(String)"
});
formatter.result({
  "duration": 98493199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander",
      "offset": 24
    }
  ],
  "location": "ComputerSteps.iCanSelectCheckBox(String)"
});
formatter.result({
  "duration": 101092400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,475.00",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.verifyThePrice(String)"
});
formatter.result({
  "duration": 5051036099,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanClickOnAddToCartButton()"
});
formatter.result({
  "duration": 53256700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.verifyTheMessageOnTopGreenBar(String)"
});
formatter.result({
  "duration": 278863000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanCloseTheBarClickingOnCloseButton()"
});
formatter.result({
  "duration": 56640199,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanMouseHoverOnShoppingCartAndClickOnGOTOCARTButton()"
});
formatter.result({
  "duration": 1609291000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 26
    }
  ],
  "location": "ComputerSteps.iCanVerifyTheMessage(String)"
});
formatter.result({
  "duration": 53730200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iCanChangeTheQtyToAndClickOnUpdateShoppingCart(String)"
});
formatter.result({
  "duration": 731520699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,950.00",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.verifyTheTotal(String)"
});
formatter.result({
  "duration": 66382300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanClickOnCheckboxIAgreeWithTheTermsOfService()"
});
formatter.result({
  "duration": 75321600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanClickOnCheckout()"
});
formatter.result({
  "duration": 624040100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 39671400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanClickOnCheckoutAsAGuestTab()"
});
formatter.result({
  "duration": 950579301,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanFillAllMandatoryField()"
});
formatter.result({
  "duration": 1522427900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanClickOnNextDayAirRadioButton()"
});
formatter.result({
  "duration": 403709199,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnContinue()"
});
formatter.result({
  "duration": 110803400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.selectCreditCardRadioButton()"
});
formatter.result({
  "duration": 295717000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnTheContinue()"
});
formatter.result({
  "duration": 80506299,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanSelectMasterCard()"
});
formatter.result({
  "duration": 342720699,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanFillAllMandatoryFieldForPayment()"
});
formatter.result({
  "duration": 672031501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit Card",
      "offset": 26
    }
  ],
  "location": "ComputerSteps.verifyPaymentMethodIs(String)"
});
formatter.result({
  "duration": 280979101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next Day Air",
      "offset": 27
    }
  ],
  "location": "ComputerSteps.verifyShippingMethodIs(String)"
});
formatter.result({
  "duration": 40179100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iCanClickOnConfirmButton()"
});
formatter.result({
  "duration": 96468200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iCanVerifyText(String)"
});
formatter.result({
  "duration": 584566499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been successfully processed!",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.verifyTheMessage(String)"
});
formatter.result({
  "duration": 37153000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.clickOnTheContinueButton()"
});
formatter.result({
  "duration": 370098900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to our store",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.verifyText(String)"
});
formatter.result({
  "duration": 50581500,
  "status": "passed"
});
formatter.after({
  "duration": 1014351999,
  "status": "passed"
});
formatter.uri("electronics.feature");
formatter.feature({
  "line": 1,
  "name": "Electronics Test",
  "description": "As a user I can navigate the product and place the order successfully",
  "id": "electronics-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2938174300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "USer can add the product and place the order successfully",
  "description": "",
  "id": "electronics-test;user-can-add-the-product-and-place-the-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I can mouse hover on electronics tab",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I can mouse hover on cell phones and click",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can verify the text \"Cell phones\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should click on list view tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should click on nokia lumia product",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Verify the text \"Nokia Lumia 1020\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should verify the price \"$349.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should change the quantity to 2",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should click on add to cart tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should Verify the Message \"The product has been added to your shopping cart\" on Top green Bar",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should click on close button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should mouse hover on shopping cart and click on go to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should verify msg \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should verify the quantity 2",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should verify total \"$698.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should click on the checkbox of agree terms of service",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should click on the checkout",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should verify text \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should click on register tab",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should verify \"Register\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should able to fill all mandatory fields",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I should click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Verify message \"Your registration completed\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should click on continue tab",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should Verify visible text \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click on the check box",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "click on checkout",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I should able to fill all delivery address mandatory field",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Click continue",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Click on the air radio button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should select credit card radio button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I should click continue",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I should select visa from select credit card drop down",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I should able to fill mandatory field of checkout",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "continue button click",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I should verify the payment method is \"Credit Card\"",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I should able to verify the shipping method is \"2nd Day Air\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I should able to verify the total is \"$698.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I should click on the confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I should verify the text \"Thank you\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I should verify the message \"Your order has been successfully processed!\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I should able to click on to the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I should able to verify the text \"Welcome to our store\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I should click on the logout link",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I should verify the URL",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 38899,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iCanMouseHoverOnElectronicsTab()"
});
formatter.result({
  "duration": 329021600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iCanMouseHoverOnCellPhonesAndClick()"
});
formatter.result({
  "duration": 906938899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 23
    }
  ],
  "location": "ElectronicsSteps.iCanVerifyTheText(String)"
});
formatter.result({
  "duration": 64705900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnListViewTab()"
});
formatter.result({
  "duration": 93457400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnNokiaLumiaProduct()"
});
formatter.result({
  "duration": 5953326500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia Lumia 1020",
      "offset": 17
    }
  ],
  "location": "ElectronicsSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 44215000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$349.00",
      "offset": 27
    }
  ],
  "location": "ElectronicsSteps.iShouldVerifyThePrice(String)"
});
formatter.result({
  "duration": 36300199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 32
    }
  ],
  "location": "ElectronicsSteps.iShouldChangeTheQuantityTo(int)"
});
formatter.result({
  "duration": 161663100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnAddToCartTab()"
});
formatter.result({
  "duration": 105153201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 29
    }
  ],
  "location": "ElectronicsSteps.iShouldVerifyTheMessageOnTopGreenBar(String)"
});
formatter.result({
  "duration": 228392601,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnCloseButton()"
});
formatter.result({
  "duration": 80501401,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldMouseHoverOnShoppingCartAndClickOnGoToCartButton()"
});
formatter.result({
  "duration": 1529185300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 21
    }
  ],
  "location": "ElectronicsSteps.iShouldVerifyMsg(String)"
});
formatter.result({
  "duration": 45212400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 29
    }
  ],
  "location": "ElectronicsSteps.iShouldVerifyTheQuantity(int)"
});
formatter.result({
  "duration": 31417800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$698.00",
      "offset": 23
    }
  ],
  "location": "ElectronicsSteps.iShouldVerifyTotal(String)"
});
formatter.result({
  "duration": 35145800,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnTheCheckboxOfAgreeTermsOfService()"
});
formatter.result({
  "duration": 65180200,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnTheCheckout()"
});
formatter.result({
  "duration": 528790799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 22
    }
  ],
  "location": "ElectronicsSteps.iShouldVerifyText(String)"
});
formatter.result({
  "duration": 33364599,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnRegisterTab()"
});
formatter.result({
  "duration": 325597500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 17
    }
  ],
  "location": "ElectronicsSteps.iShouldVerify(String)"
});
formatter.result({
  "duration": 40549601,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldAbleToFillAllMandatoryFields()"
});
formatter.result({
  "duration": 750365400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnRegisterButton()"
});
formatter.result({
  "duration": 557191700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 16
    }
  ],
  "location": "ElectronicsSteps.verifyMessage(String)"
});
formatter.result({
  "duration": 33525000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnContinueTab()"
});
formatter.result({
  "duration": 294551100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 30
    }
  ],
  "location": "ElectronicsSteps.iShouldVerifyVisibleText(String)"
});
formatter.result({
  "duration": 33065499,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.clickOnTheCheckBox()"
});
formatter.result({
  "duration": 25034957600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027termsofservice\u0027]\"}\n  (Session info: chrome\u003d108.0.5359.125)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [984c26a70cc50d6ade1080005263c7fa, findElement {using\u003dname, value\u003dtermsofservice}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\RAJ\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:55971}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:55971/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 984c26a70cc50d6ade1080005263c7fa\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:365)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:357)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:45)\r\n\tat com.nopcommerce.demo.pages.CartPage.clickCheckBox(CartPage.java:154)\r\n\tat com.nopcommerce.demo.steps.ElectronicsSteps.clickOnTheCheckBox(ElectronicsSteps.java:140)\r\n\tat ✽.And Click on the check box(electronics.feature:39)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ElectronicsSteps.clickOnCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldAbleToFillAllDeliveryAddressMandatoryField()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.clickContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.clickOnTheAirRadioButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.clickContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldSelectCreditCardRadioButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldSelectVisaFromSelectCreditCardDropDown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldAbleToFillMandatoryFieldOfCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.continueButtonClick()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit Card",
      "offset": 39
    }
  ],
  "location": "ElectronicsSteps.iShouldVerifyThePaymentMethodIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2nd Day Air",
      "offset": 48
    }
  ],
  "location": "ElectronicsSteps.iShouldAbleToVerifyTheShippingMethodIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$698.00",
      "offset": 38
    }
  ],
  "location": "ElectronicsSteps.iShouldAbleToVerifyTheTotalIs(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnTheConfirmButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you",
      "offset": 26
    }
  ],
  "location": "ElectronicsSteps.iShouldVerifyTheText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been successfully processed!",
      "offset": 29
    }
  ],
  "location": "ElectronicsSteps.iShouldVerifyTheMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldAbleToClickOnToTheContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to our store",
      "offset": 34
    }
  ],
  "location": "ElectronicsSteps.iShouldAbleToVerifyTheText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldClickOnTheLogoutLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldVerifyTheURL()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1316096400,
  "status": "passed"
});
formatter.uri("homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Homepage Test",
  "description": "As a user I can navigate the pages successfully",
  "id": "homepage-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3170049599,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User can navigate electronics page successfully",
  "description": "",
  "id": "homepage-test;user-can-navigate-electronics-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I select electronics",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Electronics text displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 82600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iSelectElectronics()"
});
formatter.result({
  "duration": 1011460900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.electronicsTextDisplayed()"
});
formatter.result({
  "duration": 31475300,
  "status": "passed"
});
formatter.after({
  "duration": 815325099,
  "status": "passed"
});
});