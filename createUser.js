const crypt = require('./crypt.js');

function createUser(email, username, password, role) {
    let encryptedPass = crypt.encrypt(password);
    let user = {
        'Email': email,
        'Username': username,
        'Role': role,
        'Password': encryptedPass
    };
    const users = require('./userData.json');
    localStorage.setItem(Object.keys(users).length.toString(), JSON.stringify(user));
}

createUser('test', 'test', 'test', 'mentor');