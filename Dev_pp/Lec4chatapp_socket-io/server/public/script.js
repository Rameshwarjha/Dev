
let chatinput= document.querySelector(".chat-input");
let chatwindow = document.querySelector(".chat-window");

let username = prompt(" Enter your name ?");

console.log("hello");
chatinput.addEventListener("keypress", function(e){
    // console.log(e);
    if(e.key=="Enter" && chatinput.value){
        let chatdiv=document.createElement("div");
        chatdiv.classList.add("chat");
        chatdiv.classList.add("right");
        chatdiv.textContent= username + " : " + chatinput.value ;
        chatwindow.append(chatdiv);

        socket.emit("message", {username : username, message : chatinput.value});
        chatinput.value="";   //after input we will make the input box empty 

    }

})