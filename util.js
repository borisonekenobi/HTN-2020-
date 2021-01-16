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
    fetch('userData.json')
        .then(function (response) {
            //console.log(response);
            for (let i = 0; i < response.length; i++) {
                console.log(response[i]);
            }
        })
        .catch(function (err) {
            console.error(err);
        });

    return true;
}

module.exports = {fileResponse, customError, checkEmail}