const WebSocketServer = new require("ws");

const wss = new WebSocketServer.Server({ port: 8080 });

let clients = [];

wss.on("connection", (ws) => {
  let id = clients.length;
  clients[id] = ws;
  console.log("There was a connection", `new client has id ${id}`);
  clients[id].send(`Hi, your id is ${id}`);
  clients.forEach((client, index) => {
    if (index !== id) {
      client.send(`There is a new member joining with id ${id}`);
    }
  });
});
