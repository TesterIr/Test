const { Given, When, Then } = require('@cucumber/cucumber');
const homeobject = require('../pageobjects/Home.page');
const catalogobject = require('../pageobjects/Catalog.page');
const checkoutobject = require('../pageobjects/Checkout.page');
const { GSM_CALL_ACTIONS } = require('appium-adb/lib/tools/adb-emu-commands');


Given(/^User is on Home page$/,()=>{
    homeobject.open(); 
    homeobject.verifyCurrentPage();
});

When(/^User clicks Catalog link$/,()=>{
    homeobject.navigateToCatalogPage();
});

When(/^User clicks "Logige sisse"$/,()=>{
    catalogobject.clickTopLoginButton();
});


When(/^User clicks on Item link$/,()=>{
    catalogobject.clickFirstItem();
});

When(/^User clicks on Add to cart item button$/,()=>{
    catalogobject.clickAddToCartButton();
});

Then(/^User moves to Catalog page$/,()=>{
    catalogobject.verifyCatalogPage();
})
Then(/^item should be added to the cart$/, ()=>{
    catalogobject.clickOpenCartTotal();  
})

When(/^user credentials should be entered$/,()=>{
    checkoutobject.loginAsRegisteredUser();
});



When(/^user enter valid credentials into login form$/,()=>{
    catalogobject.fillUserNameField(); 
    catalogobject.fillPasswordField();
});




//User clicks "Logige sisse"