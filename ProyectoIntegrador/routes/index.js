var express = require('express');
var router = express.Router();

const indexController = require("../controllers/indexController");
/* GET home page. */
router.get('/', indexController.index);
router.get('/search-results', indexController.search);

module.exports = router;