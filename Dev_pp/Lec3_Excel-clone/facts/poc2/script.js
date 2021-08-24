let cellcontent= document.querySelector(".cell-content");

function init(){

    //format to be made as

//     <div class="row">
//         <div class="cell"></div>
//         <div class="cell"></div>
//         <div class="cell"></div>
//         <div class="cell"></div>
//         <div class="cell"></div>
//     </div>
//     <div class="row">
//     <div class="cell"></div>
//     <div class="cell"></div>
//     <div class="cell"></div>
//     <div class="cell"></div>
//     <div class="cell"></div>
// </div>
// <div class="row">
//         <div class="cell"></div>
//         <div class="cell"></div>
//         <div class="cell"></div>
//         <div class="cell"></div>
//         <div class="cell"></div>
//     </div>

//with 100 rows and 26 columns in each row containing 26 cells


let cell=" ";     //hamne cell ke code ko ek cell naam ke variable mai dalwa lenge iske liye
// hamne empty string se variable ko shuru kar liya ab saara code isi mai dalwa lenge

for(i=0;i<100;i++){// 100 rpws 

    //initialise row wala div
    cell +=`<div class="row">`   // ek row ko append kiya
    for(j=0;j<26;j++){//26 columns

        // har row mai 26 cell dalwa liye ab 
        cell +=`<div class="cell">cell </div>` // cell ka code append kiya
    }

    // ab ek row ka kaam khatam tow div bhi khatam
    cell +=`</div>`  //row ke end ko append kiya 
}


// cellcontent.innerHTML.append(cell);  wrong method

// console.log(cell);
cellcontent.innerHTML= cell;

}

init();

