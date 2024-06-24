const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController");
const { body } = require('express-validator');
const db = require('../database/models');
const bcrypt = require("bcryptjs");
const session = require('express-session')

let validationsLogin = [
    body('email')
        .notEmpty().withMessage('El campo "email" es obligatorio.').bail()
        .isEmail().withMessage('Debe ser un email válido.').bail()
        .custom(function(value, {req}){
            return db.Usuario.findOne({where: { mail: req.body.email },})
                  .then(function(user){
                        if(user != undefined){ 
                            return true;
                        }
                        else {
                            throw new Error ('El email no está registrado aún.')
                        }
                  })
       }),

    body('contrasenia')
        .notEmpty().withMessage('El campo "contraseña" es obligatorio.').bail()
        .custom(function(value, {req}){

            return db.Usuario.findOne({where: { mail: req.body.email },})
                  .then(function(result){
                        if(result != undefined){ 
                            let check = bcrypt.compareSync(req.body.contrasenia, result.contrasenia);
                            if(!check) {
                                throw new Error ('La contraseña es incorrecta.')
                            }
                        }
                        else {
                            throw new Error ('No existe el mail, debe registrarse.')
                        }
                  })
        }),
]

let validationsRegister = [
    body('email')
    .notEmpty().withMessage('El campo "email" es obligatorio.').bail()
    .isEmail().withMessage('Debe ser un email valido.')
    .custom(function(value){
        return db.Usuario.findOne({where: { mail: value }})
              .then(function(user){
                    if(user == undefined){ 
                        return true;
                    }
                    else{
                        throw new Error ('El email ya está registrado.')
                    }
              })
    }),
    
    body('usuario')
    .notEmpty().withMessage('Por favor, introduzca un nombre de usuario.'),
    
    body('contrasenia')
    .notEmpty().withMessage('El campo "contraseña" es obligatorio.').bail()
    .isLength({ min: 4 }).withMessage('La contraseña debe tener más de 4 caracteres.')
]

let validationsEdit = [
    body('mail')
    .notEmpty().withMessage('El campo "email" es obligatorio.').bail()
    .isEmail().withMessage('Debe ser un email válido.').bail(),
    
    body('usuario')
    .notEmpty().withMessage('Por favor, introduzca un nombre de usuario.'),
    
    body('contrasenia')
    .notEmpty().withMessage('El campo "contraseña" es obligatorio.').bail()
    .isLength({ min: 4 }).withMessage('La contraseña debe tener más de 4 caracteres.')
]

router.get('/login', usersController.login);
router.post('/login', validationsLogin, usersController.loginUser);
router.get('/register', usersController.register);
router.post('/register', validationsRegister, usersController.store);
router.get('/profile/id/:id', usersController.profile);
router.get('/edit', usersController.usersEdit);
router.post('/edit', validationsEdit, usersController.update); 
router.post('/logout', usersController.logout);

module.exports = router;
