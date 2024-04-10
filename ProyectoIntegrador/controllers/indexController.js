const db = require('../db/index');

const indexController = {
    index: function(req, res) {
        res.render('index', {title: "Aura Beauty", productos: db.productos});
    },
    search: function(req, res) {
        res.render('search-results', {title: "Resultados de búsqueda"});
    }
}

module.exports = indexController;