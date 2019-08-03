const express = require("express");
const actionRouter = require("./data/helpers/actionModel");
const projectRouter = require("./data/helpers/projectModel");

const server = express();

server.use(express.json());
server.use("/api/action", actionRouter);
server.use("/api/project", projectRouter);

server.get("/", (req, res) => {
    res.send(`<h2>Web API Sprint Challenge</h2>`);
});