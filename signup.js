const fs = require('fs');

function signup(req, res) {
    fs.readFile('./signup.html', function (err, data) {
        res.statusCode = 200;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}

module.exports = {signup}