const mongoose = require('mongoose');
const user = require("./user.model");
const role = require("./role.model");
const refreshToken = require("./refreshToken.model");
mongoose.Promise = global.Promise;
module.exports = {
    mongoose,
    user,
    role,
    refreshToken,
    ROLES: ["user", "admin", "moderator"],
    initial() {
        role.estimatedDocumentCount((err, count) => {
            if (!err && count === 0) {
                new role({
                    name: "user"
                }).save(err => {
                    if (err) {
                    console.log("error", err);
                    }
                    console.log("added 'user' to roles collection");
                });
        
                new role({
                    name: "moderator"
                }).save(err => {
                    if (err) {
                    console.log("error", err);
                    }
            
                    console.log("added 'moderator' to roles collection");
                });
        
                new role({
                    name: "admin"
                }).save(err => {
                    if (err) {
                    console.log("error", err);
                    }
                    console.log("added 'admin' to roles collection");
                });
            }
        });
    }
};