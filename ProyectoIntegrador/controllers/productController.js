const db = require('../db/index');

const productController = {
    index: function(req, res) {
        res.render('product', {title: "Detalle del producto", productos: db.productos});
    },
    create: function(req, res) {
        res.render('product-add', {title: "Añadir producto", usuario: db.usuario});
    }
}

module.exports = productController;