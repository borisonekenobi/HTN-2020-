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

module.exports = {fileResponse}