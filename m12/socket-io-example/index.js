const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

io.on("connection", (clientSocket) => {
  console.log("user connected");
  clientSocket.emit("message", "You are connected");

  clientSocket.on("response", (data) => {
    console.log(data);
  });
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
