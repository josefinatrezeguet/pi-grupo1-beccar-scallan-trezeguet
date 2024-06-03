const db = require('../database/models');
const op = db.Sequelize.Op;
const bcrypt = require("bcryptjs")

const usersController = {
    login: function(req, res, next) {
        if (req.session.user != undefined) {
            return res.redirect("/");
        } else {
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
            return res.redirect("/users/login");
        } else {
            return res.render('register', {title: "Registrarse"})
        }
    },
    profile: function(req, res, next) {
        let productos;
        let usuario;
    
        db.Usuario.findOne()
            .then(function(results){
                usuario = results; 
                return db.Producto.findAll(); 
            })
            .then(function(results){
                productos = results;
                return res.render('profile', {title:"Perfil", usuario: usuario, productos: productos});
            })
            .catch(function(error){
                console.log(error);
            });
    }, 
    usersEdit: function(req, res, next) {

        db.Usuario.findOne()
        .then(function(results){
            return res.render('profile-edit', {title: 'Editar perfil', usuario: results});
        })
        .catch(function(error){
            console.log(error);
        });    
    },
    loginUser: function(req, res, next) {
        let form = req.body;
        let filtro = {
            where: [{mail: form.email}]
        };

        db.Usuario.findOne(filtro)
        .then((result) => {
            if (result != null) {
                let check = bcrypt.compareSync(form.password, result.contrasenia);

                if (check) {
                    req.session.user = result;
                    if (form.remember != undefined) {
                        res.cookie("userId", result.id, {maxAge: 1000 * 60 * 35})
                    }
                    return res.redirect("/profile");
                } else {
                    return res.send("Error en la contraseña");

                }

            } else {
                return res.send("No hay mail similares a : " + form.email);
            }

        }).catch((err) => {
            return console.log(err);
        });
    },
    store: function(req, res) {
        let form = req.body;

        let usuario = {
            mail: form.email,
            contrasenia: bcrypt.hashSync(form.password, 10),
            fecha: form.birthdate,
            dni: form.document_number,
            fotoPerfil: form.profile_picture
        }

        db.Usuario.create(usuario)
        .then((result) => {
            return res.redirect("/")
        })
        .catch((err) => {
        return console.log(err);
        });
        },
}

module.exports = usersController;