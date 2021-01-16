const fs = require('fs');

function fileResponse(res, image, contentType) {
    fs.readFile(image, function (err, data) {
        if (err) throw err
        res.statusCode = 200;
        res.writeHead(200, {'Content-Type': contentType});
        res.write(data);
        return res.end();
    });
}

function customError(errFile) {
    fs.readFile(errFile, function (err, data) {
        if (err) throw err;
        return data;
    });
}

function checkEmail(email) {
    console.log(email);
    return true;
}

module.exports = {fileResponse, customError, checkEmail}