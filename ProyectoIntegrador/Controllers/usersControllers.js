var express = require('express');
var router = express.Router();

let general = {
    users: function(req,res){
        res.render("users",{"title":"USUARIOS"})
    }
}

module.exports = general;