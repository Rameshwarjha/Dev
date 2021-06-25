const fs = require("fs");

let pendingpromise =fs.promises.readFile("./f1.txt");
console.log(pendingpromise);


pendingpromise.then(function(data){
    console.log("Inside then ka callback i.e. scb");
    console.log(data);
    console.log(pendingpromise);

});

pendingpromise.catch(function(error){
    console.log("InsidE CATCH ka callback i.e. Fcb");
    console.log(error);
    console.log(pendingpromise);

});