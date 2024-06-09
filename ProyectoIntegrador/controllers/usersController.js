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

//acá va usersEdit (rochi)

    loginUser: function(req, res, next) {
        const { email, contrasenia, remember } = req.body;
    
        db.Usuario.findOne({ where: { mail: email } })
            .then(result => {
                if (result) {
                    if (bcrypt.compareSync(contrasenia, result.contrasenia)) {
                        req.session.user = result;
                        if (remember) {
                            res.cookie("userId", result.id, { maxAge: 1000 * 60 * 35 });
                        }
                        return res.redirect("/users/profile");
                    } else {
                        return res.send("Error: Contraseña incorrecta");
                    }
                } else {
                    return res.send("Error: No existe un usuario con ese email");
                }
            })
            .catch(error => {
                console.log(error);
            });
    },
    
    store: function(req, res) {
        const { email, usuario, contrasenia, nacimiento, dni, fotoPerfil } = req.body;
        const hashedPassword = bcrypt.hashSync(contrasenia, 10);
    
        let newUser;
        if (dni && dni.trim() !== '') {
            newUser = {
                mail: email,
                usuario,
                contrasenia: hashedPassword,
                fecha: nacimiento,
                dni,
                fotoPerfil
            };
        } else {
            newUser = {
                mail: email,
                usuario,
                contrasenia: hashedPassword,
                fecha: nacimiento,
                fotoPerfil
            };
        }
        db.Usuario.create(newUser)
            .then(result => {
                req.session.user = result;
                res.redirect("/users/profile");
            })
            .catch(err => {
                console.log(err);
                return res.status(500).send('Error al crear el usuario');
            });
    },
    
//acá va updateProfile (rochi)

};

module.exports = usersController;
