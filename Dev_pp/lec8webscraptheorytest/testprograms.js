// (function () {
//     if ((-100 && 100 && "0") || [] === true || 0) {
//       console.log(1);
//       if ([] || (0 && false)) {
//         console.log(2);
//       }
  
//       if (Infinity && NaN && "false") {
//         console.log(3);
//         if ("") {
//           console.log(4);
//         }
//       } else {
//         console.log(5);
//         if (({} || false === "") && !(null && undefined)) {
//           console.log(6);
//         }
//       }
//     } else {
//       console.log(7);
//     }
//   })();



// let arr = [1, 2, 3];
// (function () {
//   for (x in arr) arr.unshift(arr.pop());
//   console.log(arr);
// })();

// let randomAdder = function (arr = ["a", "b"]) {
//   arr[arr.length * arr.length] = arr.length * arr.length;
// };

// randomAdder(arr);
// randomAdder();

// console.log(arr[9]);
// console.log(arr[8]);



// et a = 2;
// {
//   let a = 3;
//   {
//     let a = 4;
//     {
//       let a = 5;
//       console.log(a);
//     }
//     console.log(a);
//   }
//   console.log(a);
// }
// console.log(a);l



// const num = 5;
// console.log(num + 5);
// let a = 6;
// a = a + num;
// console.log(num - a);


// let a = "This only works if and only if";

// let b = a.slice(a.indexOf("only"));

// let c = b.lastIndexOf("only");

// b[c] = "i";

// console.log(a);
// console.log(b);



// let obj = {"concept":""};


// console.log(
//   JSON.parse(
//     JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12)
//   ).concept
// );


// console.log(a);
// f(2, 3, 4, 5);

// var a = 1;
// var a = 2;
// console.log(a);
// console.log(b);
// let b = 2;

// function f() {
//   console.log(arguments);
// }


// let a;
// console.log(a);


// function A() {
//   let a = 2;
//   console.log(a);

//   function C() {
//     console.log(a);

//     function D() {
//       console.log(a);

//       a = 2;
//     }
//     D();
//     a = 3;
//   }
//   C();
// }

// function B() {
//   let a;
//   console.log(a);
  
//   function E() {
//     a = 6;
//     console.log(a);
    
//   }
  
//   a = 2;
//   E();
//   console.log(a);
// }

// function F() {
//   console.log(a);
//   a = 2;
// }

// a = 3;

// F();
// B();
// A();

// function f() {
//     console.log(arguments);
//   }
  
//    function f(a, b) {
//      return a + b;
//   }//
  
//   console.log(f(2, 3, 4, 5));
  
//   function f(x, y, z, t) {
//       return x + y + z + t;
//   }
  
//   console.log(f(2, 3, 4, 5));
  

function convertToBinary(x) {
    let bin = 10
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        console.log(
            `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
        );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}