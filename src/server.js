const express = require("express");
const path = require("path");

const routes = require("./routes");

const server = express();

server.use(express.static("public"));
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.use(express.urlencoded({ extended: true }));
server.use(routes);

// server.get("/", (req, res) => {
//   res.send("Eaeee");
// });

const serverPort = 3001;
server.listen(serverPort, () => console.log(`Rodando na porta: ${serverPort}`));
