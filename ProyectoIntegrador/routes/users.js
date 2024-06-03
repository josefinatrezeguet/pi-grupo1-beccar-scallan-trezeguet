var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController");

router.get('/login', usersController.login);
router.post('/login', usersController.loginUser);
router.get('/register', usersController.register);
router.post('/register', usersController.store);
router.get('/profile', usersController.profile);
router.get('/edit', usersController.usersEdit);
router.post('/logout', usersController.logout);

module.exports = router;