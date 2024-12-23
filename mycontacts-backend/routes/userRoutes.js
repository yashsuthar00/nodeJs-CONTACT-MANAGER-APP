const express = require('express');
const { registerUser, loginrUser, currentUser } = require('../controllers/userController');

const router = express.Router();

router.post("/register", registerUser)

router.post("/login", loginrUser)

router.get("/current", currentUser)

module.exports = router;