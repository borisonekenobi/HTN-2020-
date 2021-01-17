function search(query) {
    let mentors = [];
    const users = require('./userData.json');

    for (let i = 0; i < Object.keys(users).length; i++) {
        let user = users[i.toString()];
        if (user.Role === 'mentor') {
            for (let j = 0; j < user.Fields.length; j++) {
                if (query.toLowerCase() === user.Fields[j].toLowerCase()) {
                    mentors.push(user);
                }
            }
        }
    }

    let arrayToString = JSON.stringify(Object.assign({}, mentors));  // convert array to string
    return JSON.parse(arrayToString);
    /**
     * ^ yes this is copied from the internet ^
     *   don't ask me what it does cuz idk
     **/
}

module.exports = {search}