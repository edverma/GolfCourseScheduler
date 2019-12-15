const User = require('../database/mongoModels.js').Models.User;

module.exports= {
    user: function(app) {
      app.post('/api/session/user', (req, res) => {
         token = req.body.token;
         User.findOne({token: token}).exec(
             (err, user) => {
                 user = JSON.stringify(user);
                res.end(user);
             })
      });
    },

    login: function(app){
        app.post('/api/session/login', (req, res) => {
            const email = req.body.email;
            const password = req.body.password;
            console.log('email: ', email);
            console.log('password: ', password);
            User.findOne({email: email, password: password}).exec(
                (err, user) => {
                    if(user != null) {
                        User.findOneAndUpdate({_id: user._id}, {token: '123456'}).exec(
                            (err, user) => {
                                res.send(user);
                            }
                        )
                    } else{
                        res.send(null);
                    }
                })
        });
    },

    status: function(app){
        app.get('/api/session/status', (req, res) => {

        });
    }
};