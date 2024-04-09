const db = require('../db/index');

const usersController = {
    login: function(req, res, next) {
        res.render('login', {title: "Login"});
    },
    register: function(req, res, next) {
        res.render('register', {title: "Register"});
    },
    profile: function(req, res, next) {
        res.render('profile', {title: "Profile"});
    },
    usersEdit: function(req, res, next) {
        res.render('profile-edit', {title: "Edit Profile"});
    }
}

module.exports = usersController;