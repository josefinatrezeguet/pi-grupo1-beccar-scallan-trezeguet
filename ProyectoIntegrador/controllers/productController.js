const productController = {
    index: function(req, res) {
        res.render('product');
    },
    create: function(req, res) {
        res.render('product-add');
    }
}

module.exports = productController;