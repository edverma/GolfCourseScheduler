const svc = require('../services/user.svc');
const User = require('../database/mongoModels.js').Models.User;
const Tenant = require('../../enums.js').Tenant;

module.exports = {
    getUserById: function(app) {
        app.get('/api/user/:id', (req, res) => {
            User.find({_id: req.params.id}).exec(
                (err, user) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    user = JSON.stringify(user);
                    res.end(user);
                })
        });
    },

    saveUser: function(app) {
        app.post('/api/user/save', (req, res) => {
            svc.saveUser(req.body, savedUser => {
                savedUser = JSON.stringify(savedUser);
                res.end(savedUser);
            });
        });
    }
};