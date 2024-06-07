const db = require('../database/models');
const bcrypt = require("bcryptjs");

const usersController = {
    login: function(req, res, next) {
        if (req.session.user != undefined) {
            return res.redirect("/");
        } else {
            return res.render('login', {title:"Login"});
        }
    },
    logout: function(req, res, next) {
        req.session.destroy();
        res.clearCookie("userId");
        return res.redirect("/");
    },
    register: function(req, res, next) {
        if (req.session.user != undefined) {
            return res.redirect("/users/login");
        } else {
            return res.render('register', {title: "Registrarse"});
        }
    },
    profile: function(req, res, next) {
        let usuario;
        let productos;
        let id;

        if (req.session.user != undefined) {
            id = req.session.user.id;
        }
        else if (req.cookies.userId != undefined) {
            id = req.cookies.userId;
        }
        else {
            return res.redirect("/users/login");
        }
    
        db.Usuario.findByPk(id)
            .then(function(results){
                usuario = results; 

                let filtro = {
                    where: [
                        {clienteId: id}
                    ]
                };
                return db.Producto.findAll(filtro); 
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
        let id;

        if (req.session.user != undefined) {
            id = req.session.user.id;
        }
        else if (req.cookies.userId != undefined) {
            id = req.cookies.userId;
        }
        else {
            return res.redirect("/users/login");
        }

        db.Usuario.findByPk(id)
        .then(function(results){
            return res.render('profile-edit', {title: "Editar perfil", usuario: results});
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
                        res.cookie("userId", result.id, {maxAge: 1000 * 60 * 35});
                    }
                    return res.redirect("/users/profile");
                } else {
                    return res.send("Error en la contraseña");

                }
            } 
            else {
                return res.send("No hay mails similares a : " + form.email);
            }

        }).catch((err) => {
            return console.log(err);
        });
    },
    store: function (req, res) {
        let form = req.body;

        // Imprimir el formulario recibido para depuración
        console.log("Formulario recibido:", form);

        // Validaciones de campos
        if (!form.email || !form.usuario || !form.contrasenia || !form.nacimiento || !form.dni || !form.fotoPerfil) {
            console.log("Campos faltantes:", {
                email: form.email,
                usuario: form.usuario,
                contrasenia: form.contrasenia,
                nacimiento: form.nacimiento,
                dni: form.dni,
                fotoPerfil: form.fotoPerfil
            });
            return res.status(400).send('Todos los campos son requeridos');
        }

        let hashedPassword = bcrypt.hashSync(form.contrasenia, 10);

        let usuario = {
            mail: form.email,
            usuario: form.usuario,
            contrasenia: hashedPassword,
            fecha: form.nacimiento,
            dni: form.dni,
            fotoPerfil: form.fotoPerfil
        };

        console.log("Creando usuario con los siguientes datos:", usuario);

        db.Usuario.create(usuario)
            .then((result) => {
                console.log("Usuario creado exitosamente:", result);
                return res.redirect("/");
            })
            .catch((err) => {
                console.log("Error al crear el usuario:", err);
                return res.status(500).send('Error al crear el usuario');
            });
    },
};

module.exports = usersController;
