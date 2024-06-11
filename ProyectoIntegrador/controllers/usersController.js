const db = require('../database/models');
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator');

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
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            if (req.session.user != undefined) {
                return res.redirect("/users/profile/id/" + req.session.user.id);
            } 
            else {
                return res.render('register', {title: "Registrate"})
            };
        }
        else {
            res.render('login', {title: "Login", errors: errors.mapped(), old: req.body, user: req.session.user});
        }
    },
    
    profile: function(req, res, next) {
        let usuario;
        let productos;
        let comentarios = 0;
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
                return db.Comentario.count({ where: { id_usuario: id } });
            })
            .then(results => {
                comentarios = results;
                const condition = req.session.user && req.session.user.id === usuario.id;
                return res.render('profile', { title: "Perfil", usuario, productos, comentarios, condition });
            })
            .catch(error => {
                console.log(error);
            });
    },

    usersEdit: function(req,res,next) {
        let id = req.session.user ? req.session.user.id : req.cookies.userId;

        if (!id){
            return res.redirect("/users/login");
        }
        db.Usuario.findByPk(id)
            .then(results => {
                return res.render('profile-edit',{title:"Editar perfil", usuario:results});
            })
            .catch(error => {
                console.log(error);
            });
    },

    loginUser: function(req, res, next) {
        let form = req.body;
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let filtro = {where: [{mail: form.email}]}

            db.Usuario.findOne(filtro)
            .then((result) => {
                if (result != null) {
                    req.session.user = result;
                    if (form.recordarme != undefined) {
                        res.cookie("userId", result.id, {maxAge: 1000 * 60 * 35})
                    }
                    return res.redirect("/users/profile/id/" + result.id);
                } 
                else {
                    return res.redirect("/users/login");
                }
    
            })
            .catch((err) => {
                return console.log(err);
            });
        }
        else{
            res.render('login', {title: "Login", errors: errors.mapped(), old: req.body, user: req.session.user});
        }
    },
    
    store: function(req, res) {
        let form = req.body;
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let usuario = {
                mail: form.email,
                usuario: form.usuario,
                contrasenia: bcrypt.hashSync(form.contrasenia, 10),
                fecha: form.fecha,
                dni: form.dni,
                fotoPerfil: form.fotoPerfil
            }
    
            db.Usuario.create(usuario)
            .then((result) => {
                return res.redirect("/users/login")
            })
            .catch((err) => {
                return console.log(err);
            });       
        } 
        else {
            return res.render('Register', {title: "Registrate", errors: errors.mapped(), old: req.body });        
        }
    },

    updateProfile: function(req, res, next) {
        const { email, usuario, contrasenia, fecha, dni, fotoPerfil } = req.body;
        const id = req.session.user ? req.session.user.id : req.cookies.userId;

        db.Usuario.findByPk(id)
            .then(user => {
                if (!user) {
                    return res.status(404).send('Usuario no encontrado');
                }
                
                user.mail = email;
                user.usuario = usuario;
                user.fecha = fecha;
                user.dni = dni;
                user.fotoPerfil = fotoPerfil;

                if (contrasenia) {
                    user.contrasenia = bcrypt.hashSync(contrasenia, 10);
                }

                return user.save();
            })
            .then(updatedUser => {
                req.session.user = updatedUser;
                res.redirect("/users/profile");
            })
            .catch(error => {
                console.log(error);
                res.status(500).send('Error al actualizar el perfil');
            });
    }   
};

module.exports = usersController;
