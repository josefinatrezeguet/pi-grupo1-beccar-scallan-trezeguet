const db = require('../database/models');
const { Op } = db.Sequelize;

const indexController = {
    index: (req, res) => {
        db.Producto.findAll({
            order: [['createdAt', 'DESC']], //productos ordenados de forma descendente según su fecha de creación
        })
        .then((results) => {
            res.render('index', {
                title: "Aura Beauty",
                productos: results,
                userId: req.cookies.userId,
                usuario: req.session.user,
                user: req.session.user
            });
        })
        .catch((error) => {
            console.error(error);
        });
    },

    search: (req, res) => {
        const busqueda = req.query.search;
        const filtro = {
            where: {
                nombre: {
                    [Op.like]: `%${busqueda}%`,
                },
            },
        };

        db.Producto.findAll(filtro)
        .then((results) => {
            res.render('search-results', {
                title: "Resultados de búsqueda",
                productos: results,
                usuario: req.session.user,
            });
        })
        .catch((error) => {
            console.error(error);
        });
    },
};

module.exports = indexController;
