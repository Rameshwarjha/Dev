const puppeteer = require("puppeteer");
const id = "papogip834@asfalio.com";
const pw = "123456789";
let tab;


let browseropenpromise = puppeteer.launch({
    headless: false , 
    defaultviewport: null,
    args: ["--start-maximized"],
    slowMo: 100
    
     
});

browseropenpromise.then(function(browser){
    console.log("browser opened");
   // console.log(browser);

   

    let allpagespromise = browser.pages();
    return allpagespromise; 

})
.then(function(pages){
    tab = pages[0];
    let pageopenpromise = tab.goto("https://www.hackerrank.com/auth/login");

    return pageopenpromise;

})
.then(function(){
    let idtypepromise = tab.type("#input-1" , id); 
    return idtypepromise;

})
.then(function(){
    let pwtypepromise = tab.type("#input-2", pw);
    return pwtypepromise; 


})
.then(function(){
    let loginpromise = tab.click('.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled');
    return loginpromise;

})
.then(function(){
    console.log("logged in to hackerrank !!!");

}).catch(function(error){
    console.error(error);

});