const db = require('../db/index');

const usersController = {
    login: function(req, res, next) {
        res.render('login', {title: "Login"});
    },
    register: function(req, res, next) {
        res.render('register', {title: "Registrarse"});
    },
    profile: function(req, res, next) {
        res.render('profile', {title: "Mi perfil", usuario: db.usuario, productos: db.productos});
    }, 
    usersEdit: function(req, res, next) {
        res.render('profile-edit', {title: "Editar perfil", usuario: db.usuario});
    }
}

module.exports = usersController;