let express = require("express");
let router = express.Router();
let maquillaje = require("../db/")

let controller = {
    marca: function(req,res){
        let datosMarca = function(marca)
        {
            let newMaquillaje = []
            for (i=0; i<maquillaje.length; i++){
                if (maquillaje[i].marca == marca){
                    newMaquillaje.push(maquillaje[i])
                }
            }
            return newMaquillaje
        }
        return res.render("index",{"maquillaje": datosMarca(req.params.mark)})
    },
    producto: function(req,res){
        let datosMarca = function(producto)
        {
            let newMaquillaje = []
            for (i=0; i<maquillaje.length; i++){
                if (maquillaje[i].producto == producto){
                    newMaquillaje.push(maquillaje[i])
                }
            }
            return newMaquillaje
        }
        return res.render("index",{"maquillaje": datosMarca(req.params.producto)})
    },
    color: function(req,res){
        let datosMarca = function(color)
        {
            let newMaquillaje = []
            for (i=0; i<maquillaje.length; i++){
                if (maquillaje[i].color == color){
                    newMaquillaje.push(autos[i])
                }
            }
            return newMaquillaje
        }
        return res.render("index",{"maquillaje": datosMarca(req.params.color)})
    }
}

module.exports = controller;
