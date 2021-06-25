//  fun(); => incase of let => referenceError => cannot access fun before initialization !!!
// incase of var => TypeError => fun is not a function !!!
// let fun = function(){
//     console.log("I am a function expression !!!");
// }
// fun();


// arguments and parameters
// get paramteres in function statement
function callMe(param1 , param2){
    console.log(param1 , param2);
}

// function invoke +. known as arguments
let arg1 = 10;
let arg2 = 20;
callMe( arg1 , arg2  );