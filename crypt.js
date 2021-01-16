const bcrypt = require('bcrypt');

function encrypt(password) {
    bcrypt.hash(password, 5, function (err, encryptedPassword) {
        //TODO: save encryptedPassword to mongodb
    });
}

function checkPassword(password) {
    bcrypt.hash(password, 5, function (err, encryptedPassword) {
        //TODO: check if mongodb password and encrypted password match
    });
}

module.exports = {encrypt}