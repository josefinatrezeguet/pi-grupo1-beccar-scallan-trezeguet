const db = require('../database/models');

const productController = {
    index: function(req, res) {
        let id = req.params.id;
        let comentarios;
        let productos;
        
        db.Producto.findByPk(id)
        .then(function(results){
            productos = results;
            return db.Comentario.findAll({
                limit: 5,
            });
        })
        .then(function(results){
            comentarios = results;
            return res.render('product', {title:"Productos", productos: productos, comentarios: comentarios});
        })
        .catch(function(error){
            console.log(error);
        });
    },
    create: function(req, res) {

        db.Usuario.findOne()
            .then(function(results){
                return res.render('product-add', {title:"Añadir producto", usuario: results});
            })
            .catch(function(error){
                console.log(error);
            });
    }
}

module.exports = productController;