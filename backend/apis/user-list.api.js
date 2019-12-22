const User = require('../database/mongoModels.js').Models.User;
const Tenant = require('../../enums.js').Tenant;

module.exports = {
    getUsers: function(app) {
        app.get('/api/users', ( req, res ) => {
           User.find({tenant: Tenant.UGA}).exec(
               (err, users) => {
                   if (err) { console.error(err); return; }
                   users = JSON.stringify(users);
                   console.log(users)
                   res.end(users);
               })
        });
    },

    deleteUser: function(app) {
        app.get('/api/users/delete/:id', ( req, res ) => {
           User.deleteOne({_id: req.params.id}, (err) => {
               console.log('req.params._id: ', req.params._id);
              if(err) res.send(false);
              else res.send(true);
           });
        });
    }
};