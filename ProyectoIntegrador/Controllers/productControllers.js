var express = require('express');
var router = express.Router();

let general = {
    users: function(req,res){
        res.render("products",{"title":"PRODUCTOS"})
    }
}

module.exports = general;