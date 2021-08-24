let topRow=document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let topleftcell= document.querySelector(".top-left-cell");

//dynamically setting height and width so that scroll function works properly and the top row and left-col remain fix at their
//place while they are moving 
cellcontent.addEventListener("scroll", function(e){
    // console.log(e);
    let left= e.target.scrollLeft;
    let top= e.target.scrollTop;

    topRow.style.top = top+"px";  // to make top fix as when cursor scrolls new top changes dynamically and sets new top to prevent it from moving

    // topRow.style.left = left+"px"; //galat hai iski wajah se left fix ho gaya
    
    // leftCol.style.top = top+"px";  //galat hai iski wajah se left col ka top fix ho gaya tha
    leftCol.style.left = left+"px";  //to only allow left col scroll in direction of the vertical and we fix the left by dynamically adding left each time when scrolling is done
    topleftcell.style.top=top + "px";
    topleftcell.style.left = left + "px";


})