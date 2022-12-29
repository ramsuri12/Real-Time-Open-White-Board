const express = require("express");
// const server = express();
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
app.use(express.static("public"))
// 127.0.0.1-> localhost
// web socket enabled

io.on('connection', (socket) => {
    console.log('a user connected');
  socket.on("size", function(size) {
    socket.broadcast.emit("onsize", size);
  });
  socket.on("color", function(color) {
    socket.broadcast.emit("oncolor", color);
  });

  socket.on("toolchange", function(tool) {
    socket.broadcast.emit("ontoolchange", tool);
  });
  socket.on("hamburger", function() {
    socket.broadcast.emit("onhamburger");
  });
  socket.on("mousedown", function(point) {
    socket.broadcast.emit("onmousedown", point);
  });
  socket.on("mousemove", function(point) {
    socket.broadcast.emit("onmousemove", point);
  });
  socket.on("undo", function() {
    socket.broadcast.emit("onundo");
  });
  socket.on("redo", function() {
    socket.broadcast.emit("onredo");
  });
});
http.listen(3000, function () {
    console.log('listening on *:3000');
});
// server.listen(3000, function () {
//     console.log("server is running at port 3000");
// })