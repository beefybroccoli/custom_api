const express = require("express");
const server = express();
const routerUsers = require("./users/router-users");

server.use(express.json());
server.use(express.Router());
server.use("/api/users", routerUsers);

server.get("/", (req, res)=>{
    res.status(200).json({message:"hello world"});
})

module.exports = server;