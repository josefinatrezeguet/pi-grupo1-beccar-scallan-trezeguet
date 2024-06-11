const db = require('../database/models');
const { Op } = db.Sequelize;
const { validationResult } = require('express-validator');

const productController = {
    index: (req, res) => {
        const id = req.params.id;
        const rel = {
            include: [
                { association: "usuario" },
                { association: "comentarios", include: [{ association: "usuario" }] }
            ]
        };

        db.Producto.findByPk(id, rel)
            .then(results => {
                // Determina si el usuario actual es el propietario del producto
                const user = req.session.user || req.cookies.userId;
                const condition = user && user.id === results.usuario.id;

                res.render('product', {
                    title: "Producto",
                    usuario: user,
                    productos: results,
                    comentarios: results.comentarios,
                    condition: condition // Pasa la variable condition a la vista
                });
            })
            .catch(error => console.error(error));
    },

    create: (req, res) => {
        const userId = req.session.user?.id || req.cookies.userId;

        if (!userId) {
            return res.redirect("/users/login");
        }

        db.Usuario.findByPk(userId)
            .then(results => {
                res.render('product-add', {
                    title: "Añadir producto",
                    usuario: results
                });
            })
            .catch(error => console.error(error));
    },

    store: (req, res) => {
        let form = req.body;
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Producto.create(form)
                .then((result) => {
                    return res.redirect("/product/id/" + result.id)
                }).catch((err) => {
                    return console.log(err);
                });
        } else {
            return res.render('product-add', {
                title: "Registrate",
                errors: errors.mapped(),
                old: req.body
            });
        }
    },

    formUpdate: (req, res) => {
        let form = req.body;
        let criterio = {
            include: [{ association: "usuario" }]
        }

        db.Producto.findByPk(form.id, criterio)
            .then(function (results) {
                return res.render('product-edit', {
                    title: "Editar producto",
                    productos: results
                });
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
        } else {

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
    }
};

module.exports = productController;
