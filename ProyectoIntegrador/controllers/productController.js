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

//acá va create (jose)

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

//acá va update (jose)

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
