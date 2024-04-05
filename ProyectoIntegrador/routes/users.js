var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController");

router.get('/register', usersController.register);

router.get('/login', usersController.login);

router.get('/edit', usersController.usersEdit);

router.get('/profile', usersController.profile);

module.exports = router;