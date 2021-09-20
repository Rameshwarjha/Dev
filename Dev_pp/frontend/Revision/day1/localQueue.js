function queue(){
    const arr=[];

     return function (op,value) {
         if(op=="insert"){
             arr.push(value);
         }
         if(op=="out"){
             arr.shift();

         }
         if(op=="show"){
                 console.log(arr);
         }
    }
}

let f= queue();  //queue ko call kara 

f("insert", 1);
f("insert", 2);
f("insert", 3);


f("show");

f("insert", 4);
f("show")

f("out");
f("show");
