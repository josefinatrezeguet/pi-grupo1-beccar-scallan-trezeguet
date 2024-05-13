const db = require('../database/models');

const usersController = {
    login: function(req, res, next) {
        res.render('login', {title: "Login"});
    },
    register: function(req, res, next) {
        res.render('register', {title: "Registrarse"});
    },
    profile: function(req, res, next) {
        res.render('profile', {title: "Mi perfil", usuario: db.usuario, productos: null});
    }, 
    usersEdit: function(req, res, next) {
        res.render('profile-edit', {title: "Editar perfil", usuario: null});
    }
}

module.exports = usersController;