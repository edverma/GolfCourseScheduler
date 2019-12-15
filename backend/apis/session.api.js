const User = require('../database/mongoModels.js').Models.User;

module.exports= {

    login: function(app){
        app.post('/session/login', (req, res) => {

        });
    },

    status: function(app){
        app.get('/session/status', (req, res) => {

        });
    }
};