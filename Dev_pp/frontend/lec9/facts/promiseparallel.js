//multiple files
//promisified function
//read files at the same time i.e. parallely!!

const fs = require("fs");

let f1kapendingpromise = fs.promises.readFile("./f1.txt");
let f1kapendingpromise = fs.promises.readFile("./f1.txt");
let f1kapendingpromise = fs.promises.readFile("./f1.txt");

f1kapendingpromise.then(function(data))  