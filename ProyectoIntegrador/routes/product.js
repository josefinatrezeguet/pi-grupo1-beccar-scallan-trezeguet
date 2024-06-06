var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");

router.get('/id/:id', productController.index);
router.get('/add', productController.create);
router.post('/add', productController.store);
router.post('/editProduct', productController.formUpdate);
router.post('/edit', productController.update);
router.post('/delete', productController.destroy);

module.exports = router;