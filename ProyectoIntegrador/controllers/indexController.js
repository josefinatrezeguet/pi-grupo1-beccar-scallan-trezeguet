const db = require('../database/models');
const { Op } = db.Sequelize;

const indexController = {
    index: (req, res, next) => {
        const filtrado = {
            order: [['createdAt', 'DESC']],
            include: [
                { association: 'comentarios' },
                { association: 'usuario' }
            ]
        };

        db.Producto.findAll(filtrado)
        .then((productos) => {
            res.render('index', {
                title: "Aura Beauty",
                productos: productos,
                user: req.session.user,
                usuario: req.session.user,
                userId: req.session.user ? req.session.user.id : null
            });
        })
        .catch((error) => {
            console.error(error);
            next(error);
        });
    },

    search: (req, res, next) => {
        const busqueda = req.query.search;

        const filtrado = {
            where: {
                [Op.or]: [
                    { nombre: { [Op.like]: `%${busqueda}%` } },
                    { descripcion: { [Op.like]: `%${busqueda}%` } }
                ]
            },
            order: [['createdAt', 'DESC']],
            include: [
                { association: 'comentarios' },
                { association: 'usuario' }
            ]
        };

        db.Producto.findAll(filtrado)
        .then((resultados) => {
            res.render('search-results', {
                title: "Resultados de búsqueda",
                productos: resultados,
                usuario: req.session.user
            });
        })
        .catch((error) => {
            console.error(error);
            next(error);
        });
    },
};

module.exports = indexController;
