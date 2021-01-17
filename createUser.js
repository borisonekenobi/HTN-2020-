const crypt = require('/crypt.js');

let numUsedIds = 0;

function createUser(id, name, email, password, role) {
    let user = {
        'id': id,
        'email': email,
        'username': name,
        'password': crypt.encrypt(password),
        'role': role
    }
    //TODO: save user to userData.json
    numUsedIds++;
}