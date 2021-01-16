const port = 8000;
const hostname = 'localhost'

const http = require('http');
const fs = require('fs');

fs.readFile('index.html', (err, html) => {
    if (err) {
        throw err;
    }

    const server = http.createServer(function (req, res) {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end();
    })

    server.listen(port, hostname, () => {
        console.log('Server started on port ' + port)
    })
});