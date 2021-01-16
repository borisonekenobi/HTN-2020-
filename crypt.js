const bcrypt = require('bcrypt');

function encrypt(password) {
    bcrypt.hash(password, 5, function (err, encryptedPassword) {
        //TODO: save encryptedPassword to mongodb
        console.log(password + ' encrypted to ' + encryptedPassword);
    });
}

encrypt('password');

module.exports = {encrypt}