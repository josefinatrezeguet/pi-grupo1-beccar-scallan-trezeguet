const db = require('../database/models');

const usersController = {
    login: function(req, res, next) {
        return res.render('login', {title: "Login"});
    },
    register: function(req, res, next) {
        res.cookie('usuario', 'Rocio Beccar Varela',{ maxAge: 1000 * 60 * 5 })
        return res.render('register', {title: "Registrarse"});
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
    }
}

module.exports = usersController;