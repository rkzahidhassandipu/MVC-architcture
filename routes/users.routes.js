const express = require("express");
const { getUsers, saveUser } = require("../controllers/user.controllers");
const router = express.Router();


router.get("/users", getUsers);

router.post("/api/users", saveUser);

module.exports = router;