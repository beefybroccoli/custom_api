const express = require("express");
const router = express();
const modelUsers = require("../users/model-users");

router.get("/", (req, res)=>{
    const users = modelUsers.getUsers();
    res.status(200).json(users);
})

module.exports = router;