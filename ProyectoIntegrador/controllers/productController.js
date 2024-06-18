const db = require('../database/models');
const { validationResult } = require('express-validator');

const productController = {
    
    index: function(req, res) {
        let id = req.params.id;
        let criterio = {
            include: [
              {association: "usuario"},
              {association: "comentarios", 
                include: [{association: 'usuario'} 
                ]}
            ]
        }
        let condition = false;

        db.Producto.findByPk(id, criterio)
        .then(function(results){

            if (req.session.user != undefined && req.session.user.id == results.usuario.id) {
                condition = true;
            }
            return res.render('product', {title:"Product", productos: results, comentarios: results.comentarios, condition: condition});
        })
        .catch(function(error){
            console.log(error);
        });
    },

    create: function(req, res) {

        if (req.session.user != undefined) {
            return res.render('product-add', {title:"Añadir producto"})
        }
        else {
            return res.redirect("/users/login");
        }
    },

    store: function(req, res) {
        let form = req.body;
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Producto.create(form)
            .then((result) => {
                return res.redirect("/product/id/" + result.id)
            }).catch((err) => {
              return console.log(err);
            });        
        } 
        else {
            return res.render('product-add', {title: "Registrate", errors: errors.mapped(), old: req.body });        
        }
    },

    formUpdate: function(req, res) {
        
        let form = req.body;

        let criterio = {
            include: [
              {association: "usuario"}
            ]}

        db.Producto.findByPk(form.id, criterio)
        .then(function(results){
            return res.render('product-edit', {title: "Editar el producto", productos: results});
        })
        .catch((err) => {
            return console.log(err);
          });
        
    },

    update: (req, res) => {
        let form = req.body;
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            let filtrado = { where: { id: form.id } }

            if (req.session.user != undefined) {
                let id = req.session.user.id;
                if (form.idUsuario == id) {
                    db.Producto.update(form, filtrado)
                        .then((result) => {
                            return res.redirect("/product/id/" + form.id)
                        }).catch((err) => {
                            return console.log(err);
                        });
                } else {
                    return res.redirect("/users/profile/id/" + id);
                }
            } else {
                return res.redirect("/users/login");
            }
        } 
        else {

            let criterio = { include: [{ association: "usuario" }] }

            db.Producto.findByPk(form.id, criterio)
                .then(function (results) {
                    return res.render('product-edit', {
                        title: "Editar producto",
                        errors: errors.mapped(),
                        old: req.body,
                        productos: results
                    });
                })
                .catch((err) => {
                    return console.log(err);
                });
        }
    },

    destroy: (req, res) => {
        let form = req.body;
        let filtrado = { where: { id: form.id } }

        if (req.session.user != undefined) {
            let id = req.session.user.id;
            if (form.idUsuario == id) {
                db.Producto.destroy(filtrado)
                    .then((result) => {
                        return res.redirect("/");
                    })
                    .catch((err) => {
                        return console.log(err);
                    });
            } else {
                return res.redirect("/users/profile/id/" + id);
            }
        } else {
            return res.redirect("/users/login");
        }
    },
    comment: function(req, res) {
        let form = req.body;
        let errors = validationResult(req);
    
        if (errors.isEmpty()) {
            if (req.session.user && req.session.user.id) { 
                let comentario = {
                    id_usuario: req.session.user.id,
                    id_producto: req.params.id,
                    texto: form.comentario 
                }
    
                db.Comentario.create(comentario)
                .then((result) => {
                    return res.redirect("/product/id/" + req.params.id);
                }).catch((err) => {
                    console.log(err);
                    return res.redirect("/product/id/" + req.params.id); 
                });
            } else {
                return res.redirect("/users/login");
            }
        } else {
            let id = req.params.id;
            let condition = false;
            let criterio = {
                include: [
                    {association: "usuario"},
                    {association: "comentarios", include: [{association: 'usuario'}]}
                ],
                order: [['createdAt', 'DESC']]
            }
    
            db.Producto.findByPk(id, criterio)
            .then(function(results){
                if (req.session.user != undefined && req.session.user.id == results.usuario.id) {
                    condition = true;
                }
    
                return res.render('product', {
                    title: "Producto",
                    productos: results,
                    comentarios: results.comentarios,
                    condition: condition,
                    errors: errors.array(),
                    old: req.body
                });
            })
            .catch(function(error){
                console.log(error);
                return res.redirect("/product/id/" + id);
            });   
        }
    }

};

module.exports = productController;
