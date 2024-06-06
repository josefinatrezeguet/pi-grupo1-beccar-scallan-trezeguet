const db = require('../database/models');
const op = db.Sequelize.Op;
let id;

const productController = {
    index: function(req, res) {
        let id = req.params.id;
        let rel = {
            include: [
              {association: "usuario"},
              {association: "comentarios", 
                include: [{association: 'usuario'} 
                ]}
            ]
        }
        let comentarios;
        let productos;
        
        db.Producto.findByPk(id, rel)
        .then(function(results){
            return res.render('product', {title:"Producto", usuario: req.session.user || req.cookies.userId, productos: results, comentarios: results.comentarios});
        })
        .catch(function(error){
            console.log(error);
        });
    },
    create: function(req, res) {

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
                return res.render('product-add', {title:"Añadir producto", usuario: results});
            })
            .catch(function(error){
                console.log(error);
            });
    },
    store: function(req, res) {
        let formulario = req.body;
        db.Producto.create(formulario)
        .then((result) => {
            return res.redirect("/product/id/" + result.id)
        }).catch((err) => {
          return console.log(err);
        });
    },
    formUpdate: function(req, res) {
        let formulario = req.body;
        
        db.Producto.findByPk(formulario.id)
        .then(function(results){
            return res.render('product-edit', {title:"Editar producto", productos: results, usuario: req.session.user || req.cookies.userId});
        })
        .catch((err) => {
            return console.log(err);
          });
    },
    update: function(req, res) {
        let formulario = req.body;
        let filtro = {
            where: {
            id: formulario.id
            }
        } 
        db.Producto.update(formulario, filtro)
        .then((result) => {
            return res.redirect("/product/id/" + formulario.id)
        }).catch((err) => {
            return console.log(err);
        });
    },
    destroy: function(req, res) {
        let formulario = req.body;
        let filtro = {
          where: {
            id: formulario.id
          }
        }
        db.Producto.destroy(filtro)
        .then((result) => {
          return res.redirect("/");
        }).catch((err) => {
          return console.log(err);
        });
      },    
}

module.exports = productController;