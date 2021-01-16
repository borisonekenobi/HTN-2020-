// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
let header = document.getElementById("myHeader");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

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