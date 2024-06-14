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
        .then(function(results){
            return res.render('index', {title: "Aura Beauty", productos: results});
        })
        .catch(function(error){
            console.log(error);
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
