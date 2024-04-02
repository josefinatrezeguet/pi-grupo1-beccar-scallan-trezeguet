var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('product');
  });

router.get('/add', function(req, res, next) {
res.render('product-add');
});

module.exports = router;