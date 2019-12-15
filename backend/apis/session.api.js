const User = require('../database/mongoModels.js').Models.User;

module.exports= {
    login: function(app){
        app.post('/session/login', (req, res) => {
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
                }
            )
        });
    },

    status: function(app){
        app.get('/session/status', (req, res) => {

        });
    }
};