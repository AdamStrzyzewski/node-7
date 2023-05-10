const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world - after update");
});

app.listen(3000, () => {
  console.log("running on port 3000");
});

// docker build . -t course/test-container
// docker ps
// docker ps -a
// docker run -P -d course/test-container
// docker logs <CONTAINER ID (from docker ps)>
// docker stop <CONTAINER ID (from docker ps)>
// docker run -p 42234:3000 -d course/test-container
// docker-compose up -d --build
