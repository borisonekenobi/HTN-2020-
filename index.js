const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 8000;
const hostname = 'localhost'

const util = require('./util.js');

//pages
const signup = require('./signup.js');

//custom error pages
const e404 = './customErrors/404.html'
const e418 = './customErrors/418.html'

fs.readFile('home.html', (err, html) => {
    if (err) throw err;

    const server = http.createServer(function (req, res) {
        let pathname = url.parse(req.url, true).pathname;
        pathname = pathname.substring(1);
        fs.access(pathname, fs.constants.F_OK, (err) => {
            if (!err) {
                if (pathname.startsWith('css/')) {
                    util.fileResponse(res, pathname, 'text/css');

                } else if (pathname.startsWith('img/')) {
                    if (pathname.startsWith('img/svg/')) util.fileResponse(res, pathname, 'image/svg+xml');
                    else if (pathname.startsWith('img/png/')) util.fileResponse(res, pathname, 'image/png');
                    else if (pathname.startsWith('img/jpg/')) util.fileResponse(res, pathname, 'image/jpg');
                    else if (pathname.startsWith('img/ico/')) util.fileResponse(res, pathname, 'image/ico');

                } else if (pathname.endsWith('.js')) {
                    util.fileResponse(res, pathname, 'text/javascript');

                } else if (pathname.endsWith('.html')) {
                    util.fileResponse(res, pathname, 'text/html');

                } else if (pathname.endsWith('.json')) {
                    util.fileResponse(res, pathname, 'text/json');

                } else if (pathname === 'favicon.ico') {
                    util.fileResponse(res, pathname, 'image/ico');

                } else {
                    res.statusCode = 418;
                    res.writeHead(418, {'Content-Type': 'text/html'});
                    res.write(util.customError(e418));
                    return res.end();
                }

            } else if (pathname === '' || pathname === 'home') {
                res.statusCode = 200;
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(html);
                return res.end();

            } else if (pathname === 'signup') {
                signup.signup(req, res);

            } else {
                res.statusCode = 404;
                res.writeHead(404, {'Content-Type': 'text/html'});
                //res.write(util.customError(e404));
                return res.end();
            }
        });
    });

    server.listen(port, hostname, () => {
        console.log('Server started on port ' + port)
    })
});