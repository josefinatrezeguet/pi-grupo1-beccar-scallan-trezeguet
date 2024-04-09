const db = require('../db/index');

const usersController = {
    login: function(req, res, next) {
        res.render('login', {title: "Login"});
    },
    register: function(req, res, next) {
        res.render('register', {title: "Registrarse"});
    },
    profile: function(req, res, next) {
        res.render('profile', {title: "Mi perfil"});
    },
    usersEdit: function(req, res, next) {
        res.render('profile-edit', {title: "Editar perfil"});
    }
}

module.exports = usersController;