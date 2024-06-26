const db = require('../database/models');
const bcrypt = require("bcryptjs");
const { validationResult } = require('express-validator');

const usersController = {

    login: function(req, res, next) {
        if (req.session.user != undefined) {
            return res.redirect("/users/profile/id/" + req.session.user.id);
        } 
        else {
            return res.render('login', {title:"Login"})
        }
    },

    logout: function(req, res, next) {
        req.session.destroy()
        res.clearCookie("userId")
        return res.redirect("/");
    },

    register: function(req, res, next) {
        
        if (req.session.user != undefined) {
            return res.redirect("/users/profile/id/" + req.session.user.id);
        } 
        else {
            return res.render('register', {title: "Registrate"})
        };
    },
    
    profile: function(req, res, next) {
        let id = req.params.id;

        let criterio = {
            include: [
                {association: "productos"},
                {association: "comentarios"}
            ],
            order: [[{model: db.Producto, as: 'productos'}, 'createdAt', 'DESC']]
        }
    
        db.Usuario.findByPk(id, criterio)
            .then(function(results){

                let condition = false;

                if (req.session.user != undefined && req.session.user.id == results.id) {
                    condition = true;
                }

                return res.render('profile', 
                {title: `${results.mail}`, 
                usuario: results, 
                productos: results.productos, 
                comentarios: results.comentarios.length, 
                condition: condition});
            })
            .catch(function(error){
                console.log(error);
            });
    },

    usersEdit: function(req, res, next) {
        if (req.session.user != undefined) {
            let id = req.session.user.id;
    
            db.Usuario.findByPk(id)
            .then(function(usuario){
                if (usuario) {
                    return res.render('profile-edit', { title: 'Editar perfil', usuario: usuario, errors: {} });
                } else {
                    return res.status(404).send('Usuario no encontrado');
                }
            })
            .catch(function(error){
                console.log(error);
                return res.status(500).send("Error al obtener el usuario para editar");
            });    
        } else {
            return res.redirect("/users/login");
        }
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
                fecha: form.fecha || null,
                dni: form.dni || null,
                fotoPerfil: form.fotoPerfil || null
            }
    
            db.Usuario.create(usuario)
            .then((result) => {
                return res.redirect("/users/login");
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).send("Error al crear usuario");
            });
        } 
        else {
            return res.render('Register', {title: "Registrate", errors: errors.mapped(), old: req.body });        
        }
    },
    
    update: function(req, res) {
        let form = req.body;
        let errors = validationResult(req);
    
        if (errors.isEmpty()) {
            let filtrado = { where: { id: req.session.user.id } } 
    
            let usuario = {
                mail: form.mail,
                usuario: form.usuario,
                contrasenia: bcrypt.hashSync(form.contrasenia, 10),
                fecha: form.fecha || null,
                dni: form.dni || null,
                fotoPerfil: form.fotoPerfil || null
            }
    
            db.Usuario.update(usuario, filtrado)
            .then((result) => {
                req.session.user.mail = form.mail;
                req.session.user.usuario = form.usuario;
                req.session.user.contrasenia = usuario.contrasenia;
                req.session.user.fecha = form.fecha;
                req.session.user.dni = form.dni;
                req.session.user.fotoPerfil = form.fotoPerfil;
    
                res.locals.user = req.session.user;
    
                return res.redirect("/users/profile/id/" + req.session.user.id);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).send("Error al actualizar el usuario");
            });       
        } else {
            db.Usuario.findByPk(req.session.user.id)
            .then(function(usuario){
                return res.render('profile-edit', {title: "Editar perfil", errors: errors.mapped(), old: req.body, usuario: usuario });
            })
            .catch(function(error){
                console.log(error);
                return res.status(500).send("Error al obtener el usuario para editar");
            });
        }
    }
};

module.exports = usersController;
