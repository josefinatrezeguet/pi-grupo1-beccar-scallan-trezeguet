const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController");
const { body } = require('express-validator');

let validations = [
    body('nombre')
        .notEmpty().withMessage('El campo "nombre del producto" es obligatorio.'),
    body('descripcion')
        .notEmpty().withMessage('El campo "descripción" es obligatorio.'),
    body('imagen')
        .notEmpty().withMessage('El campo "imagen" es obligatorio.').bail()
        .isURL().withMessage('El campo "imagen" debe ser una URL válida.')
]
let validationsComentario = [
    body('comentario')
        .notEmpty().withMessage('El comentario no puede estar vacío.').bail()
        .isLength({ min: 3 }).withMessage('El comentario debe tener al menos 3 caracteres.')
];

router.get('/id/:id', productController.index);
router.get('/add', productController.create);
router.post('/add', validations, productController.store);
router.post('/editProduct', productController.formUpdate);
router.post('/edit', validations, productController.update);
router.post('/delete', productController.destroy);
router.post('/id/:id', validationsComentario, productController.comment);

module.exports = router;