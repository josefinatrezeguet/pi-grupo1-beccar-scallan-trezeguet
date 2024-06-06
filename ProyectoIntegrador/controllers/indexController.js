const db = require('../database/models');
const op = db.Sequelize.Op;

const indexController = {
    index: function(req, res) {
        db.Producto.findAll({
            order: [['createdAt', 'DESC']],
        })
        .then(function(results) {
            return res.render('index', { title: "Aura Beauty", productos: results, user: req.session.user, userId: req.cookies.userId, usuario: req.session.user});
        })
        .catch(function(error) {
            console.log(error);
        });
    },
    search: function(req, res) {
        let busqueda = req.query.search;
        let filtro = {
            where: {
                nombre: { [op.like]: "%" + busqueda + "%" }
            }
        }
        db.Producto.findAll(filtro)
        .then(function(results) {
            return res.render('search-results', { title: "Resultados de búsqueda", productos: results, usuario: req.session.user});
        })
        .catch(function(error) {
            console.log(error);
        });
    }
}

module.exports = indexController;
