const User = require('../database/mongoModels.js').Models.User;
const Tenant = require('../../enums.js').Tenant;

module.exports = {
    getUsers: function(app) {
        app.get('/api/users', ( req, res ) => {
           User.find({tenant: Tenant.UGA}).exec(
               (err, users) => {
                   if (err) { console.error(err); return; }
                   users = JSON.stringify(users);
                   res.end(users);
               })
        });
    }
};