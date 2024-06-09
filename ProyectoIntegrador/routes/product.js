var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");

// Middleware de autenticación
const logueado = (req, res, next) => {
    if (req.session.user || req.cookies.userId) {
        next();
    } else {
        res.redirect('/users/login');
    }
};

// Rutas
router.get('/id/:id', productController.index);
router.get('/add', logueado, productController.create);
router.post('/add', logueado, productController.store);
router.post('/editProduct', logueado, productController.formUpdate);
router.post('/edit', logueado, productController.update);
router.post('/delete', logueado, productController.destroy);

module.exports = router;
