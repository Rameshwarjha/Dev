

let cellcontent = document.querySelector(".cells-content");


function initcells(){//for more information read poc in facts of cells
    let cells = "";  //empty variable to append whole html of making of 2600 cell in it

    //making of top left cell
    cells +=`<div class="top-left-cell"> </div>`

    //making of ABCDEFGH wala top row
    cells += `<div class="top-row">`
    for(i=0;i<26;i++){
        cells += `<div class="top-row-cell">${String.fromCharCode(65+i)} </div>`
    }
    cells +=`</div>`

    cells +=`<div class="left-col">`
    for(i=0;i<100;i++){
        //making of left wala cell containing 123456789
        cells += `<div class="left-col-cell">${i+1}</div>`

    }
    cells += `</div>`  //end of left-col

    cells += `<div class="rows-container">` //<div> jisme saare rows honge ek saath
    for(i=0;i<100;i++){//100 rows

        cells += `<div class="row">` //start of a row
        for(j=0;j<26;j++){//this loop makes 26 cells in a row 

            cells += `<div class="cell" contenteditable="true"> cell </div>` //a cell

        }
        
        cells += `</div>`  //end of a row


    }
    cells += `</div>`   //end of rows container


    //putting the html of cells in its place
    cellcontent.innerHTML= cells; 

}

initcells();
