var express = require('express');
var router = express.Router();
const productController = require("../controllers/productController");

router.get('/', productController.index);
router.get('/add', productController.create);

module.exports = router;