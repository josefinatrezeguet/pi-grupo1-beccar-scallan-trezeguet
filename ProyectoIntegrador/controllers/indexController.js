const db = require('../db/index');

const indexController = {
    index: function(req, res) {
        res.render('index', {title: "Home", productos: db.productos});
    },
    search: function(req, res) {
        res.render('search-results', {title: "Search Results"});
    }
}

module.exports = indexController;