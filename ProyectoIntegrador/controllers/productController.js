const db = require('../db/index');

const productController = {
    index: function(req, res) {
        res.render('product', {title: "Product Detail", productos: db.productos});
    },
    create: function(req, res) {
        res.render('product-add', {title: "Add Product"});
    }
}

module.exports = productController;