socket.emit("userconnected", username);

//on new join 
socket.on("join", function(username){
    let joinchat = document.createElement("div");
    joinchat.classList.add("join");
    joinchat.classList.add("chat");

    joinchat.textContent = username  + " joined the chat"

    chatwindow.append(joinchat);

});

socket.on("chatmessage", function(messageobj){
    let incomingmessage= document.createElement("div");
    incomingmessage.classList.add("chat");
    incomingmessage.classList.add("left");

    incomingmessage.textContent= messageobj.username + " : " + messageobj.message
    
    chatwindow.append(incomingmessage);

})

socket.on("userdisconnected", function(leftuser){
    let leftuserkadiv = document.createElement("div");
    leftuserkadiv.classList.add("chat");
    leftuserkadiv.classList.add("leave");
    leftuserkadiv.textContent = leftuser+ "left the chat";

    chatwindow.append(leftuserkadiv);

    
})