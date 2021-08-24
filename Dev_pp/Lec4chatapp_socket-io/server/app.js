

const express = require("express");
app = express();

const http = require('http');
const server = http.createServer(app);

const{ Server }= require( "socket.io");

const io = new Server(server);

app.use(express.static("public"));

const userlist = [];

io.on("connection", function(socket){
    console.log(socket.id + " connected");

    socket.on("userconnected", function(username){
        let userobject = {userid : socket.id , username : username}
        userlist.push(userobject);

        console.log(userlist);
        
        socket.broadcast.emit("join", username);

    })
    socket.on("message", function(messageobj){
        socket.broadcast.emit("chatmessage", messageobj);

    })

    socket.on("disconnection", function(socket.id){
        for(userid )

    })

    

});

server.listen(5500, function(){
    console.log("server started at port 5500");
});




















// //express 
// //nodemon
// //socket.io

// const express= require("express");
// const app = express();
// const http = require('http');
// const server = http.createServer(app);

// const { Server } = require("socket.io");

// const io = new Server(server);

// app.use(express.static("public"));


// io.on('connection', function(socket){
//     console.log("a user connected");
//     console.log(socket);
    
// })



// // app.use(express.json());  // to view request object 



// // app.get("/home", function(request, response){
// //     // console.log(request);
// //     response.send("welcome to homepage !!!");

// // })

// app.listen(5500, function(){
//     console.log("server started at port 5500");

// })