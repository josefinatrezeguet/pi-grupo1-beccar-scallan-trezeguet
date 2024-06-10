const db = require('../database/models');
const { Op } = db.Sequelize;

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
                res.render('product', {
                    title: "Producto",
                    usuario: req.session.user || req.cookies.userId,
                    productos: results,
                    comentarios: results.comentarios
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
        db.Producto.create(req.body)
            .then(result => res.redirect(`/product/id/${result.id}`))
            .catch(err => console.error(err));
    },

    formUpdate: (req, res) => {
        const { id } = req.body;

        db.Producto.findByPk(id)
            .then(results => {
                res.render('product-edit', {
                    title: "Editar producto",
                    productos: results,
                    usuario: req.session.user || req.cookies.userId
                });
            })
            .catch(err => console.error(err));
    },

    update: (req, res) => {
        const { id, ...form } = req.body;

        db.Producto.update(form, { where: { id } })
            .then(() => res.redirect(`/product/id/${id}`))
            .catch(err => console.error(err));
    },

    destroy: (req, res) => {
        const { id } = req.body;
    
        db.Comentario.destroy({ where: { id_producto: id } })
            .then(() => {
                return db.Producto.destroy({ where: { id } });
            })
            .then(() => res.redirect("/"))
            .catch(err => console.error(err));
    }
};

module.exports = productController;
