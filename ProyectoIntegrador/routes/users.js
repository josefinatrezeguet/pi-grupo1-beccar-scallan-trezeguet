var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

router.get('/perfil/:id', usersController.show);

router.get('/edit', usersController.profileEdit);

router.post('/edit', usersController.editPost);

router.get('/register', usersController.register);

router.get('/login', usersController.login);

router.post('/register', usersController.store);

router.post('/login', usersController.loginPost);

router.post('/logout', usersController.logout);

router.get("/buscarperfil/:id", usersController.show)

module.exports = router;