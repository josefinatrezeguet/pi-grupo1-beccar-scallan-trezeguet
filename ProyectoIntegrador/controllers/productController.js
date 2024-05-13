const db = require('../database/models');

const productController = {
    index: function(req, res) {
        res.render('product', {title: "Detalle del producto", productos: null});
    },
    create: function(req, res) {
        res.render('product-add', {title: "Añadir producto", usuario: null});
    }
}

module.exports = productController;