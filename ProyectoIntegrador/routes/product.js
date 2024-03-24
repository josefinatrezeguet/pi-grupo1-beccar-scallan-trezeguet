const express = require('express');
const router = express.Router();
let product = require('../db/index.js');

//Ruta raíz de los productos (inicio)
router.get('/', function(req, res) {
});

//Ruta detalle de los productos
router.get('/detalle/:id', function(req, res) {
});

module.exports = router;