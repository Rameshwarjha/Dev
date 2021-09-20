let content = process.argv.slice(2);
let fs = require("fs");

//console.log(content);

let flags = [];
let files = [];
for(let i=0; i<content.length; i++){
    //"-s"
    if(content[i].startsWith('-')){
        flags.push(content[i])

    }
    else {
        files.push(content[i]);

    }
}



let filekadata = "";
for(let i=0; i<files.length ; i++){
    //f1.txt => f2.txt
    filekadata+= fs.readFileSync(files[i]) +"";

}
console.log(filekadata);
