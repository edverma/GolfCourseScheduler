const db = require('../database/database.js');
const User = require('../database/mongoModels.js').Models.User;

module.exports = {
    saveUser: function( user, callback ) {
        db.updateDocument(user, User, () => {
            User.find().limit(1).sort({$natural: -1}).exec(
                (err, savedUser) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    callback(savedUser);
                });
        });
    }
};