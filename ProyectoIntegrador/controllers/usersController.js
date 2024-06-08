const db = require('../database/models');
const bcrypt = require("bcryptjs");

const usersController = {
    login: function(req, res, next) {
        if (req.session.user) {
            return res.redirect("/");
        } else {
            return res.render('login', { title: "Login" });
        }
    },

    logout: function(req, res, next) {
        req.session.destroy();
        res.clearCookie("userId");
        return res.redirect("/");
    },

    register: function(req, res, next) {
        if (req.session.user) {
            return res.redirect("/users/login");
        } else {
            return res.render('register', { title: "Registrarse" });
        }
    },

    profile: function(req, res, next) {
        let usuario;
        let productos;
        let id = req.session.user ? req.session.user.id : req.cookies.userId;

        if (!id) {
            return res.redirect("/users/login");
        }

        db.Usuario.findByPk(id)
            .then(results => {
                usuario = results;
                return db.Producto.findAll({ where: { id_usuario: id } });
            })
            .then(results => {
                productos = results;
                return res.render('profile', { title: "Perfil", usuario, productos });
            })
            .catch(error => {
                console.log(error);
            });
    },

    usersEdit: function(req, res, next) {
        let id = req.session.user ? req.session.user.id : req.cookies.userId;

        if (!id) {
            return res.redirect("/users/login");
        }

        db.Usuario.findByPk(id)
            .then(results => {
                return res.render('profile-edit', { title: "Editar perfil", usuario: results });
            })
            .catch(error => {
                console.log(error);
            });
    },

    //loginUser va acá

    //store va acá
};

module.exports = usersController;
