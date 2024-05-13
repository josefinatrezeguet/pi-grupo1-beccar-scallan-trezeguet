const db = require('../database/models');

const indexController = {
    index: function(req, res) {
        res.render('index', {title: "Aura Beauty", productos: null});
    },
    search: function(req, res) {
        res.render('search-results', {title: "Resultados de búsqueda", productos: null});
    }
}

module.exports = indexController;