const bcrypt = require('bcrypt');

function encrypt(password) {
    bcrypt.hash(password, 5, function (err, encryptedPassword) {
        return encryptedPassword;
    });
}

function checkPassword(password) {
    bcrypt.hash(password, 5, function (err, encryptedPassword) {
        //TODO: check if mongodb password and encrypted password match
    });
}

module.exports = {encrypt}