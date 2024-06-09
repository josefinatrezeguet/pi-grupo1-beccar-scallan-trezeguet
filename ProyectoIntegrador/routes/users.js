var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController");

// Middleware para verificar si el usuario está logueado
const logueado = (req, res, next) => {
    if (req.session.user || req.cookies.userId) {
        next(); 
    } else {
        res.redirect('/users/login'); 
    }
};

// Rutas públicas
router.get('/login', usersController.login);
router.post('/login', usersController.loginUser);
router.get('/register', usersController.register);
router.post('/register', usersController.store);

// Rutas protegidas por la verificación de sesión
router.get('/profile', logueado, usersController.profile);
router.get('/edit', logueado, usersController.usersEdit);
router.post('/logout', usersController.logout);

module.exports = router;
