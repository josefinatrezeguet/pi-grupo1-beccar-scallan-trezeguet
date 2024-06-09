const db = require('../database/models');
const { Op } = db.Sequelize;

const indexController = {
    index: (req, res, next) => {
        db.Producto.findAll({
            order: [['createdAt', 'DESC']],
        })
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
        const filtro = {
            where: {
                nombre: {
                    [Op.like]: `%${busqueda}%`,
                },
            },
        };

        db.Producto.findAll(filtro)
        .then((resultados) => {
            res.render('search-results', {
                title: "Resultados de búsqueda",
                productos: resultados,
                usuario: req.session.user,
            });
        })
        .catch((error) => {
            console.error(error);
            next(error);
        });
    },
};

module.exports = indexController;
