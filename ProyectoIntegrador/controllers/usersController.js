const usersController = {
    login: function(req, res, next) {
        res.render('login');
    },
    register: function(req, res, next) {
        res.render('register');
    },
    profile: function(req, res, next) {
        res.render('profile');
    },
    usersEdit: function(req, res, next) {
        res.render('profile-edit');
    }
}

module.exports = usersController;