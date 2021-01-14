const express = require("express");
const app = express();
const server = app.listen(process.env.PORT || 3000);
const io = require("socket.io")(server);

app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// Web sockets. When a player is connected, we send their mouse position to the other player.
io.on("connection", socket => {
  socket.on("mouse", data => {
    socket.broadcast.emit("mouse", data);
  });
});